var color,red,green,blue;
function myColor(){
     red = document.getElementById('red').value;
     green = document.getElementById('green').value;
     blue = document.getElementById('blue').value;
     color = 'rgb('+red+','+green+','+blue+')';
    document.getElementById('chosenColor').style.backgroundColor = color;
    document.getElementById('box1').value = color;
    var rgbCode = color.split("(")[1].split(")")[0];
    rgbCode = rgbCode.split(",");
    var hexaDecimalCode = rgbCode.map(function(x){             //For each array element
        x = parseInt(x).toString(16);      //Convert to a base16 string
        return (x.length==1) ? "0"+x : x;  //Add zero if we get only one character
    })
    hexaDecimalCode  = "#"+hexaDecimalCode .join("");
    
    document.getElementById('box2').value = hexaDecimalCode ;
}

// document.getElementById('box2').value = convert(color);
document.getElementById('red').addEventListener('input',myColor);
document.getElementById('green').addEventListener('input',myColor);
document.getElementById('blue').addEventListener('input',myColor);