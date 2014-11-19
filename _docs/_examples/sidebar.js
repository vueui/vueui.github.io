
var usage = new Vue({
    el: '#usage'
});

var sidebar = usage.$.sidebar;

var behavior = new Vue({
   el: '#behavior',
    methods: {
        toggle: sidebar.$toggle.bind(sidebar),
        hide: sidebar.$hide.bind(sidebar),
        show: sidebar.$show.bind(sidebar)
    }
});