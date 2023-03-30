
import { BrowserRouter, Route, Routes,Navigate} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Component/Home';
import UserProvider from './Component/UserProvider'
import { Create } from './Component/Create';
import { View } from './Component/View';
import { Edit } from './Component/Edit';
function App() {
  return (
    <div className="App"> 
   <UserProvider>
   <BrowserRouter>
     <Routes>
       <Route path='/' element ={<Home />}/>
       <Route path='/create' element ={<Create />}/>
       <Route path='/view/:id' element = {<View />}/>
       <Route path='/edit/:id' element = {<Edit />}/>
       {/* <Route path='/delete/:id' element = {<Delete />}/> */}
       <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
     </BrowserRouter>
   </UserProvider>
  
    </div>
  );
}

export default App;
