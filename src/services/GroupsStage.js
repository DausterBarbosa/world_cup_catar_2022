function GroupsStage(groups){
    let allGames = [], groupGames = [];

    for(let x = 0; x < groups.length; x++){
        for(let y = 0; y < groups[x].length; y++){
            for(let z = y + 1; z < groups[x].length; z++){
                let game = {
                    team1: {
                        name: groups[x][y].Name,
                        gols: Math.floor(Math.random() * 100),
                    },
                    team2: {
                        name: groups[x][z].Name,
                        gols: Math.floor(Math.random() * 100),
                    },
                };

                groupGames.push(game);
            }
        }

        allGames.push(groupGames);
        groupGames = [];
    }

    return allGames;
}

export default GroupsStage;