module.exports = app => {
   app.route('/launch')
       .get(app.src.api.launch.getLaunch)
       .post(app.src.api.launch.newLaunch)

}