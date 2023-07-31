import NavBar from "@/components/NavBar"
import HomePage from "@/components/HomePage"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="h-full bg-cover bg-no-repeat bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-100 to-teal-100">
      <NavBar />
      <HomePage />
      <Footer />
    </div> 
  )
}