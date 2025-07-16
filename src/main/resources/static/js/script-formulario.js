//=========================================================
//=================Guardar-Imagen==========================   
//=========================================================
const imageUpload = document.getElementById('image-upload');
const imagePreview = document.getElementById('image-preview');
const btnSave = document.getElementById('btn-save');
const uploadPlaceholder = document.querySelector('.upload-placeholder');
// Función para manejar la carga de la imagen
function loadImage(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        imagePreview.src = e.target.result;
        imagePreview.style.display = 'block'; // Mostrar la vista previa
        uploadPlaceholder.style.display = 'none'; // Ocultar el símbolo de nube
    };
    reader.readAsDataURL(file);
}
// Evento para seleccionar imagen al hacer clic
imageUpload.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        loadImage(file);
    }
});
// Función para guardar la imagen en localStorage
btnSave.addEventListener('click', function() {
    if (imagePreview.src) {
        localStorage.setItem('uploadedImage', imagePreview.src);
        alert('Imagen guardada con éxito.');
    } else {
        alert('No hay imagen para guardar.');
    }
});
//==========================================================
//=================Guarda-nombre=========================== 
//==========================================================     
function guardarNombre() {
    const nombreInput = document.querySelector('input[id="nombre"] + input');
    const nombreValue = nombreInput.value.trim(); // Eliminar espacios en blanco
    if (nombreValue === '') {
        alert('No hay datos para almacenar en el nombre.');
        return; // No guardar nada
    }
    localStorage.setItem('nombre', nombreValue);
    alert('Nombre guardado con éxito.');

}
//==========================================================
//=================Guarda-apellido=========================== 
//========================================================== 
function guardarApellido() {
    const apellidoInput = document.querySelector('input[id="apellido"] + input');
    const apellidoValue = apellidoInput.value.trim(); // Eliminar espacios en blanco
    if (apellidoValue === '') {
        alert('No hay datos para almacenar en el apellido.');
        return; // No guardar nada
    }
    localStorage.setItem('apellido', apellidoValue);
    alert('Apellido guardado con éxito.');

}
//==========================================================
//=================Guarda-descripcion======================= 
//========================================================== 
function guardarDescripcion() {
    const descripcionInput = document.getElementById('descripcion');
    const descripcionValue = descripcionInput.value.trim(); // Eliminar espacios en blanco
    if (descripcionValue === '') {
        alert('No hay datos para almacenar en la descripción.');
        return; // No guardar nada
    }
    localStorage.setItem('descripcion', descripcionValue);
    alert('Descripción guardada con éxito.');
}
//==========================================================
//=================editar-porquecontratarme=================
//========================================================== 
function guardarDescripcionContratacion() {
    const descripcionInput = document.getElementById('porque-contratarme-input');
    const descripcionValue2 = descripcionInput.value.trim(); // Eliminar espacios en blanco
    if (descripcionValue2 === '') {
        alert('No hay datos para almacenar en la descripción de contratación.');
        return; // No guardar nada
    }
    localStorage.setItem('porqueContratarme', descripcionValue2);
    alert('Descripción de contratación guardada con éxito.');
}
//==========================================================
//=================editar-TrabajemosJuntos=================
//========================================================== 
function TrabajemosJuntos() {
    const descricionTrabajemosJuntosInput = document.getElementById('Trabajemos-juntos-input');
    const descripcionValue3 = descricionTrabajemosJuntosInput.value.trim(); // Eliminar espacios en blanco
    if (descripcionValue3 === '') {
        alert('No hay datos para almacenar en la descripción trabajemos juntos.');
        return; // No guardar nada
    }
    localStorage.setItem('TrabajemosJuntos', descripcionValue3);
    alert('Descripción de trabajemos juntos guardada con éxito.');
}
//==========================================================
//=================Guarda-redes============================= 
//========================================================== 
// Manejo de redes sociales
const socialSelect = document.getElementById('social-select');
const socialLink = document.getElementById('social-link');
const btnAddSocial = document.getElementById('btn-add-social');
const socialList = document.getElementById('social-list');

// Cargar redes sociales desde localStorage al inicio
let socialListData = JSON.parse(localStorage.getItem('socialList')) || [];
renderSocialList();

btnAddSocial.addEventListener('click', function() {
    const selectedSocial = socialSelect.value;
    const link = socialLink.value;

    if (selectedSocial && link) {
        // Verificar si la red social ya existe
        const exists = socialListData.some(item => item.social === selectedSocial);

        if (exists) {
            alert('Esta red social ya ha sido agregada.');
        } else {
            // Agregar nueva red social a la lista
            socialListData.push({ social: selectedSocial, link: link });
            localStorage.setItem('socialList', JSON.stringify(socialListData));
            renderSocialList(); // Renderizar la lista actualizada

            // Limpiar campos
            socialSelect.value = '';
            socialLink.value = '';
        }
    } else {
        alert('Por favor, selecciona una red social y proporciona un enlace.');
    }
});

