import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';
import Layout from './Component/Layout/Layout';
import Calendar from './Pages/Calendar/Calendar';
import Board from './Pages/Board/Board';
import DataGrid from './Pages/DataGrid/DataGrid'
function App() {
  return (
    <div id='dashboard'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="Dashboard" element={<Dashboard />}></Route>
            <Route path="Calendar" element={<Calendar/>}></Route>
            <Route path="Board" element={<Board/>}></Route>
            <Route path="users" element={<DataGrid />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
