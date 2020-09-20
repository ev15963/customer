import React from 'react';
//작성한 컴포넌트 소환
// import TodaysPlan from './03/TodaysPlan';
// import PropsComponent from './03/PropsCompnent';
// import ChildComponent from './03/ChildComponent';
// import BooleanComponent from './03/BooleanComponent';
// import ChildComponent2 from './03/ChildComponent2';
// import DefaultPropsComponent from './03/DefaultPropsComponent';
// import ChildProperty from './03/ChildProperty';
// import StateExample from './03/StateExample';
// import ForceUpdataExample from './03/ForceUpdataExample';
// import Counter from './03/Counter';
// import LifecycleExample from './03/LifecycleExample';
// import Counter from './03/Counter';
// import NewCounter from './03/NewCounter';
import Counter from './03/Counter2';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  increaseCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }
  render() {
    return <Counter count={this.state.count} onAdd={this.increaseCount.bind(this)} />; //bind 함수는 constructor()함수에 모아두면 매번 render() 함수를 호출할 때마다 새로작성 안해도 된다.
  }
}
export default App;

//JSX안에 마크업형식으로 추가
