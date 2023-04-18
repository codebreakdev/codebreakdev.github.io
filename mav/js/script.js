var ishamburgermenu = false;

document.addEventListener('DOMContentLoaded', function () {

    if(ismobile()){
        document.addEventListener('click', function(e){
            if(e.target.id !== "navicon"){
                const el_navitem = document.querySelectorAll(".nav > li:not(:first-child)");
                ishamburgermenu = false;
                for(var i=0; i < el_navitem.length; i++){
                    el_navitem[i].style.display = "none";
                }
            }
        });
    }


    const el_navicon = document.getElementById("navicon");
    el_navicon.addEventListener("click",navicon,false);

    const el_navitem = document.querySelectorAll(".nav > li:not(:first-child)");
    const arr = ["index.html", "donate.html", "about.html"];

    for(var i=0; i < arr.length; i++){
        el_navitem[i].addEventListener("click", visit.bind(this, arr[i],false), false);
    }

    if(document.getElementById("apk")){
        document.getElementById("apk").addEventListener("click", downloadapk.bind(this),false);

    }

    if(document.getElementById("exe")){
        document.getElementById("exe").addEventListener("click", downloadexe.bind(this),false);
    }





    
}, false);


function downloadexe(){
	visit("https://www.mediafire.com/file/2ikwt1bsw53o83d/MAV.exe/file",true)
}

function downloadapk(){
	visit("https://play.google.com/store/apps/details?id=com.codebreakdev.cleanzone",true);
}


window.onresize = resize;

function resize(){
    const el_navitem = document.querySelectorAll(".nav > li:not(:first-child)");
    if(ismobile()){
        for(var i=0; i < el_navitem.length; i++){
            el_navitem[i].style.display = "none";
        }
    }else{
        ishamburgermenu=false;
        for(var i=0; i < el_navitem.length; i++){
            el_navitem[i].style.display = "inline-block";
            el_navitem[i].style.position = "static";
            el_navitem[i].style.left = "0";
            el_navitem[i].style.width="auto";
            el_navitem[i].style.textAlign = "left";
            el_navitem[i].style.marginTop = "0";
        }

    }
}

function ismobile(){
    return window.innerWidth < 1000;
}


function visit(address,blank){
    var target;
    if (blank) {
        target = "_blank";
    } else {
        target = "_self";
    }
    window.open(address, target);
}

function navicon(e) {
    e.preventDefault();
    var el_navitem = document.querySelectorAll(".nav > li:not(:first-child)");
    if(ishamburgermenu){
        ishamburgermenu=false;
        for(var i=0; i < el_navitem.length; i++){
            el_navitem[i].style.display = "none";
        }
    }else{
        ishamburgermenu=true;
        var distance = 0;
        for(var i=0;i < el_navitem.length; i++){
            el_navitem[i].style.display = "block";
            el_navitem[i].style.position = "absolute";
            el_navitem[i].style.left = "0";
            el_navitem[i].style.width="100%";
            el_navitem[i].style.textAlign = "center";
            el_navitem[i].style.marginTop = distance.toString()+"px";
            distance = distance + 36;
        }
    }
}

