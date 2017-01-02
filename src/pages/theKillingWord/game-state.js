const GAME_STATE_KEY = 'gameState';

export function setState(players) {

  let playersToSave = null;
  if (players) {
    playersToSave = players.map(player => {
      var playerToSave = Object.assign({}, player, {targetName: player.target.name, target:null});
      // playerToSave.targetName = player.target.name;
      // playerToSave.target = null;
      return playerToSave;
    });
  }

  window.localStorage.setItem(GAME_STATE_KEY, JSON.stringify(playersToSave));
}

export function getState() {

  const players = JSON.parse(window.localStorage.getItem(GAME_STATE_KEY));
  if (!players) return null;

  const playersToReturn = players.map(player=> {

    const foundTarget = players.find(p => p.name === player.targetName);
    player.target = foundTarget;
    delete player.targetName;
    return player;
  });

  return playersToReturn;
}
