let server_username = document.getElementById("ServerUsername");
let Manager = document.getElementById("ManagerName");
let Email = document.getElementById("GroupEmail");
let Lead = document.getElementById("TeamLead");
let confirm_password = document.getElementById("ConfirmPassword");
let server_password = document.getElementById("ServerPassword");
//let drop_div = document.getElementById("drag");

server_username.addEventListener("input",(event) => {
    event.preventDefault();
    if(!event.target.checkValidity()) console.log(event.target.value);
    else {
        console.log("input",event.target.value);
    }
}); 

confirm_password.addEventListener("focusout",(event) => {
    event.preventDefault();
    if(server_password.value==confirm_password.value) console.log("yes");
    else {
        console.log("no");
    }
}); 

// document.ready(function() {
//     var $tabs = $('#t_draggable2')
//     $("tbody.t_sortable").sortable({
//       connectWith: ".t_sortable",
//       items: "> tr:not(:first)",
//       appendTo: $tabs,
//       helper:"clone",
//       zIndex: 999990
//     }).disableSelection();
    
//     var $tab_items = $(".nav-tabs > li", $tabs).droppable({
//       accept: ".t_sortable tr",
//       hoverClass: "ui-state-hover",
//       drop: function( event, ui ) { return false; }
//     });
//   });

// function dragStartHandler(event){
//     event.dataTransfer.setData("MyDraggedElementId",event.target.id);
//     console.log("in dragstart Handler");

    
// }

// function dragoverHandler(event){
//     event.preventDefault();
//     console.log("in dragover Handler");

// }

// function dropHandler(event){
//     event.preventDefault();
//     console.log("in drop Handler");

//     var elementId = event.dataTransfer.getData('p');
//     var z = document.createElement(elementId); // is a node
//     z.innerHTML=elementId.innerHTML;
//     console.log(elementId);
//     event.target.appendChild(z);
//     console.log("in drop Handler");
// }

function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
  }
  function allowDrop(event) {
    event.preventDefault();
  }
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    // document.getElementById("demo").innerHTML = "The p element was dropped";
  }

  function validateForm(){
        // const list = drop_div.childNodes;
        // for (const itr of list) {
        //     mem+= itr.innerText+" ";
        //     // Do stuff
        //     //console.log(i+" "+mem);
        //   }
        alert("Name :"+Manager.value+"\n"+
        "Email:"+Email.value+"\n"+
        "Lead:"+Lead.value+"\n"+
        "Members:");//+mem+"\n");
  }