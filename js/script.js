//Definir un listado de productos como objetos

const productos = {
    "1": { nombre: "Fender Vintage II 1961 Stratocaster - Fiesta Red", precio: 2299 },
    "2": { nombre: "Fender Professional II Telecaster - Butterscotch Blonde", precio: 1899 },
    "3": { nombre: "Gibson Les Paul Standard '60s - Honey Amber", precio: 2799 },
    "4": { nombre: "Gibson ES-335 Semi-hollowbody - Sixties Cherry", precio: 3499 },
    "5": { nombre: "Ibanez Genesis RG550 - Desert Sun Yellow", precio: 999 },
    "6": { nombre: "Ibanez Prestige AZ2204NW - Pastel Pink", precio: 1999 },
};

// Setear la calculadora del carrito de compras dentro del prompt en 0 y sus variables

const calcularTotal = (productosSeleccionados) => {
    let total = 0;
    productosSeleccionados.forEach((item) => {
        total += productos[item.id].precio * item.cantidad;
    });
    return total;
};

// Armado del menu del prompt

const construirMenu = () => {
    let menu = "Bienvenido a Overdrive. Utilice solo los numeros (0-6) para elegir la opcion deseada:\n";
    for (let key in productos) {
        menu += `${key}. ${productos[key].nombre} - $${productos[key].precio}\n`;
    }
    menu += "0. Ir al carrito de compras";
    return menu;
};

// Funcion base para iniciarlizar el prompt

const Interaccion = () => {
    const productosSeleccionados = [];
    const menu = construirMenu();

    do {
        const opcion = prompt(`${menu}\n`);

        // Determinar las variables posibles elegidas por el usuario y metodo de seguridad para evitar el quiebre del codigo
        if (opcion === "0") {
            break;
        } else if (productos[opcion]) {
            const productoExistente = productosSeleccionados.find(item => item.id === opcion);
            if (productoExistente) {
                productoExistente.cantidad += 1;
            } else {
                productosSeleccionados.push({ id: opcion, cantidad: 1 });
            }
            alert(`Producto seleccionado: ${productos[opcion].nombre}`);
        } else {
            alert("Opción inválida. Por favor, ingrese un número de producto válido.");
        }
    } while (true);

    // Sumatoria total de los productos seleccionados y como sera mostrado en pantalla

    const totalAPagar = calcularTotal(productosSeleccionados);
    let resumen = "Productos seleccionados:\n";
    productosSeleccionados.forEach((item) => {
        resumen += `${productos[item.id].nombre} - Cantidad: ${item.cantidad} - Subtotal: $${productos[item.id].precio * item.cantidad}\n`;
    });
    resumen += `Total a pagar: $${totalAPagar}`;
    alert(resumen);
};

// Arranque de la funcion al cargar la pagina

Interaccion();