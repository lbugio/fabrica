const Tela = require('../models/tela')

const TelaCtrl = {};

TelaCtrl.getTelas = async (req, res) => {
    const telas = await Tela.find();
    res.json(telas);


};

TelaCtrl.createTela = async (req, res) => {
    const tela = new Tela ({
        nombre: req.body.nombre,
        precio: req.body.precio,
    }

    );
    await tela.save();
    res.json({status : 'Tela Saved'
});

};
TelaCtrl.getTela = async (req, res) => {
    const tela = await Tela.findById(req.params.id);
    res.json(tela);
};

TelaCtrl.editTela = async (req, res) => {
    const { id } = req.params;
    const tela = {
        nombre: req.body.nombre,
        precio: req.body.precio
    };
    await Tela.findByIdAndUpdate(id, {$set: tela}, {new: true});
    res.json({status: 'Tela Actualizada'});
};

TelaCtrl.deleteTela = async (req, res) => {
    await Tela.findByIdAndRemove(req.params.id);
    res.json({status: 'Tela Borrada'});
};

module.exports = TelaCtrl;