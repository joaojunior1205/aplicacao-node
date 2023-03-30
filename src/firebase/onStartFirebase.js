const config = require("./firebaseConfig");
const firebase = require("firebase");

const onStartFirebase = () => {
    if (!firebase?.apps?.length) // Se o firebase não estiver inicializado, então bora startar
        firebase.initializeApp(config);
};

module.exports = {onStartFirebase};