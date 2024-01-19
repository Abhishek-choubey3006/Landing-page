Shery.imageEffect("#back", { style: 5, config: { "a": { "value": 0.92, "range": [0, 30] }, "b": { "value": -0.98, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 1.9838362074281033 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 1.64, "range": [1, 15] }, "durationOut": { "value": 0.36, "range": [0.1, 5] }, "durationIn": { "value": 0.44, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.31, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2], "_gsap": { "id": 3 } }, "discard_threshold": { "value": 0.85, "range": [0, 1] }, "antialias_threshold": { "value": 0.01, "range": [0, 0.1] }, "noise_height": { "value": 0.37, "range": [0, 2] }, "noise_scale": { "value": 7.63, "range": [0, 100] } }, debug: false, gooey: true })


var elems = document.querySelectorAll(".elem");
elems.forEach(function (elem) {
    var h1s = elem.querySelectorAll("h1")
    var index = 0;
    var animating = false;
    document.querySelector("#main").addEventListener("click", function () {
        if (!animating) {
            animating = true;
            gsap.to(h1s[index],{
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1,
                onComplete: function () {
                    gsap.set(h1s[index], { top: "100%" }); // Use 'elem' instead of 'this'
                   
                    animating = false; // Reset animating flag
                    // index == h1s.length - 1 ? index = 0 : index++;
                },
                
            });
            index == h1s.length - 1 ? index = 0 : index++;
            gsap.to(h1s[index], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1,
            });
        }
    });
});
// var elems = document.querySelectorAll(".elem");
// elems.forEach(function (elem) {
//     var h1s = elem.querySelectorAll("h1")
//     var index = 0;
//     var animating = false;
//     document.querySelector("#main").addEventListener("click", function () {

//         if (!animating) {
//             animating = true;
            
//             gsap.to(h1s[index], {
//                 top: "-=100%",
//                 ease: Expo.easeInOut,
//                 duration: 1,
//                 onComplete: function () {
//                     gsap.set(h1s[index], { top: "100%" }); // Use 'h1s' instead of 'elem_target'
//                     animating = false; // Reset animating flag
//                 },
//             });

//             index == h1s.length - 1 ? index = 0 : index++;
            
//             gsap.to(h1s[index], {
//                 top: "-=100%",
//                 ease: Expo.easeInOut,
//                 duration: 1,
//             });
//         }
//     });
// });
