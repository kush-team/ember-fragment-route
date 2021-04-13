import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import activeRoute from 'ember-fragment-route/services/active-route';
import { next } from '@ember/runloop';

export default class FragmentRoute extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  @service activeRoute!: activeRoute;

  activate(...args: any[]) {
    this._super(args);
    next(() => {
      const fragmentId =
        this.activeRoute.currentHash || window.location.hash.substr(1);
      const el = document.getElementById(fragmentId);
      if (el) {
        el.scrollIntoView();
      } else {
        window.scrollTo(0, 0);
      }
    });
  }
}
