/**
 * Split component class for browser
 */
class AppCardClient {
    onMount(input){
        console.log('component mounted');
    }
    like(){
        alert('liked');
    }
}
module.exports = AppCardClient;