      var meat = [];
      var price = [];
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadstatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var mydata = JSON.parse(this.responseText);
        var steak = mydata.food[0].price;
        price.push(steak);
        var gSteak = mydata.food[0].name;
        meat.push(gSteak);
        document.getElementById('Gsteak').innerHTML =mydata.food[0].name;
        localStorage.setItem(mydata.food[0].name);
        
    /*    var salmon = mydata.food[1].price;
        var grilledSalmon = mydata.food[1].name;

        var chicken = mydata.food[2].price;
        var grilledChicken = mydata.food[2].name;

        var shrimp = mydata.food[3].price;
        var grilledShrimp = mydata.food[3].name;

        var pork = mydata.food[4].price;
        var grilledPork = mydata.food[4].name;

        var goat = mydata.food[5].price;
        var grilledGoat = mydata.food[5].name;
      */
        }
      };
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