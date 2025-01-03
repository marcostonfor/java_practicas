# Menu js para navegar por la documentacíon

## Código js del menu de navegacíon

```javascript
class MenuComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
            .modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                display: none;
                justify-content: center;
                align-items: center;
            }

            #menu-toggle {
                display: none;
            }

            #menu-toggle:checked + .menu-icon + .menu {
                display: block;
            }

            .menu-icon {
                position: fixed;
                top: 10px;
                left: 10px;
                font-size: 30px;
                cursor: pointer;
                z-index: 1000;
            }

            .menu {
                background: white;
                padding: 20px;
                border-radius: 5px;
                display: none;
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
        `;

        const modal = document.createElement('div');
        modal.classList.add('modal');

        const menuToggle = document.createElement('input');
        menuToggle.type = 'checkbox';
        menuToggle.id = 'menu-toggle';

        const menuIcon = document.createElement('label');
        menuIcon.setAttribute('for', 'menu-toggle');
        menuIcon.classList.add('menu-icon');
        menuIcon.innerHTML = '&#9776;';

        const menu = document.createElement('nav');
        menu.classList.add('menu');
        menu.innerHTML = `
            <ul>
                <li><a href="./README.md">Archivo 1</a></li>
                <li><a href="archivo2.md">Archivo 2</a></li>
                <li><a href="archivo3.md">Archivo 3</a></li>
                <!-- Añade más enlaces según sea necesario -->
            </ul>
        `;

        shadow.appendChild(style);
        shadow.appendChild(modal);
        shadow.appendChild(menuToggle);
        shadow.appendChild(menuIcon);
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
        } catch (error) {
            console.error('Error loading markdown file:', error);
        }
    }
}

customElements.define('menu-component', MenuComponent);

```
### Este código que crea un menu es funcional y correcto, trabaja como se espera pero;

> #### El archivo renderizado por sus links, no le funcionan los enlaces internos y el navegador cree que tiene que descargarlos en lugar de renderizarlos.

Necesíto que además de servír a la navegacíon como ahora sírve, los archivos que sirve deben ser asi mismo funcionales