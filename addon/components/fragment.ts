import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';
import activeRoute from 'ember-fragment-route/services/active-route';

interface FragmentArgs {
  hash: string;
  tagName: string;
}

export default class Fragment extends Component<FragmentArgs> {
  @service inViewport: any;
  @service activeRoute!: activeRoute;

  elementToWatch!: Element;

  @action
  setupInViewport(element: Element) {
    set(this, 'elementToWatch', element);
    const intersectionThreshold = 0.75;
    const viewportTolerance = { top: 0, bottom: 0 };
    const { onEnter } = this.inViewport.watchElement(this.elementToWatch, {
      viewportTolerance,
      intersectionThreshold,
    });
    onEnter(this.didEnterViewport.bind(this));
  }

  didEnterViewport() {
    set(this.activeRoute, 'currentHash', this.args.hash);
  }

  willDestroy() {
    // need to manage cache yourself if you don't use the mixin
    this.inViewport.stopWatching(this.elementToWatch);
    super.willDestroy();
  }
}
