
//==========================================================
//=================cargar-cv================================
//========================================================== 
// Obtener todos los enlaces con la clase 'open-cv'
const cvLinks = document.querySelectorAll('.open-cv');
cvLinks.forEach(link => {
    link.onclick = function (event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
        const uploadedCV = localStorage.getItem('uploadedCV');
        if (uploadedCV) {
            // Crear un Blob a partir del Data URL
            const byteString = atob(uploadedCV.split(',')[1]); // Decodificar base64
            const mimeString = uploadedCV.split(',')[0].split(':')[1].split(';')[0]; // Obtener el tipo MIME
            const ab = new ArrayBuffer(byteString.length);
            const ia = new Uint8Array(ab);
            for (let i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            const blob = new Blob([ab], { type: mimeString });
            const blobUrl = URL.createObjectURL(blob);
            // Abrir el Blob en una nueva pestaña
            const newWindow = window.open(blobUrl, '_blank');
            if (!newWindow) {
                alert('Por favor, permite las ventanas emergentes para abrir el CV.');
            }
        } else {
            alert('No hay CV guardado. Por favor, sube un CV primero.');
        }
    };
});
//---------------recuperar-redes sociales-------------
// Cargar redes sociales desde localStorage y renderizar
function renderSocialLinks() {
    const socialListData = JSON.parse(localStorage.getItem('socialList')) || [];
    const socialContainers = document.querySelectorAll('.social-container'); // Selecciona todos los contenedores con la clase social-container
    socialContainers.forEach(container => {
        // Limpiar el contenedor antes de agregar nuevos íconos
        container.innerHTML = '';
        socialListData.forEach(item => {
            const socialCircle = document.createElement('a');
            socialCircle.href = item.link;
            socialCircle.target = '_blank';
            socialCircle.classList.add('social-circle');
            const icon = document.createElement('i');
            icon.className = item.social; // Usar la clase de Font Awesome
            socialCircle.appendChild(icon);
            container.appendChild(socialCircle);
        });
    });
}
// Llama a la función para renderizar los íconos en todos los contenedores con la clase social-container
renderSocialLinks();


//---------- Recuperar el nombre guardado---------------------
const savedNombre = localStorage.getItem('nombre');
if (savedNombre) {
    // Mostrar el nombre en todos los h3 con la clase 'nombre-display'
    const nombreDisplays = document.querySelectorAll('.nombre-display');
    nombreDisplays.forEach(element => {
        element.textContent = `${savedNombre}`;
    });
} else {
    console.log('No se encontró el nombre guardado.');
}
//--------------Recuperar el apellido guardado------------
const savedApellido = localStorage.getItem('apellido');
if (savedApellido) {
    // Mostrar el apellido en todos los h3 con la clase 'apellido-display'
    const apellidoDisplays = document.querySelectorAll('.apellido-display');
    apellidoDisplays.forEach(element => {
        element.textContent = `${savedApellido}`;
    });
} else {
    console.log('No se encontró el apellido guardado.');
}
//------------Recuperar la descripción guardada--------------
const savedDescripcion = localStorage.getItem('descripcion');
if (savedDescripcion) {
    const descripcionDisplays = document.querySelectorAll('.descripcion-display');
    descripcionDisplays.forEach(element => {
        element.textContent = `${savedDescripcion}`;
    });
} else {
    console.log('No se encontró la descripción guardada.');
}
//=============================================================
//============Cargar-Descricion-porquecontratarme==============
//=============================================================
// Cargar la descripción desde localStorage
const savedDescripcion2 = localStorage.getItem('porqueContratarme');
if (savedDescripcion2) {
    const descripcionDisplays2 = document.querySelectorAll('.porque-contratarme-parrafo');
    descripcionDisplays2.forEach(element => {
        element.textContent = savedDescripcion2; // Reemplaza el contenido de cada párrafo
    });
} else {
    console.log('No se encontró la descripción guardada.');
}
//=============================================================
//============Cargar-Descricion-TrabajemosJuntos==============
//=============================================================
// Cargar la descripción desde localStorage
const savedDescripcion3 = localStorage.getItem('TrabajemosJuntos');
if (savedDescripcion3) {
    const descripcionDisplays3 = document.querySelectorAll('.trabajemo-juntos-parrafo');
    descripcionDisplays3.forEach(element => {
        element.textContent = savedDescripcion3; // Reemplaza el contenido de cada párrafo
    });
} else {
    console.log('No se encontró la descripción guardada.');
}

/*------------------------------------------------------*/
const contenedorBotones = document.querySelector('.container-color-botones');
const btnPersonalizar = document.querySelector('.boton-personalizacion-color');
const contenedorColores = document.querySelector('.menu-desplegable-colores');
btnPersonalizar.addEventListener('click', (event) => {
    event.preventDefault();
    const expanded = btnPersonalizar.getAttribute('aria-expanded') === 'true';
    btnPersonalizar.setAttribute('aria-expanded', String(!expanded));
    const mostrando = contenedorColores.classList.toggle('show');
    contenedorColores.setAttribute('aria-hidden', String(!mostrando));
    // Solo el contenedor es la referencia para clase expanded (controla solo botón)
    contenedorBotones.classList.toggle('expanded', mostrando);
    if (mostrando) {
        contenedorColores.focus();
    }
});
/*---------------------------------------------------------*/
const guardarColor = localStorage.getItem('primaryColor');
if (guardarColor) {
    document.documentElement.style.setProperty('--primary-color', guardarColor);
}

const botonesColor = document.querySelectorAll('button.circulo-color');

botonesColor.forEach(btn => {
    btn.addEventListener('click', () => {
        const nuevoColor = btn.getAttribute('data-color');
        document.documentElement.style.setProperty('--primary-color', nuevoColor);
        localStorage.setItem('primaryColor', nuevoColor);
    });
});
/*---------------------------boton-sol-luna------------------------------*/
const rootStyle = getComputedStyle(document.documentElement);
const originalBackground = rootStyle.getPropertyValue('--background-color').trim();
const originalText = rootStyle.getPropertyValue('--text-color').trim();
const backgroundSecundario = rootStyle.getPropertyValue('--secundary-background-color').trim();
const colorFondoTargeta = rootStyle.getPropertyValue('--color-fondo-boton').trim();

const invertedBackground = originalText;
const invertedText = originalBackground;

const btnLuzLuna = document.getElementById('color-toggle-btn');
const iconSun = document.getElementById('icon-sun');
const iconMoon = document.getElementById('icon-moon');

// On load, read saved mode from localStorage, default to normal
const savedMode = localStorage.getItem('colorMode') || 'normal';

// Function to apply the selected mode and update icons
function applyMode(mode) {
    if (mode === 'inverted') {
        document.documentElement.style.setProperty('--background-color', invertedBackground);
        document.documentElement.style.setProperty('--text-color', invertedText);
        document.documentElement.style.setProperty('--secundary-background-color', colorFondoTargeta);
        iconSun.style.display = 'none';
        iconMoon.style.display = 'inline-block';
        btnLuzLuna.setAttribute('aria-pressed', 'true');
    } else {
        document.documentElement.style.setProperty('--background-color', originalBackground);
        document.documentElement.style.setProperty('--text-color', originalText);
        document.documentElement.style.setProperty('--secundary-background-color', backgroundSecundario);
        iconSun.style.display = 'inline-block';
        iconMoon.style.display = 'none';
        btnLuzLuna.setAttribute('aria-pressed', 'false');
    }
}

// Apply saved mode on page load
applyMode(savedMode);

// Track toggle state
let isInverted = savedMode === 'inverted';

// Button click toggles mode, saves in localStorage, updates colors and icons
btnLuzLuna.addEventListener('click', () => {
    isInverted = !isInverted;
    const mode = isInverted ? 'inverted' : 'normal';
    localStorage.setItem('colorMode', mode);
    applyMode(mode);
});
/*-------------animation-proyect---------------*/
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.proyectos-targeta');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
            else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.35
    });
    cards.forEach(card => {
        observer.observe(card);
    });
});

