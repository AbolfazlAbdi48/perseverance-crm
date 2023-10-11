import { Route, Routes } from "react-router-dom"
import { Home } from "./pages"
import Sidebar from "./components/Sidebar/Sidebar"
import { Navbar } from "./components"

const App = () => {
  return (
    <>
      {/* section */}
      <section className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
        <aside className="sm:flex hidden mr-10 relative">
          <Sidebar />
        </aside>

        <main className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </section>
    </>
  )
}

export default App
