
  var meat =[];
var price= [];
var tax = 1.04712;

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    var mydata = JSON.parse(this.responseText);
    var gsteak= mydata.meats[0].name;
    meats.push(gsteak);
    var psteak = mydata.meats[0].price;
    price.push(psteak);
    document.getElementById('Gsteak').innerHTML = mydata.meats[0].name;
    document.getElementById('p1').innerHTML = "$" + mydata.meats[0].price;
}
};
xmlhttp.open("GET" , "sample.json", true);
xmlhttp.send

function purchase1(){
  var beforeTaxes = prices[0];
  var result1 = document.getElementById('button1').value;
  document.getElementById('button1').value = "";
  var pT = result1 * beforeTaxes;
  var taxP = pT * tax;
  var fP = taxP.toFixed(2);
  if(Result1 >0){
  window.alert('Your food has been added,Scroll down to finish your purchase');
  var newli = document.createElement('li');
  var newText = document.createTextNode(result1 + " " + meats[0] + " $" + fP);
 newli.appendChild(newText);
 var olTag = document.getElementsByTagName('ol')[0];
 olTag.appendChild(newli);
  }
  localStorage.setItem("foodS1", newli);
}