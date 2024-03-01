
function DigitalPal() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;

    this.feed = function () {
        if (this.hungry) {
            console.log("That was yummy!");
            this.hungry = false;
            this.sleepy = true;
        } else {
            console.log("No thanks! I'm full.");
        }
    };

    this.sleep = function () {
        if (this.sleepy) {
            console.log("Zzzzzzzz");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        } else {
            console.log("No way! I'm not tired.");
        }
    };

    this.play = function () {
        if (this.bored) {
            console.log("Yay! Let's play!");
            this.bored = false;
            this.hungry = true;
        } else {
            console.log("Not right now. Later?");
        }
    };

    this.increaseAge = function () {
        this.age++;
        console.log("Happy Birthday to me! I am " + this.age + " old!");
    };

    this.bark = function () {
        console.log("Woof! Woof!");
    };

    this.goOutside = function () {
        if (this.bored) {
            console.log("Yay! I love the outdoors!");
            this.bored = false;
            this.sleepy = true;
        } else {
            console.log("Not right now. Maybe later?");
        }
    };

    this.goInside = function () {
        if (this.sleepy) {
            console.log("Do we have to? Fine...");
            this.sleepy = false;
            this.bored = true;
        } else {
            console.log("We're already inside though...");
        }
    };

    this.meow = function () {
        console.log("Meow! Meow!");
    };

    this.destroyFurniture = function () {
        if (this.bored) {
            console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
            this.bored = false;
            this.sleepy = true;
        } else {
            console.log("I'm not in the mood to destroy furniture.");
        }
    };

    this.buyNewFurniture = function () {
        console.log("Are you sure about that?");
        this.bored = true;
        this.sleepy = false;
    };
}

const dog = new DigitalPal();
const cat = new DigitalPal();

cat.feed();
cat.meow();

dog.goOutside();
cat.destroyFurniture();




