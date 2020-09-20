import React from 'react';
import PropTypes from 'prop-types';

class DefaultPropsComponent extends React.Component {
  render() {
    let message1 = '';
    if (this.props.boolValue === false) {
      message1 = 'boolValue 기본값이 false입니다';
    }
    let message2 = '';
    if (this.props.boolValueWithoutDefault === false) {
      message2 = 'boolValueWithOutDefault 기본값이 false입니다';
    }
    return (
      <div className="message-container">
        {message1}
        {message2}
      </div>
    );
  }
}

DefaultPropsComponent.propTypes = {
  //객체 프로퍼티 : 객체 프로퍼티의 자료형은 propTypes의 shape를 사용하여 정의
  boolValue: PropTypes.bool,
  boolValueWithoutDefault: PropTypes.bool,
};

DefaultPropsComponent.defaultProps = {
  boolValue: false,
};

export default DefaultPropsComponent;
