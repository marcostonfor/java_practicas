class MenuComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
            .menu {
                position: fixed;
                top: 0;
                left: 0;
                width: 25%;
                height: 101vh;
                background: white;
                padding: 20px;
                border-right: 1px solid #ccc;
                overflow-y: auto;
            }

            .menu ul {
                list-style: none;
                padding: 0;
                margin: 0;
            }

            .menu ul li {
                margin: 10px 0;
            }

            .menu ul li a {
                text-decoration: none;
                color: #333;
            }

            .menu ul ul {
                display: none;
                padding-left: 20px;
            }

            .menu ul li:hover > ul {
                display: block;
            }
        `;

        const menu = document.createElement('nav');
        menu.classList.add('menu');
        menu.innerHTML = `
            <ul>
                <li><a href="./README.md">README</a></li>
                <li>
                    <a href="#">Teoria</a>
                    <ul>
                        <li>
                            <a href="#">Capítulo 1</a>
                            <ul>
                                <li><a href="Teoria/Capitulo1/introduccion.md">Introducción</a></li>
                                <li><a href="Teoria/Capitulo1/Historia/breve_historia.md">Historia</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Capítulo 2</a>
                            <ul>
                                <li><a href="Teoria/Capitulo2/introduccion.md">Introducción</a></li>
                                <li><a href="Teoria/Capitulo2/Historia/breve_historia.md">Historia</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Capítulo 3</a>
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