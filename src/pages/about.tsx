import { FaGraduationCap, FaLanguage, FaCode, FaUsers } from "react-icons/fa";

function About() {
    return (
        <section id="about" className="min-h-screen p-8 bg-gray-700 flex flex-col items-center">
            <h2 className="text-4xl font-bold mb-8 text-white tracking-wide border-b-2 border-blue-600 pb-2 w-full max-w-2xl text-center">Sobre mí</h2>
            <div className="max-w-2xl w-full bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
                <p className="text-lg text-gray-200 mb-4">
                    Soy desarrollador web Junior con experiencia en <span className="text-blue-400 font-semibold">HTML, CSS y JavaScript</span>. Me apasiona crear aplicaciones web interactivas y funcionales. Actualmente estoy aprendiendo <span className="text-blue-400 font-semibold">React y TypeScript</span> para mejorar mis habilidades y ofrecer soluciones más robustas. También tengo conocimientos en <span className="text-blue-400 font-semibold">PHP y Java</span>, lo que me permite trabajar en una variedad de proyectos. Me gusta colaborar en equipo y siempre estoy buscando aprender nuevas tecnologías y mejorar mis habilidades.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 w-full max-w-3xl">
                {/* Estudios */}
                <div className="bg-gray-800 rounded-lg shadow-md p-6 flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                        <FaGraduationCap className="text-blue-400 text-2xl" />
                        <h3 className="text-2xl font-semibold text-white">Estudios</h3>
                    </div>
                    <div className="mb-3">
                        <h4 className="text-lg text-white font-medium">Grado Superior de Desarrollo de Aplicaciones Web</h4>
                        <p className="text-md text-gray-400">IES Lope De Vega <span className="text-blue-400">(2022 - 2025)</span></p>
                    </div>
                    <div>
                        <h4 className="text-lg text-white font-medium">Grado Medio de Sistemas Microinformáticos y Redes</h4>
                        <p className="text-md text-gray-400">IES Lope De Vega <span className="text-blue-400">(2020 - 2022)</span></p>
                    </div>
                </div>

                {/* Idiomas */}
                <div className="bg-gray-800 rounded-lg shadow-md p-6 flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                        <FaLanguage className="text-blue-400 text-2xl" />
                        <h3 className="text-2xl font-semibold text-white">Idiomas</h3>
                    </div>
                    <ul className="text-md text-gray-400 space-y-2">
                        <li><span className="text-white font-medium">Español:</span> Nativo</li>
                        <li><span className="text-white font-medium">Tagalog:</span> Nativo</li>
                        <li><span className="text-white font-medium">Inglés:</span> C1 <span className="text-blue-400">(Con certificación)</span></li>
                    </ul>
                </div>
            </div>

            {/* Habilidades */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6 mt-8 w-full max-w-2xl">
                <div className="flex items-center gap-2 mb-4">
                    <FaCode className="text-blue-400 text-2xl" />
                    <h3 className="text-2xl font-semibold text-white">Habilidades</h3>
                </div>
                <ul className="list-disc list-inside text-md text-gray-300 grid grid-cols-2 gap-x-8 gap-y-2">
                    <li>HTML, CSS, JavaScript</li>
                    <li>React, TypeScript</li>
                    <li>PHP, Java</li>
                    <li>Git y GitHub</li>
                    <li className="flex items-center gap-2"><FaUsers className="text-blue-400" />Trabajo en equipo</li>
                    <li>Resolución de problemas</li>
                    <li>Aprendizaje continuo</li>
                </ul>
            </div>
        </section>
    )
}

export default About;