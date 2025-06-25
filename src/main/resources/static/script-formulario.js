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

//
//
//
// ============ FUNCIÓN PARA AGREGAR TARJETA PROYECTO ============
function agregarTarjetaProyecto(imagen = "", titulo = "", fecha = "", servicio = "", descripcion = "", tecnologias = "", link = "", id = null) {
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
    <div class="form-group">
      <label for="tecnologiasc-${tarjetaId}">Tecnologías:</label>
      <select id="tecnologias-${tarjetaId}" class="input-tecnologias">
        <option value="">Selecciona una tecnología</option>
        <option value="Chow">chow</option>
        <!-- Opciones se cargarán desde localStorage (implementar luego) -->
        aasd
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
    const link = tarjeta.querySelector('.input-link').value.trim();
// Validar campos
if (!titulo || !fecha || !servicio || !descripcion || !tecnologias) {
    alert("Completa los campos obligatorios (*).");
    return;
}
// Crear objeto proyecto
const proyecto = { titulo, fecha, servicio, descripcion, tecnologias, link };
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
// Función para cargar proyectos desde localStorage
function cargarProyectos(containerId = 'container-tarjetas-proyectos', modo = 'edicion') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const proyectos = JSON.parse(localStorage.getItem('proyectos')) || [];
    container.innerHTML = '';

    proyectos.forEach((proyecto, index) => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-proyecto';

        if (modo === 'edicion') {
            // Vista para editor.html
            tarjeta.innerHTML = crearVistaEdicion(proyecto, index);
        } else {
            // Vista para proyectos.html
            tarjeta.innerHTML = crearVistaPublica(proyecto);
        }

        container.appendChild(tarjeta);
    });
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
            <div class="proyecto-info" data-categoria="web">
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
});
