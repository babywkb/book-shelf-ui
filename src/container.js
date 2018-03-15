import { Container } from 'flux/utils';

import App from './component-structure';
import { bookListStore } from './bookListStore';

const getStores = () => [bookListStore];

const calculateState = () => {
    return {
        bookList: bookListStore.getState(),
    };
};

const AppContainer = Container.createFunctional(App, getStores, calculateState);

export default AppContainer;