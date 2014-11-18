
var path = require('path');

module.exports = {
    entry: {
        main: './main',
        accordion: './accordion',
        checkbox: './checkbox',
        dropdown: './dropdown',
        modal: './modal',
        popup: './popup',
        progress: './progress',
        rating: './rating',
        sidebar: './sidebar'
    },

    output: {
        path: path.join(__dirname, '../components/examples'),
        filename: "[name].js"
    },

    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.jade/, loader: 'html!jade-html' }
        ]
    }
};
