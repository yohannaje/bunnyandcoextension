
var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
var thetime = new Date();
var themonth = thetime.getMonth();
//var image = document.write('<img class="imagebg" src="image' + months[themonth] + '.png" alt="Image of the month: ' + months[themonth] + '" />');

var d = document.getElementById("container");
d.className += "" + months[themonth] +  "";
