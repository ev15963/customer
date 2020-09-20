import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    //state 정의
    this.state = {
      count: props.count,
    };
    //이후 콜백 함수를 다룰 때 bind(this)에 대하여
    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  }

  render() {
    return (
      <div>
        현재 카운트: {this.state.count}
        <button onClick={this.increaseCount}>카운트증가</button>
      </div>
    );
  }
}

export default Counter;
