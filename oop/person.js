// Prototypal Inheritance

class Player {
    constructor(fn, ln, age, likes = []) {
        this.fn = fn
        this.ln = ln
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.fn} is ${this.age}:`

        this.likes.forEach((like) => {
            bio += ` ${this.fn} - likes ${like}.`
        })

        return bio
    }
    set fullName(fullName) {
        const names = fullName.split(' ')
        this.fn = names[0]
        this.ln = names[1]
    }
}

class FootballPlayer extends Player {
    constructor(fn, ln, age, country, likes = []){
        super(fn, ln, age, likes)
        this.country = country
    }

    getBio(){
        return `${this.fn} from ${this.country}`
    }

    getYearsLeft(){
        return 65 - this.age
    }
}

const player = new Player('Max', 'Wasasas', 23, ['test1', 'test2'])
player.fullName = 'Henry Tudor'
console.log(player.getBio())
const fplayer = new FootballPlayer('Messi', 'Lionel', 30, 'Argentina', ['pes 2013', 'driving'])
console.log(fplayer.getBio())
console.log('Years to retirement ' + fplayer.getYearsLeft())

