Entrega Final.

Single-Page Application desarrollada con **React**, **React Router**, **Context API** y **Firebase Firestore**.  
Permite navegar un catálogo, ver detalles, añadir productos a un carrito global y finalizar la compra generando una orden en Firestore.

---

## ✨ Funcionalidades principales

* Catálogo dinámico consultado en Firestore  
* Filtro por categorías (`/category/:id`)  
* Vista detalle con selector de unidades y validación de stock  
* Carrito global vía Context (add, remove, cambiar cantidad, persistencia localStorage)  
* Checkout con formulario validado, creación de orden y devolución del ID  
* Renderizado condicional: loaders, mensajes de “sin productos”, “carrito vacío”, etc.  
* Diseño responsive; navegación SPA sin recargas (404 incluida)

---

## 🗂 Estructura de carpetas


src/
 ├─ components/        // UI + contenedores
 ├─ context/           // CartContext
 ├─ firebase/          // inicialización firebase.js
 ├─ services/          // productos / órdenes (Firestore)
 └─ App.js             // rutas principales


---

## 🚀 Instalación rápida

1. Clonar el repositorio  
   `$ git clone https://github.com/<tu-usuario>/ProyectoFinal+Waisberg.git`

2. Instalar dependencias  
   `$ cd ProyectoFinal+Waisberg`  
   `$ npm install`

3. Copiar variables de entorno  
   `$ cp .env.example .env.local`  
   Editá `.env.local` con **tus** claves de Firebase:


REACT_APP_FIREBASE_API_KEY=AIzaSyDMbImYnpWUPTj3l-BNakmay6XGf1S9xLs
REACT_APP_FIREBASE_AUTH_DOMAIN=ecommerce-coder-b4065.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=ecommerce-coder-b4065
REACT_APP_FIREBASE_STORAGE_BUCKET=ecommerce-coder-b4065.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=758689354602
REACT_APP_FIREBASE_APP_ID=1:758689354602:web:f85849d4c34cd807b3cb13


4. Iniciar el servidor de desarrollo  
   `$ npm start`

---

## 📄 Scripts disponibles

| Comando              | Qué hace                                     |
| -------------------- | -------------------------------------------- |
| `npm start`          | Dev-server con hot-reload                    |
| `npm run build`      | Genera build optimizado en `build/`          |
| `npm run lint`       | Analiza el código con ESLint                 |
| `npm run lint:fix`   | Analiza **y** corrige lo que sea posible     |

---

## 🛠 Configuración de Firestore

**Colección `products`**  
Campos recomendados: `name` (string), `description` (string), `price` (number), `category` (string), `image` (string URL), `stock` (number).

**Colección `orders`**  
Se crea automáticamente al confirmar el checkout.

Reglas de desarrollo (abrir lectura de productos, permitir escritura de órdenes):

```
rules_version = '2';
service cloud.firestore {
  match /databases/{db}/documents {
    match /products/{id} { allow read: if true; }
    match /orders/{id}   { allow write: if true; allow read: if false; }
  }
}
```

---

## 🧹 Lint y limpieza

* Ejecutar `npm run lint` para ver advertencias.  
* Ejecutar `npm run lint:fix` para formatear y eliminar errores simples.  
* Buscar cualquier `console.log` antes de hacer commit:  
  `$ grep -rn "console.log" src/`

---

## 🌐 Deploy sugerido (Vercel / Netlify)

1. Importar el repositorio.  
2. Framework: **Create React App**.  
3. Añadir en la sección Environment Variables las mismas claves `REACT_APP_*`.  
4. Deploy y listo.

---

## 👩‍💻 Autora

Jimena Waisberg – CoderHouse React JS – 2025
