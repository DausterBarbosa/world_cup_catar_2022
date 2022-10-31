function ClassfiedTeams(groups, results){
    for(let x = 0; x < groups.length; x++){
        for(let y = 0; y < groups[x].length; y++){

            groups[x][y].points = 0;
            groups[x][y].gols = 0;

            for(let a = 0; a < results[x].length; a++){
                if(results[x][a].winner === "empate" && results[x][a][groups[x][y].Name] !== undefined){
                    groups[x][y].points += 1;
                }else if(results[x][a].winner === groups[x][y].Name){
                    groups[x][y].points += 3;
                }

                if(results[x][a][groups[x][y].Name] !== undefined){
                    groups[x][y].gols += results[x][a][groups[x][y].Name].gols
                }
            }
        }
    }

    let groups2 = [];

    for(let x = 0; x < groups.length; x++){
        groups2[x] = structuredClone(groups[x]);
    }

    for(let y = 0; y < groups2.length; y++){
        groups2[y].sort(function ordenar(a, b) {
            if(a.points > b.points){
                return -1;
            } else if(a.points < b.points){
                return 1;
            } else {
                if(a.gols > b.gols){
                    return -1;
                } else if(a.gols < b.gols){
                    return 1;
                } else {
                    return 0;
                }
            }
        });
    }

    let classificados = [];

    for(let x = 0; x < groups2.length; x++){
        classificados.push([groups2[x][0], groups2[x][1]]);
    }

    return classificados;
}

export default ClassfiedTeams;