function renderSocialList() {
    socialList.innerHTML = ''; // Limpiar la lista antes de renderizar
    socialListData.forEach(item => {
        const socialItem = document.createElement('div');
        // socialItem.classList.add('form-row');
        socialItem.classList.add('social-item');
        socialItem.dataset.social = item.social; // Guardar el nombre de la red social
        socialItem.innerHTML = `
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                height="30px" width="30px"
                x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512; margin-top: 10px;" xml:space="preserve">
                <g>
                    <g>
                        <path d="M256,0c-62.737,0-113.778,54.223-113.778,120.872S193.263,241.744,256,241.744s113.778-54.223,113.778-120.872 S318.737,0,256,0z M256,211.838c-46.247,0-83.871-40.807-83.871-90.965S209.753,29.907,256,29.907 c46.246,0,83.871,40.807,83.871,90.965C339.871,171.03,302.246,211.838,256,211.838z" style="fill: var(--text-color);"/></g>
                    </g>
                    <g>
                        <g>
                            <path d="M256,269.786c-116.131,0-210.61,94.479-210.61,210.61V512h421.22v-31.603C466.61,364.266,372.131,269.786,256,269.786z M436.703,482.093H75.297v-1.697c0-99.64,81.063-180.703,180.703-180.703s180.703,81.063,180.703,180.703V482.093z" style="fill: var(--text-color);"/>
                        </g>
                    </g>
            </svg>
            <div class="social-link">
            <input type="" id="inputSocial-link" value="${item.link}">
<!--            <span>${item.link}</span>-->
            </div>

            <button class="btn-remove" id="btnEliminar" >
                <svg height="30px" width="30px" viewBox="-85 -19 617 617.33331" xmlns="http://www.w3.org/2000/svg">
                <path d="m219.121094 319.375c-6.894532.019531-12.480469 5.605469-12.5 12.5v152.5c0 6.90625 5.601562 12.5 12.5 12.5 6.902344 0 12.5-5.59375 12.5-12.5v-152.5c-.019532-6.894531-5.601563-12.480469-12.5-12.5zm0 0" fill="#000000" style="fill: var(--text-color);"></path>
                <path d="m299.121094 319.375c-6.894532.019531-12.480469 5.605469-12.5 12.5v152.5c0 6.90625 5.601562 12.5 12.5 12.5 6.902344 0 12.5-5.59375 12.5-12.5v-152.5c-.019532-6.894531-5.601563-12.480469-12.5-12.5zm0 0" fill="#000000" style="fill: var(--text-color);"></path>
                <path d="m139.121094 319.375c-6.894532.019531-12.480469 5.605469-12.5 12.5v152.5c0 6.90625 5.601562 12.5 12.5 12.5 6.902344 0 12.5-5.59375 12.5-12.5v-152.5c-.019532-6.894531-5.601563-12.480469-12.5-12.5zm0 0" fill="#000000" style="fill: var(--text-color);"></path>
                <path d="m386.121094 64h-71.496094v-36.375c-.007812-15.257812-12.375-27.62109375-27.628906-27.625h-135.746094c-15.257812.00390625-27.621094 12.367188-27.628906 27.625v36.5h-71.496094c-27.515625.007812-51.003906 19.863281-55.582031 46.992188-4.582031 27.128906 11.09375 53.601562 37.078125 62.632812-.246094.894531-.371094 1.820312-.375 2.75v339.75c.015625 34.511719 27.988281 62.484375 62.5 62.5h246.875c34.511718-.015625 62.492187-27.988281 62.5-62.5v-339.75c.011718-.929688-.117188-1.855469-.375-2.75 26.019531-9.0625 41.6875-35.585938 37.078125-62.75s-28.152344-47.023438-55.703125-47zm-237.371094-36.375c.003906-1.449219 1.175781-2.617188 2.621094-2.625h135.753906c1.445312.007812 2.617188 1.175781 2.621094 2.625v36.5h-140.996094zm193.75 526.125h-246.753906c-20.683594-.058594-37.4375-16.816406-37.5-37.5v-339.375h321.875v339.375c-.117188 20.707031-16.914063 37.453125-37.621094 37.5zm43.621094-401.875h-333.996094c-17.332031 0-31.378906-14.046875-31.378906-31.375s14.046875-31.375 31.378906-31.375h333.996094c17.332031 0 31.378906 14.046875 31.378906 31.375s-14.046875 31.375-31.378906 31.375zm0 0" fill="#000000" style="fill: var(--text-color);"></path>
</svg>

            </button>
        `;
        socialList.appendChild(socialItem);

        // Manejo de edición y eliminación
        const btnEdit = socialItem.querySelector('.btn-edit');
        const btnRemove = socialItem.querySelector('.btn-remove');

        // btnEdit.addEventListener('click', function() {
        //     socialSelect.value = item.social;
        //     socialLink.value = item.link;
        //     socialListData = socialListData.filter(i => i.social !== item.social); // Eliminar el elemento para editar
        //     localStorage.setItem('socialList', JSON.stringify(socialListData));
        //     renderSocialList(); // Renderizar la lista actualizada
        // });

        btnRemove.addEventListener('click', function() {
            socialListData = socialListData.filter(i => i.social !== item.social); // Eliminar el elemento
            localStorage.setItem('socialList', JSON.stringify(socialListData));
            renderSocialList(); // Renderizar la lista actualizada
        });
    });
}
//==========================================================
//=================Guarda-cv================================
//========================================================== 
function guardarCV() {
    const cvUpload = document.getElementById('cv-upload');
    if (cvUpload.files.length === 0) {
        alert('Por favor, selecciona un archivo PDF para subir.');
        return;
    }
    const file = cvUpload.files[0];
    if (file.type !== 'application/pdf') {
        alert('Por favor, sube un archivo PDF.');
        return;
    }
    const reader = new FileReader();
    reader.onload = function(e) {
        // Guardar el archivo en localStorage
        localStorage.setItem('uploadedCV', e.target.result);
        alert('CV guardado con éxito.');
    };
    reader.readAsDataURL(file);
}



