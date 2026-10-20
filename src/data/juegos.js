/* Datos migrados del catálogo LevelUp Store original. Las imágenes se cargan del repositorio público;
   si no hay conexión, se muestra un marcador visual en CSS. */
export const juegos = [
  {
    "id": "gow-ragnarok",
    "titulo": "God of War Ragnarök",
    "plataforma": "ps5",
    "genero": "Acción / Aventura",
    "precio": 44990,
    "precioAnterior": 54990,
    "descripcion": "Kratos y Atreus enfrentan el Ragnarök en una aventura de acción y mitología nórdica.",
    "imagen": "https://raw.githubusercontent.com/JonaSlack/version_final/main/levelup-store/assets/img/juegos/gow-ragnarok.jpg",
    "emoji": "⚔️",
    "destacado": true
  },
  {
    "id": "spiderman-2",
    "titulo": "Marvel’s Spider-Man 2",
    "plataforma": "ps5",
    "genero": "Acción / Mundo abierto",
    "precio": 42990,
    "precioAnterior": null,
    "descripcion": "Peter Parker y Miles Morales se unen para proteger Nueva York.",
    "imagen": "https://raw.githubusercontent.com/JonaSlack/version_final/main/levelup-store/assets/img/juegos/spiderman-2.jpg",
    "emoji": "🕸️",
    "destacado": true
  },
  {
    "id": "gt7",
    "titulo": "Gran Turismo 7",
    "plataforma": "ps5",
    "genero": "Carreras / Simulación",
    "precio": 34990,
    "precioAnterior": null,
    "descripcion": "Compite en circuitos emblemáticos en este simulador de conducción.",
    "imagen": "https://raw.githubusercontent.com/JonaSlack/version_final/main/levelup-store/assets/img/juegos/gt7.jpg",
    "emoji": "🏎️",
    "destacado": false
  },
  {
    "id": "cyberpunk",
    "titulo": "Cyberpunk 2077: Edición Definitiva",
    "plataforma": "ambas",
    "genero": "Rol / Mundo abierto",
    "precio": 29990,
    "precioAnterior": 39990,
    "descripcion": "Explora Night City en una aventura de mundo abierto llena de decisiones.",
    "imagen": "https://raw.githubusercontent.com/JonaSlack/version_final/main/levelup-store/assets/img/juegos/cyberpunk.jpg",
    "emoji": "🌃",
    "destacado": true
  },
  {
    "id": "elden-ring",
    "titulo": "Elden Ring",
    "plataforma": "ambas",
    "genero": "Rol de acción",
    "precio": 37990,
    "precioAnterior": null,
    "descripcion": "Un enorme mundo de fantasía oscura con desafíos y exploración.",
    "imagen": "https://raw.githubusercontent.com/JonaSlack/version_final/main/levelup-store/assets/img/juegos/elden-ring.jpg",
    "emoji": "🗡️",
    "destacado": false
  },
  {
    "id": "bg3",
    "titulo": "Baldur’s Gate 3",
    "plataforma": "ambas",
    "genero": "Rol táctico",
    "precio": 41990,
    "precioAnterior": null,
    "descripcion": "Una aventura de rol con decisiones que cambian la historia.",
    "imagen": "https://raw.githubusercontent.com/JonaSlack/version_final/main/levelup-store/assets/img/juegos/bg3.jpg",
    "emoji": "🎲",
    "destacado": false
  },
  {
    "id": "hogwarts",
    "titulo": "Hogwarts Legacy",
    "plataforma": "ambas",
    "genero": "Mundo abierto / RPG",
    "precio": 32990,
    "precioAnterior": null,
    "descripcion": "Vive tu propia aventura de magia en un mundo abierto.",
    "imagen": "https://raw.githubusercontent.com/JonaSlack/version_final/main/levelup-store/assets/img/juegos/hogwarts.jpg",
    "emoji": "🪄",
    "destacado": false
  },
  {
    "id": "horizon-fw",
    "titulo": "Horizon Forbidden West",
    "plataforma": "ps5",
    "genero": "Mundo abierto / Acción",
    "precio": 33990,
    "precioAnterior": null,
    "descripcion": "Aloy explora tierras salvajes y enfrenta máquinas sorprendentes.",
    "imagen": "https://raw.githubusercontent.com/JonaSlack/version_final/main/levelup-store/assets/img/juegos/horizon-fw.jpg",
    "emoji": "🏹",
    "destacado": false
  },
  {
    "id": "eafc25",
    "titulo": "EA Sports FC 25",
    "plataforma": "ambas",
    "genero": "Deportes",
    "precio": 39990,
    "precioAnterior": null,
    "descripcion": "Disfruta del fútbol y de equipos y ligas de todo el mundo.",
    "imagen": "https://raw.githubusercontent.com/JonaSlack/version_final/main/levelup-store/assets/img/juegos/eafc25.jpg",
    "emoji": "⚽",
    "destacado": true
  },
  {
    "id": "witcher3",
    "titulo": "The Witcher 3: Wild Hunt",
    "plataforma": "ambas",
    "genero": "Rol / Mundo abierto",
    "precio": 24990,
    "precioAnterior": null,
    "descripcion": "Recorre tierras de fantasía junto a Geralt de Rivia.",
    "imagen": "https://raw.githubusercontent.com/JonaSlack/version_final/main/levelup-store/assets/img/juegos/witcher3.jpg",
    "emoji": "🐺",
    "destacado": false
  },
  {
    "id": "minecraft",
    "titulo": "Minecraft",
    "plataforma": "pc",
    "genero": "Sandbox / Supervivencia",
    "precio": 19990,
    "precioAnterior": null,
    "descripcion": "Construye, explora y sobrevive en mundos creados por bloques.",
    "imagen": "https://raw.githubusercontent.com/JonaSlack/version_final/main/levelup-store/assets/img/juegos/minecraft.jpg",
    "emoji": "⛏️",
    "destacado": false
  },
  {
    "id": "ratchet",
    "titulo": "Ratchet & Clank: Rift Apart",
    "plataforma": "ps5",
    "genero": "Acción / Plataformas",
    "precio": 31990,
    "precioAnterior": null,
    "descripcion": "Salta entre dimensiones en una aventura llena de plataformas.",
    "imagen": "https://raw.githubusercontent.com/JonaSlack/version_final/main/levelup-store/assets/img/juegos/ratchet.jpg",
    "emoji": "🚀",
    "destacado": false
  }
];
export function buscarJuegoPorId(id) { return juegos.find((juego) => juego.id === id); }
