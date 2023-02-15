const express = require('express');
const fetch = (...args) =>
    import('node-fetch').then(({default: fetch}) => fetch(...args));
const router = express.Router();

router.post('/api/users/register', async (req, res) => {
    const { nombreCompleto, correo, password,nombreCarrera } = req.body;
    
    const body = JSON.stringify({
        nombreCompleto,
        correo,
        password,
        nombreCarrera,
    });
    console.log(body);
    try{
        
         const resgisterRes = await fetch(
            `${process.env.API_URL}/api/users/register`,
            {
            method: 'POST',
            headers: 
            {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body,
         });
         const data = await resgisterRes.json();

         return res.status(resgisterRes.status).json(data);
    }catch(err){
        return res.status(500).json({
            error: 'Ocurrió un error durante el registro de usuario'
        });

    }
});



module.exports = router;