//==========================================================
//==============editar-informacion-contacto=================
//========================================================== 
// Cargar contactos desde localStorage al cargar la página
window.onload = function() {
    const contactos = JSON.parse(localStorage.getItem('contactos')) || {};
    for (const [key, value] of Object.entries(contactos)) {
        crearContactoElemento(key, value);
    }
};
function guardarContacto() {
    const tipo = document.getElementById('contact-type').value;
    const dato = document.getElementById('contact-input').value;

    if (!tipo || !dato) {
        alert('Por favor, completa todos los campos');
        return;
    }

    const contactosList = document.getElementById('contactos-list');

    // Verificar si ya existe un contacto de este tipo
    const contactoExistente = document.getElementById(tipo);
    if (contactoExistente) {
        contactoExistente.remove();
    }

    crearContactoElemento(tipo, dato);

    // Limpiar los campos del formulario
    document.getElementById('contact-type').value = '';
    document.getElementById('contact-input').value = '';
}

function crearContactoElemento(tipo, dato) {
    const contactosList = document.getElementById('contactos-list');
    const contactoDiv = document.createElement('div');
    contactoDiv.className = 'contact-box';
    contactoDiv.id = tipo;

    // Definir títulos más descriptivos
    const titulos = {
        telefono: 'Teléfono',
        ubicacion: 'Ubicación',
        correo: 'Correo Electrónico'
    };

    // Asignar un ícono basado en el tipo de contacto
    let icono;
    switch (tipo) {
        case 'telefono':
            icono = '<i class="fa-solid fa-phone"></i>';
            break;
        case 'ubicacion':
            icono = '<i class="fa-solid fa-location-dot"></i>';
            break;
        case 'correo':
            icono = '<i class="fa-solid fa-envelope"></i>';
            break;
        default:
            icono = '';
    }

    contactoDiv.innerHTML = `
        <div class="contact-content">
            ${icono}
            <div class="contact-info">
                <strong>${titulos[tipo] || tipo.charAt(0).toUpperCase() + tipo.slice(1)}:</strong>
                <span>${dato}</span>
            </div>
            <div class="contact-actions">
                <button class="btn-edit" onclick="editarContacto('${tipo}')">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn-delete" onclick="eliminarContacto('${tipo}')">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `;

    contactosList.appendChild(contactoDiv);
}

function editarContacto(tipo) {
    const contactoDiv = document.getElementById(tipo);
    const dato = contactoDiv.querySelector('.contact-info span').textContent;

    // Rellenar el formulario con los datos existentes
    document.getElementById('contact-type').value = tipo;
    document.getElementById('contact-input').value = dato;

    // Abrir el modal
    abrirModal('modalContacto');

    // Eliminar el contacto existente
    contactoDiv.remove();
}

function eliminarContacto(tipo) {
    if (confirm('¿Estás seguro de que deseas eliminar este contacto?')) {
        const contacto = document.getElementById(tipo);
        if (contacto) {
            contacto.remove();
        }
    }
}


//
//
//
// Cargar contactos y datos de experiencias al cargar la página
// Cargar contactos y datos de experiencias al cargar la página
window.onload = function() {
    cargarContactos(); // Si tienes esta función definida
    cargarDatos(); // Si tienes esta función definida
    cargarTarjetasEducacion(); // Cargar tarjetas de educación
    cargarTarjetasExperiencia(); // Cargar tarjetas de experiencia
};


