var firebase = new Firebase("https://skupaj.firebaseio.com/");

var cursor = new Cursor();
cursor.listener()
cursor.updateCoordinates();

// var cursors = firebase.child('cursors');
// var cursor = cursors.push(
// 	{
// 		x: 1,
// 		y: 1
// 	}
// );

// $(document).mousemove(function(e) {

// 	console.log(e)

// 	cursor.update(
// 	{
// 		x: e.pageX,
// 		y: e.pageY
// 	});
// });

function paint() {
	cursors.once('value', function(data) {

		_.each(data.val(), function(c, key) {
			var element = $(`#${key}`);
			var placement = `<div id=${key} style="position: absolute; left: ${c.x}px; top: ${c.y}px;" >YOYO</div>`

			console.log(`x position: ${c.x}, y position: ${c.y}`)

			if (element.length == 0) {
				$('body').append(placement);
			} else {
				element.html(placement);
			}
		});
	});

	setTimeout(paint, 10);
}

// paint()
