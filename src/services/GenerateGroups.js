function GenerateGroups(teams){
    let groups = [];
    
    for(let indice = teams.length; indice; indice--){
        const indiceAleatorio = Math.floor(Math.random() * indice);

        const elemento = teams[indice - 1];
        teams[indice -1] = teams[indiceAleatorio];
        teams[indiceAleatorio] = elemento;
    }

    for(let x = 0; x < 32; x += 4){
        groups.push(teams.slice(x, x + 4));
    }

    return groups;
}

export default GenerateGroups;