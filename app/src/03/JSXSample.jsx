import React from 'react';

class JSXSample extends React.Component {
  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps 호출');
    return {};
  }
  constructor(props) {
    super(props);
    //getDerivedStateFromProps() 함수를 사용하므로
    //경고 메시지를 건너 뛰기 위해 state 초깃값을 설정합니다.
    this.state = {};
    console.log('constructor 호출');
  }
}

export default JSXSample;
