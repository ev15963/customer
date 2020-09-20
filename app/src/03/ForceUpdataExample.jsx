import React from 'react';

class ForceUpdataExample extends React.Component {
  constructor(props) {
    super(props);
    //state 정의
    this.loading = true;
    this.formData = 'no data';

    //이후 콜백 함수를 다룰 때 bind(this)에 대하여
    this.handleData = this.handleData.bind(this);
    //4초 후에 handleData 함수를 호출합니다.
    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const data = 'new data';
    //state 변경
    this.loading = false;
    this.formData = data + this.formData;
    this.forceUpdate();

    //this.state.loading은 현재 true입니다.
    //console.log('load값', this.state.loading);
    //이후 호출될 render() 함수에서의 this.state.loading은 false입니다.
  }
  render() {
    return (
      <div>
        {/* state 데이터는 this.state로 접근 가능합니다. */}
        <span>로딩중: {String(this.loading)}</span>
        <span>결과: {this.formData}</span>
      </div>
    );
  }
}

export default ForceUpdataExample;
