class Libro {
    constructor(id, titulo, autor, editorial, anio, genero, enlace) {
      this.id = id;
      this.titulo = titulo;
      this.autor = autor;
      this.editorial = editorial;
      this.anio = anio;
      this.genero = genero;
      this.enlace = enlace;
    }
}
  
  let libros = [
    new Libro(1, 'El señor de los anillos', 'J.R.R. Tolkien', 'Panini', 1954, 'Terror', 'https://fecolsa.com.co/upload/Actividades%20Equilibrio%20Total/Rowling,%20J.%20K.%20-%20%20Harry%20Potter%20y%20la%20piedra%20filosofal.pdf'),
    new Libro(2, 'La divina comedia', 'Miguel de Cervantes', 'Evergreen Books', 1997, 'Novela', 'https://fecolsa.com.co/upload/Actividades%20Equilibrio%20Total/Rowling,%20J.%20K.%20-%20%20Harry%20Potter%20y%20la%20piedra%20filosofal.pdf'),
    new Libro(3, 'El señor de los anillos', 'J.R.R. Tolkien', 'Panini', 1954, 'Terror', 'https://fecolsa.com.co/upload/Actividades%20Equilibrio%20Total/Rowling,%20J.%20K.%20-%20%20Harry%20Potter%20y%20la%20piedra%20filosofal.pdf'),
    new Libro(4, 'La divina comedia', 'Miguel de Cervantes', 'Evergreen Books', 1997, 'Novela', 'https://fecolsa.com.co/upload/Actividades%20Equilibrio%20Total/Rowling,%20J.%20K.%20-%20%20Harry%20Potter%20y%20la%20piedra%20filosofal.pdf'),
    new Libro(1, 'El señor de los anillos', 'J.R.R. Tolkien', 'Panini', 1954, 'Terror', 'https://fecolsa.com.co/upload/Actividades%20Equilibrio%20Total/Rowling,%20J.%20K.%20-%20%20Harry%20Potter%20y%20la%20piedra%20filosofal.pdf'),
    new Libro(2, 'La divina comedia', 'Miguel de Cervantes', 'Evergreen Books', 1997, 'Novela', 'https://fecolsa.com.co/upload/Actividades%20Equilibrio%20Total/Rowling,%20J.%20K.%20-%20%20Harry%20Potter%20y%20la%20piedra%20filosofal.pdf'),
    new Libro(3, 'El señor de los anillos', 'J.R.R. Tolkien', 'Panini', 1954, 'Terror', 'https://fecolsa.com.co/upload/Actividades%20Equilibrio%20Total/Rowling,%20J.%20K.%20-%20%20Harry%20Potter%20y%20la%20piedra%20filosofal.pdf'),
    new Libro(4, 'La divina comedia', 'Miguel de Cervantes', 'Evergreen Books', 1997, 'Novela', 'https://fecolsa.com.co/upload/Actividades%20Equilibrio%20Total/Rowling,%20J.%20K.%20-%20%20Harry%20Potter%20y%20la%20piedra%20filosofal.pdf'),
    new Libro(2, 'La divina comedia', 'Miguel de Cervantes', 'Evergreen Books', 1997, 'Novela', 'https://fecolsa.com.co/upload/Actividades%20Equilibrio%20Total/Rowling,%20J.%20K.%20-%20%20Harry%20Potter%20y%20la%20piedra%20filosofal.pdf'),
    new Libro(3, 'El señor de los anillos', 'J.R.R. Tolkien', 'Panini', 1954, 'Historia', 'https://fecolsa.com.co/upload/Actividades%20Equilibrio%20Total/Rowling,%20J.%20K.%20-%20%20Harry%20Potter%20y%20la%20piedra%20filosofal.pdf'),
    new Libro(4, 'La divina comedia', 'Miguel de Cervantes', 'Evergreen Books', 1997, 'Historia', 'https://fecolsa.com.co/upload/Actividades%20Equilibrio%20Total/Rowling,%20J.%20K.%20-%20%20Harry%20Potter%20y%20la%20piedra%20filosofal.pdf')

  ]
  function mostrarLibrosPorGenero(genero) {

    if(genero.toLowerCase() === 'todo'){
      const title = document.getElementById('title');
      title.textContent = 'Libros disponibles';
    }else if('novela' === genero.toLowerCase()){
      title.textContent = 'Libros de Novelas';
    }else if('terror' === genero.toLowerCase()){
      title.textContent = 'Libros de Terror';
    }else if('historia' === genero.toLowerCase()){
      title.textContent = 'Libros de Historia';
    }

    const librosFiltrados = (genero.toLowerCase() === 'todo') ? libros 
    : libros.filter(libro => libro.genero.toLowerCase() === genero.toLowerCase());
      
    const contenedor = document.getElementById('content');
    contenedor.innerHTML = '';
  
    librosFiltrados.forEach(libro => {
    
      const card = document.createElement('div');
      card.className = 'card bg-dark text-white m-2';
      card.style.width = '15rem';
  
      card.innerHTML = `
      <div class="container mt-3">
            <div class="row gap-5 d-flex">
                <img src="assets/img/libro${libro.id}.PNG" class="card-img-top" alt="${libro.titulo}">
                <div class="card-body text-center">
                <h5 class="card-title">${libro.titulo}</h5>
                <p class="card-text">${libro.autor} - ${libro.editorial} (${libro.anio})</p>
                <a href="${libro.enlace}" class="btn btn-dark w-100" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                    </svg>
                </a>
                </div>
             </div>
        </div>   
      `;
      contenedor.appendChild(card);
    });
  }


  function buscarPorNombre() {
    const nombre = document.getElementById('input-busqueda').value.toLowerCase();
    const librosFiltrados = libros.filter(libro => libro.titulo.toLowerCase().includes(nombre.toLowerCase()));
    const contenedor = document.getElementById('content');
    contenedor.innerHTML = '';

    librosFiltrados.forEach(libro => {
    
      const card = document.createElement('div');
      card.className = 'card bg-dark text-white m-2';
      card.style.width = '15rem';
  
      card.innerHTML = `
      <div class="container mt-3">
            <div class="row gap-5 d-flex">
                <img src="assets/img/libro${libro.id}.PNG" class="card-img-top" alt="${libro.titulo}">
                <div class="card-body text-center">
                <h5 class="card-title">${libro.titulo}</h5>
                <p class="card-text">${libro.autor} - ${libro.editorial} (${libro.anio})</p>
                <a href="${libro.enlace}" class="btn btn-dark w-100" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                    </svg>
                </a>
                </div>
             </div>
        </div>   
      `;
      contenedor.appendChild(card);
    });

  }

  function mostrarTodosLosLibros() {
   mostrarLibrosPorGenero('todo'); 
  }

  document.addEventListener("DOMContentLoaded", mostrarTodosLosLibros);
  
  
  