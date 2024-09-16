
export function Navbar() {
    return (
        <div className="navbar absolute w-full flex justify-evenly items-center shadow h-16 top-0 sticky">
            <a href="">Home</a>
            <a href="#about">About Me</a>
            <a href="">Skills</a>
            <a href="">Portofolio</a>
            <a href="">Resume</a>
            <a href="">Contact</a>
            <button><img src="img/england.png" alt="" className="w-8"/></button>
        </div>
    )
}