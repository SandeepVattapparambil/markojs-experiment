class AppMain {
    onCreate() {
        let self = this;
    }
    onMount() {
        window.addEventListener('scroll', function (ev) {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                alert('hit');
            }
        });
    }
}
module.exports = AppMain;