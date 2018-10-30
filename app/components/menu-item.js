import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  orderManager: inject('order-manager'),
  tagNamess: 'li',
  classNames: ['menu-item'],
  mealCategory: 'breakfast',
  actions: {
    chooseItem(menuItemName) {
      this.get('orderManager').chooseMenuOption(this.get('mealCategory'), menuItemName);
    },

    changeCategory(category) {
      this.set('mealCategory', category);
    }
  }
});
