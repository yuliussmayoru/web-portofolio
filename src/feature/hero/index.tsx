export function Hero() {
    return (
      <div className="bg-[url('/img/hero-bg.jpg')] bg-cover bg-no-repeat bg-right item-end h-[50rem] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
        <div className="absolute inset-0 flex flex-col justify-end items-center">
            <button
                className="animate-bounce ease-in-out"
                onClick={() => window.scrollTo({ top: document.getElementById("about")?.offsetTop, behavior: 'smooth' })}
            >
                <img src="/img/man-comp.png" alt="arrow" className="w-20 h-20"/>
            </button>
            <h1 className="text-2xl font-bold text-black z-10">"Shaping the Future of Tech: A Front-end Engineer with a Passion for Innovation"</h1>
        </div>
      </div>
    )
  }