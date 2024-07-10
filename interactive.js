document.addEventListener('mousemove', function(e) {
    var dot = document.createElement('div');
    dot.className = 'dot';
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    document.body.appendChild(dot);
    setTimeout(function() {
        document.body.removeChild(dot);
    }, 1000);
});