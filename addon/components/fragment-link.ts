import { action, computed } from '@ember/object';
import Component from '@glimmer/component';
import { set } from '@ember/object';
import { inject as service } from '@ember/service';
import activeRoute from 'ember-fragment-route/services/active-route';
import RouterService from '@ember/routing/router-service';

interface FragmentLinkArgs {
  hash: string;
  path: string;
  activeClass: string;
}

export default class FragmentLink extends Component<FragmentLinkArgs> {
  @service activeRoute!: activeRoute;
  @service router!: RouterService;

  @computed('activeRoute.currentHash', 'router.currentURL')
  get isActive() {
    return (
      this.activeRoute.currentHash === this.args.hash &&
      this.router.currentURL.split('#')[0] === this.args.path
    );
  }

  @action
  navigate() {
    if (this.router.currentURL.split('#')[0] === this.args.path) {
      const el = document.getElementById(this.args.hash);
      if (el) {
        el.scrollIntoView();
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      set(this.activeRoute, 'currentHash', this.args.hash);
      this.router.transitionTo(this.args.path);
    }
  }
}
