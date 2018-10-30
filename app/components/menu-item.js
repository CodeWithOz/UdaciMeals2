import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  orderManager: inject('order-manager'),
  tagNamess: 'li',
  classNames: ['menu-item'],
  actions: {
    chooseItem(menuItemName) {
      this.get('orderManager').chooseMenuOption('breakfast', menuItemName);
    }
  }
});
