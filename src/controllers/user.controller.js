const UserModel = require('../models/user.model')

exports.getUSer = async (req, res, next) => {
    try {

        const userList = await UserModel.find({})
        res.render('index', { items: userList });

    } catch (error) {
        console.log(error)
        console.log("error in getUSer")
        res.render('index', { items: [] });
    }
}

exports.addUser = async (req, res, next) => {
    try {

        const item = {
            title: req.body.title,
            content: req.body.content,
            author: req.body.author
        };
        await UserModel.insert(item);
        res.redirect('/');
    } catch (error) {
        console.log(error)
        console.log("error in addUser")
        res.redirect('/');
    }
}

exports.updateUser = async (req, res, next) => {
    try {

        const item = {
            title: req.body.title,
            content: req.body.content,
            author: req.body.author
        };
        const id = req.body.id;

        await UserModel.updateById(id, item);
        res.redirect('/');

    } catch (error) {
        console.log(error)
        console.log("error in updateUser")
        res.redirect('/');
    }

}

exports.deleteUser = async (req, res, next) => {
    try {

        const id = req.body.id;
        await UserModel.removeById(id);
        res.redirect('/');

    } catch (error) {
        console.log(error)
        console.log("error in deleteUser")
        res.redirect('/');
    }
}