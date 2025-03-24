import bgImg from '../assets/img/pexels-eyupcan-timur-424989336-31224324.jpg'
export default function Hero() {
    
    return(
        <section style={{ backgroundImage: `url(${bgImg})` }}  className={`flex flex-col justify-center items-center h-[80vh] bg-center bg-no-repeat bg-cover`}>
            <div className='bg-[rgba(25,25,25,0.6)] rounded-lg p-8 lg:w-[800px]'>
                <h1 className='text-6xl mb-2'>Shelfie</h1>
                <h2 className='font-thin ml-10 text-2xl mb-4 text-fuchsia-400'>Your digital bookshelf</h2>
                <p className='font-thin text-center w-5/6'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
            </div>
        </section>
    )
    }