// Funciones para gestionar contactos
function abrirModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    document.body.style.overflow = "hidden"; // Previene el scroll del body
}

function cerrarModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.body.style.overflow = "auto"; // Restaura el scroll
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}


function cargarContactos() {
    const contactos = JSON.parse(localStorage.getItem('contactos')) || {};
    for (const [key, value] of Object.entries(contactos)) {
        crearContactoElemento(key, value);
    }
}



// Funciones para gestionar datos de experiencias
function cargarDatos() {
  let i = 1;
  while (localStorage.getItem(`titulo${i}`) || localStorage.getItem(`entrada${i}`)) {
    agregarInformacion(); // Esto incrementa contadorCampos automáticamente

    document.getElementById(`titulo-${i}-input`).value = localStorage.getItem(`titulo${i}`) || '';
    document.getElementById(`entrada-${i}-input`).value = localStorage.getItem(`entrada${i}`) || '';
    i++;
  }
}


function guardarCambios() {
  for (let i = 1; i < contadorCampos; i++) {
    const titulo = document.getElementById(`titulo-${i}-input`);
    const entrada = document.getElementById(`entrada-${i}-input`);

    if (titulo && entrada) {
      localStorage.setItem(`titulo${i}`, titulo.value);
      localStorage.setItem(`entrada${i}`, entrada.value);
    }
  }
  alert("Cambios guardados exitosamente.");
}

let contadorCampos = 1;

function agregarInformacion() {
  const form = document.getElementById('edit-form');
    // <input required="" type="text" name="text" autocomplete="off" class="input">
    //     <label class="user-label">Apellidos</label>
    const formRow = document.createElement('div');
    formRow.className = 'form-row';
    formRow.innerHTML=`<div class="input-group">
        <input required="" type="text" name="text" autocomplete="off" class="input">
            <label class="user-label">Campo ${contadorCampos}</label>
        </div>

        <div class="input-group">
        <input required="" type="text" name="text" autocomplete="off" class="input">
            <label class="user-label">Dato ${contadorCampos}</label>
        </div>`

  const tituloInput = document.createElement('input');
  tituloInput.type = 'text';
  // tituloInput.placeholder = `Campo ${contadorCampos}:`;
  tituloInput.className = 'input';
  tituloInput.id = `titulo-${contadorCampos}-input`;

  const labelInput = document.createElement('label');
  labelInput.className = 'user-label';
  labelInput.innerHTML = `Campo ${contadorCampos}:`;

  const entradaInput = document.createElement('input');
  entradaInput.type = 'text';
  entradaInput.placeholder = `Dato ${contadorCampos}`;
  entradaInput.className = 'input';
  entradaInput.id = `entrada-${contadorCampos}-input`;

  const labelEntrada = document.createElement('label');
  labelEntrada.className = 'user-label';
  labelEntrada.innerHTML = `Dato ${contadorCampos}:`;

  form.appendChild(formRow);

  contadorCampos++;
}


