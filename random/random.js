$(function(){
    $("input").on("click",function(){
         //alert("Hi");
         var numberOfListItem = $("#choices li").length;
         var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
         $("h1").text($("#choices li").eq(randomChildNumber).text());
    });
});