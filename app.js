const app = Vue.createApp({
  data() {
    return {
      inputVal: '',
      favourites: [
        { name: 'Italian Chicken' },
        { name: 'Kip' },
        { name: 'Bread' }
      ],
      items: [
        { name: 'Italian Chicken' },
        { name: 'Kip' },
        { name: 'Bread' },
        { name: 'Grillworst' },
        { name: 'Smeerkaas' },
        { name: 'Sla' }
      ]
    }
  },
  methods: {
    addListItem(event) {
      // Stop empty submits
      if(event.target.value === '') {
        return
      }
      // add to items
      this.items.push({ name: event.target.value });

      // reset input
      this.inputVal = '';

    },
    removeListItem(index) {
      this.items.splice(index, 1);
    },
    removeListItemFromFavourites(item) {

        this.favourites.splice(this.favourites.findIndex(favourite => favourite.name === item.name),1);
    },
    addToFavourites(item) {
      var exists = this.favourites.some(function(favourite) {
        return favourite.name === item.name;
      });
      
      if (!exists) {
        this.favourites.push({ name: item.name });
      }
    },
    removeFromFavourites(index) {
      this.favourites.splice(index, 1);
    },    
    addFavouriteToList(item) {
      this.items.push({ name: item.name });
    },
    checkIfFav(item) {
      return this.favourites.some(function(favourite) {
        return item.name === favourite.name;
      });
    }    
  }
});

app.mount('#shopping');