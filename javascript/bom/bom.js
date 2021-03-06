'use strict';
function bom() {
    var content = '';
    content = addLine(content, '1. BOM (Browser Object Model) allows JS to communicate with browser.', 0, true);
    content = addLine(content, '2. Object window represents browser\'s window.', 0, true);
    content = addLine(content, '3. Global variables and functions are window properties and methods.', 0, true);
    content = addLine(content, '4. Window size:', 0, true);
    content = addLine(content, 'window.innerHeight is ' + window.innerHeight + ' px', 1);
    content = addLine(content, 'window.innerWidth is ' + window.innerWidth + ' px', 1);
    content = addLine(content, '5. Screen object:', 0, true);
    content = addLine(content, 'screen.height is ' + screen.height + ' px', 1);
    content = addLine(content, 'screen.width is ' + screen.width + ' px', 1);
    content = addLine(content, 'screen.availHeight is ' + screen.availHeight + ' px', 1);
    content = addLine(content, 'screen.availWidth is ' + screen.availWidth + ' px', 1);
    content = addLine(content, 'screen.colorDepth is ' + screen.colorDepth, 1);
    content = addLine(content, 'screen.pixelDepth is ' + screen.pixelDepth, 1);
    content = addLine(content, '6. Location object:', 0, true);
    content = addLine(content, 'location.href is ' + location.href, 1);
    content = addLine(content, 'location.hostname is ' + location.hostname, 1);
    content = addLine(content, 'location.pathname is ' + location.pathname, 1);
    content = addLine(content, 'location.protocol is ' + location.protocol, 1);
    content = addHyperlink(content, 'location.assign(\'http://wp.pl\')', 1);
    content = addLine(content, '7. History object:', 0, true);
    content = addHyperlink(content, 'history.back()', 1);
    content = addHyperlink(content, 'history.forward()', 1);
    content = addLine(content, '8. Navigator object:', 0, true);
    content = addLine(content, 'navigator.appName is ' + navigator.appName, 1);
    content = addLine(content, 'navigator.appCodeName is ' + navigator.appCodeName, 1);
    content = addLine(content, 'navigator.appVersion is ' + navigator.appVersion, 1);
    content = addLine(content, 'navigator.platform is ' + navigator.platform, 1);
    content = addLine(content, 'navigator.cookiesEnabled is ' + navigator.cookiesEnabled, 1);
    content = addLine(content, 'navigator.product is ' + navigator.product, 1);
    content = addLine(content, 'navigator.userAgent is ' + navigator.userAgent, 1);
    content = addLine(content, 'navigator.language is ' + navigator.language, 1);
    content = addLine(content, 'navigator.javaEnabled() is ' + navigator.javaEnabled(), 1);
    content = addLine(content, '9. Popups:', 0, true);
    content = addHyperlink(content, 'alert(\'Alert Text\')', 1);
    content = addHyperlink(content, 'confirm(\'True or false\')', 1);
    content = addHyperlink(content, 'prompt(\'Enter your name\', \'default\')', 1);
    content = addLine(content, '10. Timing:', 0, true);
    content = addHyperlink(content, 'setTimeout(alert(\'timeout message\'), 4000)', 1);
    content = addHyperlink(content, 'setInterval(alert(\'interval message\'), 4000)', 1);
    content = addLine(content, '11. Cookies:', 0, true);
    document.cookie = 'username=jaworskg';
    content = addLine(content, 'document.cookie = "username=jaworskg";', 1);
    content = addLine(content, 'document.cookie = "username=jaworskg; expires=Thu, 18 Dec 2013 12:00:00 UTC";', 1);
    content = addLine(content, 'document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;" - deletes cookie', 1);
    return content;
}
