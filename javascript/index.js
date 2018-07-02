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

  printRGB.textContent = ans

  for(var i = 0; i < boxes.length ; i++)
  {
    boxes[i].style.backgroundColor = colors[i]

    boxes[i].addEventListener("click",function(){
      if(this.style.backgroundColor!== ans)
      {
        this.style.backgroundColor = "#232323";
      }
      else {
        alert("you won")

      }
    })
  }
