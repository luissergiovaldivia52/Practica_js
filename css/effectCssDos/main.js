var Slice = function(){
         
    var sliceDiv = document.getElementById('slice');
    
    var gridX = 8;
    //console.log(sliceDiv); 
    var w = sliceDiv.offsetWidth;
    var h = sliceDiv.offsetHeight

    var img = document.querySelectorAll('#slice img')[0].src;
    var delay = 0.05;


    console.log(w, h, img)

    this.create = function () {

        for (let x = 0; x < gridX; x++) {
            var width = x * w / gridX + 'px';
            var div = document.createElement("div");
            document.getElementById('slice').appendChild(div);

            div.style.left = width;
             
             div.style.top = 0;
             
             div.style.width = w / gridX + "px";
             
             div.style.height = h + "px";
            
             div.style.backgroundImage = "url("+img+")";
            div.style.backgroundPosition = "-" + width;
            div.style.backgroundSize = w + "px";
            //div.style.delay = x * delay + "s";
            div.style.transitionDelay = x * delay + "s";
        }
    }

    this.create();

    document.getElementById('slice').onmouseover = function() {
        mouseOver();
    }

    document.getElementById('slice').onmouseout = function() {
        mouseOut();
    }

    function mouseOver() {
        //sliceDiv.classList.add('active');
        sliceDiv.classList.remove('active');
    }

    function mouseOut() {
        //sliceDiv.classList.remove('active');
        sliceDiv.classList.add('active');
    }
}

window.onload = function(){
        var slice = Slice();
}