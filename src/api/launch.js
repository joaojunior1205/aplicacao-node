module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.src.api.validation;

    const getLaunch = (request, response) => {
        app.db('launch')
            .select('id', 'descricao', 'tipo', 'recorrencia', 'valor', 'data_vencimento', 'data_criacao', 'data_atualizacao')
            .then(launch => response.json({...launch}))
            .catch(err => response.status(500).send(err));
    }

    const newLaunch = (req, res) => {
        const launch = { ...req.body };

        try {
            notExistsOrError(!launch.descricao, 'Preencha descricao');
            notExistsOrError(!launch.tipo, 'Preencha tipo');
            notExistsOrError(!launch.recorrencia, 'Preencha recorrencia');
            notExistsOrError(!launch.valor, 'Preencha valor');
            notExistsOrError(!launch.data_vencimento, 'Preencha data_vencimento');
            notExistsOrError(!launch.data_criacao, 'Preencha data_criacao');
            notExistsOrError(!launch.data_atualizacao, 'Preencha data_atualizacao');

           app.db('launch')
               .insert(launch)
               .then(_=> res.status(200).send())
               .catch(err => res.status(500).send(err));
        } catch (err) {
            res.status(500).send(err)
        }
    }

    return {getLaunch, newLaunch};
}