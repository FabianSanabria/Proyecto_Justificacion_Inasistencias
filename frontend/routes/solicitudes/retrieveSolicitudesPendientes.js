const express = require('express');
const fetch = (...args) =>
    import('node-fetch').then(({default: fetch}) => fetch(...args));

const router = express.Router();
router.get('/api/solicitudes/ObtenerSolicitudesPendientes', async (req,res) => {
    const {access} = req.cookies;
    const correo = req.query.correo;
    try{
        const apiRes = await fetch(`${process.env.API_URL}/apiDjango/solicitudes/ObtenerSolicitudesPendientes?correo=`.concat(correo),{
            method: 'GET',
            headers:{
                Accept: 'application/json',
                Authorization: `Bearer ${access}`
            }
        });
        const data = await apiRes.json();
        return res.status(apiRes.status).json(data);

    }catch(err){
        return res.status(500).json({
            error: 'Error al tratar de obtener solicitudes'
        });
    }
});
router.get('/api/solicitudes/ObtenerSolicitudesCompletadas', async (req,res) => {
    const {access} = req.cookies;
    const correo = req.query.correo;
    try{
        const apiRes = await fetch(`${process.env.API_URL}/apiDjango/solicitudes/ObtenerSolicitudesCompletadas?correo=`.concat(correo),{
            method: 'GET',
            headers:{
                Accept: 'application/json',
                Authorization: `Bearer ${access}`
            }
        });
        const data = await apiRes.json();
        return res.status(apiRes.status).json(data);

    }catch(err){
        return res.status(500).json({
            error: 'Error al tratar de obtener solicitudes'
        });
    }
});

router.get('/api/solicitudes/ObtenerDetalleEncargado', async (req,res) => {
    const {access} = req.cookies;
    console.log(access);


    try{
        const apiRes = await fetch(`${process.env.API_URL}/apiDjango/solicitudes/ObtenerDetalleEncargado?solicitud_id=`.concat(req.query.solicitud_id),{
            method: 'GET',
            headers:{
                Accept: 'application/json',
                Authorization: `Bearer ${access}`
            }
        });
        const data = await apiRes.json();
        return res.status(apiRes.status).json(data);

    }catch(err){
        return res.status(500).json({
            error: 'Error al tratar de obtener solicitudes'
        });
    }
});
router.get('/api/solicitudes/ObtenerRamosEncargado', async (req,res) => {
    const {access} = req.cookies;
    console.log(access);

    try{
        const apiRes = await fetch(`${process.env.API_URL}/apiDjango/solicitudes/ObtenerRamosEncargado?solicitud_id=`.concat(req.query.solicitud_id),{
            method: 'GET',
            headers:{
                Accept: 'application/json',
                Authorization: `Bearer ${access}`
            }
        });
        const data = await apiRes.json();
        return res.status(apiRes.status).json(data);

    }catch(err){
        return res.status(500).json({
            error: 'Error al tratar de obtener ramos'
        });
    }
});
router.put('/api/solicitudes/ActualizarEstado', async (req,res) => {
    const {access} = req.cookies;
    console.log(access);

    try{
        const apiRes = await fetch(`${process.env.API_URL}/apiDjango/solicitudes/ActualizarEstado?solicitud_id=`.concat(req.query.solicitud_id),{
            method: 'PUT',
            headers:{
                Accept: 'application/json',
                Authorization: `Bearer ${access}`
            }
        });
        const data = await apiRes.json();
        return res.status(apiRes.status).json(data);

    }catch(err){
        console.log(err)
        return res.status(500).json({
            error: 'Error al tratar de actualizar estados'
        });
    }
});

module.exports = router;