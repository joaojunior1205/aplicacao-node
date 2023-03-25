module.exports = app => {
   app.route('/')
       .get((req, res) => res.status(200).send('Ola mundo'))

   app.route('/launch')
       .get(app.src.api.launch.getLaunch)
       .post(app.src.api.launch.newLaunch)
}