//targetas
//targetas
//targetas
// Genera un id único sencillo para cada tarjeta
function generarIdUnico() {
    return Date.now().toString() + Math.floor(Math.random() * 1000).toString();
  }
  //elsa patito
  // -------------------- EDUCACIÓN --------------------
  
  // Agrega o renderiza una tarjeta de educación, asignando id (nuevo o existente)
  function agregarTarjetaEducacion(fecha, titulo, institucion, descripcion, id = null) {
    const container = document.getElementById('container-tarjetas');
    if (!container) return;
  
    const tarjetaDiv = document.createElement('div');
    tarjetaDiv.className = 'timeline-item';
    tarjetaDiv.dataset.id = id || generarIdUnico();
  
    tarjetaDiv.innerHTML = `
      <label for="fecha-${tarjetaDiv.dataset.id}">Fecha:
        <input type="text" id="fecha-${tarjetaDiv.dataset.id}" class="input-fecha" value="${fecha}" placeholder="Fecha" required>
      </label>
      <label for="titulo-${tarjetaDiv.dataset.id}">Título:
        <input type="text" id="titulo-${tarjetaDiv.dataset.id}" class="input-titulo" value="${titulo}" placeholder="Título educación" required>
      </label>
      <label for="institucion-${tarjetaDiv.dataset.id}">Institución:
        <input type="text" id="institucion-${tarjetaDiv.dataset.id}" class="input-institucion" value="${institucion}" placeholder="Institución" required>
      </label>
      <label for="descripcion-${tarjetaDiv.dataset.id}">Descripción:
        <textarea id="descripcion-${tarjetaDiv.dataset.id}" class="input-descripcion" placeholder="Descripción" required>${descripcion}</textarea>
      </label>
      <button class="btn-guardar" type="button">Guardar</button>
      <button class="btn-eliminar" type="button">Eliminar</button>
    `;
  
    tarjetaDiv.querySelector('.btn-guardar').addEventListener('click', () => {
      guardarTarjetaEducacion(tarjetaDiv);
    });
  
    tarjetaDiv.querySelector('.btn-eliminar').addEventListener('click', () => {
      eliminarTarjetaEducacion(tarjetaDiv);
    });
  
    container.appendChild(tarjetaDiv);
  }
  
  
  // Guarda o actualiza la tarjeta de educación que contiene el botón "Guardar"
  function guardarTarjetaEducacion(tarjetaDiv) {
    const id = tarjetaDiv.dataset.id;
    const fecha = tarjetaDiv.querySelector('.input-fecha').value.trim();
    const titulo = tarjetaDiv.querySelector('.input-titulo').value.trim();
    const institucion = tarjetaDiv.querySelector('.input-institucion').value.trim();
    const descripcion = tarjetaDiv.querySelector('.input-descripcion').value.trim();
  
    if (!fecha || !titulo || !institucion || !descripcion) {
      alert('Completa todos los campos de educación.');
      return;
    }
  
    let tarjetas = JSON.parse(localStorage.getItem('educacion')) || [];
    const index = tarjetas.findIndex(t => t.id === id);
  
    const tarjetaDatos = { id, fecha, titulo, institucion, descripcion };
  
    if (index !== -1) tarjetas[index] = tarjetaDatos;
    else tarjetas.push(tarjetaDatos);
  
    localStorage.setItem('educacion', JSON.stringify(tarjetas));
    alert('Tarjeta de educación guardada.');
  }
  
  // Elimina tarjeta de educación y su info en localStorage
  function eliminarTarjetaEducacion(tarjetaDiv) {
    const id = tarjetaDiv.dataset.id;
    let tarjetas = JSON.parse(localStorage.getItem('educacion')) || [];
    tarjetas = tarjetas.filter(t => t.id !== id);
    localStorage.setItem('educacion', JSON.stringify(tarjetas));
    tarjetaDiv.remove();
    alert('Tarjeta de educación eliminada.');
  }
  
  // Carga todas las tarjetas de educación desde localStorage
  function cargarTarjetasEducacion() {
    const tarjetas = JSON.parse(localStorage.getItem('educacion')) || [];
    const container = document.getElementById('container-tarjetas');
    if (container) container.innerHTML = ''; // Limpia contenedor
    tarjetas.forEach(({fecha, titulo, institucion, descripcion, id}) => {
      agregarTarjetaEducacion(fecha, titulo, institucion, descripcion, id);
    });
  }
  
  // -------------------- EXPERIENCIA --------------------
  
  // Agrega o renderiza una tarjeta de experiencia, asignando id (nuevo o existente)
  function agregarTarjetaExperiencia(fecha, titulo, empresa, descripcion, id = null) {
    const container = document.getElementById('container-tarjetas-experiencia');
    if (!container) return;
  
    const tarjetaDiv = document.createElement('div');
    tarjetaDiv.className = 'timeline-item';
    tarjetaDiv.dataset.id = id || generarIdUnico();
  
    tarjetaDiv.innerHTML = `
      <label>Fecha:
        <input type="text" class="input-fecha" value="${fecha}" placeholder="Fecha" required>
      </label>
      <label>Título de experiencia:
        <input type="text" class="input-titulo" value="${titulo}" placeholder="Título experiencia" required>
      </label>
      <label>Empresa:
        <input type="text" class="input-empresa" value="${empresa}" placeholder="Empresa" required>
      </label>
      <label>Descripción:
        <textarea class="input-descripcion" placeholder="Descripción" required>${descripcion}</textarea>
      </label>
      <button class="btn-guardar" type="button">Guardar</button>
      <button class="btn-eliminar" type="button">Eliminar</button>
    `;
  
    tarjetaDiv.querySelector('.btn-guardar').addEventListener('click', () => {
      guardarTarjetaExperiencia(tarjetaDiv);
    });
  
    tarjetaDiv.querySelector('.btn-eliminar').addEventListener('click', () => {
      eliminarTarjetaExperiencia(tarjetaDiv);
    });
  
    container.appendChild(tarjetaDiv);
  }
  
  // Guarda o actualiza la tarjeta de experiencia que contiene el botón "Guardar"
  function guardarTarjetaExperiencia(tarjetaDiv) {
    const id = tarjetaDiv.dataset.id;
    const fecha = tarjetaDiv.querySelector('.input-fecha').value.trim();
    const titulo = tarjetaDiv.querySelector('.input-titulo').value.trim();
    const empresa = tarjetaDiv.querySelector('.input-empresa').value.trim();
    const descripcion = tarjetaDiv.querySelector('.input-descripcion').value.trim();
  
    if (!fecha || !titulo || !empresa || !descripcion) {
      alert('Completa todos los campos de experiencia.');
      return;
    }
  
    let tarjetas = JSON.parse(localStorage.getItem('experiencia')) || [];
    const index = tarjetas.findIndex(t => t.id === id);
  
    const tarjetaDatos = { id, fecha, titulo, empresa, descripcion };
  
    if (index !== -1) tarjetas[index] = tarjetaDatos;
    else tarjetas.push(tarjetaDatos);
  
    localStorage.setItem('experiencia', JSON.stringify(tarjetas));
    alert('Tarjeta de experiencia guardada.');
  }
  
  // Elimina tarjeta de experiencia y su info en localStorage
  function eliminarTarjetaExperiencia(tarjetaDiv) {
    const id = tarjetaDiv.dataset.id;
    let tarjetas = JSON.parse(localStorage.getItem('experiencia')) || [];
    tarjetas = tarjetas.filter(t => t.id !== id);
    localStorage.setItem('experiencia', JSON.stringify(tarjetas));
    tarjetaDiv.remove();
    alert('Tarjeta de experiencia eliminada.');
  }
  
  // Carga todas las tarjetas de experiencia desde localStorage
  function cargarTarjetasExperiencia() {
    const tarjetas = JSON.parse(localStorage.getItem('experiencia')) || [];
    const container = document.getElementById('container-tarjetas-experiencia');
    if (container) container.innerHTML = ''; // Limpia contenedor
    tarjetas.forEach(({fecha, titulo, empresa, descripcion, id}) => {
      agregarTarjetaExperiencia(fecha, titulo, empresa, descripcion, id);
    });
  }
  
  // ------------------ Inicialización ------------------
  
  document.addEventListener('DOMContentLoaded', () => {
    // Botón agregar educación
    const btnAgregarEducacion = document.getElementById('agregar-tarjeta');
    if (btnAgregarEducacion) {
      btnAgregarEducacion.addEventListener('click', e => {
        e.preventDefault();
        agregarTarjetaEducacion('', '', '', '');
      });
    }
    cargarTarjetasEducacion();
  
    // Botón agregar experiencia
    const btnAgregarExperiencia = document.getElementById('agregar-tarjeta-experiencia');
    if (btnAgregarExperiencia) {
      btnAgregarExperiencia.addEventListener('click', e => {
        e.preventDefault();
        agregarTarjetaExperiencia('', '', '', '');
      });
    }
    cargarTarjetasExperiencia();
  });

