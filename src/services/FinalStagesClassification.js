export default function FinalStagesClassification(teams){
    let classifieds = [], team = [];
    
    for(let x = 0; x < teams.length; x += 2){
        for(let y = x; y < x + 2; y++){
            if(teams[y][0].gols > teams[y][1].gols){
                team.push(teams[y][0]);
            } else if(teams[y][0].gols < teams[y][1].gols){
                team.push(teams[y][1]);
            } else {
                team.push(teams[y][Math.floor(Math.random() * 2)]);
            }
        }

        classifieds.push(team);
        team = [];
    }

    return classifieds;
}