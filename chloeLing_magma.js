//dummy data
let canvases = [
    {
        id: "canvas1",
        title: "Autumn Art Jam Board",
        hostId: "adminBam",
        maxArtists: 5,
        artists: ["bananaMan", "seaweedCracker", "adminBam"]
    },
    {
        id: "canvas2",
        title: "Character Concept Collab",
        hostId: "leo",
        maxArtists: 2,
        artists: ["leo", "lazyBee"]
    }
];

let layers = [
    {
        id: "layer1",
        canvasId: "canvas2",
        name: "Rough Sketch",
        ownerId: "bananaMan",
        isLocked: false,
        opacity: 60
    },
    {
        id: "layer2",
        canvasId: "canvas1",
        name: "Final Lineart",
        ownerId: "lazyBee",
        isLocked: true,
        opacity: 100
    },
    {
        id: "layer3",
        canvasId: "canvas2",
        name: "Base Colors",
        ownerId: "leo",
        isLocked: false,
        opacity: 100
    }
];


module.exports = {
    description: "This is Magma!",

    //Creates a layer object and pushes it into layers array.
    createLayer(canvasId, layerName, owner) {
        const newLayer = {
            id: "layer" + (layers.length + 1),
            canvasId: canvasId,
            name: layerName,
            ownerId: owner,
            isLocked: false,
            opacity: 100,
        };
        layers.push(newLayer);

        return newLayer;
    },

    //Toggles a layer's lock state between true and false
    toggleLayerLock(layerId) {
        const found = layers.find((l) => l.id === layerId);

        //flips state
        found.isLocked = !found.isLocked;

        return found;
    },

    // If length of artists array < max artists for the canvas then add user
    addCollaborator(canvasId, user) {
        const found = canvases.find((c) => c.id === canvasId);

        if (found.artists.length >= found.maxArtists) {
            return "Maximum collaborators reached.";
        }

        found.artists.push(user);

        return found;
    },

    //Changes opacity and limits opacity to between 0-100
    setLayerOpacity(layerId, opacity) {
        const found = layers.find((l) => l.id === layerId);

        if (opacity < 0) {
            opacity = 0;
        }
        if (opacity > 100) {
            opacity = 100;
        }
        found.opacity = opacity;

        return found;
    },

    //Filters out layerId and create a new copy without it
    removeLayer(layerId) {
        const updatedLayers = layers.filter((l) => l.id !== layerId);
        layers = updatedLayers;

        return layers;
    }
}