/*--------------animation-main-----------------*/

document.addEventListener("DOMContentLoaded", () => {
    const secciones = document.querySelectorAll('.mifoto');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
            else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.3
    });
    secciones.forEach(card => {
        observer.observe(card);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const targetaMain = document.querySelectorAll('.anima-proyec');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const index = Array.from(targetaMain).indexOf(entry.target);
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = (index * 0.2) + "s";
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
                entry.target.style.transitionDelay = "0s";
            }
        });
    }, {
        threshold: 0.4
    });

    targetaMain.forEach(el => {
        observer.observe(el);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const verMas = document.querySelectorAll('.ver-mas');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
            else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.4
    });
    verMas.forEach(card => {
        observer.observe(card);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const textoAscendentePrincipal = document.querySelectorAll('.texto-ascendente-principal');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const index = Array.from(textoAscendentePrincipal).indexOf(entry.target);
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = (index * 0.2) + "s";
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
                entry.target.style.transitionDelay = "0s";
            }
        });
    }, {
        threshold: 0.7
    });

    textoAscendentePrincipal.forEach(el => {
        observer.observe(el);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const textoAscendenteSobremi = document.querySelectorAll('.texto-ascendente-sobremi');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const index = Array.from(textoAscendenteSobremi).indexOf(entry.target);
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = (index * 0.2) + "s";
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
                entry.target.style.transitionDelay = "0s";
            }
        });
    }, {
        threshold: 0.7
    });

    textoAscendenteSobremi.forEach(el => {
        observer.observe(el);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const textoAscendentecontacto = document.querySelectorAll('.texto-ascendente-contacto');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const index2 = Array.from(textoAscendentecontacto).indexOf(entry.target);
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = (index2 * 0.2) + "s";
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
                entry.target.style.transitionDelay = "0s";
            }
        });
    }, {
        threshold: 0.7
    });

    textoAscendentecontacto.forEach(el => {
        observer.observe(el);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const sobremiTextoAscendente = document.querySelectorAll('.texto-ascendente-contacto');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const index2 = Array.from(sobremiTextoAscendente).indexOf(entry.target);
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = (index2 * 0.2) + "s";
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
                entry.target.style.transitionDelay = "0s";
            }
        });
    }, {
        threshold: 0.7
    });

    sobremiTextoAscendente.forEach(el => {
        observer.observe(el);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const TextoAscendenteExtra = document.querySelectorAll('.texto-ascendente-extra');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const index2 = Array.from(TextoAscendenteExtra).indexOf(entry.target);
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = (index2 * 0.2) + "s";
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
                entry.target.style.transitionDelay = "0s";
            }
        });
    }, {
        threshold: 0.7
    });

    TextoAscendenteExtra.forEach(el => {
        observer.observe(el);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const targetasDescendentes1 = document.querySelectorAll('.targeta-ascendente1');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const index2 = Array.from(targetasDescendentes1).indexOf(entry.target);
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = (index2 * 0.2) + "s";
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
                entry.target.style.transitionDelay = "0s";
            }
        });
    }, {
        threshold: 0.35
    });

    targetasDescendentes1.forEach(el => {
        observer.observe(el);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const targetasDescendentes2 = document.querySelectorAll('.targeta-ascendente2');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const index2 = Array.from(targetasDescendentes2).indexOf(entry.target);
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = (index2 * 0.2) + "s";
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
                entry.target.style.transitionDelay = "0s";
            }
        });
    }, {
        threshold: 0.35
    });

    targetasDescendentes2.forEach(el => {
        observer.observe(el);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const targetasDescendentes3 = document.querySelectorAll('.targeta-ascendente3');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const index2 = Array.from(targetasDescendentes3).indexOf(entry.target);
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = (index2 * 0.07) + "s";
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
                entry.target.style.transitionDelay = "0s";
            }
        });
    }, {
        threshold: 0.2
    });

    targetasDescendentes3.forEach(el => {
        observer.observe(el);
    });
});
/*------------------------------------------------*/
/* ----------------cargar-imagen-------------------*/
/*--------------------------------------------------------- */

