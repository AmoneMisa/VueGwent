if (process.client) {
    let jQuery = require('jquery');
    window.$ = window.jQuery  = jQuery;
    require('jcarousel');

    module.exports = jQuery;
}