//
//
//
// ============ FUNCIÓN PARA AGREGAR TARJETA PROYECTO ============
function agregarTarjetaProyecto(imagen = "", titulo = "", fecha = "", servicio = "", categoriaFiltro="", descripcion = "", tecnologias = "", link = "", id = null) {
    const container = document.getElementById('container-tarjetas-proyectos');
    const tarjetaId = id || generarIdUnico(); // Usa la misma función de ID único

    console.log('Cargando proyectos...'); // Debug

    const proyectos = JSON.parse(localStorage.getItem('proyectos')) || [];
    console.log('Proyectos cargados:', proyectos); // Debug


    const tarjetaDiv = document.createElement('div');
    tarjetaDiv.className = 'tarjeta-proyecto';
    tarjetaDiv.dataset.id = tarjetaId;

    tarjetaDiv.innerHTML = `
    <div class="form-group">
      <label for="imagen-${tarjetaId}">Imagen:</label>
      <input type="file" id="imagen-${tarjetaId}" class="input-imagen" accept="image/*">
      ${imagen ? `<img src="${imagen}" alt="Preview" class="preview-imagen">` : ''}
    </div>
    <div class="form-group">
      <label for="titulo-${tarjetaId}">Título:</label>
      <input type="text" id="titulo-${tarjetaId}" class="input-titulo" value="${titulo}" placeholder="Título del proyecto" required>
    </div>
    <div class="form-group">
      <label for="fecha-${tarjetaId}">Fecha:</label>
      <input type="text" id="fecha-${tarjetaId}" class="input-fecha" value="${fecha}" placeholder="Ej: 2020-2022" required>
    </div>
    <div class="form-group">
      <label for="servicio-${tarjetaId}">Servicio:</label>
      <input type="text" id="servicio-${tarjetaId}" class="input-servicio" value="${servicio}" placeholder="Ej: Desarrollo Web" required>
    </div>
    <div class="form-group">
      <label for="descripcion-${tarjetaId}">Descripción:</label>
      <textarea id="descripcion-${tarjetaId}" class="input-descripcion" required>${descripcion}</textarea>
    </div>
    <div class="form-group" data-categoria="${categoriaFiltro}">
      <label for="tecnologiasc-${tarjetaId}">Tecnologías:</label>
      <select id="tecnologias-${tarjetaId}" class="input-tecnologias">
        <option value="">Selecciona una tecnología</option>
        <option value="Desarrollo de software">Desarrollo de software</option>
        <!-- Opciones se cargarán desde localStorage (implementar luego) -->
        
      </select>
    </div>
    <div class="form-group" ">
      <label for="CatFiltro-${tarjetaId}">Categoria-Filtro:</label>
      <select id="CatFiltro-${tarjetaId}" class="input-catFiltro">
        <option value="">Selecciona una tecnología</option>
        <option value="web">web</option>
        <option value="movile">movile</option>
        <option value="desktop">desktop</option>
        <!-- Opciones se cargarán desde localStorage (implementar luego) -->
        
      </select>
    </div>
    <div class="form-group">
      <label for="link-${tarjetaId}">Enlace:</label>
      <input type="text" id="link-${tarjetaId}" class="input-link" value="${link}" placeholder="https://...">
    </div>
    <div class="botones-tarjeta">
      <button class="btn-guardar" data-id="${tarjetaId}">Guardar</button>
      <button class="btn-eliminar" data-id="${tarjetaId}">Eliminar</button>
    </div>
  `;

    container.appendChild(tarjetaDiv);

    // Evento para previsualizar imagen al subirla
    const imagenInput = tarjetaDiv.querySelector(`#imagen-${tarjetaId}`);
    const preview = tarjetaDiv.querySelector('.preview-imagen') || null;

    imagenInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (!preview) {
                    const imgPreview = document.createElement('img');
                    imgPreview.className = 'preview-imagen';
                    imgPreview.src = event.target.result;
                    imagenInput.parentNode.appendChild(imgPreview);
                } else {
                    preview.src = event.target.result;
                }
            };
            reader.readAsDataURL(file);
        }
    });
}
// ============ GUARDAR PROYECTO ============
function guardarProyecto(tarjetaId) {
    const tarjeta = document.querySelector(`.tarjeta-proyecto[data-id="${tarjetaId}"]`);

    const imagenInput = tarjeta.querySelector('.input-imagen');
    const preview = tarjeta.querySelector('.preview-imagen');
    const titulo = tarjeta.querySelector('.input-titulo').value.trim();
    const fecha = tarjeta.querySelector('.input-fecha').value.trim();
    const servicio = tarjeta.querySelector('.input-servicio').value.trim();
    const descripcion = tarjeta.querySelector('.input-descripcion').value.trim();
    const tecnologias = tarjeta.querySelector('.input-tecnologias').value;
    const catFiltro = tarjeta.querySelector('.input-catFiltro').value;
    const link = tarjeta.querySelector('.input-link').value.trim();
// Validar campos
if (!titulo || !fecha || !servicio || !descripcion || !tecnologias||!catFiltro) {
    alert("Completa los campos obligatorios (*).");
    return;
}
// Crear objeto proyecto
const proyecto = { titulo, fecha, servicio, descripcion, tecnologias, catFiltro, link };
// Guardar imagen si se subió una nueva
if (imagenInput.files.length > 0) {
    const reader = new FileReader();
    reader.onload = (e) => {
        proyecto.imagen = e.target.result;
        guardarEnLocalStorage(proyecto, tarjetaId);
    };
    reader.readAsDataURL(imagenInput.files[0]);
} else if (preview) {
    proyecto.imagen = preview.src;
    guardarEnLocalStorage(proyecto, tarjetaId);
} else {
    guardarEnLocalStorage(proyecto, tarjetaId);
}
}
// Función auxiliar para guardar en localStorage
function guardarEnLocalStorage(proyecto, tarjetaId) {
    let proyectos = JSON.parse(localStorage.getItem('proyectos')) || [];
    const existe = proyectos.findIndex(p => p.id === tarjetaId);

    proyecto.id = tarjetaId;

    if (existe !== -1) {
        proyectos[existe] = proyecto; // Actualizar
    } else {
        proyectos.push(proyecto); // Agregar nuevo
    }
    localStorage.setItem('proyectos', JSON.stringify(proyectos));
    alert("Proyecto guardado.");
}

