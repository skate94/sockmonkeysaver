ig.module(
	'game.entities.dustmite'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityDustmite = ig.Entity.extend({
    animSheet: new ig.AnimationSheet( 'media/dustmite.png', 16, 16 ),
    size: {x: 8, y:14},
    offset: {x: 4, y: 2},
    maxVel: {x: 0, y: 100},
    friction: {x: 150, y: 0},
    speed: 14,
    type: ig.Entity.TYPE.B,
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
    	other.receiveDamage( 5, this );
    },
    receiveDamage: function(value){
        this.parent(value);
        if(this.health > 0)
    		ig.game.spawnEntity(EntityDeathExplosion, this.pos.x, this.pos.y, {particles: 2, colorOffset: 1});
    },
    kill: function(){
        ig.game.stats.kills ++;
        this.parent();
        ig.game.spawnEntity(EntityDeathExplosion, this.pos.x, this.pos.y, {colorOffset: 1});
    }
});
});

