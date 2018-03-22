const ShoppingList = require('./model.js');
const fs = require('fs');
const userController = {};

userController.startList = (req, res, next) => {
    // console.log('req.body.listItem: ', req.body.listItem);
    let newListItem = new ShoppingList({
        'listItems': req.body.listItem
    })
    newListItem.save();
    res.send(newListItem);
}

userController.deleteListItem = (req, res, next) => {
    // console.log('server', req.body.listItemId)
    ShoppingList.remove({ '_id': req.body.listItemId }, (err, doc) => {
        res.send(doc)
    })
}

userController.updateListItem = (req, res, next) => {
    // console.log('req.body', req.body)

    // ShoppingList.findOne({ '_id': req.body.listItemId }, (err, item) => {
    //     console.log('item', item)
    //     if (err) console.log(err)
    //     req.body.listItemUpdate = item.listItems
    //     item.save();
    //     res.send(item)
    // })
    ShoppingList.findById({ '_id': req.body.listItemId }, (err, item) => {
        item.listItems = req.body.listItemUpdate;
        console.log('itemssss', item)
        item.save();
        res.send(item)
    });


};


userController.findAll = (req, res, next) => {
    ShoppingList.find({}, (err, doc) => {
        res.send(doc)
    })
};
module.exports = userController