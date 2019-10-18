export default class Draggable {
    constructor(){
        this.dragSrcEl = null;
        this.checkTarget = this.checkTarget.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);
        this.handleDragEnter = this.handleDragEnter.bind(this);
        this.handleDragLeave = this.handleDragLeave.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
        this.handleDragEnd = this.handleDragEnd.bind(this);
        this.addDnDHandlers = this.addDnDHandlers.bind(this);
    }

    checkTarget(input){
        let target;
        if (input.tagName !== "LI"){
            target = input.parentNode;
        } else {
            target = input;
        }
        return target
    }
    
    handleDragStart(e){
        const target = this.checkTarget(e.target);
        this.dragSrcEl = target;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', target.outerHTML);

        target.classList.add('dragElem');
    }

    handleDragOver(e){
        if(e.preventDefault) {
            e.preventDefault(); // Necessary. Allows us to drop.
        }
        const target = this.checkTarget(e.target);
        target.classList.add("over");
        e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

        return false;
    }

    handleDragEnter(e) {
    // this / e.target is the current hover target.
    }

    handleDragLeave(e){
        const target = this.checkTarget(e.target);
        target.classList.remove("over");
    }

    handleDrop(e){
        if (e.stopPropagation) {
            e.stopPropagation(); // Stops some browsers from redirecting.
        }
        const target = this.checkTarget(e.target);
        // Don't do anything if dropping the same column we're dragging.
        if (this.dragSrcEl != target) {
            // Set the source column's HTML to the HTML of the column we dropped on.
            //alert(this.outerHTML);
            //dragSrcEl.innerHTML = this.innerHTML;
            //this.innerHTML = e.dataTransfer.getData('text/html');
            target.parentNode.removeChild(this.dragSrcEl);
            const dropHTML = e.dataTransfer.getData('text/html');
            target.insertAdjacentHTML('beforebegin', dropHTML);
            const dropElem = target.previousSibling;
            this.addDnDHandlers(dropElem);
        }
        target.classList.remove('over');
        return false;
    }

    handleDragEnd(e){
        const target = this.checkTarget(e.target);
        target.classList.remove('over');
        target.classList.remove('dragElem');
    }

    addDnDHandlers(elem) {
        elem.addEventListener('dragstart', (e) => this.handleDragStart(e), false);
        elem.addEventListener('dragenter', (e) => this.handleDragEnter(e), false)
        elem.addEventListener('dragover', (e) => this.handleDragOver(e), false);
        elem.addEventListener('dragleave', (e) => this.handleDragLeave(e), false);
        elem.addEventListener('drop', (e) => this.handleDrop(e), false);
        elem.addEventListener('dragend', (e) => this.handleDragEnd(e), false);
    }
}

// var dragSrcEl = null;

// function handleDragStart(e) {
//     // Target (this) element is the source node.
//     dragSrcEl = this;

//     e.dataTransfer.effectAllowed = 'move';
//     e.dataTransfer.setData('text/html', this.outerHTML);

//     this.classList.add('dragElem');
// }

// function handleDragOver(e) {
//     if (e.preventDefault) {
//         e.preventDefault(); // Necessary. Allows us to drop.
//     }
//     this.classList.add('over');

//     e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

//     return false;
// }

// function handleDragEnter(e) {
//     // this / e.target is the current hover target.
// }

// function handleDragLeave(e) {
//     this.classList.remove('over');  // this / e.target is previous target element.
// }

// function handleDrop(e) {
//     // this/e.target is current target element.

//     if (e.stopPropagation) {
//         e.stopPropagation(); // Stops some browsers from redirecting.
//     }

//     // Don't do anything if dropping the same column we're dragging.
//     if (dragSrcEl != this) {
//         // Set the source column's HTML to the HTML of the column we dropped on.
//         //alert(this.outerHTML);
//         //dragSrcEl.innerHTML = this.innerHTML;
//         //this.innerHTML = e.dataTransfer.getData('text/html');
//         this.parentNode.removeChild(dragSrcEl);
//         var dropHTML = e.dataTransfer.getData('text/html');
//         this.insertAdjacentHTML('beforebegin', dropHTML);
//         var dropElem = this.previousSibling;
//         addDnDHandlers(dropElem);

//     }
//     this.classList.remove('over');
//     return false;
// }

// function handleDragEnd(e) {
//     // this/e.target is the source node.
//     this.classList.remove('over');

//     /*[].forEach.call(cols, function (col) {
//       col.classList.remove('over');
//     });*/
// }

// function addDnDHandlers(elem) {
//     elem.addEventListener('dragstart', handleDragStart, false);
//     elem.addEventListener('dragenter', handleDragEnter, false)
//     elem.addEventListener('dragover', handleDragOver, false);
//     elem.addEventListener('dragleave', handleDragLeave, false);
//     elem.addEventListener('drop', handleDrop, false);
//     elem.addEventListener('dragend', handleDragEnd, false);

// }

// var cols = document.querySelectorAll('#columns .column');
// [].forEach.call(cols, addDnDHandlers);

