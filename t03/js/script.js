let item = document.getElementsByClassName("item");

for (let i = 0; i < item.length; i++) {
    item[i].addEventListener('mousedown', click);

}

function click(event) {
    let shiftX = event.clientX - this.getBoundingClientRect().left;
    let shiftY = event.clientY - this.getBoundingClientRect().top;
    let n = this.dataset.num;
    if (this.click == true) {
        this.style.border = '4px dashed #494544';
        this.click = false;
    } else {
        this.click = true;
        this.style.border = 'none';
        this.style.zindex += 1;

        moveAt(event.pageX, event.pageY);

        function moveAt(pageX, pageY) {
            item[n].style.left = pageX - shiftX + 'px';
            item[n].style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }
        document.addEventListener('mousemove', onMouseMove);

        item[n].addEventListener('mouseup', remove);

        function remove() {
            document.removeEventListener('mousemove', onMouseMove);
        }
    }

}