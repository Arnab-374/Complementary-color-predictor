var net = new brain.NeuralNetwork();

/*
net.train([
  {input: [70,150] , output: [1] },
  {input: [0.1176470588,80] , output: [0] },
  {input: [75,250] , output: [1] },
  {input: [45,0.5098039216] , output: [0] },
  {input: [0.2352941176,150] , output: [1] },
]);

var output = net.run([50,180]);
console.log(output);
*/

/*
net.train([
  {input: {height: 5.9, weight: 75} , output: {adult: 1} },
  {input: {height: 3.0, weight: 45} , output: {adult: 0} },
  {input: {height: 6.3, weight: 0.3529411765} , output: {adult: 1} },
  {input: {height: 4.5, weight: 75} , output: {adult: 1} },
  {input: {height: 3.5, weight: 55} , output: {adult: 0} },
  {input: {height: 5.4, weight: 80} , output: {adult: 1} },
  {input: {height: 2.0, weight: 0.1176470588} , output: {adult: 0} },
  {input: {height: 2.5, weight: 40} , output: {adult: 0} }
]);

var output = net.run({height: 6.0, weight: 0.3529411765});
console.log(output);
*/


//=====================================================X*X================================================\\

//setting up the variables required
var hex, rgbColor,complColor, complHex;

document.querySelector("#colorPicker").addEventListener("change", function() {
  hex = document.querySelector("#colorPicker").value;
  //console.log(hex);
  document.querySelector("#text").classList.remove = "textClass";
  document.querySelector("#text").style.backgroundColor = hex;

  rgbColor = hexToRgb(hex);
  //console.log(rgbColor);

  var output = net.run(rgbColor);
  //console.log(output);
  complColor = {};
  complColor.rChannel = Math.floor(output.r * 255);
  complColor.gChannel = Math.floor(output.g * 255);
  complColor.bChannel = Math.floor(output.b * 255);
  //console.log(complColor);

  complHex = rgbToHex(complColor.rChannel, complColor.gChannel, complColor.bChannel);
  console.log(complHex);
  document.querySelector("#text").style.color = complHex;
});


//conversion to rgb
function hexToRgb(hexC) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexC);
    return result ? {
        r: parseInt(result[1], 16)/255,
        g: parseInt(result[2], 16)/255,
        b: parseInt(result[3], 16)/255
    } : null;
}


//conversion to hex
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


