import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');


export async function obtenerTodosLosJuegos() {
    // you can also fetch all records at once via getFullList
    const juegos = await pb.collection('CatalogoDeJuegos').getFullList({
        expand: 'platforms, genre, developer',
    });
    return juegos
}