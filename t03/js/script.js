let item = document.getElementsByClassName("item");

// for (let i = 0; i < item.length; i++) {
//     item[i].onmousedown = function() {
//         console.log(1);
//     }
// }

// for (let i = 0; i < item.length; i++) {
//     item[i].addEventListener('mouseover', hover);
// }

for (let i = 0; i < item.length; i++) {
    item[i].addEventListener('mousedown', click);

}

// function hover() {
//     this.style.background = "black";
// }

function click() {
    if (this.click == true) {
        this.style.border = '4px dashed #494544';
        this.click = false;
    } else {
        this.click = true;
        this.style.border = 'none';
    }

}