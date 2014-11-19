var usage = new Vue({
    el: '#usage'
});

var behavior = new Vue({
    el: '#behavior',
    data: {
        rating: 5
    },
    methods: {
        setRating: function () {
            usage.$.rating.$setRating(this.rating);
        }
    }
});

var attributes = new Vue({
    el: '#attributes'
});