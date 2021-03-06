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
}
module.exports = AppCard;