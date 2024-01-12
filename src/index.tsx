import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RootLayout from './layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserPage from './users/edit/page';
import Users from './users/page';
import Roles from './roles/page';
import RolePage from './roles/edit/page';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <RootLayout>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/users/:id" element={<UserPage/>}/>
        <Route path="/users/new" element={<UserPage/>}/>
        <Route path="/roles" element={<Roles/>}/>
        <Route path="/roles/:id" element={<RolePage/>}/>
        <Route path="/roles/new" element={<RolePage/>}/>
    </Routes>
    </RootLayout>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
