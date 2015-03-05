ig.module(
    'game.entities.zombiespawner'
)
.requires(
    'impact.entity',
    'game.entities.zombie'
)
.defines(function () {

    EntityZombiespawner = ig.Entity.extend({

        _wmScalable: true,
        _wmDrawBox: true,
        _wmBoxColor: 'rgba(255, 170, 66, 0.7)',

        type: ig.Entity.TYPE.NONE,
        collides: ig.Entity.COLLIDES.NEVER,

        enemy: null,

        triggeredBy: function (other) {
            if (!this.enemy || this.enemy._killed) {
                this.enemy = ig.game.spawnEntity(EntityZombie,this.pos.x,64);
            }
        }

    });

});