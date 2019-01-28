      var meat = [];
      var price = [];
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadstatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var mydata = JSON.parse(this.responseText);
        var steakN1 = mydata.food[0].price;
        price.push(steakN1);
        var gSteak = mydata.food[0].name;
        meat.push(gSteak);
        document.getElementById('Gsteak').innerHTML = mydata.food[0].name;
        localStorage.setItem(mydata.food[0].name);
        }
      };
      mlhttp.open("GET","sample.json",true);
      xmlhttp.send();
/*   function purchase(){
  var x = document.getElementById('user').value;
  document.getElementById('user').value = "";
  var li = document.createElement('li');
  var newText = document.createTextNode(x);
  li.appendChild(newText);
  var olTag = document.getElementsByTagName('ol')[0];
  olTag.appendChild(li);
        }
        */

  function purchase(){
  var x = document.getElementById('user').value;
  document.getElementById('user').value = "";
  var li = document.createElement('li');
  var newText = document.createTextNode(x + meat[0]);
  li.appendChild(newText);
  var olTag = document.getElementsByTagName('ol')[0];
  olTag.appendChild(li);
  }