const savedImage = localStorage.getItem('uploadedImage');
const images = document.querySelectorAll('.imagen-cambiada');
if (savedImage) {
    images.forEach(img => {
        img.src = savedImage; // Cambiar la fuente de cada imagen con la clase "imagen-cambiada"
    });
}



/*-------------boton-menu-header---------------------*/
const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.navbar');
const icono = document.querySelector('.fa-bars')

btnMenu.addEventListener('click', () => {
    const expanded = btnMenu.getAttribute('aria-expanded') === 'true';

    btnMenu.setAttribute('aria-expanded', !expanded);
    menu.classList.toggle('show');
    icono.classList.toggle('fa-x');

});

window.addEventListener('resize', () => {
    if (window.innerWidth > 800) {
        menu.classList.remove('show');
        btnMenu.setAttribute('aria-expanded', 'false');
        icono.classList.remove('fa-x');
    }
});





/*--------------mapa-footer---------------------*/


function initMap() {
    const ubicacion = { lat: -14.0639, lng: -75.7291 };
    const map = new google.maps.Map(document.getElementById("map"),
        {
            zoom: 18,
            center: ubicacion,
        });

    const marker = new google.maps.Marker({
        position: ubicacion,
        map: map,
        title: "Ubicación Deseada",
    });
}


