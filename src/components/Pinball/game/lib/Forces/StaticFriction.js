/**
 * Author: DrowsyFlesh
 * Create: 2019/4/1
 * Description:
 */
import {Force} from 'Pinball/game/lib/Forces';
import {EPSILON, G} from 'Pinball/game/lib/Math'; // 重力

export class StaticFriction extends Force {
    instantaneous = false;

    /**
     * 静摩擦力
     * @param mass 质量
     * @param µ 静摩擦系数
     * @param a 加速度
     */
    constructor(thing, µ) {
        super(thing);
        this.mass = thing.mass;
        this.µ = µ;
    }

    get constNumber() {
        return this.mass * this.µ * G;
    }

    /**
     * @return {LimitedVector2}
     */
    get f() {
        const newForce = this.thing.velocity.clone().negate(); // 获取运动方向相反的反向
        if (newForce.length > this.constNumber) newForce.length = this.constNumber;
        return newForce;
    }

    condition() {
        return true;
    }
}