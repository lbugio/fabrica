const Avio = require('../models/avio')

const AvioCtrl = {};

AvioCtrl.getAvios = async (req, res) => {
    const avios = await Avio.find();
    res.json(avios);


};

AvioCtrl.createAvio = async (req, res) => {
    const avio = new Avio ({
        nombre: req.body.nombre,
        precio: req.body.precio,
    }

    );
    await avio.save();
    res.json({status : 'Employee Saved'
});

};
AvioCtrl.getAvio = async (req, res) => {
    const avio = await Avio.findById(req.params.id);
    res.json(avio);
};

AvioCtrl.editAvio = async (req, res) => {
    const { id } = req.params;
    const avio = {
        nombre: req.body.nombre,
        precio: req.body.precio
    };
    await Avio.findByIdAndUpdate(id, {$set: avio}, {new: true});
    res.json({status: 'Avio Actualizado'});
};

AvioCtrl.deleteAvio = async (req, res) => {
    await Avio.findByIdAndRemove(req.params.id);
    res.json({status: 'Avio Borrado'});
};

module.exports = AvioCtrl;