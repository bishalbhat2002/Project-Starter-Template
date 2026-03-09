import { Toaster } from "react-hot-toast";
import { Routes, Route} from "react-router";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";

const App = () => {

  return (
    <>
      {/* Apply Main Layout.... These are the pages with Navbar... */}
      <Routes>
       
       {/* Home page */}
        <Route path="/" element={<Home />}/>   
       
        <Route path="/about" element={<About />}/>   
        

        {/* 404 Page not found page.... */}
        <Route path="/*" element={<PageNotFound />}/>

      </Routes>

      <Toaster containerStyle={{ top: "10%" }} />
    </>
  );
};

export default App;



/**
 * React Router Vs React Router DOM
 *
 *  import {BrowserRouter, Link, NavLink} from "react-router-dom";
 *
 * import {Routes, Route} from "react-router";
 *
 */


/**
 * Protected Route Example
 * 
 *  <Route
      path="post/report/:postId"
      element={
        <ProtectedRoute>
          <ReportPost />
        </ProtectedRoute>
      }
    />
*


/**
 * Nested Protected Route Example
 * 
 * If just remove protected component wrapper and it becomes normal nested route 
 *  
 * <Route
      path="post/report/:postId"
      element={
        <ProtectedRoute>
          <ReportPost />
        </ProtectedRoute>
      }
    />
*


/**
 * Multiple Nested Protected Route Example
 * 
 * If parent route becomes protected, all its child routes are also protected automatically...
 *  
 *  <Route
      element={
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      }
    >
      <Route path="/" element={<Home />}>
        <Route path="post/create" element={<CreatePost />} />
        <Route
          path="post/edit/:postId"
          element={
            <ProtectedRoute>
              <EditPost />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="post/report/:postId"
          element={
            <ProtectedRoute>
              <ReportPost />{" "}
            </ProtectedRoute>
          }
        />
    </Route>
*/




