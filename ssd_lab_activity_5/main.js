document.getElementById("button1").onclick = function () {

    var table = document.getElementById("nameTable");
    var row = table.insertRow(-1);
    var roll = row.insertCell(0);
    var name = row.insertCell(1);
    roll.innerHTML = document.getElementById("rollno").value;
    name.innerHTML = document.getElementById("sname").value;
    document.getElementById("rollno").value="";
    document.getElementById("sname").value="";
    return false;
  }

  document.getElementById("buttone").onclick = function () {

    var table = document.getElementById("nameTable");
    if(table.rows.length===1) {return}
    table.deleteRow(-1);
    
    return false;
  }