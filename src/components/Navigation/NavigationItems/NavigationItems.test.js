import React from 'react';

/* Shallow rendering no hace un rendering por completo del tree de componentes,
   en este caso no haría completo de todos los navigationItems exactos,
   en dicho caso podría usar mount y eso haría full rendering */
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({ adapter: new Adapter() });

describe('<NavigationItems />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    });

    it('should render two <NavigationItem /> elements if not authenticated', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('should render three <NavigationItem /> elements if authenticated', () => {
        wrapper.setProps({ isAuth: true });

        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });

    it('should render the <NavigationItem link="/logout">Logout</NavigationItem> element if authenticated', () => {
        wrapper.setProps({ isAuth: true });

        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
    });

    it('should render the <NavigationItem link="/auth">Authenticate</NavigationItem> element if not authenticated', () => {
        expect(wrapper.contains(<NavigationItem link="/auth">Authenticate</NavigationItem>)).toEqual(true);
    });

});