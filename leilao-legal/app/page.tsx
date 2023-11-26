import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex w-screen h-screen flex-col justify-center items-center">
      <Header/>
      <Footer/>
    </main>
  )
}
