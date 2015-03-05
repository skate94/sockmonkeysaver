/*
This entity moves an entity up a ladder by 6.


Keys for Weltmeister:

ladder
	Moves entity up a ladder by 6
*/

ig.module(
	'game.entities.ladder'
)
.requires(
	'impact.entity'
)
.defines(function(){
	
EntityLadder = ig.Entity.extend({

	_wmDrawBox: true,
	_wmBoxColor: 'rgba(255, 0, 0, 0.7)',
	
	size: {x: 8, y: 8},
	flag: 1,
	
	type: ig.Entity.TYPE.NONE,
	checkAgainst: ig.Entity.TYPE.A,
	collides: ig.Entity.COLLIDES.PASSIVE,
		
	triggeredBy: function( entity, trigger ) {
		if (this.flag == 1){
			entity.currentAnim = entity.anims.climb1;
			this.flag = 2;
		}	else{
			entity.currentAnim = entity.anims.climb2;
			this.flag = 1;
		}
		entity.gravityFactor = 1;
		entity.pos.y = entity.pos.y - 6;
	},
	
	update: function(){}
});

});