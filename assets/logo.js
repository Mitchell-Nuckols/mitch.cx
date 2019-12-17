var paths = document.querySelectorAll('#logo svg path');

function loadComplete() {
    if(document.referrer.origin != 'https://mitch.cx') {
        anime({
            targets: paths,
            loop: false,
            direction: 'normal',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'linear',
            duration: 500,
            delay: (el, i) => { return i * 500 }
        });
    }
}