// ============ ELIMINAR PROYECTO ============

// ============ CARGAR PROYECTOS AL INICIAR ============
function filtrarProyectos() {
    const botonesFiltro = document.querySelectorAll('#filtros button');

    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', () => {
            // Remover clase active de todos los botones
            botonesFiltro.forEach(b => b.classList.remove('active'));
            // Agregar clase active al botón clickeado
            boton.classList.add('active');

            const filtro = boton.getAttribute('data-filtro');
            const tarjetas = document.querySelectorAll('.proyectos-targeta');

            tarjetas.forEach(tarjeta => {
                if (filtro === 'todos') {
                    tarjeta.style.display = 'flex';
                    // Animación de aparición
                    setTimeout(() => {
                        tarjeta.style.opacity = '1';
                        tarjeta.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    const categoria = tarjeta.getAttribute('data-categoria');
                    if (categoria === filtro) {
                        tarjeta.style.display = 'flex';
                        // Animación de aparición
                        setTimeout(() => {
                            tarjeta.style.opacity = '1';
                            tarjeta.style.transform = 'translateY(0)';
                        }, 100);
                    } else {
                        tarjeta.style.opacity = '0';
                        tarjeta.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            tarjeta.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });
}

// Función para cargar proyectos desde localStorage
function cargarProyectos(containerId = 'container-tarjetas-proyectos', modo = 'edicion') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const proyectos = JSON.parse(localStorage.getItem('proyectos')) || [];
    container.innerHTML = '';

    proyectos.forEach((proyecto, index) => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'proyectos-targeta';
        // Asegurarse de que la categoría esté en minúsculas y sea válida
        const categoria = proyecto.catFiltro ? proyecto.catFiltro.toLowerCase() : 'web';
        tarjeta.setAttribute('data-categoria', categoria);

        if (modo === 'edicion') {
            tarjeta.innerHTML = crearVistaEdicion(proyecto, index);
        } else {
            tarjeta.innerHTML = crearVistaPublica(proyecto);
        }

        container.appendChild(tarjeta);
    });

    // Inicializar el filtrado después de cargar los proyectos
    filtrarProyectos();
}



function eliminarProyecto(index) {
    let proyectos = JSON.parse(localStorage.getItem('proyectos')) || [];
    proyectos.splice(index, 1); // Elimina el proyecto del array
    localStorage.setItem('proyectos', JSON.stringify(proyectos));
    cargarProyectos(); // Recarga la vista
    alert('Proyecto eliminado');



}
function crearVistaEdicion(proyecto, index) {
    return `
        <div class="proyecto-editor">
            <img src="${proyecto.imagen || ''}" alt="${proyecto.titulo}" class="preview-imagen" />
            <div class="form-group">
                <label>Imagen: <input type="file" class="input-imagen" accept="image/*"></label>
            </div>
            <div class="form-group">
                <label>Título: <input type="text" class="input-titulo" value="${proyecto.titulo}" required></label>
            </div>
            <div class="form-group">
                <label>Fecha: <input type="text" class="input-fecha" value="${proyecto.fecha}" required></label>
            </div>
            <div class="form-group">
                <label>Servicio: <input type="text" class="input-servicio" value="${proyecto.servicio}" required></label>
            </div>
            <div class="form-group">
                <label>Descripción: <textarea class="input-descripcion" required>${proyecto.descripcion}</textarea></label>
            </div>
            <div class="form-group">
                <label>Tecnologías: <input type="text" class="input-tecnologias" value="${proyecto.tecnologias}" required></label>
            </div>
            <div class="form-group">
                <label>Enlace: <input type="url" class="input-link" value="${proyecto.link}"></label>
            </div>
            <div class="botones-proyecto">
                <button class="btn-guardar" data-index="${index}">Guardar</button>
                <button class="btn-eliminar" data-index="${index}">Eliminar</button>
            </div>
        </div>
    `;
}

function crearVistaPublica(proyecto) {
    return `
        <div class="proyecto-card">
            <div class="proyecto-imagen">
                <img src="${proyecto.imagen || 'ruta/imagen-default.jpg'}" alt="${proyecto.titulo}">
            </div>
            <div class="proyecto-info" data-categoria="${proyecto.catFiltro}">
                <h3>${proyecto.titulo}</h3>
                <p class="fecha">${proyecto.fecha}</p>
                <p class="servicio">${proyecto.servicio}</p>
                <p class="descripcion">${proyecto.descripcion}</p>
                <div class="tecnologias">
                    <strong>Tecnologías:</strong> ${proyecto.tecnologias}
                </div>
                ${proyecto.link ? `<a href="${proyecto.link}" class="proyecto-link" target="_blank">Ver proyecto</a>` : ''}
            </div>
        </div>
    `;
}


// ============ EVENTOS ============
document.addEventListener('DOMContentLoaded', cargarProyectos);

// Agregar nueva tarjeta al hacer clic
document.getElementById('agregar-tarjeta-proyecto').addEventListener('click', () => {
    agregarTarjetaProyecto();
});

// Manejador delegado para guardar/eliminar
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-guardar')) {
        guardarProyecto(e.target.dataset.id);
    } else if (e.target.classList.contains('btn-eliminar')) {
        if (confirm("¿Eliminar proyecto?")) {
            eliminarProyecto(e.target.dataset.id);
        }
    }



// Inicializar el filtrado cuando el DOM esté cargado
    document.addEventListener('DOMContentLoaded', () => {
        cargarProyectos('proyectos-container', 'publico');

    });

});
