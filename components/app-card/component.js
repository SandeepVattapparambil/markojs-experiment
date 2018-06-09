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
        self.state.liked = true;
    }
    unlike(){
        let self = this;
        self.state.liked = false;
    }
}
module.exports = AppCard;