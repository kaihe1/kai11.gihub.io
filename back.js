      var meat = [];
      var price = [];
      
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadstatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var mydata = JSON.parse(this.responseText);
        var steak1 = mydata.meat[0].price;
        price.push(steak1);
        var gSteak = mydata.meat[0].name;
        meat.push(gSteak);
        document.getElementById('Gsteak').innerHTML = mydata.meat[0].name;
        localStorage.setItem(mydata.meat[0].name);
        }
      };
      mlhttp.open("GET","sample.json",true);
      xmlhttp.send();

      function purchase(){
        var x = document.getElementById('user').value;
        document.getElementById('user').value = "";
        var li = document.createElement('li');
        var newText = document.createTextNode(x + meat[0]);
        li.appendChild(newText);
        var olTag = document.getElementsByTagName('ol')[0];
        olTag.appendChild(li);
  }