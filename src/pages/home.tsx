import profileimg from '../assets/images/profile.png';

function Home(){
    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-center">
            <img src={profileimg} alt="Profile Picture" className='rounded-full h-[200px] mb-5'/>
            <h1 className="text-5xl font-bold mb-4 text-white">Dustin Bedaña Diza</h1>
            <p className="text-xl text-white">Soy un desarrollador web Junior</p>
        </section>
    )
}

export default Home;