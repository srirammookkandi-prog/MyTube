import Sidebar from './SideBar/Sidebar'
import MainContainer from './MainContainer/MainContainer'

const Body = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <MainContainer />
        </div>
    )
}
export default Body
