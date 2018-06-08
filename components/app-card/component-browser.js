/**
 * Split component class for browser
 */
class AppCardClient {
    onMount(){
        let self = this;
        self.state = {
            liked : false
        }
    }
    like(){
        let self = this;
        self.state.liked = true;
        alert('liked');
    }
    unlike(){
        let self = this;
        self.state.liked = false;
        alert('unliked');
    }
}
module.exports = AppCardClient;