
# Tu primer API REST con NodeJS, Express y MongoDB

Si estás comenzando en el desarrollo backend, crear una API REST es uno de los mejores proyectos para familiarizarte con los conceptos y herramientas clave. En este tutorial, aprenderás a construir una API RESTful utilizando NodeJS, Express, y MongoDB como base de datos. Te guiaremos paso a paso para crear un CRUD básico que podrás expandir y adaptar a tus proyectos.

## ¿Qué aprenderás?

- Cómo configurar un proyecto con NodeJS y Express.
- Conectar y manipular datos en MongoDB.
- Crear rutas para operaciones CRUD (Create, Read, Update, Delete).
- Estructurar tu código para un API REST básica.

### Requisitos previos

Es recomendable que tengas conocimientos básicos de JavaScript y que tengas instalado NodeJS y MongoDB en tu máquina. Para instalar las dependencias de NodeJS, puedes utilizar npm:

```bash
npm init -y
npm install express mongoose
```

### 1. Configuración del servidor con Express

Empezamos creando un archivo `index.js` que servirá como punto de entrada para nuestra aplicación y donde configuraremos Express.

```javascript
/* index.js */
const express = require('express');

const app = express();
app.use(express.json());

app.listen(3300, () => {    //Puedes cambiar el puerto de ser necesario
  console.log("Servidor corriendo en http://localhost:3300");
});
```

### 2. Creación del archivo de conexión a base de datos

Ahora crearemos el archivo que concentrará la conexión a la base de datos.

```javascript
/* config.js */
// Conectar a MongoDB usando mongoose
const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/miapi");  //Puedes cambiar el nombre de la base de datos
    console.log("conectado a la base de datos");
  } catch (error) {
    console.log(error);
    throw new Error("error al conectar a la base de datos");
  }
};

module.exports = dbConnection;
```

Ahora debemos usar la función `dbConnection` en nuestro archivo `index.js`.

```javascript
/* index.js */
const express = require('express');
const dbConnection = require("./config");

const app = express();
app.use(express.json());

dbConnection();

app.listen(3300, () => {
  console.log("Servidor corriendo en http://localhost:3300");
});
```

### 3. Creación de un modelo con Mongoose

Vamos a definir un modelo de datos básico usando Mongoose. En este ejemplo, crearemos un esquema para una colección llamada "Usuarios".

```javascript
const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombre: {
    type: String    //Establecemos un tipo de dato para cada propiedad del modelo
    required: true,
  },
  correo: {
    type: String,
    unique: true,   //Podemos hacer la validacion de unique la cual no permite duplicados en la bd
    required: true, //Podemos también establecerlo como requerido
  },
  edad: Number  //De esta forma también podemos definir una propiedad del modelo
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
```

### 4. Creación de rutas para la API

Ahora vamos a crear las rutas para manejar las operaciones CRUD. Para mantener el código organizado, crearemos un archivo `routes.js` donde definiremos las rutas y las operaciones.

```javascript
/* routes.js */
const express = require('express');
const Usuario = require('./Usuario'); // Modelo de Usuario
const router = express.Router();

// Crear un nuevo usuario
router.post('/usuarios', async (req, res) => {
  try {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.status(201).json({
      ok: true,
      msg: "usuario guardado con exito"
    });
  } catch (error) {
    res.status(400).json({
      ok: false
      msg: "no se pudo guardar al usuario"
    });
  }
});

// Obtener todos los usuarios
router.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json({
      ok: true,
      msg "usuarios obtenidos",
      data: usuarios
    });
  } catch (error) {
    res.status(500).json({
      ok: false
      msg: "no se pudo obtener los usuarios"
    });
  }
});

// Actualizar un usuario por ID
router.put('/usuarios/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body);
    if (!usuario) {
      return res.status(404).json({
        ok: false,
        msg "no existe ese usuario en la base de datos"
      });
    }
    
    res.json({
      ok: true,
      msg "usuario actualizado"
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      msg "no se pudo actualizar usuario",
    });
  }
});

// Eliminar un usuario por ID
router.delete('/usuarios/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuario) {
      return res.status(404).json({
        ok: false,
        msg "no existe ese usuario en la base de datos"
      });
    }
    res.json({
      ok: true,
      msg "usuario eliminado"
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg "no se pudo eliminar usuario",
    });
  }
});

module.exports = router;
```

### 5. Integración de las rutas en el servidor

Finalmente, importaremos nuestras rutas en el archivo `index.js` para que estén disponibles en nuestra API.

```javascript
const express = require('express');
const dbConnection = require("./config");
const usuarioRoutes = require('./routes');

const app = express();
app.use(bodyParser.json());

dbConnection();

app.use('/api', usuarioRoutes); // Rutas base

app.listen(3300, () => {
  console.log("Servidor corriendo en http://localhost:3300");
});
```

### Conclusión

¡Felicidades! Has construido tu primera API RESTful utilizando NodeJS, Express, y MongoDB. Ahora tienes un punto de partida para crear y escalar aplicaciones web con funcionalidades de backend. No olvides explorar y experimentar con conceptos adicionales como la autenticación, autorización y validación de datos para llevar tu API al siguiente nivel.
