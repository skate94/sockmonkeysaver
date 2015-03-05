ig.module(
	'game.entities.magnet'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityMagnet = ig.Entity.extend({
    animSheet: new ig.AnimationSheet( 'media/magnet.png', 16, 16 ),
    size: {x: 8, y:14},
    offset: {x: 4, y: 2},
    maxVel: {x: 0, y: 100},
    friction: {x: 150, y: 0},
    gravityFactor: 0,
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
    	other.gravityFactor = 1;
    	other.fly = false;
    	this.kill();
    },
    kill: function(){
        this.parent();
    }
});
});

