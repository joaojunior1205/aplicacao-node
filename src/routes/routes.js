const auth = require("../middlewares/auth");
module.exports = app => {
    app.use(auth);

    app.route('/')
        .get((request, response) => {
            return response.status(200).send('logged');
        })

    app.route('/launch')
        .get(app.src.api.launch.getLaunch)
        .post(app.src.api.launch.newLaunch)
}