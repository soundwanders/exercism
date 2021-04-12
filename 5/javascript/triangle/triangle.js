export class Triangle {
  // create an object with a derived class , with arguments '...sides'
    // derived class ==> default constructor calls parent constructor 
    // passing along any arguments that were provided ==> constructor(...args) {...}

    constructor(...sides) {
        let array = sides;
        array.sort((x, y) => x - y);

        if (0 < array[0] && array[0] + array[1] > array[2]) {
            this.x = array[0];
            this.y = array[1];
            this.z = array[2];

            return this.isTriangle = true;
        } else {
            this.isTriangle = false;
        }
    }

    get isEquilateral() {
        return this.isTriangle && this.x === this.z;
    }

    get isIsosceles() {
        return this.isTriangle && (this.x === this.y || this.y === this.z);
    }

    get isScalene() {
        return this.isTriangle && !this.isIsosceles;
    }
}