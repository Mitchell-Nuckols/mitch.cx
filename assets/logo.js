function loadComplete() {
    if(!document.referrer.includes(location.origin)) {
        var paths = document.querySelectorAll('#logo svg path');

        anime({
            targets: paths,
            loop: false,
            direction: 'normal',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'linear',
            duration: 250,
            delay: (el, i) => { return i * 250 }
        });
    }
}
