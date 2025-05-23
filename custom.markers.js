/*

This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.

Steps:

    1. Edit this file using Notepad or a code editor (do not use document editors like Microsoft Word)
    2. Change the line "isEnabled: false," to "isEnabled: true," to display the markers
    3. Change or remove the example markers
    4. Add your own markers

Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        text: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },

Things to keep in mind:

* There are opening and closing brackets for each marker "{" and "}"
* Property names are case sensitive (i.e. "textColor" is okay, "TextColor" is not)
* There is a comma (",") at the end of each line except the opening brackets ("{")

You can use https://mapmarker.io/editor to generate custom pin images.
Use the imageScale property if the pin image is too large.

*/

UnminedCustomMarkers = {
   
    isEnabled: true,

    markers: [

        // Example 1: Simple marker
        {
            x: -182, z: -887,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.2,
            text: "Spawn",
            textColor: "#FFFFFF",
        },
        {
            x: -417.5, z: -1114.5,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.2,
            text: "Farm de ouro",
            textColor: "#FFFFFF",
            offsetX: 0,
            offsetY: 0,
        },
        {
            x: -133, z: -826,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.2,
            text: "Farm de Shulker",
            textColor: "#FFFFFF",
            offsetX: 0,
            offsetY: 0,
        }, {
            x: 1304, z: -472,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.2,
            text: "Farm Raid",
            textColor: "#FFFFFF",
            offsetX: 0,
            offsetY: 0,
        }, {
            x: -423, z: -942,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.2,
            text: "Lojinha",
            textColor: "#FFFFFF",
            offsetX: 0,
            offsetY: 0,
        },
        {
            x: -164, z: -2387,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.2,
            text: "Farm Afogado",
            textColor: "#FFFFFF",
            offsetX: 0,
            offsetY: 0,
        },
        {
            x: 1112, z: -3864,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.2,
            text: "Farm de bruxa",
            textColor: "#FFFFFF",
            offsetX: 0,
            offsetY: 0,
        },{
            x: 232, y: -2408,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.2,
            text: "Farm de Guardian",
            textColor: "#FFFFFF",
            offsetX: 0,
            offsetY: 0,
        }


    ]
}
