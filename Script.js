var sideBarTrue = true;
// const sidebarList = [true, false, false, false, false, false, false, false]

function dashBoard(){
    
};

function transactions(){

};

function categories(){

};

function reports(){

};

function accounts(){

};

function settings(){
    
}

function help(){

}

function logout(){

}


document.getElementById("sbacn-menu").addEventListener("click", ()=>{
    var sidebar = document.getElementsByClassName("sidebar")[0];
    if (sideBarTrue){
        sidebar.style.display = "none";
        sideBarTrue = false;
    }
    else{
        sidebar.style.display = "flex";
        sideBarTrue = true;
    }
});

var buttons = document.querySelectorAll(".sidebar button");
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});
