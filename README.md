# HIIT it hard timer

## Architecture and Technologies
This application was built with pure Javascript.

## Background
HIIT it hard timer is a customizable HIIT workout timer where users can pick:
* the length work interval
* the length of rest interval
* number of rounds
* type of exercises
* total number sets 
* A good example is the classic HIIT 50 seconds of work and 10 seconds of rest or
a TABATA session of 20 seconds work and 10 seconds rest.
* During the 50 seconds of work, a giphy will be displayed to show users what 
exercise they need to do for that interval.
#Train Like a Beast, Look Like a Beauty

[HIIT-it-hard timer](https://chinweenie.github.io/HIIT-it-hard-timer/)
<img src="dist/timer.png" alt="first page">

## Technical details
`
addDnDHandlers(elem) {
        elem.addEventListener('dragstart', (e) => this.handleDragStart(e), false);
        elem.addEventListener('dragenter', (e) => this.handleDragEnter(e), false)
        elem.addEventListener('dragover', (e) => this.handleDragOver(e), false);
        elem.addEventListener('dragleave', (e) => this.handleDragLeave(e), false);
        elem.addEventListener('drop', (e) => this.handleDrop(e), false);
        elem.addEventListener('dragend', (e) => this.handleDragEnd(e), false);
    }
`




