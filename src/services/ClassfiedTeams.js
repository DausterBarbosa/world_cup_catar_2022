function ClassfiedTeams(groups, results){
    for(let x = 0; x < groups.length; x++){
        for(let y = 0; y < groups[x].length; y++){

            groups[x][y].points = 0;
            groups[x][y].gols = 0;

            for(let a = 0; a < results[x].length; a++){
                if(results[x][a].winner === groups[x][y].Name){
                    groups[x][y].points += 3;
                } else if(results[x][a].winner === "empate"){
                    groups[x][y].points += 1;
                }

                if(results[x][a][groups[x][y].Name] != undefined){
                    groups[x][y].gols += results[x][a][groups[x][y].Name].gols
                }
            }
        }
    }

    console.log(groups)
}

export default ClassfiedTeams;