import React from 'react';
import shallowEqual from 'shallow-equal';

export class PureComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
  }
}

const obj = { name: 'park' };
const mylist = [1, 2, 3, obj];
const list1 = [1, 2, 3, obj];
const list2 = [1, 2, 3, { name: 'park' }];

//mylist === list1; // false
shallowEqual(mylist, list1);
//shallowEqual(list1, list2);
