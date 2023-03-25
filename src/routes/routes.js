module.exports = app => {
   app.route('/')
       .get(app.src.api.launch.getLaunch)

   app.route('/launch')
       .get(app.src.api.launch.getLaunch)
       .post(app.src.api.launch.newLaunch)

}