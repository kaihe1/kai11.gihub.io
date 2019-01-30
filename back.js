var meats=[];
var prices= [];
var de =[];
var gsteak;
var gsalmon;
var gchicken;
var gshrimp;
var gpork;
var ggoat;
var totalp=[];

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    var storedata = JSON.parse(this.responseText);

    gsteak= storedata.meats[0].name;
    meats.push(gsteak);
    var psteak = storedata.meats[0].price;
    prices.push(psteak);
    var dsteak = storedata.meats[0].descriptions;
    de.push(dsteak);
    document.getElementById('Gsteak').innerHTML = storedata.meats[0].name;
    document.getElementById('p1').innerHTML =  storedata.meats[0].price;
    document.getElementById('d1').innerHTML =  storedata.meats[0].descriptions;

    gsalmon= storedata.meats[1].name;
    meats.push(gsalmon);
    var psalmon = storedata.meats[1].price;
    prices.push(psalmon);
    var dsalmon = storedata.meats[1].descriptions;
    de.push(dsalmon);
    document.getElementById('Gsalmon').innerHTML = storedata.meats[1].name;
    document.getElementById('p2').innerHTML =  storedata.meats[1].price;
    document.getElementById('d2').innerHTML =  storedata.meats[1].descriptions;

    gchicken= storedata.meats[2].name;
    meats.push(gchicken);
    var pchicken = storedata.meats[2].price;
    prices.push(pchicken);
    var dchicken = storedata.meats[2].descriptions;
    de.push(dchicken);
    document.getElementById('Gchicken').innerHTML = storedata.meats[2].name;
    document.getElementById('p3').innerHTML =  storedata.meats[2].price;
    document.getElementById('d3').innerHTML =  storedata.meats[2].descriptions;

    gshrimp= storedata.meats[3].name;
    meats.push(gshrimp);
    var pshrimp = storedata.meats[3].price;
    prices.push(pshrimp);
    var dshrimp = storedata.meats[3].descriptions;
    de.push(dshrimp);
    document.getElementById('Gshrimp').innerHTML = storedata.meats[3].name;
    document.getElementById('p4').innerHTML =  storedata.meats[3].price;
    document.getElementById('d4').innerHTML =  storedata.meats[3].descriptions;

    gpork= storedata.meats[4].name;
    meats.push(gpork);
    var ppork = storedata.meats[4].price;
    prices.push(ppork);
    var dpork = storedata.meats[4].descriptions;
    de.push(dpork);
    document.getElementById('Gpork').innerHTML = storedata.meats[4].name;
    document.getElementById('p5').innerHTML =  storedata.meats[4].price;
    document.getElementById('d5').innerHTML =  storedata.meats[4].descriptions;

    ggoat= storedata.meats[5].name;
    meats.push(ggoat);
    var pgoat = storedata.meats[5].price;
    prices.push(pgoat);
    var dgoat = storedata.meats[5].descriptions;
    de.push(dgoat);
    document.getElementById('Ggoat').innerHTML = storedata.meats[5].name;
    document.getElementById('p6').innerHTML =  storedata.meats[5].price;
    document.getElementById('d6').innerHTML =  storedata.meats[5].descriptions;

    
}
};
xmlhttp.open("GET","meat.json", true);
xmlhttp.send();

function purchase1(){
        var x = document.getElementById('user1').value;
        document.getElementById('user1').value = "";
        var subtotal = (x * 22).toFixed(2);
        var total = ((x * 22) * 1.04712).toFixed(2);
        totalp.push(total);
        localStorage.setItem("total", total);
        var li = document.createElement('li');
        var newText = document.createTextNode(x + " Order of " +" "+ meats[0] + " " + " sub total is $" + subtotal + " and total after tax  is $" + total);
        li.appendChild(newText);
        var olTag = document.getElementsByTagName('ol')[0];
        olTag.appendChild(li);
}

function purchase2(){
  var x = document.getElementById('user2').value;
  document.getElementById('user2').value = "";
  var subtotal = (x * 17).toFixed(2);
  var total = ((x * 17) * 1.04712).toFixed(2);
  totalp.push(total);
  var li = document.createElement('li');
  var newText = document.createTextNode(x + " Order of " +" "+ meats[1] + " " + " sub total is $" + subtotal + " and total after tax  is $" + total);
  li.appendChild(newText);
  var olTag = document.getElementsByTagName('ol')[0];
  olTag.appendChild(li);
}


function purchase3(){
  var x = document.getElementById('user3').value;
  document.getElementById('user3').value = "";
  var subtotal = (x * 14).toFixed(2);
  var total = ((x * 14) * 1.04712).toFixed(2);
  totalp.push(total);
  var li = document.createElement('li');
  var newText = document.createTextNode(x + " Order of " +" "+ meats[2] + " " + " sub total is $" + subtotal + " and total after tax  is $" + total);
  li.appendChild(newText);
  var olTag = document.getElementsByTagName('ol')[0];
  olTag.appendChild(li);
}

function purchase4(){
  var x = document.getElementById('user4').value;
  document.getElementById('user4').value = "";
  var subtotal = (x * 20).toFixed(2);
  var total = ((x * 20) * 1.04712).toFixed(2);
  totalp.push(total);
  var li = document.createElement('li');
  var newText = document.createTextNode(x + " Order of " +" "+ meats[3] + " " + " sub total is $" + subtotal + " and total after tax  is $" + total);
  li.appendChild(newText);
  var olTag = document.getElementsByTagName('ol')[0];
  olTag.appendChild(li);
}

function purchase5(){
  var x = document.getElementById('user5').value;
  document.getElementById('user5').value = "";
  var subtotal = (x * 18).toFixed(2);
  var total = ((x * 18) * 1.04712).toFixed(2);
  totalp.push(total);
  var li = document.createElement('li');
  var newText = document.createTextNode(x + " Order of " +" "+ meats[4] + " " + " sub total is $" + subtotal + " and total after tax  is $" + total);
  li.appendChild(newText);
  var olTag = document.getElementsByTagName('ol')[0];
  olTag.appendChild(li);
}

function purchase6(){
  var x = document.getElementById('user6').value;
  document.getElementById('user6').value = "";
  var subtotal = (x * 21).toFixed(2);
  var total = ((x * 21) * 1.04712).toFixed(2);
  totalp.push(total);
  var li = document.createElement('li');
  var newText = document.createTextNode(x + " Order of " +" "+ meats[5] + " " + " sub total is $" + subtotal + " and total after tax  is $" + total);
  li.appendChild(newText);
  var olTag = document.getElementsByTagName('ol')[0];
  olTag.appendChild(li);
}

function sumbit(){
  localStorage.
  
  }