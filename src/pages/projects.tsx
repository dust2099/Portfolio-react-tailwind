import projectimg1 from "../assets/project-logos/project1.png"
import projectimg2 from "../assets/project-logos/project2.png"

const projects = [
    {
        title: "Portfolio",
        description: "Portfolio con un estilo minimalista y moderno.",
        image: projectimg1,
        imageAlt: "Logo de proyecto 1",
        url: "https://dustin-portfolio-phi.vercel.app/",
    },
    {
        title: "Subtrack",
        description: "Una aplicación de seguimiento de suscripciones",
        image: projectimg2,
        imageAlt: "Logo de proyecto 2",
        url: "https://subtrack-alpha-sepia.vercel.app/"
    }
]

function Projects() {
    return (
        <section id="projects" className="pt-25 min-h-screen p-8 bg-gray-800">
            <h2 className="text-4xl font-semibold mb-4 text-white">Projectos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div key={project.title} className="bg-blue-950 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
                        <p className="text-gray-500 text-sm mb-2">{project.description}</p>
                        <img src={project.image} alt={project.imageAlt} className="p-2 rounded-3xl h-50 mx-auto"/>
                        <a href={project.url} className="text-blue-600 hover:underline mt-2 inline-block">Ver más</a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;