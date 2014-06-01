define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var StateModifier = require('famous/modifiers/StateModifier');

    // create the main context
    var mainContext = Engine.createContext(document.getElementById("logo"));

    // your app here
    var logo = new ImageSurface({
        size: [460, 116],
        content: 'logo.png',
        classes: ['double-sided']
    });

    var initialTime = Date.now();
    var centerSpinModifier = new Modifier({
        origin: [0.5, 0.5],
        transform : function(){
            return Transform.rotateY(.0005 * (Date.now() - initialTime));
        }
    });
    var stateModifier = new StateModifier();
    stateModifier.setTransform(
      Transform.translate(0, 0, 0),
      { duration : 2000, curve: 'easeInOut' }
    );
    stateModifier.setOpacity(0);
    stateModifier.setOpacity(
        1,
        { duration: 2000, curve: 'easeInOut' }
    );

    mainContext.add(centerSpinModifier).add(stateModifier).add(logo);
});

