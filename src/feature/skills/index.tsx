
export function Skills() {


    return (
        <div  itemID="skills" className="w-full flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold border-b-2 border-black p-10">Skills</h1>
            <div itemID="skills" className="flex justify-center items-center gap-10 relative h-56 overflow-hidden rounded-lg md:h-96">
                <img src="/img/react.png" alt="react" className="w-[150px]"/>
                <img src="/img/nextjs.webp" alt="next" className="w-[150px]"/>
                <img src="/img/tailwind.png" alt="tailwind" className="w-[150px]"/>
                <img src="/img/vue.png" alt="vue" className="w-[150px]"/>
                <img src="/img/vite.png" alt="vite" className="w-[150px]"/>
                <img src="/img/javascript.png" alt="javascript" className="w-[150px]"/>
                <img src="/img/typescript.png" alt="typescript" className="w-[150px]"/>
                <img src="/img/pwa.png" alt="pwa" className="w-[150px]"/>
                <img src="/img/cypress.svg" alt="webpack" className="w-[150px]"/>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center items-center gap-10">
                    <div className="text-xl w-1/2 text-center pt-2 pb-10 m-2">
                    <p>With a diverse skill set spanning both frontend web development and quality assurance,  <br />
                    I excel at building robust applications and ensuring their seamless performance.
                    I am proficient in <b>JavaScript</b>, <b>TypeScript</b>, and modern frameworks like <b>React</b>, <b>Vue</b>, and <b>Vite</b>, enabling me to create dynamic and responsive web applications.
                    <br /> <br />My expertise also extends to the <b>Software Development Lifecycle (SDLC)</b> and <b>Software Testing Lifecycle (STLC)</b>, where I employ automation tools such as <b>Java (Selenium)</b>, <b>Cypress.io</b>, and <b>JMeter</b> alongside manual testing techniques.
                    <br /> <br />Additionally, I bring valuable project management experience, utilizing tools like <b>Postman</b> for API testing and <b>Jira</b> to oversee task management and project progress. This unique combination of skills allows me to contribute effectively at every stage of the software development process.</p>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}