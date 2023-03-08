import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <nav className='h-20'>
        <div className='flex flex-wrap h- justify-between bg-slate-500'>
          <div>
            <a href="/" className='mr-5'><img src="" alt="" /></a>
            <a href="/work" className='mr-5'>work</a>
            <a href="/blog" className='mr-5'>blog</a>
          </div>
          <div>
            <button className='h-12 outline-1 outline-black rounded-full '>contact</button>
          </div>
        </div>
      </nav>
    </main>
  )
}
