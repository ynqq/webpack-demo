(function () {
    function rem() {
        document.documentElement.style.fontSize = document.documentElement.offsetWidth / 750 * 100 + 'px'
    }
    rem()
    window.onresize = rem
})()
