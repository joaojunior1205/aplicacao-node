module.exports = app => {
   app.route('/')
       .get(async (request, response) => {
           return response.status(200);
         app.db('launch')
              .select('id', 'descricao', 'tipo', 'recorrencia', 'valor', 'data_vencimento', 'data_criacao', 'data_atualizacao')
              .then(launch => response.status(200).json({...launch}))
              .catch(err => response.status(500).send(err));
       })

   app.route('/launch')
       .get(app.src.api.launch.getLaunch)
       .post(app.src.api.launch.newLaunch)
}