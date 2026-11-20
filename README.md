# Assignment 1

You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

# How to Use & Functions
This is a node module based on Magma, a collaborative art platform.\
Prepare an additional file `app.js` and include `const magma = require("./chloeLing_magma");`. Then, call the functions below:

### Create a layer

`createLayer(canvasId, layerName, owner)` to add a new layer and return it.

Call: `console.log(magma.createLayer("canvasId", "layerName", "ownerId"));`

### Toggle layer lock

`toggleLayerLock(layerId)` to toggle lock on layer (true/false) and return updated layer.

Call: `console.log(magma.toggleLayerLock("layerId"));`

### Add collaborator

`addCollaborator(canvasId, user)` to add another user to the canvas. Will not add if the canvas is full.

Call: `console.log(magma.addCollaborator("canvasId", "user"));`


### Set layer opacity
`setLayerOpacity(layerId, opacity)` to change opacity of layer, limits opacity by reverting values <0 to 0 and >100 to 100.

Call: `console.log(magma.setLayerOpacity("layerId","opacity"));`

### Delete layer

`removeLayer(layerId)` to remove a layer based on the layerId.

Call: `console.log(magma.removeLayer("layerId"));`

# AI Declaration
Google Gemini was used to brainstorm ideas, sources I can use for help on functions and mock data.

# References
Provide the references that you have used to support your assignment.\
[Web Application - Magma](https://magma.com/)\
[Array .find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)\
[A video on .filter()](https://www.youtube.com/watch?v=CA0jgk5_Yh4&t=200s)
