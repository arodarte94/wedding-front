'use client'
import { RootState } from "./store";
import { useSelector } from "react-redux"
import AppLayout from "./components/layout/appLayout";
import Login from "./auth/page";

export default function App() {
  
  const { user } = useSelector((state: RootState) => state.account);

  return (
    <>
        { user? 
            <AppLayout>
            <h1>USER: {user?.name}</h1>
            </AppLayout> : <Login />
        }
    </>
  )
}
