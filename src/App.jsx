import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import { MovieDetails } from "./components/MovieDetails/MovieDetails";
import { Navbar } from "./components/Navbar/Navbar";
import { AuthProvider } from "./context/AuhtProvider";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Error404 from "./components/Error404/Error404";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/movies" element={<HomePage />}></Route>
            <Route path="/movie-details/:id" element={<MovieDetails />}></Route>
          </Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
