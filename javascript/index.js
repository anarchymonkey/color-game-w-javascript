var colors = [
  'rgb(255, 0, 0)',
  'rgb(255, 255, 0)',
  'rgb(0, 255, 255)',
  'rgb(0, 255, 0)',
  'rgb(0, 0, 255)',
  'rgb(255, 0, 255)']
  var boxes = document.querySelectorAll(".square")

  var ans = colors[3]
  var printRGB = document.querySelector("#id1")
  var message = document.querySelector("#me")
  var jumbotron = document.querySelector(".new")
  var flag = 0;
  var gameOver = false

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
