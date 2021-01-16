let img = document.getElementsByTagName('img');
let numberOf = document.getElementById('numberOf');
let infoDiv = document.getElementById('info');
let counter = 0;

class LazyLoad {

    visible(target) {

        let targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            left: window.pageXOffset + target.getBoundingClientRect().left,
            right: window.pageXOffset + target.getBoundingClientRect().right,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom
        };

        let windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight - 300
        };

        if (targetPosition.bottom > windowPosition.top && targetPosition.top < windowPosition.bottom &&
            targetPosition.right > windowPosition.left && targetPosition.left < windowPosition.right) {
            if (target.hasAttribute('data-src')) {
                target.src = target.dataset.src;
                target.removeAttribute('data-src');
                counter += 1;
                numberOf.innerHTML = `${counter}`;
            }
            if (counter == img.length) {
                window.removeEventListener('scroll', lazy.load);
                infoDiv.style.background = '#33C35A ';
                setTimeout(() => infoDiv.remove(), 3000);
            }
        } else {
            return;
        }
    }
    load() {
        for (let i = 0; i < img.length; i++) {
            lazy.visible(img[i]);
        }
    }
}

let lazy = new LazyLoad();

lazy.load();
window.addEventListener('scroll', lazy.load);