import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import EnquiryBasket from '@/components/EnquiryBasket'

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <About />
        <Contact />
      </main>
      <Footer />
      <EnquiryBasket />
    </>
  )
}
