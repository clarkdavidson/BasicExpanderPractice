var Expander = {};
Expander.makeDiv = function (classAttr) {
    var div = document.createElement('div');
    div.setAttribute('class', classAttr);
    return div;
}
Expander.makeExpander = function (root) {
    var children = root.children;
    if (children.length) {
        root.setAttribute("class", "border");
    }
    var copyArr = [];
    for (var i = 0; i < children.length; i++) {
        copyArr.push(children[i]);
    };
    while (children.length) {
        root.removeChild(children[0]);
    };
    for (var a = 0; a < copyArr.length; a++) {
        var arrows = Expander.makeDiv('row' + a)
        var title = document.createElement("h5");
        title.setAttribute('class', 'open');
        title.offsetLeft;
        var chunk = document.createElement("div");
        title.innerHTML = copyArr[a].title;
        copyArr[a].classList.add('show-body');
        upArrow = document.createElement('img');
        upArrow.src = 'http://ec2-34-221-236-150.us-west-2.compute.amazonaws.com/WebDev/Modules/04JSWebUI/2ExpanderLab/up.png';
        upArrow.setAttribute('class', 'upArrow');
        dwnArrow = document.createElement('img');
        dwnArrow.src = 'http://ec2-34-221-236-150.us-west-2.compute.amazonaws.com/WebDev/Modules/04JSWebUI/2ExpanderLab/down.png';
        dwnArrow.setAttribute('class', 'upArrow');
        arrows.append(upArrow, dwnArrow);
        // Set up click Abilities
        title.addEventListener('click', function () {
            console.log(this.parentElement.lastElementChild);
            console.log(this.parentElement.lastElementChild.className === "open");
            if (this.parentElement.lastElementChild.className === 'open') {
                this.parentElement.lastElementChild.setAttribute('class', 'closed');
                this.parentElement.parentElement.lastElementChild.classList.replace('show-body', 'hide-body')
            }
            else {
                this.parentElement.parentElement.lastElementChild.classList.replace('hide-body', 'show-body');
                this.parentElement.lastElementChild.setAttribute('class', 'open');
            }
        });
        upArrow.addEventListener('click', function () {
            var isTop = this.parentElement.parentElement.parentElement.firstElementChild === this.parentElement.parentElement
            if (isTop) { }
            else {
                root.insertBefore(this.parentElement.parentElement, this.parentElement.parentElement.previousElementSibling);
            }
        });
        dwnArrow.addEventListener('click', function () {
            if (this.parentElement.parentElement.parentElement.lastElementChild ===
                this.parentElement.parentElement) { }
            else {
                if (this.parentElement.parentElement.nextSibling.nextSibling) {
                    root.insertBefore(this.parentElement.parentElement, this.parentElement.parentElement.nextSibling.nextSibling);
                } else {
                    root.appendChild(this.parentElement.parentElement);
                }
            }
        })
        arrows.appendChild(title);
        chunk.appendChild(arrows);
        chunk.appendChild(copyArr[a]);
        root.appendChild(chunk);
    }

}