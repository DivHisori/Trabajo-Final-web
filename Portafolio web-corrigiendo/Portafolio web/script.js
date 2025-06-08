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

document.addEventListener("DOMContentLoaded", () =>{
  const targetaMain = document.querySelectorAll('.targeta');

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
    targetaMain.forEach(card => {
    observer.observe(card);
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
/* ---------------------------------------------*/




