"use strict";

class Cursor {


  constructor() {
  	this.reference = firebase.child('cursors').push(
  		{
  			x: 1,
  			y: 1
  		}
  	)
  }

  updateCoordinates(x, y) {
  	this.reference.update(
  		{
  			x: x,
  			y: y
  		}
  	)
  }

  listener() {
		$(document).mousemove( function(event) {
			updateCoordinates(event.pageX, event.pageY)
		});
  }
}

// mouseListener(event) {
// }
