import Component from '@glimmer/component';
import activeRoute from 'ember-fragment-route/services/active-route';
import RouterService from '@ember/routing/router-service';
interface FragmentLinkArgs {
    hash: string;
    path: string;
    activeClass: string;
}
export default class FragmentLink extends Component<FragmentLinkArgs> {
    activeRoute: activeRoute;
    router: RouterService;
    get isActive(): boolean;
    navigate(): void;
}
export {};
