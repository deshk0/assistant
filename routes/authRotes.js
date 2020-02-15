const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const router = Router()

// /api/auth/register
router.post(
    '/register',
    [
        check('email', 'Неk орректный email').isEmail(),
        check('password','Minimal length of password 6 symbols')
        .isLength({min: 6})
    ],
    async(req, res) =>{
    try{
        console.log('Body', req.body)
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message:'Incorrect data in registration'
            })
        }

        const {email, password} = req.body

        const candidate = await User.findOne({ email })

        if(candidate){
            return res.status(400).json({message:'Такой пользователь уже существует'})
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({ email, password: hashedPassword })

        await user.save()

        res.status(201).json({message: 'ПОльзователь создан'})


    }catch(e){
        res.status(500).json({message:"Whats wrongs!Try again"})
    }
})
// /api/auth/login
router.post(
    '/login', 
    [
        check('email', 'Input correct email').isEmail(),
        check('password', 'Input password').exists()
    ],
    async(req, res) =>{
    try{
        console.log('Body', req.body)
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message:'Incorrect data in login'
            })
        }

        const {email, password} = req.body

        const user = await User.findOne({email})

        if(!user){
            return res.status(400).json({message:'client not found'})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(400).json({message:'Incorrect password, try again'})
        }

        const token = jwt.sign(
            { userid: user.id },
            config.get('jwtSecret'),
            { expiresIn: '1h' }

        )

        res.json({ token, userId: user.id})




    }catch(e){
        res.status(500).json({message:"Whats wrongs!Try again"})
    }
})


module.exports = router