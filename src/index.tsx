import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// App.tsx ファイルからAppコンポーネントを読み込んできてる
import App from './App';
import reportWebVitals from './reportWebVitals';

// render メソッド
// 第1 引数に渡されたReact のコンポーネントをDOM に描画しなおして
// 第2 引数で指定されたHTML 要素に上書きしてくれる
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // index.html <div id="root"></div> に対応
  // getElementById() 
  // id プロパティが指定された文字列に一致する要素を表す Element オブジェクトを返す
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
