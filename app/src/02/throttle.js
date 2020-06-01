function throttle(fuc, delay) {
    let lastFunc;
    let lastRan;
    return function(...args) {
        const context = this;
        if (!lastRan) {
            func.call(context, ...args);
            lastRan = Date.now();
        } else {
            if (lastFunc) clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now()-lastRan) >= delay) {
                    func.call((context, ...args);
                    lastRan = Date.now();
                }
            }, dalay - (Date.now() - lastRan));
        }
    }
}
var checkPostition = () => {
    const offset = 500;
    const currentScrollPostion = window.pageYOffset;
    if (currentScrollPostion >= pageBottomPosition) {
        //fetch('/page/next');
        console.log('다음페이지로딩');
    }
};
var infiniteScroll = throttle(checkPostition, 300);
window.addEventListener('scroll', infiniteScroll);