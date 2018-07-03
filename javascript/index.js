var colors = generateRandomColors(23);
  var boxes = document.querySelectorAll(".square")
  var printRGB = document.querySelector("#id1")
  var message = document.querySelector("#me")
  var jumbotron = document.querySelector(".new")
  var flag = 0;
  var gameOver = false
  var ans = pickedColor();

  printRGB.textContent = ans;

  for(var i = 0; i < boxes.length ; i++)
  {
    boxes[i].style.backgroundColor = colors[i]

    boxes[i].addEventListener("click",function(){
        if(this.style.backgroundColor!== ans)
        {
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again!!"
        }
        else
        {
            message.textContent = " YOU WONNNNNN!!!!!!!!!!!"
            changeColors(ans)

        }
    })

  }

  function changeColors(color)
  {
    //change each sqyares to loop to the color xD
    for(var i = 0; i< boxes.length ; i++)
    {
      boxes[i].style.backgroundColor = color;
    jumbotron.style.backgroundColor = color;
    }
  }

  function pickedColor(){
  var random =   Math.floor(Math.random() * colors.length)

  return colors[random]
  }

  function randomColor()
  {
    //pick a red from 0 - 255
    //green 0-255
    //blue 0-255

    var red = Math.floor(Math.random() *257)
    var green = Math.floor(Math.random() *257)
    var blue = Math.floor(Math.random() *257)

    //rgb(red,greem,blue)

    return "rgb("+ red + ", " + green + ", " + blue + ")";
  }

  function generateRandomColors(num)
  {
    //make an array
    //add num random colors to array

    var arr = []
//Repeat num times;
    for(var i = 0; i< num ;i++)
    {
      //get the random color
      arr.push(randomColor())
    }
    return arr;
  }
