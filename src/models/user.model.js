const mongo = require('mongodb').MongoClient;

const objectId = require('mongodb').ObjectID;

const url = 'mongodb://localhost:27017/test';

module.exports = {
    find: async (query = {}) => {
        return new Promise((resolve, reject) => {
            let resultArray = [];
            mongo.connect(url, function (err, db) {
                if (err) return reject(err);
                let cursor = db.collection('user-data').find(query);
                cursor.forEach(function (doc, err) {
                    if (err) return reject(err);
                    resultArray.push(doc);
                }, function () {
                    db.close();
                    resolve(resultArray)
                });
            });
        });
    },
    insert: async (data) => {
        return new Promise((resolve, reject) => {
            mongo.connect(url, function (err, db) {
                if (err) return reject(err);
                db.collection('user-data').insertOne(data, function (err, result) {
                    if (err) return reject(err);
                    console.log('Item inserted');
                    db.close();
                    return resolve(result)
                });
            });
        })
    },
    updateById: async (Id, data) => {
        // try {
        //     return await User.updateOne({ _id: Id }, { $set: { ...data } });
        // } catch (error) {
        //     console.log("error in updateById User DB.");
        //     throw error;
        // }
        return new Promise((resolve, reject) => {
            mongo.connect(url, function (err, db) {
                if (err) return reject(err);
                db.collection('user-data').updateOne({ "_id": objectId(Id) }, { $set: data }, function (err, result) {
                    if (err) return reject(err);
                    console.log('Item updated');
                    db.close();
                    return resolve(result)
                });
            });
        })
    },
    removeById: async (Id) => {
        return new Promise((resolve, reject) => {
            mongo.connect(url, function (err, db) {
                if (err) return reject(err);
                db.collection('user-data').deleteOne({ "_id": objectId(Id) }, function (err, result) {
                    if (err) return reject(err);
                    console.log('Item deleted');
                    db.close();
                    return resolve(result)
                });
            });
        })
    },
}