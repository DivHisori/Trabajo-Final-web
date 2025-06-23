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
    const nombreInput = document.getElementById('nombre');
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
    const apellidoInput = document.getElementById('apellido');
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
        socialItem.classList.add('social-item');
        socialItem.dataset.social = item.social; // Guardar el nombre de la red social
        socialItem.innerHTML = `
            <span>${item.social}: ${item.link}</span>
            <button class="btn-edit" data-social="${item.social}">Editar</button>
            <button class="btn-remove" data-social="${item.social}">Eliminar</button>
        `;
        socialList.appendChild(socialItem);

        // Manejo de edición y eliminación
        const btnEdit = socialItem.querySelector('.btn-edit');
        const btnRemove = socialItem.querySelector('.btn-remove');

        btnEdit.addEventListener('click', function() {
            socialSelect.value = item.social;
            socialLink.value = item.link;
            socialListData = socialListData.filter(i => i.social !== item.social); // Eliminar el elemento para editar
            localStorage.setItem('socialList', JSON.stringify(socialListData));
            renderSocialList(); // Renderizar la lista actualizada
        });

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
    const dato = document.getElementById('contact-input').value.trim();
    if (!tipo || !dato) {
        alert('Por favor, selecciona un medio y completa el dato.');
        return;
    }
    const contactos = JSON.parse(localStorage.getItem('contactos')) || {};
    // Verificar si ya existe un contacto de este tipo
    if (contactos[tipo]) {
        alert(`Ya existe un contacto de tipo ${tipo}.`);
        return;
    }