/*----------------filtro-targetas-proyecto-------------------------*/
const botonesFiltro = document.querySelectorAll('#filtros button');
const proyectos = document.querySelectorAll('.proyectos-targeta');

botonesFiltro.forEach(boton => {
    boton.addEventListener('click', () => {
        botonesFiltro.forEach(btn => btn.classList.remove('active'));
        boton.classList.add('active');

        const filtro = boton.getAttribute('data-filtro');

        proyectos.forEach(proyecto => {
            if (filtro === 'todos') {
                proyecto.style.display = 'flex';
            } else {
                if (proyecto.getAttribute('data-categoria') === filtro) {
                    proyecto.style.display = 'flex';
                } else {
                    proyecto.style.display = 'none';
                }
            }
        });
    });
});
/*----------------filtro-targetas-porque-contratarme--------------------*/
const resumeBtn = document.querySelectorAll('#filtro-seccion button');


resumeBtn.forEach((boton, idx) => {
    boton.addEventListener('click', () => {

        const mostrarBtn = document.querySelectorAll('.mostrar');

        resumeBtn.forEach(btn => {
            btn.classList.remove('active');
        });
        boton.classList.add('active');

        mostrarBtn.forEach(mostrar => {
            mostrar.classList.remove('active');
        });
        mostrarBtn[idx].classList.add('active');
    });
});


//============================================================
//==============cargar-informacionDeContacto====================
//============================================================
// Cargar contactos desde localStorage al cargar la página
window.onload = function () {
    const contactos = JSON.parse(localStorage.getItem('contactos')) || {};

    // Cargar en la primera lista
    for (const [key, value] of Object.entries(contactos)) {
        crearContactoElemento(key, value);
    }
    // Cargar en la segunda lista
    const otraLista = document.querySelector('.otra-lista');
    for (const [key, value] of Object.entries(contactos)) {
        crearContactoElementoEnOtraLista(key, value, otraLista);
    }
};
function crearContactoElemento(tipo, dato, contenedor) {
    const contactoDiv = document.createElement('div');
    contactoDiv.className = 'contact-box';

    const titulos = {
        telefono: 'Número de Teléfono',
        ubicacion: 'Ubicación',
        correo: 'Correo Electrónico'
    };

    let icono;
    switch (tipo) {
        case 'telefono':
            icono = '<i class="fas fa-phone"></i>';
            break;
        case 'Ubicacion':
            icono = '<i class="fa-solid fa-location-dot"></i>';
            break;
        case 'correo':
            icono = '<i class="fas fa-envelope"></i>';
            break;
        default:
            icono = '';
    }

    contactoDiv.innerHTML = `
        ${icono}
        <div class="todo-texto-contacto">
            <h4 class="contact-title">${titulos[tipo] || tipo.charAt(0).toUpperCase() + tipo.slice(1)}:</h4>
            <p>${dato}</p>
        </div>
    `;

    contenedor.appendChild(contactoDiv);
}

