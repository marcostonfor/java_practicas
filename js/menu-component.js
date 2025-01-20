import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
class MenuComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = /* css */ `
            @import url('https://fonts.cdnfonts.com/css/bushido');
            @import url('https://fonts.cdnfonts.com/css/frijole');
            .menu {
                position: fixed;
                top: 0;
                left: 0;
                width: 20%;
                height: 101vh;
                background-image: linear-gradient(90deg, antiquewhite, hsla(54, 77%, 75%, 0.1), antiquewhite);
                padding: 20px;
                border-right: 1px solid #ccc;
                box-shadow: inset 0 0 100px 100px rgba(0, 0, 0, 0.1);
                overflow-y: auto;
            }

            .menu ul {
                list-style: none;
                padding: 0.5vw 0.5vh;
                margin: 0;
            }

            .menu ul:Not(:first-child) li a {
                padding: 0.3vh 0.3vw;
                color: #000000;
/*/ font-family: 'Bushido Shadow', sans-serif;*/
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
            }

            .menu ul li a {
                text-decoration: none;
                color: darkkhaki !important;
                text-shadow: 0 0 2px #000000;
                font-family: 'Frijole', sans-serif;
                background: transparent;
            }

           .menu ul ul {
                margin: 6vh 2vw;
                padding-left: 20px; 
                border-left: 0.5vw solid brown;
                border-radius: 1.5vw;
            
            }

            .menu ul ul li {
                padding-top: 1vh !important; 
                padding-bottom: 1vh !important;
            }

            .menu ul ul ul {
                margin: 2vh 2vw;
                padding-left: 1vw !important;
                border-left: 0.3vw solid brown;
                height: 15vh;
            }  

           .menu ul ul li a {
                color: darkkhaki;
                font-family: 'Chilanka', 'Comic Sans MS', cursive;
            }
                
            .menu ul ul ul li {
                margin-top: 0 !important;
                margin-bottom: 3vh !important;
            }

            .menu ul ul ul li a {
                padding: 1vh 1vw !important;
                color: aliceblue !important;
                box-shadow: inset 0 0 20px 10px rgba(0, 0, 0, 1) !important;
                border-radius: 0.6vw;
                margin: 0 2vw 2vw 2vw;
            }

            ul#home .indice  {
                background: crimson;
            }
          
        `;

        const menu = document.createElement('nav');
        menu.classList.add('menu');
        menu.innerHTML = /* html */ `
        <ul id="home">
           <li class="indice"><a href="./README.md">README</a></li>
        </ul>
            <ul>
                <li>
                    <a href="#"><i class="logo_carpeta">&#x1f4c2;</i> Teoria</a>
                    <ul>
                        <li>
                            <a href="#"><i class="logo_carpeta">&#x1f4c2;</i> Capítulo 1</a>
                            <ul>
                                <li><a href="Teoria/Capitulo1/introduccion.md">Introducción</a></li>
                                <li><a href="Teoria/Capitulo1/Historia/breve_historia.md">Historia</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#"><i class="logo_carpeta">&#x1f4c2;</i> Capítulo 2</a>
                            <ul>
                                <li><a href="Teoria/Capitulo2/introduccion.md">Introducción</a></li>
                                <li><a href="Teoria/Capitulo2/Historia/breve_historia.md">Historia</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#"><i class="logo_carpeta">&#x1f4c2;</i> Capítulo 3</a>
                            <ul>
                                <li><a href="Teoria/Capitulo3/introduccion.md">Introducción</a></li>
                                <li><a href="Teoria/Capitulo3/Historia/breve_historia.md">Historia</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Capítulo 4</a>
                            <ul>
                                <li><a href="Teoria/Capitulo4/introduccion.md">Introducción</a></li>
                                <li><a href="Teoria/Capitulo4/Historia/breve_historia.md">Historia</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Capítulo 5</a>
                            <ul>
                                <li><a href="Teoria/Capitulo5/introduccion.md">Introducción</a></li>
                                <li><a href="Teoria/Capitulo5/Historia/breve_historia.md">Historia</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Capítulo 6</a>
                            <ul>
                                <li><a href="Teoria/Capitulo6/introduccion.md">Introducción</a></li>
                                <li><a href="Teoria/Capitulo6/Historia/breve_historia.md">Historia</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Capítulo 7</a>
                            <ul>
                                <li><a href="Teoria/Capitulo7/introduccion.md">Introducción</a></li>
                                <li><a href="Teoria/Capitulo7/Historia/breve_historia.md">Historia</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Capítulo 8</a>
                            <ul>
                                <li><a href="Teoria/Capitulo8/introduccion.md">Introducción</a></li>
                                <li><a href="Teoria/Capitulo8/Historia/breve_historia.md">Historia</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Capítulo 9</a>
                            <ul>
                                <li><a href="Teoria/Capitulo9/introduccion.md">Introducción</a></li>
                                <li><a href="Teoria/Capitulo9/Historia/breve_historia.md">Historia</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Capítulo 10</a>
                            <ul>
                                <li><a href="Teoria/Capitulo10/introduccion.md">Introducción</a></li>
                                <li><a href="Teoria/Capitulo10/Historia/breve_historia.md">Historia</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                
                <li>
                    <a href="#">Prácticas</a>
                    <ul>
                        <li><a href="practicas/archivo1.md">Archivo 1</a></li>
                        <li><a href="practicas/archivo2.md">Archivo 2</a></li>
                        <!-- Añade más enlaces según sea necesario -->
                    </ul>
                </li>
            </ul>
        `;

        shadow.appendChild(style);
        shadow.appendChild(menu);
    }

    connectedCallback() {
        this.attachEventListeners();
    }

    attachEventListeners() {
        this.shadowRoot.querySelectorAll('.menu ul li a').forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const href = event.target.getAttribute('href');
                this.loadMarkdown(href);
            });
        });
    }

    async loadMarkdown(url) {
        try {
            const response = await fetch(url);
            const text = await response.text();
            const previewSection = document.querySelector('#preview.markdown-content');
            previewSection.innerHTML = marked.parse(text);

            // Agregar eventos a los enlaces internos
            const links = previewSection.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('click', (event) => {
                    const href = link.getAttribute('href');
                    if (!href.startsWith('http') && !href.startsWith('https')) {
                        event.preventDefault();
                        this.loadMarkdown(href);
                    }
                });
            });
        } catch (error) {
            console.error('Error loading markdown file:', error);
        }
    }
}

customElements.define('menu-component', MenuComponent);