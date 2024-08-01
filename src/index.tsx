import ReactDOM from "react-dom/client";
import App from "./admin/App";
import reportWebVitals from "./reportWebVitals";
import RootLayout from "./admin/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./admin/users/page";
import Roles from "./admin/roles/page";
import RolePage from "./admin/roles/edit";
import Groups from "./admin/groups/page";
import GroupEditView from "./admin/groups/edit";
import UserEditView from "./admin/users/edit";
import Wedding from "./front/Wedding";
import WeddingConfirmation from "./front/Confirmation/page";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <BrowserRouter>
    <RootLayout>
      <Routes>
        <Route path="/admin" element={<App />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/users/:id" element={<UserEditView />} />
        <Route path="/admin/users/new" element={<UserEditView />} />

        <Route path="/admin/groups" element={<Groups />} />
        <Route path="/admin/groups/:id" element={<GroupEditView />} />
        <Route path="/admin/groups/new" element={<GroupEditView />} />

        <Route path="/admin/roles" element={<Roles />} />
        <Route path="/admin/roles/:id" element={<RolePage />} />
        <Route path="/admin/roles/new" element={<RolePage />} />
        <Route path="/" element={<Wedding />} />
        <Route path="/" element={<Wedding />} />
        <Route path="/confirmation" element={<WeddingConfirmation />} />
        <Route path="/:id" element={<WeddingConfirmation />} />
      </Routes>
    </RootLayout>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
