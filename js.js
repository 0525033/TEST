var x = 0;
var i = 0;
var content = document.getElementById("title");
var NUM = ["<h1>Your Most Reliable Display Partner</h1><h3>We provide transparent demand and supply, real-time manufacturing information, and on-time delivery to serve our valuable customers.</h3>","<h1>Broaden Your Horizons</h1><h3>INNOLUX,the most valuable and competitive all-round solution provider for display technology.</h3>","<h1>Corporate Social Responsibility</h1><h3>INNOLUX, responsibly produce eco-friendly green products for a more sustainable enviroment.</h3>"];
var style = document.getElementById("style")

// 簡單內容輪播
function change_content(){
    if(i==3){i=0};
    content.innerHTML=NUM[i];
    i+=1;
}
setInterval(change_content,3000);
// 簡單內容輪播

document.getElementsByClassName("partner").onmouseover=function(){this.style.color="#000"};
$("#menu_page").hide();
$("#back_btn").hide();
$(function(){
    $("#menu").click(function(){
        $("#menu_page").toggle("fast","swing");
    });
});
if(window.screen.width>999){
    console.log(style)
    style.href="/Sass/css/style.css"
    console.log(style)
    $('#Container').load("index.txt #Container");
    // html_con.innerHTML="1";
};