import Sidebar from "./components/sidebar";
import { ProSidebarProvider } from 'react-pro-sidebar';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="d-flex">
      <div className="sidebar">
        <ProSidebarProvider>
          <Sidebar />
        </ProSidebarProvider>
      </div>
      <div className="main-content">
        {/* Add your components here */}

      </div>
    </div>
  );
}

export default App;
