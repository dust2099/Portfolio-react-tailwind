// Home.tsx
import profileimg from '../assets/images/profile.png';
import LogosCarousel from '../components/LogosCarousel'; // Ajusta la ruta según tu estructura

function Home() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-center">
      <img src={profileimg} alt="Profile Picture" className='rounded-full h-[200px] mb-5'/>
      <h1 className="text-5xl font-bold mb-4 text-white">Dustin Bedaña Diza</h1>
      <p className="text-xl text-white">
        Desarrollador web Junior. 
        </p>
      <br />
      <p className='text-md text-white'>Habilidades:</p>
      
      <div className='w-full max-w-4xl mt-8 px-4'>
        <LogosCarousel />
        </div>
    </section>
  );
}

export default Home;