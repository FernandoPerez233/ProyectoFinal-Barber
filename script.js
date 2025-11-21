
//Script investigado para abrir ventana popup centrada//
(function(){
    function openPopup(url, name, w, h){
        var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
        var dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;
        var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
        var left = ((width / 2) - (w / 2)) + dualScreenLeft;
        var top = ((height / 2) - (h / 2)) + dualScreenTop;
        var features = 'scrollbars=yes,resizable=yes,width=' + w + ',height=' + h + ',top=' + top + ',left=' + left;
        var newWindow = window.open(url, name, features);
        if (newWindow && newWindow.focus) newWindow.focus();
        return newWindow;
    }

    var btn = document.getElementById('openContactBtn');
    if (!btn) return;
    btn.addEventListener('click', function(e){
        e.preventDefault();
       
        //abre ventana popup pequeña: 480x650
        openPopup('formulario.html', 'contactForm', 480, 650);
    });
})();

/* Auto-carousel for any .carousel on the page */
(function(){
    // run after a minimal timeout to ensure DOM is ready (script is at end of body but extra safe)
    setTimeout(function(){
        var carousels = document.querySelectorAll('.carousel');
        carousels.forEach(function(carousel){
            var track = carousel.querySelector('ul');
            if (!track) return;
            var slides = Array.from(track.children).filter(function(n){ return n.nodeType === 1; });
            if (slides.length <= 1) return;

            // ensure styles expected by the logic
            track.style.display = 'flex';
            track.style.transition = 'transform 0.6s ease-in-out';
            slides.forEach(function(slide){
                slide.style.minWidth = '100%';
                slide.style.boxSizing = 'border-box';
            });

            var index = 0;
            var interval = null;
            var delay = 3500;

            function goTo(i){
                index = ((i % slides.length) + slides.length) % slides.length;
                track.style.transform = 'translateX(' + (-index * 100) + '%)';
            }
            function next(){ goTo(index + 1); }
            function start(){ stop(); interval = setInterval(next, delay); }
            function stop(){ if (interval) { clearInterval(interval); interval = null; } }

            // pause when pointer is over the carousel (mouse or touch)
            carousel.addEventListener('mouseenter', stop);
            carousel.addEventListener('mouseleave', start);
            carousel.addEventListener('touchstart', stop, {passive: true});
            carousel.addEventListener('touchend', start, {passive: true});

            // initialize
            goTo(0);
            start();
        });
    }, 50);
})();
