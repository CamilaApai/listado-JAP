

document.addEventListener("DOMContentLoaded", function() {
    cargarItems();
    
    document.getElementById("agregar").addEventListener("click", agregarItem);
    
    document.getElementById("limpiar").addEventListener("click", limpiarItems);
});
  
  //Se agregue el nuevo ítem al listado guardado
  function cargarItems() {
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = ""; 
    
    const items = JSON.parse(localStorage.getItem("items")) || [];
    
    items.forEach(item => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = item;
        contenedor.appendChild(li);
      });
  }
  
//Se actualice la vista del listado
  function agregarItem() {
    const nuevoItem = document.getElementById("item").value.trim();
    
    if (nuevoItem !== '') {
      const items = JSON.parse(localStorage.getItem("items")) || [];
      items.push(nuevoItem); 
      localStorage.setItem("items", JSON.stringify(items));

//Se actualice la vista del listado (ahora vacío)
 cargarItems(); 
      document.getElementById("item").value = ""; 
    }
  }

  //Se elimine el listado almacenado
  function limpiarItems() {
    localStorage.removeItem("items");
    cargarItems(); 
  }



  

