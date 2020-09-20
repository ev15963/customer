import React from 'react';

class Counter3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increateCount = this.increateCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }
  increateCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }
  resetCount() {
    this.setState({ count: 0 });
  }
  render() {
    return (
      <div>
        현재 카운트 {this.props.count}
        <button
          onClick={this.this.increateCount} //버튼이 클릭될 떄 카운트를 증가하는 함수를 호출합니다.
          onMouseOut={this.resetCount}
        >
          {/**마우스가 버튼 밖으로 이동하면 카운트를 초기화하는 함수를 호출합니다. */}
          카운트증가
        </button>
        버튼 밖으로 커서가 움직이면 0으로 초기화됩니다.
      </div>
    );
  }
}
