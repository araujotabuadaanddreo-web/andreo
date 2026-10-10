let cancionActualObj = null;

// Actualiza la variable global cada vez que reproduces un tema
function reproducirCancion(song) {
    cancionActualObj = song; // Guardamos la canción activa
    indiceActual = musicDatabase.findIndex(s => s.id === song.id);
    
    audioPlayer.src = song.src;
    audioPlayer.play().then(() => {
        nowTitle.textContent = song.title;
        nowArtist.textContent = song.artist;
        nowCover.innerHTML = `<img src="${song.cover}" class="w-full h-full object-cover rounded">`;
    }).catch(err => {
        console.error("Error al reproducir audio local:", err);
        alert("No se encontró el archivo de audio: " + song.src);
    });
}

// Función que busca la letra de forma automática en Google
function buscarLetraActual() {
    if (!cancionActualObj) {
        alert("Primero selecciona una canción para ver su letra.");
        return;
    }
    const query = encodeURIComponent(`letra ${cancionActualObj.title} ${cancionActualObj.artist}`);
    window.open(`https://www.google.com/search?q=${query}`, '_blank');
}