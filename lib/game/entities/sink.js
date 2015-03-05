/*
This entity makes an entity sink in water.


Keys for Weltmeister:

swim
	Makes entity sink in water
	Changes gravity back to 1
*/

ig.module(
	'game.entities.sink'
)
.requires(
	'impact.entity'
)
.defines(function(){
	
EntitySink = ig.Entity.extend({

	_wmDrawBox: true,
	_wmBoxColor: 'rgba(255, 0, 0, 0.7)',
	
	size: {x: 8, y: 8},
	
	type: ig.Entity.TYPE.NONE,
	checkAgainst: ig.Entity.TYPE.A,
	collides: ig.Entity.COLLIDES.PASSIVE,
		
	triggeredBy: function( entity, trigger ) {
		entity.gravityFactor = 1;
	},
	
	update: function(){}
});

});