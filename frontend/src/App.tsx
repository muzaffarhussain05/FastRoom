import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "./layouts/Layouts";

import Register from "./pages/Register";
import SignIn from "./pages/Signin";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path='/sign-in' element={<SignIn />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
