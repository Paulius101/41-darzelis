class Kindergarden {
    constructor(kindergardenName) {
        this.kindergardenName = kindergardenName;
        this.limit = 3;
        this.groupOfKids = 0;
        this.names = [];
    }
    intro() {
        console.log(`"${this.kindergardenName}" can accept ${this.limit} kids.`);
    }

    updateKidsLimit(number) {
        this.limit = number;
        if (this.limit > this.groupOfKids) {
            return console.log(`"${this.kindergardenName}" can accept ${this.limit} kids now.`);
        }
        else {
            return console.log(`"${this.kindergardenName}" can not update kids limit right now.`);
        }
    }

    addKid(name) {

        if (this.limit > this.groupOfKids) {
            this.groupOfKids++;
            this.names.push({
                name: name
            })
            console.log(this.names);
            return console.log(`${name} has entered "${this.kindergardenName}" kindergarden.`);
        }
        else {
            return console.log(`${name} can not enter "${this.kindergardenName}" kindergarden - it's at a full capacity of ${this.limit} kids`);
        }
    }

    sayHi() {
        let names = '';
        for (let i = 0; i < this.names.length; i++) {
            const name = this.names[i];
            names += name.name;
            // console.log(names);
        }

        console.log(`"${this.kindergardenName}" is visited by:${names}`);
    }

    removeKid(name) {

    }
}

module.exports = Kindergarden;