function cargarContactos() {
    const contactos = JSON.parse(localStorage.getItem('contactos')) || {};

    const contactosList = document.querySelector('.contactos-list');
    if (contactosList) {
        for (const [key, value] of Object.entries(contactos)) {
            crearContactoElemento(key, value, contactosList);
        }
    }

    const otraLista = document.querySelector('.otra-lista');
    if (otraLista) {
        for (const [key, value] of Object.entries(contactos)) {
            crearContactoElemento(key, value, otraLista);
        }
    }
}

window.onload = cargarContactos;







//=============================================================
//=======================Cargar-tabla-sobremi==================
//=============================================================
// Función para cargar los datos en la tabla desde localStorage
function cargarDatosEnTabla() {
    document.getElementById('titulo-nacimiento').textContent = localStorage.getItem('titulo1') || "Campo 1:";
    document.getElementById('nacimiento').textContent = localStorage.getItem('entrada1') || "Sin dato";
    document.getElementById('titulo-edad').textContent = localStorage.getItem('titulo2') || "Campo 2:";
    document.getElementById('edad').textContent = localStorage.getItem('entrada2') || "Sin dato";
    document.getElementById('titulo-pais-nacimiento').textContent = localStorage.getItem('titulo3') || "Campo 3:";
    document.getElementById('pais-nacimiento').textContent = localStorage.getItem('entrada3') || "Sin dato";
    document.getElementById('titulo-nombre').textContent = localStorage.getItem('titulo4') || "Campo 4:";
    document.getElementById('nombre').textContent = localStorage.getItem('entrada4') || "Sin dato";
    document.getElementById('titulo-grado-academico').textContent = localStorage.getItem('titulo5') || "Campo 5:";
    document.getElementById('grado-academico').textContent = localStorage.getItem('entrada5') || "Sin dato";
    document.getElementById('titulo-nacionalidad').textContent = localStorage.getItem('titulo6') || "Campo 6:";
    document.getElementById('nacionalidad').textContent = localStorage.getItem('entrada6') || "Sin dato";
    document.getElementById('titulo-residencia').textContent = localStorage.getItem('titulo7') || "Campo 7:";
    document.getElementById('residencia').textContent = localStorage.getItem('entrada7') || "Sin dato";
    document.getElementById('titulo-freelance').textContent = localStorage.getItem('titulo8') || "Campo 8:";
    document.getElementById('freelance').textContent = localStorage.getItem('entrada8') || "Sin dato";
}
// Función para ir al formulario
function irAFormulario() {
    window.location.href = 'formulario.html'; // Cambia 'formulario.html' por el nombre de tu archivo de formulario
}
// Cargar los datos al cargar la página
window.onload = cargarDatosEnTabla;

//======================================================
//====================================================
//==================================================

function mostrarTarjetasSoloLectura(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.warn(`Contenedor con id "${containerId}" no encontrado.`);
        return;
    }

    // Limpiamos el contenedor para evitar duplicados en recargas
    container.innerHTML = '';

    // Asegúrate de usar la clave correcta
    const tarjetas = JSON.parse(localStorage.getItem('experiencia')) || [];

    // Verifica si las tarjetas se están recuperando correctamente
    console.log(tarjetas);

    if (tarjetas.length === 0) {
        container.innerHTML = '<p>No hay experiencias guardadas.</p>';
        return;
    }

    tarjetas.forEach(({ fecha, titulo, empresa, descripcion }) => {
        const tarjetaDiv = document.createElement('div');
        tarjetaDiv.className = 'timeline-item readonly-experience-card';

        tarjetaDiv.innerHTML = `
            <h5 class="fecha-experiencia"><strong>Fecha:</strong> ${fecha || 'No especificada'}</h5>
            <h4><strong>Título:</strong> ${titulo || 'No especificado'}</h4>
            <h5 class="empresa-experiencia"><strong>Empresa:</strong> ${empresa || 'No especificada'}</h5>
            <p><strong>Descripción:</strong><br>${descripcion || 'No disponible'}</p>
        `;

        // Opcional: estilos por clase, sin inputs ni botones
        container.appendChild(tarjetaDiv);
    });
}

// Ejecutar al cargar DOM y pasar el id del contenedor objetivo
document.addEventListener('DOMContentLoaded', () => {
    mostrarTarjetasSoloLectura('container-tarjetas-readonly');
});





