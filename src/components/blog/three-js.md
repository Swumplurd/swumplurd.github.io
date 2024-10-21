
# Crea tu primer escena 3D con ThreeJS

¿Quieres dar tus primeros pasos en el mundo del desarrollo 3D para la web? ThreeJS es una librería poderosa y sencilla que te permite crear escenas 3D increíbles de manera rápida y eficiente. En este tutorial, te enseñaremos cómo crear tu primera escena 3D paso a paso, desde la configuración básica hasta la aplicación de texturas.

## ¿Qué aprenderás?

- Cómo configurar una escena 3D en ThreeJS.
- Crear una esfera geométrica.
- Añadir iluminación ambiental y puntual.
- Cargar y aplicar texturas a tus objetos.

### Requisitos previos

Antes de comenzar, asegúrate de tener un conocimiento básico de JavaScript y haber instalado ThreeJS en tu proyecto. Si no lo has hecho, puedes agregarlo a tu proyecto mediante un gestor de paquetes como npm:

```bash
npm install three
```

### 1. Configurando tu escena

El primer paso es crear una escena básica. Para esto, necesitarás tres componentes clave: la **escena**, la **cámara** y el **renderizador**.

```javascript
import * as THREE from 'three';

// Crear la escena
const scene = new THREE.Scene();

// Crear la cámara (Campo de visión, proporción, cercanía, lejanía)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Crear el renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
```

### 2. Creando una esfera

Vamos a crear una esfera utilizando la clase `SphereGeometry` de ThreeJS. Luego aplicaremos un material simple para visualizarla.

```javascript
// Crear geometría de la esfera
const geometry = new THREE.SphereGeometry(1, 32, 32);

// Crear material de la esfera
const material = new THREE.MeshBasicMaterial({ color: 0x0077ff });

// Crear la malla
const sphere = new THREE.Mesh(geometry, material);

// Añadir la esfera a la escena
scene.add(sphere);
```

### 3. Añadiendo luces

Las luces son fundamentales para hacer que tu escena se vea realista. Añadiremos luz ambiental para iluminar de manera uniforme y luz puntual para resaltar la esfera.

```javascript
// Añadir luz ambiental
const ambientLight = new THREE.AmbientLight(0x404040); // Luz suave
scene.add(ambientLight);

// Añadir luz puntual
const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);
```

### 4. Cargando y aplicando texturas

Para darle un toque más realista a nuestra esfera, cargaremos una textura utilizando la clase `TextureLoader` de ThreeJS.

```javascript
// Cargar una textura
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('ruta/a/tu/imagen.jpg');

// Aplicar la textura a un nuevo material
const texturedMaterial = new THREE.MeshBasicMaterial({ map: texture });

// Actualizar la esfera con el nuevo material
sphere.material = texturedMaterial;
```

### 5. Animando la escena

Para que la esfera sea interactiva, vamos a crear una animación simple que haga girar la esfera continuamente.

```javascript
function animate() {
  requestAnimationFrame(animate);

  // Rotar la esfera
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;

  // Renderizar la escena
  renderer.render(scene, camera);
}

// Iniciar la animación
animate();
```

### Conclusión

¡Felicidades! Has creado tu primera escena 3D con ThreeJS, añadiendo una esfera, luces y texturas. Esto es solo el principio: con ThreeJS puedes crear todo tipo de geometrías, cargar modelos 3D más complejos y explorar técnicas avanzadas de iluminación. ¡Sigue explorando y divirtiéndote en el mundo del 3D!
