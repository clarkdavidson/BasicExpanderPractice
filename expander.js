var Expander = {};

Expander.makeDiv = function (classAttr) {
    var div = document.makeDiv('div');

    div.setAttribute('class', classAttr);
    return div;
}


Expander.makeExpander = function (root) {
    root.setAttribute("class", "border");
    var element = document.createElement("h3");
    element.innerHTML = root.children[0].title;
    console.log(root.children[0]);
    root.children[0].appendChild(element);
}