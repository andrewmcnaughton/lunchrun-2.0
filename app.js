const app = Vue.createApp({
  data() {
    return {
      inputVal: "",
      favourites: [
        { name: "Smeerkaas" }, 
        { name: "Kip" }
      ],
      items: [
        { name: "Siracha" }, 
        { name: "Kip" }
      ],
    };
  },
  methods: {
    addItem(event) {
      if(event.target.value === '') {
        return
      }
      this.items.push({ name: this.inputVal });
      this.inputVal = "";
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
    removeFavourite(index) {
      this.favourites.splice(index, 1);
    },
    removeItemFromFavourites(item) {
      this.favourites.splice(this.favourites.findIndex(favourite => item.name === favourite.name), 1);
    },
    addFavouriteToList(item) {
      this.items.push({ name: item.name });
    },
    checkIfFavourite(item) {
      return this.favourites.some(favourite => item.name === favourite.name);
    },
    addToFavourites(item) {
      this.favourites.push({ name: item.name });
    },

  },
});

app.mount("#shopping");
