/*! AdminLTE userfrosting.js
 * ================
 * Userfrosting JS file for AdminLTE v2. This file
 * should be included in all pages. It controls some layout
 * options and implements functions related to Userfrosting.
 *
 * @Author  Louis Charette
 * @Support <https://github.com/lcharette/UF_AdminLTE>
 * @license MIT <http://opensource.org/licenses/MIT>
 */

//Make sure jQuery has been loaded before app.js
if (typeof jQuery === "undefined") {
  throw new Error("AdminLTE requires jQuery");
}

function initMenu() {
    var element = $('ul.sidebar-menu a').filter(function() {
        // Strip out everything after the hash, if present
        var url_head = window.location.href.split('#', 1)[0];
        return this.href == url_head;  // || url.href.indexOf(this.href) == 0   // Include this if you want to color all parent URIs as well
    }).parent();
    $(element).addClass('active');
    $(element).parents('.treeview').addClass('active');
    $(element).parents('.treeview-menu').addClass('menu-open');
}

$(function() {
    initMenu();
});