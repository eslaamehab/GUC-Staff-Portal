import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
//import Dropdown from './dropdownmenu/Dropdown';
export default class regInfo extends Component {
    constructor(props){
        super(props);
    }
       

    render() {
        return (
            <>
             <div id="gallery-text">
            <div class="gallery-text">
              <Navigation
                  // you can use your own router's api to get pathname
                  activeItemId="/management/members"
                  onSelect={({itemId}) => {
                    // maybe push to the route
                  }}
                  items={[
                    {
                      title: 'Dashboard',
                      itemId: '/dashboard',
                      // you can use your own custom Icon component as well
                      // icon is optional
                      //elemBefore: () => <Icon name="inbox" />,
                    },
                    {
                      title: 'Management',
                      itemId: '/management',
                      //elemBefore: () => <Icon name="users" />,
                      subNav: [
                        {
                          title: 'Projects',
                          itemId: '/management/projects',
                        },
                        {
                          title: 'Members',
                          itemId: '/management/members',
                        },
                      ],
                    },
                    {
                      title: 'Another Item',
                      itemId: '/another',
                      subNav: [
                        {
                          title: 'Teams',
                          itemId: '/management/teams',
                        },
                      ],
                    },
                  ]}
                />
                </div>
                </div>
            </>
            
          )};
      
    }
