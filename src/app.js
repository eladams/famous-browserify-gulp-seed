// load css
require('./styles');

// Load polyfills
require('famous-polyfills');

// import dependencies
var Engine = require('famous/core/Engine');
var Modifier = require('famous/core/Modifier');
var Transform = require('famous/core/Transform');
var ImageSurface = require('famous/surfaces/ImageSurface');

// create the main context
var mainContext = Engine.createContext();

// your app here
var logo = new ImageSurface({
  size: [100, 100],
  content: 'images/famous_logo.png',
  classes: ['backfaceVisibility']
});

var initialTime = Date.now();
setTimeout( () => console.log("babel"), 1000);

var centerSpinModifier = new Modifier({
  align: [0.5, 0.5],
  origin: [0.5, 0.5],
  transform: function() {

    return Transform.rotateY(0.005 * (Date.now() - initialTime));
  }
});

mainContext.add(centerSpinModifier).add(logo);
