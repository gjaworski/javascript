'use strict';
function showDescription(contentFunction, preId) {
    document.getElementById(preId).innerHTML = contentFunction();
}

function addLine(input, line, tabs, bold) {
    console.log(tab(tabs) + line);
    return input + tab(tabs) + (bold ? '<b>' + line + '</b>' : line) + '\r\n';
}

function tab(numb) {
    var tabs = '';
    for(var i = 1; i <= numb; i++) {
        tabs += '\t';
    }
    return tabs;
}

function addHyperlink(input, action, tabs) {
    console.log(tab(tabs) + action);
    return input + tab(tabs) + '<a href="#" onclick="' + action + '">' + action + '</a>\r\n';
}