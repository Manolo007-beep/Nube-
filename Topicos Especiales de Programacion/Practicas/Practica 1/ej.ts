const saludar = async (nombre: string) => {
    return `Hola ${nombre}, TypeScript está listo.`;
};

saludar("Estudiante").then(mensaje => console.log(mensaje));