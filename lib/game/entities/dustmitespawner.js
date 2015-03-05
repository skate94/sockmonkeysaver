ig.module(
    'game.entities.dustmitespawner'
)
.requires(
    'impact.entity',
    'game.entities.dustmite'
)
.defines(function () {

    EntityDustmitespawner = ig.Entity.extend({

        _wmScalable: true,
        _wmDrawBox: true,
        _wmBoxColor: 'rgba(255, 170, 66, 0.7)',

        type: ig.Entity.TYPE.NONE,
        collides: ig.Entity.COLLIDES.NEVER,

        enemy: null,

        triggeredBy: function (other) {
            if (!this.enemy || this.enemy._killed) {
                this.enemy = ig.game.spawnEntity(EntityDustmite,this.pos.x,34);
            }
        }

    });

});