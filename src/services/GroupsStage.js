function GroupsStage(groups){
    let allGames = [], groupGames = [];

    for(let x = 0; x < groups.length; x++){
        for(let y = 0; y < groups[x].length; y++){
            for(let z = y + 1; z < groups[x].length; z++){
                let team1gols = Math.floor(Math.random() * 10);
                let team2gols = Math.floor(Math.random() * 10);
                let winner;

                if(team1gols > team2gols) winner = groups[x][y].Name;
                else winner = groups[x][z].Name;

                let game = {
                    winner: (team1gols === team2gols) ? "empate" : winner,
                    [groups[x][y].Name]: {
                        gols: team1gols,
                    },
                    [groups[x][z].Name]: {
                        gols: team2gols,
                    },
                    team1: {
                        name: groups[x][y].Name,
                        gols: team1gols,
                    },
                    team2: {
                        name: groups[x][z].Name,
                        gols: team2gols,
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