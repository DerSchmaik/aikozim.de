import { Inter } from 'next/font/google'
import ProjectCard from './project-card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='container mx-auto'>
      
      {/* Header */}
      <nav className='w-full'>
        <div className='flex flex-wrap h- justify-between h-28 items-center'>
          <div className='flex space-x-8 lg:space-x-20'>
            <a href="/"><img src="images/logo.png" alt="AZ Logo" className='h-10'/></a>
            <a href="/work" className='underline underline-offset-1 text-xl'>work</a>
            <a href="/blog" className='underline underline-offset-1 text-xl'>blog</a>
          </div>
          <div>
            <button className='px-7 py-3 outline-1 outline-black outline rounded-full hover:text-white hover:bg-black transition'>contact</button>
          </div>
        </div>
      </nav>

      {/* Intoduction */}
      <section className='mt-6 lg:mt-12 lg:w-2/3'>
        <h2 className='text-3xl leading-normal lg:text-5xl lg:leading-normal'>
          Et illo consequuntur rerum illum. Repellendus sint nisi tempora. Debitis culpa deleniti vel dolore suscipit neque est commodi.
        </h2>
      </section>

      {/* Work */}
      <section className='mt-8 lg:mt-14'>
        <h2 className='text-2xl lg:text-3xl mb-5 sm:mb-10'>
          ~work
        </h2>
        <li className='sm:px-5 lg:px-14 list-none space-y-10'>
          <ProjectCard 
            name="Fly or Die" 
            description="Fly or Die ist ein Flappy Bird Clon, den ich während der Corona Pandemie gebaut habe. Meinen fortschritt habe ich aktiv auf TikTok geteilt und so eine Community von 30.000 Fans aufgebaut. Viele der Grafiken im Spiel wurden aus Ideen der Community umgesetzt." 
            datestr="2021" 
            imagesrc="images/flyordie.jpg" 
            tags={["unity", "tiktok"]}
          />

          <ProjectCard 
            name="OPUS Greennet python Wrapper" 
            description="OPUS Greennet python Wrapper ist eine python Liabary, welche einfachen umgang mit OPUS Greennet smarthome Geräten in Python ermöglicht." 
            datestr="2021" 
            imagesrc="images/flyordie.jpg" 
            tags={["unity", "tiktok"]}
          />
        </li>

        <button className='border border-black px-7 py-3 mx-auto block rounded-full mt-5 sm:mt-10 hover:text-white hover:bg-black transition'>see all projects</button>
      </section>

      {/* Footer */}
      <section className='text-center p-5'>
        <p>made with ❤️ by aiko</p>
        <p>using next.js, tailwind and sanity</p>
        <p>deployed on vercel</p>

        <div className='space-x-9 mx-auto block mt-5'>
          <span>privacy policy</span>
          <span>impressum</span>
        </div>
      </section>
    </main>
  )
}
