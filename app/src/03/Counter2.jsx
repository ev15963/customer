import React from 'react';
import PropTypes from 'prop-types';
//import Counter from './Counter';

class Counter2 extends React.Component {
  render() {
    return (
      <div>
        현재 카운트 {this.props.count}
        <button onClick={() => this.props.onAdd()}>카운트증가</button>
      </div>
    );
  }
}
Counter2.propTypes = {
  count: PropTypes.number,
  onAdd: PropTypes.func,
};

export default Counter2;
