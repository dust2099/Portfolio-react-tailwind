function Projects() {
    return (
        <section id="projects" className="min-h-screen p-8 bg-gray-800">
            <h2 className="text-4xl font-semibold mb-4 text-white">Projectos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-950 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-2 text-white">Proyecto 1</h3>
                    <p className="text-gray-500">Descripción breve del proyecto 1.</p>
                    <a href="#" className="text-blue-600 hover:underline mt-2 inline-block">Ver más</a>
                </div>
            </div>
        </section>
    )
}

export default Projects;