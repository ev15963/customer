import React from 'react';
import PropTypes from 'prop-types';

class ChildComponent2 extends React.Component {
  render() {
    const { objValue, requiredStringValue } = this.props;

    return (
      <div>
        <div>객체값: {String(Object.entries(objValue))}</div>
        <div>객체값: {requiredStringValue}</div>
        {/**내장함수 string()과 Object.entries()를 사용하여 문자열로 변환하여 출력*/}
      </div>
    );
  }
}

ChildComponent2.propTypes = {
  //객체 프로퍼티 : 객체 프로퍼티의 자료형은 propTypes의 shape를 사용하여 정의
  objValue: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
  //필수 프로퍼티
  requiredStringValue: PropTypes.string.isRequired,
};

export default ChildComponent2;
