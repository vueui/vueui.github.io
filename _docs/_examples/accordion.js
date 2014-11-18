
window.app = new Vue({
    el: '#app',
    data: {
        sections: [{
            title: 'Google',
            content: 'http://google.com'
        }, {
            title: 'Facebook',
            content: 'http://facebook.com'
        }],
        index: 0
    }
});