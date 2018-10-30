import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  orderManager: inject('order-manager'),
  classNames: ['order-tracker'],
  actions: {
    remove(day, mealCategory) {
      this.get('orderManager').removeMenuOption(day, mealCategory);
    },

    setDayTo(day) {
      this.get('orderManager').setSelectedDayTo(day);
    }
  }
});
