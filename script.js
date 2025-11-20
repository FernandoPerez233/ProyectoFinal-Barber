
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
        // open a small popup: 480x650
        openPopup('formulario.html', 'contactForm', 480, 650);
    });
})();
