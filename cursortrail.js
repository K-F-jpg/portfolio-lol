const displayDistance = 30 // distance in px to display another photo
const nDisplay = 1 // number of pictures to display at once

const images = document.getElementsByClassName("image")

let globalIndex = 0 // used to count up the images
let lastMousePosition = {x: 0, y: 0} // used to get the last mouse position

// function to activate photos
function activatePic(img, x, y){
    img.dataset.status = "active" 
    img.style.left = `${x}px`
    img.style.top = `${y}px`
    img.style.zIndex = globalIndex // otherwise the last pic will always be at the top
    lastMousePosition = {x: x, y: y} // update the last mouse position
}

// compute mouse distance 
function mouseDistance(x, y){
    return Math.hypot(x - lastMousePosition.x, y - lastMousePosition.y)
}

// onmousemove 
window.onmousemove = e => {
    if (mouseDistance(e.clientX, e.clientY) > displayDistance){
        let activePic = images[globalIndex % images.length]
        let inactivePic = images[(globalIndex - nDisplay) % images.length]

        activatePic(activePic, e.clientX, e.clientY)
        if (inactivePic){inactivePic.dataset.status = "inactive"}

        globalIndex++
    }
}