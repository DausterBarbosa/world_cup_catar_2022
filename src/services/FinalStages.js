export default function FinalStages(teams){
    let teams2 = [];

    for(let x = 0; x < teams.length; x++){
        teams2[x] = structuredClone(teams[x]);
    }

    for(let x = 0; x < teams2.length; x++){
        for(let y = 0; y < teams2[x].length; y++){
            teams2[x][y].gols = Math.floor(Math.random() * 10);
        }
    }

    return teams2;
}