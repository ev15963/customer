import React from 'react';
import PropTypes from 'prop-types'; //
//import { onlyUpdateForPropTypes } from 'recompose';

class PropsComponent extends React.Component {
  render() {
    return <div className="message-container">{this.props.name}</div>; // name 프로퍼티로 받은 문자열로 출력
  }
}

//자료형을 선언하는 예제
PropsComponent.proTypes = {
  // PropsComponent의 proTypes를 이용하여 프로퍼티의 자료형을 정의
  name: PropTypes.string, // 프로퍼티의 자료형을 객체 형태로 지정하여 PropsComponent.proTypes에 저장
};

export default PropsComponent;
