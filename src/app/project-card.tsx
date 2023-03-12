interface Props {
  name: string,
  description: string,
  datestr: string,
  imagesrc: string,
  tags: Array<string>
}

export default function ProjectCard({name, description, datestr, imagesrc, tags}: Props) { // imgsrc: Text
  return (
    <ul className='overflow-hidden bg-white group even:ml-auto rounded-[30px] sm:rounded-[40px] sm:flex sm:w-10/12 lg:w-7/12 sm:min-h-[350px]'>
      <img src="images/flyordie.jpg" alt="Fly or Die" className='h-2/5 sm:h-auto sm:w-2/5 object-cover sm:group-odd:hidden'/>
      <div className='flex flex-col space-y-5 p-6 pl-5 lg:w-3/5 sm:p-8 '>
        <div className='flex-inital'>
          <p className=' text-sm text-gray-500'>{datestr}</p>
          <h3 className=' text-2xl'>{name}</h3>
          <p className="mt-2">{description}</p>
        </div>
        <div className='flex-auto'></div>
        <div className='flex flex-initial space-x-2'>
          { 
            tags.map((tag) => {
              return <span className='border border-solid border-black rounded-full px-2 py-1 h-min'>{tag}</span>
            })
          }
        </div>
      </div>
      <img src={imagesrc} alt={name} className='h-2/5 sm:h-auto sm:w-2/5 object-cover hidden sm:group-odd:inline'/>
    </ul>
  )
}
