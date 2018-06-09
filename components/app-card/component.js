class AppCard {
    onCreate(input) {
        let self = this;
        if (input == null || !input || input == undefined) {
            throw new Error('Component cannot be initialized without an input');
        }
        self.state = {
            liked: false,
            imageData: input
        };
    }
    onMount() {}
    like() {
        let self = this;
        alert('liked');
        self.state.liked = true;
        self.forceUpdate();
        self.update();
    }
    unlike(){
        let self = this;
        alert('unliked');
        self.state.liked = false;
        self.forceUpdate();
        self.update();
    }
}
module.exports = AppCard;