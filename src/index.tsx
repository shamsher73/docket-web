import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLogin from './features/login';
import Dashboard from './features/dashboard';
import MyDayTasks from './features/my-day-tasks';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
            <Route path="/login" element={<UserLogin />} />
            <Route path="/" element={<App />} >
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/my-day-tasks" element={<MyDayTasks />} />
            </Route>
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Not Found</p>
                </main>
              }
            />
        </Routes>

   
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
