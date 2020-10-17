
const Thing = require("../models/thing");


exports.create = (req, res) => {

  const thingObject = JSON.parse(req.body.thing);

  delete req.body._id;

  const thing = new Thing({
    ...thingObject,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  });

  thing
    .save()
    .then(() =>
      res.status(201).json({ message: "objet thing added successfuly" })
    )
    .catch((error) => res.status(400).json({ error }));
};

exports.getAll = (req, res) => {
  Thing.find()
    .then((things) => res.status(200).json(things))
    .catch((err) => res.status(404).json({ err }));
};

exports.getOne = (req, res) => {
  // console.log(req.params.id);
  Thing.findOne({ _id: req.params.id })
    .then((thing) => res.status(200).json(thing))
    .catch((error) => res.status(404).json({ error }));
};
exports.update = (req, res) => {
  Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(201).json({ message: "thing updated successfully" }))
    .catch((err) => res.status(400).json({ err }));
};

exports.delete = (req, res) => {
  Thing.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Thing has been delete !" }))
    .catch((err) => res.status(400).json({ err }));
};
