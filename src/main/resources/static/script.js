
function updateProfileImages() {
    const savedImage = localStorage.getItem('sharedProfileImage');
    if (savedImage) {
        const imgs = document.querySelectorAll('.shared-profile-image');
        imgs.forEach(img => {
            img.src = savedImage;
        });
    }
}
window.addEventListener('load', updateProfileImages);
window.addEventListener('storage', (event) => {
    if (event.key === 'sharedProfileImage') {
        updateProfileImages();
    }
});
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
            if(entry.isIntersecting){
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

document.addEventListener("DOMContentLoaded", () =>{
    const secciones = document.querySelectorAll('.mifoto');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
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


document.addEventListener("DOMContentLoaded", () =>{
    const verMas = document.querySelectorAll('.ver-mas');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
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
/* ----------------cargar-imagen-------------------*/
(() => {
    const imageUploadInput = document.getElementById('image-upload');
    const imageUploadCircle = document.querySelector('.image-upload-circle');
    const imagePreview = document.querySelector('.image-preview');
    const btnRemove = document.querySelector('.btn-remove');
    const btnRotate = document.querySelector('.btn-rotate');
    const form = document.getElementById('data-form');

    let currentRotation = 0;
    let currentImageDataUrl = '';

    // Función para cargar imagen y mostrar preview
    function loadImage(file) {
        if (!file.type.startsWith('image/')) {
            alert('Por favor, selecciona un archivo de imagen válido.');
            return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
            currentImageDataUrl = e.target.result;
            imagePreview.src = currentImageDataUrl;
            imagePreview.style.display = 'block';
            imagePreview.style.transform = 'rotate(0deg)';
            currentRotation = 0;
            imageUploadCircle.classList.add('has-image');
        };
        reader.readAsDataURL(file);
    }

    // Evento cambio input file
    imageUploadInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            loadImage(file);
        }
    });

    // Manejo drag and drop en el label (círculo)
    imageUploadCircle.addEventListener('dragover', (e) => {
        e.preventDefault();
        imageUploadCircle.style.borderColor = '#06b6d4';
    });

    imageUploadCircle.addEventListener('dragleave', (e) => {
        e.preventDefault();
        imageUploadCircle.style.borderColor = '';
    });

    imageUploadCircle.addEventListener('drop', (e) => {
        e.preventDefault();
        imageUploadCircle.style.borderColor = '';
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            loadImage(e.dataTransfer.files[0]);
        }
    });

    // Botón eliminar imagen
    btnRemove.addEventListener('click', (e) => {
        e.preventDefault();
        imageUploadInput.value = '';
        imagePreview.src = '';
        imagePreview.style.display = 'none';
        imageUploadCircle.classList.remove('has-image');
        currentImageDataUrl = '';
        currentRotation = 0;
    });

    // Botón girar imagen
    btnRotate.addEventListener('click', (e) => {
        e.preventDefault();
        currentRotation = (currentRotation + 90) % 360;
        imagePreview.style.transform = `rotate(${currentRotation}deg)`;
    });

    // Guardar al presionar "Guardar"
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!currentImageDataUrl) {
            alert('Por favor, sube una imagen antes de guardar.');
            return;
        }

        // Crear canvas para girar imagen y obtener dataURL rotada
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            // Ajustamos canvas según rotación
            if (currentRotation % 180 === 0) {
                canvas.width = img.width;
                canvas.height = img.height;
            } else {
                canvas.width = img.height;
                canvas.height = img.width;
            }

            // Movemos y rotamos contexto
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate(currentRotation * Math.PI / 180);
            ctx.drawImage(img, -img.width / 2, -img.height / 2);

            // Obtenemos la imagen rotada en base64
            const rotatedDataUrl = canvas.toDataURL('image/png');

            // Guardamos en localStorage para que otros HTML puedan acceder
            localStorage.setItem('sharedProfileImage', rotatedDataUrl);
            alert('Imagen guardada con éxito.');

            // Disparar evento personalizado para que otras ventanas capturen el cambio (si están abiertas)
            window.dispatchEvent(new Event('storage'));
        };
        img.src = currentImageDataUrl;
    });

    // Inicialización: Al cargar, si ya hay imagen guardada mostrar en preview (opcional)
    function init() {
        const savedImage = localStorage.getItem('sharedProfileImage');
        if (savedImage) {
            imagePreview.src = savedImage;
            imagePreview.style.display = 'block';
            imageUploadCircle.classList.add('has-image');
            currentImageDataUrl = savedImage;
            currentRotation = 0;
        }
    }

    init();
})();


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
    if(window.innerWidth > 800) {
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
            if(filtro === 'todos') {
                proyecto.style.display = 'flex';
            }else{
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

/*------------------------------------------------------*/

const btn = document.getElementById('button-form');

document.getElementById('form')
    .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_zvpqnho';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar mensaje';
                alert('Mensaje enviado correctamente!');
            }, (err) => {
                btn.value = 'Enviar Mensaje';
                alert(JSON.stringify(err));
            });
    });

