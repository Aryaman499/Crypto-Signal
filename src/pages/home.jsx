import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import RecentSignals from '../components/RecentSignals'
import GrowthSimulator from '../components/GrowthSimulator'
  

export default function Home(){
  return (
    <div className="">
      <Navbar />
      <main className="container-max mx-auto mt-8 pb-12">
        <Hero />
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mt-8 ">
          <div className="lg:col-span-1">
            <RecentSignals />
          </div>
          <div className='lg:col-span-1'>
            <GrowthSimulator />
          </div>
        </div>
      </main>
    </div>
  )
}

