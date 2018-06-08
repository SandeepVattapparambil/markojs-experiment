module.exports = class {
    onCreate() {
        let self = this;
        this.state = {
            brand: null
        };
    }
    onInput(input) {
        let self = this;
        if (input == null || input == undefined || input == '') {
            throw new Error('Component cannot be initialized without an input');
        }
        let brand = input.input.input.name;
        self.state.brand = brand;
    }
}