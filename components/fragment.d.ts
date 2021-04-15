import Component from '@glimmer/component';
import activeRoute from 'ember-fragment-route/services/active-route';
interface FragmentArgs {
    hash: string;
}
export default class Fragment extends Component<FragmentArgs> {
    inViewport: any;
    activeRoute: activeRoute;
    elementToWatch: Element;
    setupInViewport(element: Element): void;
    didEnterViewport(): void;
    willDestroy(): void;
}
export {};
