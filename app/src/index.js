//필수 리액트 구동 모듈들
import React from 'react';
import ReactDOM from 'react-dom';
//초기화면을 구성하는 사용자 코드
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export default from '../storybook';

//리액트 엔진이 화면을 출력하는 코드
//id가 root인 엘리먼트에 컴포넌트를 출력
ReactDOM.render(<App />, document.getElementById('root'));
import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

import './rn-addons';

// import stories
configure(() => {
  require('./stories');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

// If you are using React Native vanilla write your app name here.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
//아래 부분은 서비스워커 구동 코드로 오프라인 모드로 작동하는 데 도움이 되는 모듈입니다.
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//App 컴포넌트 사용대신
//var img = document.createElement('img');
//img.setAttribute('src', 'http://www.easyspub.co.kr/images/logo_footer.png');
//var divEl = document.createElement('div');
//divEl.innerText = '안녕하세요';
//var welcomeEl = document.createElement('div');
//welcomeEl.append(img);
//welcomeEl.append(divEl);

//var root = document.getElementById('root');
//root.append(welcomeEl);
/*
require('@babel/register');
require('src');
*/
