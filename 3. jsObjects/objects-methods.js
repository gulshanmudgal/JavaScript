let restaurant = {
    name: 'ASD',
    guestCapacity: 75,
    guestSeated: 65,
    checkAvailability: function(guestSize) {
        return guestSize <= this.guestCapacity - this.guestSeated;
    },
    seatParty: function(guestSize) {
        if(this.checkAvailability(guestSize)){
            this.guestSeated = this.guestSeated + guestSize;
            console.log('Party Seated');
        }
    },
    removeParty: function(guestSize) {
        this.guestSeated = this.guestSeated - guestSize;
    }
};

restaurant.seatParty(8);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(6);
console.log(restaurant.checkAvailability(4));