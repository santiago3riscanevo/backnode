//arcivo para arrancar la aplicacion, es decir el servidor
const express = require('express'); // modulo expres
const app = express(); //inicializarlo y ejecutarlo
const path = require('path'); // mpodulo path, ayuda atrabajar con las carpetas, donde esta un archivo etc

//======> empezar a usarlos
// decirle a expres que entienda los valores de un formulario
app.use(express.urlencoded({extended: false}));
// para recibi de angular, react 
app.use(express.json());

// decirle a express donde voy a colocar mis archivos HTML, CSS , JS_funcional
/*como voy a enregar el archivo HTML 
    - leyendo el archivo y pasandole Ó
    - diciendole a express que public es una carpeta publica, es decir que el navegador o cualquier otra app cliente puede accdeder a todo lo que esta dentro de esa carpeta
*/
app.use(express.static(path.join(__dirname, 'public')))
// __dirname va a dar la ruta completa de la carpeta src. una vez me diga esa ruta le voy a decir que adentro hay una carpeta public y se concatene

//importar las rutas
app.use(require('./routs/routs.js'));// tengo la manera de poder leer mi archivo routs


// encender mi server online
app.listen(3005, ()=>{
    console.log('server on port 3005')
});
