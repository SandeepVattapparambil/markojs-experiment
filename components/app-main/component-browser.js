const axios = require('axios');
const URLS = require('../../config/api');
class AppMain {
    onMount() {
        let start = 1;
        let end = 9;
        axios.get(URLS.BASE_API_URL + '/list/' + start + '/' + end)
            .then(function (response) {
                let data = response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
module.exports = AppMain;