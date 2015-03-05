ig.module(
	'game.entities.rocket'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityRocket = ig.Entity.extend({
    animSheet: new ig.AnimationSheet( 'media/rocket.png', 16, 16 ),
    size: {x: 8, y:14},
    offset: {x: 4, y: 2},
    maxVel: {x: 0, y: 100},
    friction: {x: 150, y: 0},
    speed: 14,
    type: ig.Entity.TYPE.NONE,
    checkAgainst: ig.Entity.TYPE.A,
    collides: ig.Entity.COLLIDES.PASSIVE,
    init: function( x, y, settings ) {
    	this.parent( x, y, settings );
    	this.addAnim('idle', .07, [0]);
    },
    update: function() {
    	
    	this.parent();
    },
    check: function( other ) {
    	other.gravityFactor = 0;
    	other.fly = true;
    	this.kill();
    },
    kill: function(){
        this.parent();
    }
});
});

