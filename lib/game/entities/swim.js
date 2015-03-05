/*
This entity makes an entity float in water.


Keys for Weltmeister:

swim
	Makes entity float in water
*/

ig.module(
	'game.entities.swim'
)
.requires(
	'impact.entity'
)
.defines(function(){
	
EntitySwim = ig.Entity.extend({

	_wmDrawBox: true,
	_wmBoxColor: 'rgba(255, 0, 0, 0.7)',
	
	size: {x: 8, y: 8},
	
	type: ig.Entity.TYPE.NONE,
	checkAgainst: ig.Entity.TYPE.A,
	collides: ig.Entity.COLLIDES.PASSIVE,
	flag: 1,
		
	triggeredBy: function( entity, trigger ) {
		if(this.flag == 1){
			entity.currentAnim = entity.anims.swim1;
			this.flag = 2;
		}else{
			entity.currentAnim = entity.anims.swim2;
			this.flag = 1;
		}
		entity.gravityFactor = -0.18;
	},
	
	update: function(){}
});

});