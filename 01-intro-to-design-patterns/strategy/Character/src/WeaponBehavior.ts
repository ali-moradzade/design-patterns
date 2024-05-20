export interface WeaponBehavior {
    useWeapon(): void;
}

export class SwordBehavior implements WeaponBehavior {
    useWeapon() {
        console.log('using sword');
    }
}

export class KnifeBehavior implements WeaponBehavior {
    useWeapon() {
        console.log('using knife');
    }
}

export class BowAndArrowBehavior implements WeaponBehavior {
    useWeapon() {
        console.log('using bow and arrow');
    }
}

export class AxeBehavior implements WeaponBehavior {
    useWeapon() {
        console.log('using axe');
    }
}
