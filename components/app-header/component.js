module.exports = class {
    onCreate() {
        let self = this;
        this.state = {
            brand: null
        };
    }
    onInput(input) {
        let self = this;
        if (input == null || input.brand == undefined || input.brand == '') {
            throw new Error('Component cannot be initialized without an input');
        }
        self.state.brand = input.brand;
    }
}