function getMilk(money , costperbottle) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
      
     
    console.log("buy"+calcbottles(money,costperbottle)+" bottles of milk");
      
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  
      return calcchange(money,costperbottle);
  }
  function calcbottles(money,costperbottle)
  {
       var bottles=Math.floor(money/costperbottle);
      return bottles;
  }
  function calcchange(money,costperbottle)
  {
     var change=money%costperbottle;
      return change;
  }
  
  var change=getMilk(10,3);
  console.log(change +"money");