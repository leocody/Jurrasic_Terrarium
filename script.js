// creating max_Z_index variable, and initialize by 1
let max_Z_Index = 1

/* 
 * creating function makeBigger
 *  blah
 */
function makeBigger() {
    // creating variable plant 1, and assign plant 1's element
    let plant = document.getElementByClass('plant')
    // looping the plant length
    for (let i = 0; i < plant.length; i++) {
        // make n th plant list bigger scale by 1.5
        plant[i].style.transform = "scale(1.5)";
    } // ending the loop with }
} //ending the function with }


// adding event-listner "doubleclick"
// // INVESTGATE: what is event listner
// document.addEventListener("dblclick", function (event) {
//     //looking if the event's code is "Space"
//     if (event.code == "Space") {
// //         // Calling the function "makebigger"
// //         makeBigger()
//     } //ending the if with }

// }) // ending the function with }



/*
 * making the function "drag Element"
 *
 *   explain what function do
 */
function dragElement(terrariumElement) {
    // creating the variables "pos1", "pos2", "pos3" and "pos4", initialize by 0
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;

    /*
     * creating a function called "pointerDrag" inside of the function "DragElement"
     *
     */
    function pointerDrag(e) {
        // plusing the variable's value by 1
        max_Z_Index += 1;
        // making the terrariumElement.style.zIndex to the variable "max_Z_Index"
        terrariumElement.style.zIndex = max_Z_Index;
        e.preventDefault();
        // INVESTIGATE: clientX, Y
        pos3 = e.clientX;
        pos4 = e.clientY;
        // register elementDrag / stopElementDrag with pointermove and pointerup
        // register elementDrag as EeventListener for pontermove event on document(whole page)
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    } // finishing the function by }

    // creating the function elementDrag
    function elementDrag(e) {
        // changing the pos1 and pos2's place
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // chnaging the position of the current dragging element
        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';

    } // finishing the function by }

    // creating a function called stopElementDrag
    function stopElementDrag() {
        // making the onpointerup and onpointermove to "None"
        document.onpointerup = null;
        document.onpointermove = null;
    } //finishing the function with }



    // calling pointerDrag
    terrariumElement.onpointerdown = pointerDrag;
}



function makeScallableElement(plant_element) {
    let is_big = false

    function toggleScale(event) {
        if (is_big == true) {
            is_big = false
            plant_element.style.transform = "scale(1.5)";
        } else {
            is_big = true
            plant_element.style.transform = "scale(1.0)"
        }


    }
    plant_element.addEventListener("dblclick", toggleScale);
}

// Calling the function dragElement 14 times with different plants
// making the element(plant n) draggable
makeScallableElement(document.getElementById('plant1'));
makeScallableElement(document.getElementById('plant2'));
makeScallableElement(document.getElementById('plant3'));
makeScallableElement(document.getElementById('plant4'));
makeScallableElement(document.getElementById('plant5'));
makeScallableElement(document.getElementById('plant6'));
makeScallableElement(document.getElementById('plant7'));
makeScallableElement(document.getElementById('plant8'));
makeScallableElement(document.getElementById('plant9'));
makeScallableElement(document.getElementById('plant10'));
makeScallableElement(document.getElementById('plant11'));
makeScallableElement(document.getElementById('plant12'));
makeScallableElement(document.getElementById('plant13'));
makeScallableElement(document.getElementById('plant14'));
dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));