'use client'

export default function Home() {
  return (
    <main className="wasteland-grid bg-gradient-to-br from-darkerBg to-wastelandBg text-foreground px-6 pt-20 pb-12 relative overflow-hidden">
      {/* Elementos de fondo dieselpunk - humo y partículas */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-16 bg-gradient-to-t from-rustOrange to-transparent animate-smoke"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-12 bg-gradient-to-t from-copper to-transparent animate-smoke delay-500"></div>
        <div className="absolute bottom-1/4 left-1/2 w-3 h-20 bg-gradient-to-t from-brass to-transparent animate-smoke delay-1000"></div>
        {/* Partículas de polvo */}
        <div className="absolute top-1/3 left-1/2 w-1 h-1 bg-dirt rounded-full animate-float"></div>
        <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-ash rounded-full animate-float delay-300"></div>
      </div>

      <div className="relative z-10 flex flex-col gap-20 justify-center items-center py-12">
        {/* HERO */}
        <section className="text-center max-w-4xl">
          <h1 
            className="text-6xl sm:text-8xl font-bold mb-6 rust-text distressed animate-rust-pulse font-diesel tracking-wider"
          >
            DIEGO NO
          </h1>
          <div className="h-1 w-64 bg-gradient-to-r from-transparent via-rustOrange to-transparent mx-auto mb-8 scrap-metal"></div>
          <p className="text-xl sm:text-2xl text-copper mb-4 font-mono font-bold">
            &gt; Desarrollador Full-Stack
          </p>
          <p className="text-lg sm:text-xl text-foreground/80 mb-10 leading-relaxed max-w-2xl mx-auto">
            <span className="text-rustOrange font-bold">Especializado</span> en desarrollo web moderno y diseño digital<br/>
            <span className="text-copper font-bold">Creando</span> experiencias de usuario excepcionales
          </p>
          <button className="diesel-button px-8 py-4 text-black font-bold text-lg rounded-md font-heading tracking-wider">
            <span className="flex items-center gap-2">
              Ver proyectos
              <span className="animate-pulse text-brass">→</span>
            </span>
          </button>
        </section>

        {/* SOBRE MÍ */}
        <section id="sobre-mi" className="max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6 copper-text font-diesel tracking-wide">
            Sobre mí
          </h2>
          <div className="wasteland-card p-8 rounded-lg distressed">
            <div className="flex justify-between items-center mb-4 text-sm font-mono text-brass">
              <span>Estado: Disponible</span>
              <span>Experiencia: 5+ años</span>
            </div>
            <p className="text-foreground/90 leading-relaxed text-lg">
              Soy <span className="text-rustOrange font-bold">Diego</span>, un desarrollador full-stack apasionado por crear 
              <span className="text-copper font-bold"> soluciones digitales</span> que combinan <span className="text-brass font-bold">tecnología</span> y 
              <span className="text-rustOrange font-bold"> diseño</span>.
              <br/><br/>
              Me especializo en desarrollar aplicaciones web modernas con un enfoque en 
              <span className="rust-text font-bold">experiencia de usuario</span>, 
              <span className="copper-text font-bold">rendimiento</span> y <span className="text-steel font-bold">escalabilidad</span>.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="rusted-border p-3 rounded scrap-metal">
                <div className="text-rustOrange font-mono text-sm font-bold">Full Stack</div>
                <div className="text-xs text-foreground/70">Desarrollo Web</div>
              </div>
              <div className="steel-border p-3 rounded">
                <div className="text-copper font-mono text-sm font-bold">UI/UX</div>
                <div className="text-xs text-foreground/70">Diseño Digital</div>
              </div>
              <div className="rusted-border p-3 rounded">
                <div className="text-brass font-mono text-sm font-bold">Creatividad</div>
                <div className="text-xs text-foreground/70">Soluciones</div>
              </div>
            </div>
          </div>
        </section>

        {/* PROYECTOS */}
        <section id="proyectos" className="max-w-6xl w-full text-center">
          <h2 className="text-4xl font-bold mb-10 rust-text font-diesel tracking-wide">
            Proyectos
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: 'Eirix',
                description: 'Aplicación de fisioterapia digital con inteligencia artificial y análisis de movimiento en tiempo real.',
                status: 'En desarrollo',
                tech: ['React', 'Node.js', 'IA', 'WebRTC'],
                color: 'rustOrange'
              },
              {
                title: 'Lenguaje de Programación',
                description: 'Diseño y desarrollo de un lenguaje de programación experimental con sintaxis innovadora.',
                status: 'En desarrollo',
                tech: ['Compiladores', 'Rust', 'LLVM'],
                color: 'copper'
              },
            ].map((project, index) => (
              <div
                key={project.title}
                className={`wasteland-card p-6 rounded-lg animate-float distressed`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`text-2xl font-bold font-diesel text-${project.color} tracking-wide`}>
                    {project.title}
                  </h3>
                  <span className={`text-xs px-3 py-1 rounded steel-border bg-${project.color}/20 text-${project.color} font-mono font-bold`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-foreground/80 mb-4 text-left leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs px-2 py-1 rounded rusted-border font-mono text-brass bg-dirt/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="h-px bg-gradient-to-r from-transparent via-rustOrange to-transparent opacity-50"></div>
                
                <button className="mt-4 text-sm font-mono text-copper hover:text-rustOrange transition-colors font-bold">
                  Ver detalles →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="text-center mt-10">
          <div className="wasteland-card p-6 rounded-lg max-w-md mx-auto distressed">
            <h3 className="text-xl font-diesel text-rustOrange mb-4 tracking-wide">Contacto</h3>
            <p className="text-foreground/80 mb-4 font-mono text-sm">
              ¿Tienes un proyecto en mente?
            </p>
            <a
              href="mailto:diego@example.com"
              className="diesel-button inline-block px-6 py-2 text-black font-mono text-sm rounded font-bold"
            >
              Hablemos
            </a>
          </div>
          
          <div className="mt-8 text-xs font-mono text-foreground/50">
            <p>Portfolio desarrollado con Next.js & TypeScript</p>
            <p>Última actualización: {new Date().toISOString().split('T')[0]}</p>
          </div>
        </section>
      </div>
    </main>
  )
}
