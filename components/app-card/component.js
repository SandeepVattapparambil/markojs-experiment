/**
 * Split component class for server
 */
class AppCardServer {
    onCreate(input) {
        let self = this;
        if (input == null || !input || input == undefined) {
            throw new Error('Component cannot be initialized without an input');
        }
        self.state = {
            imageData: input
        };
    }
    
}
module.exports = AppCardServer;