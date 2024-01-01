function textDisplay() {


    text.style.display = "none"

}

// Function for circular progress bar
function move() {

    // Circle progress bar
    var spinner = document.querySelector("#spinner")
    var percentage = document.querySelector("#inner")
    var spinnervalue = 1
    var end = setInterval(() => {
        spinner.style.background = `conic-gradient( rgb(17, 138, 146) ${spinnervalue * 3.7}deg,rgb(233, 233, 233) 0)`
        spinnervalue += 1
        percentage.innerHTML = spinnervalue + "%"

        // stop function when circle progess completed(reaches 100%git)
        if (spinnervalue == 100) {
            clearInterval(end)

        }

    }, 100);



    // Plane progress bar
    var text = document.querySelector("#text")
    var elem = document.getElementById("bar")
    var width = 0;
    var id = setInterval(frame, 100)

    // function for plane progress bar
    function frame() {
        if (width >= 100) {
            clearInterval(id) //stop function when width reaches 100%
            text.style.display = "block"
        } else {
            width++;
            elem.style.width = width + "%"
            elem.innerHTML = width + "%"
        }
    }
}
