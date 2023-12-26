import AddTask from "./component/AddTask"
import Footer from "./component/Footer"
import Header from "./component/Header"


function App() {
 

  return (
    <div className="wrapper bg-gradient-to-t from-gray-900 to-teal-900 min-h-screen text-xl text-gray-100 py-10 ">
      <Header/>
      <AddTask/>
      <Footer/>
    </div>
  )
}

export default App
