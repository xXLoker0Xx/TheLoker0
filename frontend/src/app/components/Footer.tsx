export default function Footer() {
  return (
    <footer className="mt-auto text-center py-6 px-4 text-sm bg-darkerBg border-t border-rustOrange/30">
      <div className="max-w-4xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-rustOrange to-transparent mb-4 scrap-metal"></div>
        <p className="text-foreground/60 font-mono">
          © {new Date().getFullYear()} Diego No — 
          <span className="text-copper"> Desarrollado con </span>
          <span className="text-rustOrange font-bold">Next.js</span>
          <span className="text-copper"> y </span>
          <span className="text-brass">TypeScript</span>
        </p>
      </div>
    </footer>
  )
}