// Guardar el nuevo contacto
    contactos[tipo] = dato;
    localStorage.setItem('contactos', JSON.stringify(contactos));
    crearContactoElemento(tipo, dato);
    document.getElementById('contact-input').value = ''; // Limpiar el input
    document.getElementById('contact-type').value = ''; // Reiniciar el selector
}
function crearContactoElemento(tipo, dato) {
    const contactosList = document.getElementById('contactos-list');
    const contactoDiv = document.createElement('div');
    contactoDiv.className = 'contact-box';
    contactoDiv.id = tipo;
    // Asignar un ícono basado en el tipo de contacto
    let icono;
    switch (tipo) {
        case 'telefono':
            icono = '<i class="fa-solid fa-phone"></i>';
            break;
        case 'Ubicacion':
            icono = '<i class="fa-solid fa-location-dot"></i>';
            break;
        case 'correo':
            icono = '<i class="fa-solid fa-envelope"></i>';
            break;
        default:
            icono = '';
    }
    contactoDiv.innerHTML = `
        ${icono}
        <div>
            <strong>${tipo.charAt(0).toUpperCase() + tipo.slice(1)}:</strong> ${dato}
        </div>
        <button onclick="editarContacto('${tipo}')">Editar</button>
        <button onclick="eliminarContacto('${tipo}')">Eliminar</button>
    `;
    contactosList.appendChild(contactoDiv);
}
function editarContacto(tipo) {
    const contactos = JSON.parse(localStorage.getItem('contactos'));
    const nuevoDato = prompt(`Edita el dato para ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}:`, contactos[tipo]);
    if (nuevoDato !== null && nuevoDato.trim() !== '') {
        contactos[tipo] = nuevoDato.trim();
        localStorage.setItem('contactos', JSON.stringify(contactos));
        document.getElementById(tipo).querySelector('div').innerHTML = `<strong>${tipo.charAt(0).toUpperCase() + tipo.slice(1)}:</strong> ${contactos[tipo]}`;
    }
}
function eliminarContacto(tipo) {
    const contactos = JSON.parse(localStorage.getItem('contactos'));
    delete contactos[tipo];
    localStorage.setItem('contactos', JSON.stringify(contactos));
    document.getElementById(tipo).remove();
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
function cargarContactos() {
    const contactos = JSON.parse(localStorage.getItem('contactos')) || {};
    for (const [key, value] of Object.entries(contactos)) {
        crearContactoElemento(key, value);
    }
}

function guardarContacto() {
    const tipo = document.getElementById('contact-type').value;
    const dato = document.getElementById('contact-input').value.trim();
    if (!tipo || !dato) {
        alert('Por favor, selecciona un medio y completa el dato.');
        return;
    }
    const contactos = JSON.parse(localStorage.getItem('contactos')) || {};
    // Verificar si ya existe un contacto de este tipo
    if (contactos[tipo]) {
        alert(`Ya existe un contacto de tipo ${tipo}.`);
        return;
    }
    // Guardar el nuevo contacto
    contactos[tipo] = dato;
    localStorage.setItem('contactos', JSON.stringify(contactos));
    crearContactoElemento(tipo, dato);
    document.getElementById('contact-input').value = ''; // Limpiar el input
    document.getElementById('contact-type').value = ''; // Reiniciar el selector
}

function crearContactoElemento(tipo, dato) {
    const contactosList = document.getElementById('contactos-list');
    const contactoDiv = document.createElement('div');
    contactoDiv.className = 'contact-box';
    contactoDiv.id = tipo;
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
        ${icono}
        <div>
            <strong>${tipo.charAt(0).toUpperCase() + tipo.slice(1)}:</strong> ${dato}
        </div>
        <button onclick="editarContacto('${tipo}')">Editar</button>
        <button onclick="eliminarContacto('${tipo}')">Eliminar</button>
    `;
    contactosList.appendChild(contactoDiv);
}

function editarContacto(tipo) {
    const contactos = JSON.parse(localStorage.getItem('contactos'));
    const nuevoDato = prompt(`Edita el dato para ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}:`, contactos[tipo]);
    if (nuevoDato !== null && nuevoDato.trim() !== '') {
        contactos[tipo] = nuevoDato.trim();
        localStorage.setItem('contactos', JSON.stringify(contactos));
        document.getElementById(tipo).querySelector('div').innerHTML = `<strong>${tipo.charAt(0).toUpperCase() + tipo.slice(1)}:</strong> ${contactos[tipo]}`;
    }
}

function eliminarContacto(tipo) {
    const contactos = JSON.parse(localStorage.getItem('contactos'));
    delete contactos[tipo];
    localStorage.setItem('contactos', JSON.stringify(contactos));
    document.getElementById(tipo).remove();
}

// Funciones para gestionar datos de experiencias
function cargarDatos() {
    document.getElementById('titulo-1-input').value = localStorage.getItem('titulo1') || '';
    document.getElementById('entrada-1-input').value = localStorage.getItem('entrada1') || '';
    document.getElementById('titulo-2-input').value = localStorage.getItem('titulo2') || '';
    document.getElementById('entrada-2-input').value = localStorage.getItem('entrada2') || '';
    document.getElementById('titulo-3-input').value = localStorage.getItem('titulo3') || '';
    document.getElementById('entrada-3-input').value = localStorage.getItem('entrada3') || '';
    document.getElementById('titulo-4-input').value = localStorage.getItem('titulo4') || '';
    document.getElementById('entrada-4-input').value = localStorage.getItem('entrada4') || '';
    document.getElementById('titulo-5-input').value = localStorage.getItem('titulo5') || '';
    document.getElementById('entrada-5-input').value = localStorage.getItem('entrada5') || '';
    document.getElementById('titulo-6-input').value = localStorage.getItem('titulo6') || '';
    document.getElementById('entrada-6-input').value = localStorage.getItem('entrada6') || '';
    document.getElementById('titulo-7-input').value = localStorage.getItem('titulo7') || '';
    document.getElementById('entrada-7-input').value = localStorage.getItem('entrada7') || '';
    document.getElementById('titulo-8-input').value = localStorage.getItem('titulo8') || '';
    document.getElementById('entrada-8-input').value = localStorage.getItem('entrada8') || '';
}

function guardarCambios() {
    localStorage.setItem('titulo1', document.getElementById('titulo-1-input').value);
    localStorage.setItem('entrada1', document.getElementById('entrada-1-input').value);
    localStorage.setItem('titulo2', document.getElementById('titulo-2-input').value);
    localStorage.setItem('entrada2', document.getElementById('entrada-2-input').value);
    localStorage.setItem('titulo3', document.getElementById('titulo-3-input').value);
    localStorage.setItem('entrada3', document.getElementById('entrada-3-input').value);
    localStorage.setItem('titulo4', document.getElementById('titulo-4-input').value);
    localStorage.setItem('entrada4', document.getElementById('entrada-4-input').value);
    localStorage.setItem('titulo5', document.getElementById('titulo-5-input').value);
    localStorage.setItem('entrada5', document.getElementById('entrada-5-input').value);
    localStorage.setItem('titulo6', document.getElementById('titulo-6-input').value);
    localStorage.setItem('entrada6', document.getElementById('entrada-6-input').value);
    localStorage.setItem('titulo7', document.getElementById('titulo-7-input').value);
    localStorage.setItem('entrada7', document.getElementById('entrada-7-input').value);
    localStorage.setItem('titulo8', document.getElementById('titulo-8-input').value);
    localStorage.setItem('entrada8', document.getElementById('entrada-8-input').value);
    alert("Cambios guardados exitosamente.");
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
  