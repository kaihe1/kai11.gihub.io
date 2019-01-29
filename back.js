var meats=[];
var prices= [];

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    var mydata = JSON.parse(this.responseText);
    var gsteak= mydata.meats[0].name;
    meats.push(gsteak);
    var psteak = mydata.meats[0].price;
    prices.push(psteak);
    document.getElementById('Gsteak').innerHTML = mydata.meats[0].name;
    document.getElementById('p1').innerHTML = "$" + mydata.meats[0].price;
}
};
xmlhttp.open("GET" , "sample.json", true);
xmlhttp.send

function purchase1(){
        var x = document.getElementById('user1').value;
        document.getElementById('user1').value = "";
        var li = document.createElement('li');
        var newText = document.createTextNode(x + meats[0]);
        li.appendChild(newText);
        var olTag = document.getElementsByTagName('ol')[0];
        olTag.appendChild(li);
}