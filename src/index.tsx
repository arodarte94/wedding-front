import ReactDOM from 'react-dom/client';
import App from './admin/App';
import reportWebVitals from './reportWebVitals';
import RootLayout from './admin/layout';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import UserPage from './admin/users/edit/page';
import Users from './admin/users/page';
import Roles from './admin/roles/page';
import RolePage from './admin/roles/edit/page';
import LandingPage from './front/LandingPage';
import Groups from './admin/groups/page';
import GroupPage from './admin/groups/edit/page';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <RootLayout>
  <Routes>
        <Route path="/admin" element={<App />}/>
        <Route path="/admin/users" element={<Users/>}/>
        <Route path="/admin/users/:id" element={<UserPage/>}/>
        <Route path="/admin/users/new" element={<UserPage/>}/>

        <Route path="/admin/groups" element={<Groups/>}/>
        <Route path="/admin/groups/:id" element={<GroupPage/>}/>
        <Route path="/admin/groups/new" element={<GroupPage/>}/>

        <Route path="/admin/roles" element={<Roles/>}/>
        <Route path="/admin/roles/:id" element={<RolePage/>}/>
        <Route path="/admin/roles/new" element={<RolePage/>}/>
        <Route path="/" element={<LandingPage />}/>
    </Routes>

  </RootLayout>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
