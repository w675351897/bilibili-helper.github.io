import {Vector2} from 'Pinball/game/lib';

/**
 * Author: DrowsyFlesh
 * Create: 2019/3/23
 * Description:
 */
import {Container, Graphics} from 'pixi.js';

export class Rect {
    constructor({app, color = 0xffffff, alpha = 1, length, thick, width, height, radius = 0}) {
        this.color = color;
        this.alpha = alpha;
        this.width = width || length;
        this.height = height || thick;
        this.radius = radius;
        this.item = null;
        this.app = app;
        if (app) this.init(app);
    }

    set length(value) {
        this.width = value;
    }

    get length() {
        return this.width;
    }

    set thick(value) {
        this.height = value;
    }

    get thick() {
        return this.height;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        const min = Math.min(this.width / 2, this.height / 2);
        this._radius = value > min ? min : value;
    }

    init(app) {
        this.app = app;
        const width = this.width - 2 * this.radius < 0 ? 0 : this.width - 2 * this.radius;
        const height = this.height - 2 * this.radius < 0 ? 0 : this.height - 2 * this.radius;
        this.item = new Container();
        //this.item.pivot.set(this.width / 2, this.height / 2);
        const r1 = new Graphics().beginFill(this.color, this.alpha).drawRect(this.radius, 0, width, this.height);
        this.item.addChild(r1);
        if (this.radius > 0) {
            const radiusSmallerThanHeight = 2 * this.radius < this.height;
            const radiusSmallerThanWidth = 2 * this.radius < this.width;
            let r2, c1, c2, c3, c4;
            c1 = new Graphics().beginFill(this.color, this.alpha).drawCircle(this.radius, this.radius, this.radius);
            this.item.addChild(c1);
            if (radiusSmallerThanHeight) {
                r2 = new Graphics().beginFill(this.color, this.alpha).drawRect(0, this.radius, this.width, height);
                this.item.addChild(r2);
                c3 = new Graphics().beginFill(this.color, this.alpha).drawCircle(this.radius, this.height - this.radius, this.radius);
                this.item.addChild(c3);
            }
            if (radiusSmallerThanWidth) {
                c2 = new Graphics().beginFill(this.color, this.alpha).drawCircle(this.width - this.radius, this.radius, this.radius);
                this.item.addChild(c2);
            }
            if (radiusSmallerThanHeight && radiusSmallerThanWidth) {
                c4 = new Graphics().beginFill(this.color, this.alpha).drawCircle(this.width - this.radius, this.height - this.radius, this.radius);
                this.item.addChild(c4);
            }
        }
        return this;
    }
}