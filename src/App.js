import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomePage } from './pages/Home';
import { CreatePage } from './pages/Create';
import { ViewPage } from './pages/View';
import { EditPage } from './pages/Edit';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/view/:id" element={<ViewPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
          {/* <Route path='/delete/:id' element = {<Delete />}/> */}
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
    </div>
  );
}

export default App;
