import { AuthProvider } from "./context/AuthContext";
import { Navbar } from "./componentes/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./componentes/Home";
import { Profile } from "./componentes/Profile";
import { Login } from "./componentes/Login";
import { RequireAuth } from "./componentes/RequireAuth";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
