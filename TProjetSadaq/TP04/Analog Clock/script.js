var sec = document.getElementById('sec');
var min = document.getElementById('min');
var hour = document.getElementById('hour');

setInterval(function() {
    function rot(el, deg) {
        el.setAttribute('transform', 'rotate(' + deg + ' 50 50)')
    }
    var d = new Date()
    rot(sec, 6 * d.getSeconds())
    rot(min, 6 * d.getMinutes())
    rot(hour, 30 * (d.getHours() % 12) + d.getMinutes() / 2)
}, 1000)