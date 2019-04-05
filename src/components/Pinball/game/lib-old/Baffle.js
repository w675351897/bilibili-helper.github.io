/**
 * Author: DrowsyFlesh
 * Create: 2019/3/22
 * Description:
 */
import {LimitedVector2, Block, Vector2, CENTER} from 'Pinball/game/lib-old';
import {Easing} from 'Pinball/game/lib-old/Math/Easing';
import {TweenVector2} from 'Pinball/game/lib-old/Math/TweenVector2';

const increaseAccelerationBezier = new Easing(
    new LimitedVector2(.99, .22),
    new LimitedVector2(.47, .84),
);

const decreaseAccelerationBezier = increaseAccelerationBezier.flip();
const accelerationSpeed = 7;
const acceleration = new TweenVector2(0, 0).setLengthLimited(-accelerationSpeed, accelerationSpeed)  // baffle acceleration
                                           .setTween('increase', {
                                               duration: 6, // fps * seconds
                                               bezier: increaseAccelerationBezier.bezier,
                                           })
                                           .setTween('decrease', {
                                               duration: 4, // fps * seconds
                                               bezier: decreaseAccelerationBezier.bezier,
                                           });
const velocitySpeed = 6;
const velocity = new TweenVector2(0, 0).setMinXY(-velocitySpeed, 0).setMaxXY(velocitySpeed, 0) // baffle velocity
                                       .setTween('increase', {
                                           duration: 6, // fps * seconds
                                           bezier: increaseAccelerationBezier.bezier,
                                       })
                                       .setTween('decrease', {
                                           duration: 5, // fps * seconds
                                           bezier: decreaseAccelerationBezier.bezier,
                                       });

export class Baffle extends Block {
    canMove = true;

    constructor(options = {}) {
        Object.assign(options, {
            acceleration,
            velocity,
        });
        super(options);
        this.bindKeyboard();

        this.leftBound = new Vector2(0, this.movable.position.y);
        this.rightBound = new Vector2(this.app.width - this.width, this.movable.position.y);

        this.accelerationSpeed = this.app.guiController.baffle.accelerationSpeed.value.accelerationSpeed;
        this.velocitySpeed = this.app.guiController.baffle.velocitySpeed.value.velocitySpeed;
    }

    createBall(options) {
        const thisPosition = this.movable.position;
        options.position = new LimitedVector2(
            thisPosition.x + this.width / 2 + options.position.x,
            thisPosition.y - options.height / 2 + options.position.y,
        );
        return this.app.createBall(options);
    }

    updateSpeed(accelerationSpeed, velocitySpeed) {
        if (accelerationSpeed !== this.accelerationSpeed) {
            this.accelerationSpeed = accelerationSpeed.value.accelerationSpeed;
            this.movable.acceleration.setMinXY(-this.accelerationSpeed, 0).setMaxXY(this.accelerationSpeed, 0);
        }
        if (velocitySpeed !== this.velocitySpeed) {
            this.velocitySpeed = velocitySpeed.value.velocitySpeed;
            this.movable.velocity.setMinXY(-this.velocitySpeed, 0).setMaxXY(this.velocitySpeed, 0);
        }
    }

    bindKeyboard() {
        const up = this.app.bindKey(document, 'up', 38);
        const down = this.app.bindKey(document, 'down', 40);
        const left = this.app.bindKey(document, 'left', 37);
        const right = this.app.bindKey(document, 'right', 39);
        this.app.addTicker(delta => {

            const {accelerationSpeed, velocitySpeed} = this.app.guiController.baffle;
            this.updateSpeed(accelerationSpeed, velocitySpeed);

            if ((!up.down && !down.down && !left.down && !right.down) || (left.down && right.down)) {
                this.movable.brake();
            } else {
                //if (up.down) this.moveUp(delta);
                //if (down.down) this.moveDown(delta);
                if (left.down && !right.down) this.moveLeft(delta);
                if (right.down && !left.down) this.moveRight(delta);
            }

            this.collisionCheckWithMap();
        });
    }

    moveUp(delta) {
        //this.movable.acceleration.setY(-50);
        this.movable.move(delta);
        return this;
    }

    moveDown(delta) {
        //this.movable.acceleration.setY(50);
        this.movable.moveTo(delta);
        return this;
    }

    moveLeft(delta) {
        if (this.app.keyMap.right.down) return this;

        this.movable
            .setDelta(delta)
            .setSpeed(this.app.guiController.global.speed.value.speed)
            .runAndBrake(this.leftBound);

        return this;
    }

    moveRight(delta) {
        if (this.app.keyMap.left.down) return this;

        this.movable
            .setDelta(delta)
            .setSpeed(this.app.guiController.global.speed.value.speed)
            .runAndBrake(this.rightBound);

        return this;
    }

    collisionCheckWithMap() {
        const {width, height} = this.app;
        const thisPosition = this.movable.position;
        const thisVelocity = this.movable.velocity;

        const collisionRes = this.collision.checkBBox(this.app.map, 'in');
        if (collisionRes[0] === CENTER && collisionRes[1] === CENTER) return this;

        this.movable.acceleration.length = 0;
        this.movable.velocity.length = 0;
        if (thisPosition.x < 0) {
            this.movable.setX(0);
        } else if (thisPosition.x + this.width > width) {
            this.movable.setX(width - this.width);
        }
        if (thisPosition.y < 0) {
            this.movable.setY(0);
        } else if (thisPosition.y + this.height > height) {
            this.movable.setY(height - this.height);
        }
        return this;
    }
};