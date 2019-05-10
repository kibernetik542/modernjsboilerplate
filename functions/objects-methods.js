let restaurant = {
    name: 'AST Prague',
    guestCapacity: 100,
    guestCount : 0,
    checkAvailability: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function(partySize) {
        this.guestCount += partySize
    },
    removeParty: function(partySize) {
        this.guestCount -= partySize
    }
}

// seatParty
// removeParty


restaurant.seatParty(90)
console.log(restaurant.checkAvailability(15))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(15))

