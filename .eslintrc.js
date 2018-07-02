module.exports = {
    "extends": "airbnb-base",
    "plugins": ["jasmine"],
    "env": {
      "jasmine": true,
      "browser": true
    },
    "rules": {
      "comma-dangle": 0,
      "no-underscore-dangle": 0,
      "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }]
    },
    "globals": {
      "Collision": true,
      "CollisionFactory": true,
      "Game": true,
      "GameFactory": true,
      "Index": true,
      "Keyboarder": true,
      "Platform": true,
      "Player": true
    }
};
