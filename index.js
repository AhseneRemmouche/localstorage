const output = document.querySelector('.output');

output.textContent = 'Salam Alikoum';
const myP = createMyElement(output, 'p', 'myP');
myP.textContent = 'lorem ipsum';
console.dir(output);

function createMyElement(parentEle, eleType, classEle) {
    const ele = document.createElement(eleType);
    parentEle.append(ele);
    ele.classList.add(classEle);
    return ele;
}
