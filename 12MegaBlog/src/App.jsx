import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
import { Container } from "./components"

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({userData}));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <>
      <div className="min-h-screen flex flex-wrap justify-between bg-gray-400">
        <div className="w-full block">
          <Header/>
          <main>
            <Outlet/>
          </main>
          <Footer/>
        </div>
      </div>
    </>
  ) : <div className="w-full py-8 mt-4 text-center">
        <Container>
            <div className="flex flex-wrap">
                <div className="p-2 w-full">
                    <h1 className="text-2xl font-bold hover:text-gray-500">
                        Loading...
                    </h1>
                </div>
            </div>
        </Container>
      </div>
}

export default App
