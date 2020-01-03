var x = 0;
var i = 0;
var content = document.getElementById("title");
var NUM = [,,];
var style = document.getElementById("style")

if(window.screen.width>999){
    style.href="/Sass/css/style.css"
    $('#Container').load("index.txt #Container");
    console.log(1)
};
console.log(2)
// 簡單內容輪播
function change_content(){
    if(i==0){
        $("#title").html("<h1>Your Most Reliable Display Partner</h1><h3>We provide transparent demand and supply, real-time manufacturing information, and on-time delivery to serve our valuable customers.</h3>")
        i+=1
    }else if(i==1){
        $("#title").html("<h1>Broaden Your Horizons</h1><h3>INNOLUX,the most valuable and competitive all-round solution provider for display technology.</h3>")
        i+=1
    }else{
        $("#title").html("<h1>Corporate Social Responsibility</h1><h3>INNOLUX, responsibly produce eco-friendly green products for a more sustainable enviroment.</h3>")
        i=0
    };
}
setInterval(change_content,3000);
// 簡單內容輪播
document.getElementsByClassName("partner").onmouseover=function(){this.style.color="#000"};
$("#menu_page").hide();
$("#back_btn").hide();
$(function(){
    $("#menu").click(function(){
        $("#menu_page").toggle("fast","swing");
        $(".back_btn").toggle("fast","swing");
        // $("#menu").css("background-image","url(/Image/back-button.png)");
    });
});