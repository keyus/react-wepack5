import ReactDOM from 'react-dom'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import zhCN from 'antd/lib/locale/zh_CN';
import store from '@store'
import routes from './routes'
import moment from 'moment-timezone'
import '@style/base.less'

moment.tz.setDefault('Asia/Shanghai');
function App() {
  return useRoutes(routes);
}
ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter >
    </Provider>
  </ConfigProvider>
  ,
  document.getElementById('root')
)

// const app = ReactDOM.createRoot(document.getElementById('root'));
// app.render(
//   <ConfigProvider locale={zhCN}>
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter >
//     </Provider>
//   </ConfigProvider>
// )
