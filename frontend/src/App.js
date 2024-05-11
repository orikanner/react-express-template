import { AuthProvider } from "./context/AuthContext";
import { Navbar } from "./componenets/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./componenets/Home";
import { Profile } from "./componenets/Profile";
import { Login } from "./componenets/Login";
import { RequireAuth } from "./componenets/RequireAuth";

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
