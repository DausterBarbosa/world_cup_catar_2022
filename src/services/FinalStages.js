export default function FinalStages(teams){
    for(let x = 0; x < teams.length; x++){
        for(let y = 0; y < teams[x].length; y++){
            teams[x][y].gols = Math.floor(Math.random() * 10);
        }
    }

    return teams;
}