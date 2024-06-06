// Pdfs
export const pdfs = [
    "Preciador garantía extendida SM",
    "Contrato garantía extendida",
    "Preciador GE Sams carta",
    "Contacto Soluciones Financieras",
    "Contacto de Atención a Socio"   
]

//Images

export const imgs = [
    "Elegibles",
]


//Comics
export const comics = [
    "Historieta eléctricos",
    "Historieta Celulares"
]

//Videos
export const videos = [
    "Video Categoría Celulares y Tablets",
    "Video Categoría Cómputo",
    "Video Categoría Electrónicos",
    "Video Categoría Línea Blanca",
    "Video Categoría Pantallas"
]

//Pages

export const pages = {
    Documentos: "/documentsPage",
    Imagenes: "/imagesPage",
    Historietas: "/comicsPage",
    Videos: "/videosPage"
};

//Keys

export const keys = Object.keys(pages)


//Urls

export const Urls = [
    "/assets/comics/HistorietaElectricos.pdf",
    "/assets/comics/Historieta Celulares.pdf",
    "/assets/imagenes/Elegibles.jpg",
    "/assets/pdfs/ContratoGarantíaExtendida.pdf",
    "/assets/pdfs/PreciadorGarantíaExtendidaSM.pdf",
    "/assets/pdfs/PreciadorGESamsCarta.pdf",
    "/assets/pdfs/PreciadorGESamsCarta.pdf",
    "/assets/pdfs/Contacto Soluciones Financieras.pdf",
    "/assets/pdfs/Contacto de Atención a Socio.pdf",
    "/assets/videos/VideoCategoriaCelularesyTablets.mp4",
    "/assets/videos/VideoCategoriaComputo.mp4",
    "/assets/videos/VideoCategoriaPantallas.mp4",
    "/assets/videos/VideoCategoriaLineaBlanca.mp4",
    "/assets/videos/VideoCategoriaElectronicos.mp4"
]

//Function

  // Función para limpiar el título y la URL para hacer coincidir
 export const cleanString = (str) => {
    // Reemplazar caracteres acentuados con sus equivalentes no acentuados
    const withoutAccents = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return withoutAccents.toLowerCase().replace(/\s+/g, ''); // Elimina espacios y convierte a minúsculas
};

// Generar OptionsFrames

export const components = [
    {icon: "assets/icons/pdfIcon.png", altIcon: "icono pdf", iconText:"Documentos",linkTo: "/DocumentsPage"},
    {icon: "assets/icons/imageIcon.png",altIcon:"icono imagen", iconText:"Imagenes",linkTo:"/ImagesPage"},
    {icon: "assets/icons/videosIcon.png",altIcon:"icono video",iconText:"Videos",linkTo:"/Videos"},
    {icon: "assets/icons/bookIcon.png",altIcon:"icono book", iconText:"Historietas",linkTo:"/ComicsPage"}
]