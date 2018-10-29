import Service from '@ember/service';

const OrderManagerOptions = {
  selectedDay: 'Monday',
  menuSelection: {
    Monday: {},
    Tuesday: {},
    Wednesday: {},
    Thursday: {},
    Friday: {}
  },

  setSelectedDayTo(day) {
    this.set('selectedDay', day);
  },

  chooseMenuOption(mealCategory, menuItemName) {
    this.set(`menuSelection.${this.get('selectedDay')}.${mealCategory}`, menuItemName);
  },

  removeMenuOption(day, mealCategory) {
    this.set(`menuSelection.${day}.${mealCategory}`, '');
  }
};

export default Service.extend(OrderManagerOptions);
