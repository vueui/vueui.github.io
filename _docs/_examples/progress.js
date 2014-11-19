

var examples = new Vue({
    el: '#progress'
});

window.app = new Vue({
    el: '#example-behavior',
    data: {
        value: 1
    },

    methods: {
        increment: function () {
            examples.$.progress.$increment(this.value);
        },
        decrement: function () {
            examples.$.progress.$decrement(this.value);
        }
    }
});


// Activate Vue-ui on class-examples
new Vue({
    el: '#class-examples'
});