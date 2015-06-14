var firebase = new Firebase("https://skupaj.firebaseio.com/");

var cursors = firebase.child('cursors');

var cursor = cursors.push(
	{
		x: 1,
		y: 1
	}
);

$('body').mousemove(function(e) {
	cursor.update(
	{
		x: e.pageX,
		y: e.pageY
	})
});