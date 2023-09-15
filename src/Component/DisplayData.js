import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom'
import HomeCmp from './Home'
import StudentCmp from './StudentDetl'
import ContactCmp from './Contactus'

function RouteCmp(){
    return(
        <>
        <BrowserRouter>
        <div className='nvlink'>
            <NavLink style={({isActive})=>({color: isActive ? "blue" : "red"})} to='/'>Home</NavLink>
            <NavLink style={({isActive})=>({color: isActive ? "blue" : "red"})} to='/student'>StudentDetails</NavLink>
            <NavLink style={({isActive})=>({color: isActive ? "blue" : "red"})} to='/contact'>ContactUs</NavLink>
        </div>

        <Routes>
            <Route path='/'  element={<HomeCmp/>}/>
            <Route path='/student'  element={<StudentCmp/>}/>
            <Route path='/contact'  element={<ContactCmp/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default RouteCmp