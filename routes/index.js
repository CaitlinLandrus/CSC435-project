const express = require('express');
const path = require('path');
const router = express.Router();
const User = require('../backend/models/user')


// Put all API endpoints under '/api'

router.get('/api/users', async (req, res) => {

    try {
        const users = await User.find({});

        return res.json({
            users
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }

});


router.get('/api/getUser/:username/:password', async (req, res) => {

    try {
        //console.log(req.params)
        const users =  await User.find({username: req.params.username, password: req.params.password});

        return res.json({
            users
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }

});




router.post('/api/createUser', async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user',
        })
    }

    const user = new User(body)

    if (!user) {
        return res.status(400).json({ success: false, error: err })
    }

    user
        .save()
        .then(() => {
            //console.log("User Created");
            return res.status(201).json({
                success: true,
                id: user._id,
                message: 'User created!',
            })

        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'User not created!',
            })
        })

});



router.put('/api/updateUser/:id', async (req, res) => {
    const body = req.body

    User.findOne({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'User not found!',
            })
        }
        user.firstName = body.firstName
        user.lastName = body.lastName
        user.username = body.username
        user.password = body.password
        user.email = body.email
        user
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: user._id,
                    message: 'User updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'User not updated!',
                })
            })
    })

});



router.delete('/api/delete/:id', async (req, res) => {

    try {
        //console.log(req.params)
        //removes all user
        const users =  await User.deleteOne({_id: req.params.id});
        return res.json({
            users
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }

});



module.exports = router;
