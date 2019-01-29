var meats=[];
var prices= [];
var de =[];
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    var storedata = JSON.parse(this.responseText);
    window.alert(storedata.meats[0]);
    var gsteak= storedata.meats[0].name;
    meats.push(gsteak);
    var psteak = storedata.meats[0].price;
    prices.push(psteak);
    var dsteak = storedata.meats[0].descriptions;
    de.push(dsteak);
    document.getElementById('Gsteak').innerHTML = storedata.meats[0].name;
    document.getElementById('p1').innerHTML =  storedata.meats[0].price;
    document.getElementById('d1').innerHTML =  storedata.meats[0].descriptions;
}
};
xmlhttp.open("GET","meat.json", true);
xmlhttp.send;

function purchase1(){
        var x = document.getElementById('user1').value;
        document.getElementById('user1').value = "";
        window.alert(x);
        var li = document.createElement('li');
        var newText = document.createTextNode(x +" "+ meats[0]);
        window.alert(meats[0] + x + "works");
        li.appendChild(newText);
        var olTag = document.getElementsByTagName('ol')[0];
        olTag.appendChild(li);
}