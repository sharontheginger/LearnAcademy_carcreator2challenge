var pos = 0;

function myMove() {
    var elem = document.getElementById("blueCar");
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 1400) {
            clearInterval(id);
        } else {
            pos += 2
            // elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

function myStop() {
    var elem = document.getElementById("blueCar");
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 0) {
            clearInterval(id);
        } else {
            pos -= 1;
            // elem.style.top = pos + 'px';
            elem.style.left = pos - 'px';
        }
    }
}
