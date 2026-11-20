const magma = require("./chloeLing_magma");

console.log("Create layer:", magma.createLayer("canvas1", "Sketch", "leo"));

console.log("Toggle layer lock:", magma.toggleLayerLock("layer1"));

console.log("Add collaborator:", magma.addCollaborator("canvas1", "moyamoya"));

console.log("Add collaborator (max limit):", magma.addCollaborator("canvas2", "wintermelon"));

console.log("Set opacity: ", magma.setLayerOpacity("layer1", -1));

console.log("Remove layer:", magma.removeLayer("layer2"));