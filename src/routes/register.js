module.exports = app => {
    app.route('/user')
        .get(app.src.api.user.getUser)
        .post(app.src.api.user.newUser)

    app.route('/refreshToken')
        .post(app.src.api.auth.refreshToken)
}