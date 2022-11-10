import os
from flask import Flask, render_template, request, url_for, redirect
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, login_manager, UserMixin, login_user, login_required, logout_user, current_user
from sqlalchemy.sql import func


basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] =\
        'sqlite:///' + os.path.join(basedir, 'database.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'mysecret'

db = SQLAlchemy(app)
db.init_app(app)
login_manager = LoginManager()
login_manager.init_app(app)

class users(db.Model, UserMixin):
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(80),primary_key=True, unique=True, nullable=False)
    password = db.Column(db.String(80), unique=True, nullable=False)

    def __repr__(self):
        return f'<User {self.name}>'

    def get_id(self):
        return self.email

@app.route('/')
def index():
    students = users.query.all()
    return render_template('index.html', students=students)

@app.route('/signup', methods=['POST'])
def signup():

    req = request.get_json()
    name = req['name']
    email = req['email']
    password = req['password']
    new_user = users(name=name, email=email, password=password)
    if users.query.filter_by(email=email).first():
        return {'message': 'User already exists'}, 400
    db.session.add(new_user)
    db.session.commit()
    return redirect(url_for('index'))

@login_manager.user_loader
def load_user(email):
    return users.query.get(email)

@app.route('/login', methods=['POST'])
def login():
    req = request.get_json()
    email = req['email']
    password = req['password']
    user = users.query.filter_by(email=email).first()
    if not user or not user.password == password:
        return {'message': 'Bad email or password'}, 401
    login_user(user)
    return {"message": "Logged in successfully"}, 200

@app.route('/logout',methods=['POST'])
@login_required
def logout():
    logout_user()
    return {"message": "Logged out successfully"}, 200
