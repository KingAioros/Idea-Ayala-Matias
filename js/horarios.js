let horariosFila1 = [
    {
      class: "f1Uno",
      nombre: "Adultos Mayores",
    },
    {
      class: "f1Dos",
      nombre: "10 am - 11 am",
    },
    {
      class: "f1Tres",
      nombre: "Marcela Allende",
    },
    {
      class: "f1Cuatro",
      nombre: "Baja",
    }
  ];
  let horariosFila2 = [
    {
      class: "f2Uno",
      nombre: "Boxeo",
    },
    {
      class: "f2Dos",
      nombre: "6 pm - 7 pm",
    },
    {
      class: "f2Tres",
      nombre: 'Néstor "TITO" Giovanni',
    },
    {
      class: "f2Cuatro",
      nombre: "Alta",
    }
  ];
  let horariosFila3 = [
    {
      class: "f3Uno",
      nombre: "Funcional - Circuito",
    },
    {
      class: "f3Dos",
      nombre: "6 pm - 7 pm",
    },
    {
      class: "f3Tres",
      nombre: "Agustina Gimenez",
    },
    {
      class: "f3Cuatro",
      nombre: "Media",
    }
  ];
  let horariosFila4 = [
    {
      class: "f4Uno",
      nombre: "Boxeo",
    },
    {
      class: "f4Dos",
      nombre: "7 pm - 8 pm",
    },
    {
      class: "f4Tres",
      nombre: 'Néstor "TITO" Giovanni',
    },
    {
      class: "f4Cuatro",
      nombre: "Alta",
    }
  ];
  let horariosFila5 = [
    {
      class: "f5Uno",
      nombre: "Circuito",
    },
    {
      class: "f5Dos",
      nombre: "3 pm - 4 pm",
    },
    {
      class: "f5Tres",
      nombre: "Agustina Gimenez",
    },
    {
      class: "f5Cuatro",
      nombre: "Alta",
    }
  ];
  let horariosFila6 = [
    {
      class: "f6Uno",
      nombre: "Zumba",
    },
    {
      class: "f6Dos",
      nombre: "8 pm - 9 pm",
    },
    {
      class: "f6Tres",
      nombre: "Agustina Gimenez",
    },
    {
      class: "f6Cuatro",
      nombre: "Baja - Media",
    }
  ];
  let lunes = document.getElementById("A1");
  let martes = document.getElementById("A2");
  let miercoles = document.getElementById("A3");
  let jueves = document.getElementById("A4");
  let viernes = document.getElementById("A5");
  let sabado = document.getElementById("A6");
  
  lunes.onclick = () =>{
  document.querySelector("#filaE > tr").remove();
  CrearCalentario("filaUno", horariosFila1);
  
  }

  martes.onclick = () =>{
  document.querySelector("#filaE > tr").remove();
  CrearCalentario("filaDos", horariosFila2);
  }

  miercoles.onclick = () =>{
    document.querySelector("#filaE > tr").remove();
    CrearCalentario("filaTres", horariosFila3);
    }

  jueves.onclick = () =>{
    document.querySelector("#filaE > tr").remove();
    CrearCalentario("filaCuatro", horariosFila4);
    }
  viernes.onclick = () =>{
    document.querySelector("#filaE > tr").remove();
    CrearCalentario("filaCinco", horariosFila5);
    }
  sabado.onclick = () =>{
    document.querySelector("#filaE > tr").remove();
    CrearCalentario("filaSeis", horariosFila6);
    }


  let CrearCalentario = (fila,horario) => {
    let contenedor = document.createElement("tr");
    contenedor.className = `${fila}`;
    for (const producto of horario) {
      //Definimos el innerHTML del elemento con una plantilla de texto
      contenedor.innerHTML = contenedor.innerHTML + `
      <td class="${producto.class}">${producto.nombre}</td>
      `;
      padre.appendChild(contenedor);
    }
  }
   let padre = document.getElementById("filaE");
   CrearCalentario("filaUno", horariosFila1);
  