const Profile = require('../models/user');

function profilesShow(req, res) {
  const profileId = req.params.id;
  Profile
    .findById(profileId)
    .then(profile => res.render('profiles/_show', { profile }));
}

function profilesUpdate(req, res) {
  Profile
    .findByIdAndUpdate(req.params.id, req.body)
    .then(profiles => res.redirect(`/profiles/${profiles.id}`))
    .catch(err => res.status(500).send(err));
}

function profilesEdit(req, res) {
  Profile
    .findById(req.params.id)
    .then(profile => res.render('profiles/edit', { profile }))
    .catch(err => res.status(404).send(err));
}

function profilesDelete(req, res) {
  Profile
    .findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/profiles'))
    .catch(err => res.status(404).send(err));
}



module.exports = {
  show: profilesShow,
  update: profilesUpdate,
  edit: profilesEdit,
  delete: profilesDelete
};
