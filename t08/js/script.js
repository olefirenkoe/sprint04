// [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
//     img.setAttribute('src', img.getAttribute('data-src'));
//     img.onload = function() {
//         img.removeAttribute('data-src');
//     };
// });

class APLazy {
    constructor(lazyClass) {
        if (typeof lazyClass === 'undefined') {
            this.lazyClass = 'APLazy';
        } else {
            this.lazyClass = lazyClass;
        }

        this.lazyArray = [];
    }

    setLazy() {
        this.lazyArray = document.getElementsByClassName(this.lazyClass);
    }

    cleanLazy() {
        this.lazyArray = Array.prototype.filter.call(this.lazyArray, (l) => l.getAttribute('data-src'));
    }

    lazyLoad() {
        for (let element of this.lazyArray) {
            if (this.isInViewport(element)) {
                if (element.getAttribute('data-src')) {
                    element.src = element.getAttribute('data-src');
                    element.removeAttribute('data-src');
                }
            }
        }

        this.cleanLazy();
    }

    isInViewport(element) {
        var rect = element.getBoundingClientRect();

        return (
            rect.bottom >= 0 && rect.right >= 0 &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    registerListener(event, func) {
        if (window.addEventListener) {
            window.addEventListener(event, func);
        } else {
            window.attachEvent('on' + event, func);
        }
    }
}
console.log(window.APLazy)
if (typeof window.APLazy == 'undefined') {
    window.APLazy = new APLazy('my-lazy-class');

    window.APLazy.setLazy();
    console.log(2)
    window.APLazy.lazyLoad();

    window.APLazy.registerListener('scroll', function() { window.APLazy.lazyLoad(); });
    window.APLazy.registerListener('resize', function() { window.APLazy.lazyLoad(); });
} else if (typeof window.APLazy == 'object') {
    window.APLazy.setLazy();
    window.APLazy.lazyLoad();
}
console.log(window.APLazy)