import {AxeBehavior, BowAndArrowBehavior, KnifeBehavior, SwordBehavior, WeaponBehavior} from "./WeaponBehavior";

export abstract class Character {
    weaponBehavior: WeaponBehavior;

    constructor(weaponBehavior: WeaponBehavior) {
        this.weaponBehavior = weaponBehavior;
    }

    setWeaponBehavior(wb: WeaponBehavior) {
        this.weaponBehavior = wb;
    }

    abstract fight(): void
}

export class King extends Character {
    constructor() {
        super(new SwordBehavior());
    }

    fight(): void {
        console.log('king fight:');
        this.weaponBehavior.useWeapon();
    }
}

export class Queen extends Character {
    constructor() {
        super(new KnifeBehavior());
    }

    fight(): void {
        console.log('queen fight:');
        this.weaponBehavior.useWeapon();
    }
}

export class Knight extends Character {
    constructor() {
        super(new BowAndArrowBehavior());
    }

    fight(): void {
        console.log('knight fight:');
        this.weaponBehavior.useWeapon();
    }
}

export class Troll extends Character {
    constructor() {
        super(new AxeBehavior());
    }

    fight(): void {
        console.log('troll fight:');
        this.weaponBehavior.useWeapon();
    }
}