net.train([
  {input:{r:1 ,g:0 ,b:0 } ,output:{r:0 ,g:1 ,b:1 } },    //red-cyan
  {input:{r:1 ,g:0 ,b:0.137254902 } ,output:{r:0 ,g:1 ,b:0.862745098 } },
  {input:{r:1 ,g:0 ,b:0.2549019608 } ,output:{r:0 ,g:1 ,b:0.7450980392 } },
  {input:{r:1 ,g:0 ,b:0.4901960784 } ,output:{r:0 ,g:1 ,b:0.5098039216 } },
  {input:{r:1 ,g:0 ,b:0.7254901961 } ,output:{r:0 ,g:1 ,b:0.2745098039 } },
  {input:{r:1 ,g:0 ,b:1 } ,output:{r:0 ,g:1 ,b:0 } },
  {input:{r:1 ,g:0.4901960784 ,b:0 } ,output:{r:0 ,g:0.5098039216 ,b:1 } },   //orange-ocean
  {input:{r:1 ,g:0.4901960784 ,b:0.137254902 } ,output:{r:0.137254902 ,g:0.6470588235 ,b:1 } },
  {input:{r:1 ,g:0.4901960784 ,b:0.2549019608 } ,output:{r:0.2549019608 ,g:0.7647058824 ,b:1 } },
  {input:{r:1 ,g:0.4901960784 ,b:0.4901960784 } ,output:{r:0.4901960784 ,g:1 ,b:1 } },
  {input:{r:1 ,g:0.4901960784 ,b:0.7254901961 } ,output:{r:0.4901960784 ,g:1 ,b:0.7647058824 } },
  {input:{r:1 ,g:0.4901960784 ,b:1 } ,output:{r:0.4901960784 ,g:1 ,b:0.4901960784 } },
  {input:{r:1 ,g:0.2549019608 ,b:0 } ,output:{r:0 ,g:0.7450980392 ,b:1 } },
  {input:{r:1 ,g:0.2549019608 ,b:0.137254902 } ,output:{r:0.137254902 ,g:0.8823529412 ,b:1 } },
  {input:{r:1 ,g:0.2549019608 ,b:0.2549019608 } ,output:{r:0.2549019608 ,g:1 ,b:1 } },
  {input:{r:1 ,g:0.2549019608 ,b:0.4901960784 } ,output:{r:0.2549019608 ,g:1 ,b:0.7647058824 } },
  {input:{r:1 ,g:0.2549019608 ,b:0.7254901961 } ,output:{r:0.2549019608 ,g:1 ,b:0.5294117647 } },
  {input:{r:1 ,g:0.2549019608 ,b:1 } ,output:{r:0.2549019608 ,g:1 ,b:0.2549019608 } },
  {input:{r:1 ,g:0.137254902 ,b:0 } ,output:{r:0 ,g:0.862745098 ,b:1 } },
  {input:{r:1 ,g:0.137254902 ,b:0.137254902 } ,output:{r:0.137254902 ,g:1 ,b:1 } },
  {input:{r:1 ,g:0.137254902 ,b:0.2549019608 } ,output:{r:0.137254902 ,g:1 ,b:0.8823529412 } },
  {input:{r:1 ,g:0.137254902 ,b:0.4901960784 } ,output:{r:0.137254902 ,g:1 ,b:0.6470588235 } },
  {input:{r:1 ,g:0.137254902 ,b:0.7254901961 } ,output:{r:0.137254902 ,g:1 ,b:0.4117647059 } },
  {input:{r:1 ,g:0.137254902 ,b:1 } ,output:{r:0.137254902 ,g:1 ,b:0.137254902 } },
  {input:{r:1 ,g:0.7254901961 ,b:0 } ,output:{r:0 ,g:0.2745098039 ,b:1 } },
  {input:{r:1 ,g:0.7254901961 ,b:0.137254902 } ,output:{r:0.137254902 ,g:0.4117647059 ,b:1 } },
  {input:{r:1 ,g:0.7254901961 ,b:0.2549019608 } ,output:{r:0.2549019608 ,g:0.5294117647 ,b:1 } },
  {input:{r:1 ,g:0.7254901961 ,b:0.4901960784 } ,output:{r:0.4901960784 ,g:0.7647058824 ,b:1 } },
  {input:{r:1 ,g:0.7254901961 ,b:0.7254901961 } ,output:{r:0.7254901961 ,g:1 ,b:1 } },
  {input:{r:1 ,g:0.7254901961 ,b:1 } ,output:{r:0.7254901961 ,g:1 ,b:0.7254901961 } },
  {input:{r:1 ,g:1 ,b:0 } ,output:{r:0 ,g:0 ,b:1 } },   //yellow-blue
  {input:{r:1 ,g:1 ,b:0.137254902 } ,output:{r:0.137254902 ,g:0.137254902 ,b:1 } },
  {input:{r:1 ,g:1 ,b:0.2549019608 } ,output:{r:0.2549019608 ,g:0.2549019608 ,b:1 } },
  {input:{r:1 ,g:1 ,b:0.4901960784 } ,output:{r:0.4901960784 ,g:0.4901960784 ,b:1 } },
  {input:{r:1 ,g:1 ,b:0.7254901961 } ,output:{r:0.7254901961 ,g:0.7254901961 ,b:1 } },
  {input:{r:1 ,g:1 ,b:1 } ,output:{r:0 ,g:0 ,b:0 } },
  {input:{r:0.4901960784 ,g:1 ,b:0 } ,output:{r:0.4901960784 ,g:0 ,b:1 } },    //spring-green-violet
  {input:{r:0.4901960784 ,g:1 ,b:0.137254902 } ,output:{r:0.6470588235 ,g:0.137254902 ,b:1 } },
  {input:{r:0.4901960784 ,g:1 ,b:0.2549019608 } ,output:{r:0.7647058824 ,g:0.2549019608 ,b:1 } },
  {input:{r:0.4901960784 ,g:1 ,b:0.4901960784 } ,output:{r:1 ,g:0.4901960784 ,b:1 } },
  {input:{r:0.4901960784 ,g:1 ,b:0.7254901961 } ,output:{r:1 ,g:0.4901960784 ,b:0.7647058824 } },
  {input:{r:0.4901960784 ,g:1 ,b:1 } ,output:{r:1 ,g:0.4901960784 ,b:0.4901960784 } },
  {input:{r:0.137254902 ,g:1 ,b:0 } ,output:{r:0.862745098 ,g:0 ,b:1 } },
  {input:{r:0.137254902 ,g:1 ,b:0.137254902 } ,output:{r:1 ,g:0.137254902 ,b:1 } },
  {input:{r:0.137254902 ,g:1 ,b:0.2549019608 } ,output:{r:1 ,g:0.137254902 ,b:0.8823529412 } },
  {input:{r:0.137254902 ,g:1 ,b:0.4901960784 } ,output:{r:1 ,g:0.137254902 ,b:0.6470588235 } },
  {input:{r:0.137254902 ,g:1 ,b:0.7254901961 } ,output:{r:1 ,g:0.137254902 ,b:0.4117647059 } },
  {input:{r:0.137254902 ,g:1 ,b:1 } ,output:{r:1 ,g:0.137254902 ,b:0.137254902 } },
  {input:{r:0.2549019608 ,g:1 ,b:0 } ,output:{r:0.7450980392 ,g:0 ,b:1 } },
  {input:{r:0.2549019608 ,g:1 ,b:0.137254902 } ,output:{r:0.8823529412 ,g:0.137254902 ,b:1 } },
  {input:{r:0.2549019608 ,g:1 ,b:0.2549019608 } ,output:{r:1 ,g:0.2549019608 ,b:1 } },
  {input:{r:0.2549019608 ,g:1 ,b:0.4901960784 } ,output:{r:1 ,g:0.2549019608 ,b:0.7647058824 } },
  {input:{r:0.2549019608 ,g:1 ,b:0.7254901961 } ,output:{r:1 ,g:0.2549019608 ,b:0.5098039216 } },
  {input:{r:0.2549019608 ,g:1 ,b:1 } ,output:{r:1 ,g:0.2549019608 ,b:0.2549019608 } },
  {input:{r:0.7254901961 ,g:1 ,b:0 } ,output:{r:0.2745098039 ,g:0 ,b:1 } },
  {input:{r:0.7254901961 ,g:1 ,b:0.137254902 } ,output:{r:0.4117647059 ,g:0.137254902 ,b:1 } },
  {input:{r:0.7254901961 ,g:1 ,b:0.2549019608 } ,output:{r:0.5294117647 ,g:0.2549019608 ,b:1 } },
  {input:{r:0.7254901961 ,g:1 ,b:0.4901960784 } ,output:{r:0.7647058824 ,g:0.4901960784 ,b:1 } },
  {input:{r:0.7254901961 ,g:1 ,b:0.7254901961 } ,output:{r:1 ,g:0.7254901961 ,b:1 } },
  {input:{r:0.7254901961 ,g:1 ,b:1 } ,output:{r:1 ,g:0.7254901961 ,b:0.7254901961 } },
  {input:{r:0 ,g:1 ,b:0 } ,output:{r:1 ,g:0 ,b:1 } },   //green-magenta
  {input:{r:0 ,g:1 ,b:0.137254902 } ,output:{r:1 ,g:0 ,b:0.862745098 } },
  {input:{r:0 ,g:1 ,b:1 } ,output:{r:1 ,g:0 ,b:0 } },
  {input:{r:0 ,g:1 ,b:0.4901960784 } ,output:{r:1 ,g:0 ,b:0.5098039216 } },   //torquise-raspberry
  {input:{r:0 ,g:1 ,b:0.2549019608 } ,output:{r:1 ,g:0 ,b:0.7254901961 } },
  {input:{r:0 ,g:1 ,b:0.7254901961 } ,output:{r:1 ,g:0 ,b:0.2549019608 } },
  {input:{r:0 ,g:0 ,b:0 } ,output:{r:1 ,g:1 ,b:1 } },
  {input:{r:0 ,g:0 ,b:0.137254902 } ,output:{r:0.137254902 ,g:0.137254902 ,b:0 } },
  {input:{r:0 ,g:0 ,b:0.2549019608 } ,output:{r:0.2549019608 ,g:0.2549019608 ,b:0 } },
  {input:{r:0 ,g:0 ,b:0.4901960784 } ,output:{r:0.4901960784 ,g:0.4901960784 ,b:0 } },
  {input:{r:0 ,g:0 ,b:0.7254901961 } ,output:{r:0.7254901961 ,g:0.7254901961 ,b:0 } },
  {input:{r:0 ,g:0 ,b:1 } ,output:{r:1 ,g:1 ,b:0 } },
  {input:{r:0.137254902 ,g:0 ,b:0 } ,output:{r:0 ,g:0.137254902 ,b:0.137254902 } },
  {input:{r:0.137254902 ,g:0 ,b:0.137254902 } ,output:{r:0 ,g:0.137254902 ,b:0 } },
  {input:{r:0.137254902 ,g:0 ,b:0.2549019608 } ,output:{r:0.1176470588 ,g:0.2549019608 ,b:0 } },
  {input:{r:0.137254902 ,g:0 ,b:0.4901960784 } ,output:{r:0.3529411765 ,g:0.4901960784 ,b:0 } },
  {input:{r:0.137254902 ,g:0 ,b:0.7254901961 } ,output:{r:0.5882352941 ,g:0.7254901961 ,b:0 } },
  {input:{r:0.137254902 ,g:0 ,b:1 } ,output:{r:0.862745098 ,g:1 ,b:0 } },
  {input:{r:0.2549019608 ,g:0 ,b:0 } ,output:{r:0 ,g:0.2549019608 ,b:0.2549019608 } },
  {input:{r:0.2549019608 ,g:0 ,b:0.137254902 } ,output:{r:0 ,g:0.2549019608 ,b:0.1176470588 } },
  {input:{r:0.2549019608 ,g:0 ,b:0.2549019608 } ,output:{r:0 ,g:0.2549019608 ,b:0 } },
  {input:{r:0.2549019608 ,g:0 ,b:0.4901960784 } ,output:{r:0.2352941176 ,g:0.4901960784 ,b:0 } },
  {input:{r:0.2549019608 ,g:0 ,b:0.7254901961 } ,output:{r:0.4705882353 ,g:0.7254901961 ,b:0 } },
  {input:{r:0.2549019608 ,g:0 ,b:1 } ,output:{r:0.7450980392 ,g:1 ,b:0 } },
  {input:{r:0.4901960784 ,g:0 ,b:0 } ,output:{r:0 ,g:0.4901960784 ,b:0.4901960784 } },
  {input:{r:0.4901960784 ,g:0 ,b:0.137254902 } ,output:{r:0 ,g:0.4901960784 ,b:0.3529411765 } },
  {input:{r:0.4901960784 ,g:0 ,b:0.2549019608 } ,output:{r:0 ,g:0.4901960784 ,b:0.2352941176 } },
  {input:{r:0.4901960784 ,g:0 ,b:0.4901960784 } ,output:{r:0 ,g:0.4901960784 ,b:0 } },
  {input:{r:0.4901960784 ,g:0 ,b:0.7254901961 } ,output:{r:0.2352941176 ,g:0.7254901961 ,b:0 } },
  {input:{r:0.4901960784 ,g:0 ,b:1 } ,output:{r:0.5098039216 ,g:1 ,b:0 } },
  {input:{r:0.7254901961 ,g:0 ,b:0 } ,output:{r:0 ,g:0.7254901961 ,b:0.7254901961 } },
  {input:{r:0.7254901961 ,g:0 ,b:0.137254902 } ,output:{r:0 ,g:0.7254901961 ,b:0.5882352941 } },
  {input:{r:0.7254901961 ,g:0 ,b:0.2549019608 } ,output:{r:0 ,g:0.7254901961 ,b:0.4705882353 } },
  {input:{r:0.7254901961 ,g:0 ,b:0.4901960784 } ,output:{r:0 ,g:0.7254901961 ,b:0.2352941176 } },
  {input:{r:0.7254901961 ,g:0 ,b:0.7254901961 } ,output:{r:0 ,g:0.7254901961 ,b:0 } },
  {input:{r:0.7254901961 ,g:0 ,b:1 } ,output:{r:0.2745098039 ,g:1 ,b:0 } },
  {input:{r:0 ,g:0.137254902 ,b:0 } ,output:{r:0.137254902 ,g:0 ,b:0.137254902 } },
  {input:{r:0 ,g:0.137254902 ,b:0.137254902 } ,output:{r:0.137254902 ,g:0 ,b:0 } },
  {input:{r:0 ,g:0.137254902 ,b:0.2549019608 } ,output:{r:0.2549019608 ,g:0.1176470588 ,b:0 } },
  {input:{r:0 ,g:0.137254902 ,b:0.4901960784 } ,output:{r:0.4901960784 ,g:0.3529411765 ,b:0 } },
  {input:{r:0 ,g:0.137254902 ,b:0.7254901961 } ,output:{r:0.7254901961 ,g:0.5882352941 ,b:0 } },
  {input:{r:0 ,g:0.137254902 ,b:1 } ,output:{r:1 ,g:0.862745098 ,b:0 } },
  {input:{r:0 ,g:0.2549019608 ,b:0 } ,output:{r:0.2549019608 ,g:0 ,b:0.2549019608 } },
  {input:{r:0 ,g:0.2549019608 ,b:0.137254902 } ,output:{r:0.2549019608 ,g:0 ,b:0.1176470588 } },
  {input:{r:0 ,g:0.2549019608 ,b:0.2549019608 } ,output:{r:0.2549019608 ,g:0 ,b:0 } },
  {input:{r:0 ,g:0.2549019608 ,b:0.4901960784 } ,output:{r:0.4901960784 ,g:0.2352941176 ,b:0 } },
  {input:{r:0 ,g:0.2549019608 ,b:0.7254901961 } ,output:{r:0.7254901961 ,g:0.4705882353 ,b:0 } },
  {input:{r:0 ,g:0.2549019608 ,b:1 } ,output:{r:1 ,g:0.7450980392 ,b:0 } },
  {input:{r:0 ,g:0.4901960784 ,b:0 } ,output:{r:0.4901960784 ,g:0 ,b:0.4901960784 } },
  {input:{r:0 ,g:0.4901960784 ,b:0.137254902 } ,output:{r:0.4901960784 ,g:0 ,b:0.3529411765 } },
  {input:{r:0 ,g:0.4901960784 ,b:0.2549019608 } ,output:{r:0.4901960784 ,g:0 ,b:0.2352941176 } },
  {input:{r:0 ,g:0.4901960784 ,b:0.4901960784 } ,output:{r:0.4901960784 ,g:0 ,b:0 } },
  {input:{r:0 ,g:0.4901960784 ,b:0.7254901961 } ,output:{r:0.7254901961 ,g:0.2352941176 ,b:0 } },
  {input:{r:0 ,g:0.4901960784 ,b:1 } ,output:{r:1 ,g:0.5098039216 ,b:0 } },
  {input:{r:0 ,g:0.7254901961 ,b:0 } ,output:{r:0.7254901961 ,g:0 ,b:0.7254901961 } },
  {input:{r:0 ,g:0.7254901961 ,b:0.137254902 } ,output:{r:0.7254901961 ,g:0 ,b:0.5882352941 } },
  {input:{r:0 ,g:0.7254901961 ,b:0.2549019608 } ,output:{r:0.7254901961 ,g:0 ,b:0.4705882353 } },
  {input:{r:0 ,g:0.7254901961 ,b:0.4901960784 } ,output:{r:0.7254901961 ,g:0 ,b:0.2352941176 } },
  {input:{r:0 ,g:0.7254901961 ,b:0.7254901961 } ,output:{r:0.7254901961 ,g:0 ,b:0 } },
  {input:{r:0 ,g:0.7254901961 ,b:1 } ,output:{r:1 ,g:0.2745098039 ,b:0 } },
]);
