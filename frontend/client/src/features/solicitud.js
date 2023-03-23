import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Navigate } from 'react-router-dom';

export const enviarSolicitud = createAsyncThunk(
    'solicitud/create-solicitud', async ({values},thunkAPI) => {
        const {
            fechaInicio,
            fechaTermino,
            rutAlumno,
            correoAlumno,
            telefono,
            nombreAlumno,
            motivo,
            nroFolio,
            cantRamos,
            carrera,
            } = values;

        const body = JSON.stringify({
            rutAlumno,
            nombreAlumno,
            correoAlumno,
            telefono,
            fechaInicio,
            fechaTermino,
            motivo,
            nroFolio,
            cantRamos,
            carrera,
    });
      try{
        const res = await fetch('/api/solicitud/create-solicitud',{
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: body,
        });
        const data = await res.json();
        if(res.status === 201){
          return data;
        }else{
  
          return thunkAPI.rejectWithValue(data);
        }
      }catch(err){
        return thunkAPI.rejectWithValue(err.response.data);
      }
      
  });
  export const enviarRamos = createAsyncThunk(
    'solicitud/create-ramos', async ({values},thunkAPI) => {
        const {
            cantRamos,
            asignatura1Nombre,
            asignatura1Codigo,
            asignatura1NRC,
            asignatura1NombreDoc,
            asignatura1CorreoDoc,
            asignatura2Nombre,
            asignatura2Codigo,
            asignatura2NRC,
            asignatura2NombreDoc,
            asignatura2CorreoDoc,
            asignatura3Nombre,
            asignatura3Codigo,
            asignatura3NRC,
            asignatura3NombreDoc,
            asignatura3CorreoDoc,
            asignatura4Nombre,
            asignatura4Codigo,
            asignatura4NRC,
            asignatura4NombreDoc,
            asignatura4CorreoDoc,
            asignatura5Nombre,
            asignatura5Codigo,
            asignatura5NRC,
            asignatura5NombreDoc,
            asignatura5CorreoDoc,
            asignatura6Nombre,
            asignatura6Codigo,
            asignatura6NRC,
            asignatura6NombreDoc,
            asignatura6CorreoDoc,
            } = values;

        const body = JSON.stringify({
            cantRamos,
            asignatura1Nombre,
            asignatura1Codigo,
            asignatura1NRC,
            asignatura1NombreDoc,
            asignatura1CorreoDoc,
            asignatura2Nombre,
            asignatura2Codigo,
            asignatura2NRC,
            asignatura2NombreDoc,
            asignatura2CorreoDoc,
            asignatura3Nombre,
            asignatura3Codigo,
            asignatura3NRC,
            asignatura3NombreDoc,
            asignatura3CorreoDoc,
            asignatura4Nombre,
            asignatura4Codigo,
            asignatura4NRC,
            asignatura4NombreDoc,
            asignatura4CorreoDoc,
            asignatura5Nombre,
            asignatura5Codigo,
            asignatura5NRC,
            asignatura5NombreDoc,
            asignatura5CorreoDoc,
            asignatura6Nombre,
            asignatura6Codigo,
            asignatura6NRC,
            asignatura6NombreDoc,
            asignatura6CorreoDoc,
            });
      try{
        const res = await fetch('/api/solicitud/create-ramos',{
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: body,
        });
  
        const data = await res.json();
        if(res.status === 201){
          
          return data;
        }else{
  
          return thunkAPI.rejectWithValue(data);
        }
  
      }catch(err){
        return thunkAPI.rejectWithValue(console.log(err.response.data));
      }
  });


  export const subirArchivo = createAsyncThunk(
    'solicitud/subir-Archivo', async ({formData},thunkAPI) => {
      var data = new FormData;
      data.append("file", formData.file);
      data.append("solicitud_id",JSON.stringify(formData.solicitud_id));
      try{
        const res = await fetch('/apiDjango/solicitudes/subir-archivo',{
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
          body: data,
        });

        const info = await res.json();
        if(res.status === 202){
          
          return thunkAPI.fulfillWithValue(info);
        }else{
  
          return thunkAPI.rejectWithValue(info);
        }
  
      }catch(err){
        
        return thunkAPI.rejectWithValue(err);
      }
  });
  export const getSolicitudes = createAsyncThunk('solicitud/ObtenerSolicitudes', async (rutAlumno, thunkAPI) =>{
    try{    
      const res = await fetch("/apiDjango/solicitudes/ObtenerSolicitudesConRut?rutAlumno=".concat(rutAlumno), {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        },
      });

      const data = await res.json();
      if(res.status===200){
        return data;
      }else{
        return thunkAPI.rejectWithValue(data);
      }
    }catch(err){
      return thunkAPI.rejectWithValue(err.resonse.data);

    }
})
export const getSolicitudesPendientesEncargado = createAsyncThunk('solicitud/ObtenerSolicitudesPendientesEncargado', async (correo, thunkAPI) =>{
  try{    
    const res = await fetch("/api/solicitudes/ObtenerSolicitudesPendientes?correo=".concat(correo), {
      method: 'GET',
      headers:{
          Accept: 'application/json',

        }
    });
    const data = await res.json();
    if(res.status===200){
      return data;
    }else{
      return thunkAPI.rejectWithValue(data);
    }
  }catch(err){
    return thunkAPI.rejectWithValue(err.resonse.data);

  }
})
export const getSolicitudesCompletadasEncargado = createAsyncThunk('solicitud/ObtenerSolicitudesCompletadasEncargado', async (correo, thunkAPI) =>{
  try{    
  
    const res = await fetch("/api/solicitudes/ObtenerSolicitudesCompletadas?correo=".concat(correo), {
      method: 'GET',
      headers:{
          Accept: 'application/json',
        }
    });
    const data = await res.json();
    if(res.status===200){
      return data;
    }else{
      return thunkAPI.rejectWithValue(data);
    }
  }catch(err){
    return thunkAPI.rejectWithValue(err.resonse.data);

  }
})
export const detallesSolicitud = createAsyncThunk('solicitud/ObtenerDetalle', async (solicitud_id, thunkAPI) =>{
  try{    
    const res = await fetch("/apiDjango/solicitudes/ObtenerDetalle?solicitud_id=".concat(solicitud_id), {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      },
    });

    const data = await res.json();
    if(res.status===200){
      return data;
    }else{
      return thunkAPI.rejectWithValue(data);
    }
  }catch(err){
    return thunkAPI.rejectWithValue(err.resonse.data);

  }
})
export const detallesSolicitudEncargado = createAsyncThunk('solicitud/ObtenerDetalleEncargado', async (solicitud_id, thunkAPI) =>{
  try{    
    const res = await fetch("/api/solicitudes/ObtenerDetalleEncargado?solicitud_id=".concat(solicitud_id), {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      },
    });

    const data = await res.json();
    if(res.status===200){
      return data;
    }else{
      return thunkAPI.rejectWithValue(data);
    }
  }catch(err){
    console.log(err);
    return thunkAPI.rejectWithValue(err.resonse.data);

  }
})
export const detallesSolicitudCompletadaEncargado = createAsyncThunk('solicitud/ObtenerDetalleSolicitudCompletadaEncargado', async (solicitud_id, thunkAPI) =>{
  try{    
    const res = await fetch("/api/solicitudes/ObtenerDetalleEncargado?solicitud_id=".concat(solicitud_id), {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      },
    });

    const data = await res.json();
    if(res.status===200){
      return data;
    }else{
      return thunkAPI.rejectWithValue(data);
    }
  }catch(err){
    console.log(err);
    return thunkAPI.rejectWithValue(err.resonse.data);

  }
})
export const ramosSolicitudEncargado = createAsyncThunk('solicitud/ObtenerRamosEncargado', async (solicitud_id, thunkAPI) =>{
  try{    
    const res = await fetch("/api/solicitudes/ObtenerRamosEncargado?solicitud_id=".concat(solicitud_id), {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      },
    });

    const data = await res.json();
    if(res.status===200){
      return data;
    }else{
      return thunkAPI.rejectWithValue(data);
    }
  }catch(err){
    console.log(err);
    return thunkAPI.rejectWithValue(err.resonse.data);
  }
})
export const ramosSolicitudCompletadaEncargado = createAsyncThunk('solicitud/ObtenerRamosSolicitudCompletadaEncargado', async (solicitud_id, thunkAPI) =>{
  try{    
    const res = await fetch("/api/solicitudes/ObtenerRamosEncargado?solicitud_id=".concat(solicitud_id), {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      },
    });
    const data = await res.json();
    if(res.status===200){
      return data;
    }else{
      return thunkAPI.rejectWithValue(data);
    }
  }catch(err){
    console.log(err);
    return thunkAPI.rejectWithValue(err.resonse.data);

  }
})
export const actualizarEstadoSolicitud = createAsyncThunk('solicitud/ActualizarEstado', async (solicitud_id, thunkAPI) =>{
  try{    
    const res = await fetch("/api/solicitudes/ActualizarEstado?solicitud_id=".concat(solicitud_id), {
      method: 'PUT',
      headers: {
        Accept: 'application/json'
      },
    });

    const data = await res.json();
    if(res.status===202){
      return data;
    }else{
      return thunkAPI.rejectWithValue(data);
    }
  }catch(err){
    console.log(err);
    return thunkAPI.rejectWithValue(err.resonse.data);

  }
})
export const descargarArchivo = createAsyncThunk('solicitud/DescargarArchivo', async (solicitud_id, thunkAPI) =>{
  try{    
    const res = await fetch("/apiDjango/solicitudes/descargar-archivo?solicitud_id=".concat(solicitud_id), {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      },
    }).then(response => response.blob())
    .then(blob => {
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = "download.pdf";
        document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
        a.click();    
        a.remove();    //afterwards we remove the element again         
    });

    if(res.status===200){
      return thunkAPI.fulfillWithValue("data");;
    }else{
      return thunkAPI.rejectWithValue("data");
    }
  }catch(err){
    return thunkAPI.rejectWithValue(err.resonse.data);
  }
})
const initialState = {
  realizarSolicitud:false,
  exitoCreacionSolicitud:false,
  errorCreacion:false,
  revisarSolicitud:false,
  solicitudCreada: false,
  loading: false,
  ramosCreado: false,
  solicitud_id: null,
  errorArchivo: false,
  solicitudes: null,
  detalles: false,
  errorRut: false,
  solicitudesPendientes: false,
  solicitudesCompletadas: false,
  detallesPendiente:false,
  detallesCompletada: false,
  solicitud:null,
  ramos: null,
  volverDetalle: false,
  volverDashboard: false,
  volverRamos: true,
  mensaje: null,
};
const solicitudSlice = createSlice({
  name: 'solicitud',
  initialState,
  reducers: {
    reset: state => {
      state.realizarSolicitud = false;
      state.revisarSolicitud = false;
      state.exitoCreacionSolicitud=false;
      state.errorCreacion=false;
      state.solicitudCreada = false;
      state.ramosCreado = false;
      state.loading = false;
      state.solicitud_id = null;
      state.errorArchivo = false;
      state.solicitudes = null;
      state.detallesPendiente = false;
      state.detallesCompletada = false;
      state.detalles = false;
      state.solicitudesPendientes= false;
      state.solicitudesCompletadas= false;
      state.solicitud = null;
      state.ramos = null;
      state.volverDetalle= false;
      state.volverDashboard= false;
      state.volverRamos=true;
      state.mensaje= null;
    },
    realizarSolicitud: state =>{
      state.realizarSolicitud = true;
      state.mensaje = null;
      state.exitoCreacionSolicitud=false;
      state.errorCreacion=false;
    },
    revisarSolicitud: state =>{
      state.revisarSolicitud = true;
      state.mensaje = null;
      state.exitoCreacionSolicitud=false;
      state.errorCreacion=false;
    },
    errorSubirArchivo: state =>{
      state.errorArchivo = true
    },
    volverSolicitudEstudiante: state =>{
      state.detalles = false;
      state.solicitud = null;
      state.volverDetalle = true;
    },
    volverDashboard: state =>{
      state.solicitudes = null;
      state.volverDashboard = true;
    },
    volverSolicitudesPendientes: state =>{
      state.solicitudes = null;
      state.volverDashboard = true;
      state.solicitudesPendientes= false;
    },
    volverSolicitudesPendientesDetalle: state =>{
      state.solicitud = null;
      state.detallesPendiente= false;
    },
    volverSolicitudesPendientesDetalleRamo: state =>{
      state.volverRamos = true;
      state.ramos = null;
    },
    volverSolicitudesCompletadas: state =>{
      state.solicitudes = null;
      state.volverDashboard = true;
      state.solicitudesCompletadas= false;
    },
    volverSolicitudesCompletadasDetalle: state =>{
      state.solicitud = null;
      state.detallesCompletada= false;
    },
    volverSolicitudesCompletadasDetalleRamo: state =>{
      state.volverRamos = true;
      state.ramos = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(enviarSolicitud.pending, state => {
        state.loading = true;
    }).addCase(enviarSolicitud.fulfilled, state =>{
        state.solicitudCreada = true;
    }).addCase(enviarSolicitud.rejected, state =>{
      state.loading = false;
    }).addCase(enviarRamos.pending, state => {
      state.loading = true;
    }).addCase(enviarRamos.fulfilled, (state,action) => {
      state.loading = false;
      state.ramosCreado = true;
      state.solicitud_id = action.payload.solicitud_id;
    }).addCase(enviarRamos.rejected, state => {
      state.loading = false;
      state.solicitudCreada = false;
    }).addCase(subirArchivo.pending, state => {
      state.loading = true;
    }).addCase(subirArchivo.fulfilled, (state,action) => {
      state.solicitudCreada = false;
      state.ramosCreado = false;
      state.loading = false;
      state.solicitud_id=null;
      state.errorArchivo = false;
      state.mensaje = action.payload;
      state.realizarSolicitud=false;
      state.exitoCreacionSolicitud=true;
    })
    .addCase(subirArchivo.rejected, state => {
      state.errorArchivo = true;
      state.loading = false;
      state.errorCreacionSolicitud=true;
    }).addCase(getSolicitudes.pending, state => {
      state.loading = true;
    }).addCase(getSolicitudes.fulfilled, (state,action) => {
      state.loading = false;
      state.solicitudes=action.payload;
      state.volverDashboard = false;
      state.mensaje = null;
    })
    .addCase(getSolicitudes.rejected, state => {
      state.loading = false;
    }).addCase(detallesSolicitud.pending, state => {
      state.loading = true;
    }).addCase(detallesSolicitud.fulfilled, (state,action) => {
      state.loading = false;
      state.detalles = true;
      state.volverDetalle = false;
      state.solicitud=action.payload;
    })
    .addCase(detallesSolicitud.rejected, state => {
      state.loading = false;
    }).addCase(getSolicitudesPendientesEncargado.pending, state => {
      state.loading = true;
    }).addCase(getSolicitudesPendientesEncargado.fulfilled, (state,action) => {
      state.loading = false;
      state.solicitudes=action.payload;
      state.solicitudesPendientes = true;
      state.volverSolicitudesPendientes =false;
      state.mensaje = null;
    })
    .addCase(getSolicitudesPendientesEncargado.rejected, state => {
      state.loading = false;
    }).addCase(detallesSolicitudEncargado.pending, state => {
      state.loading = true;
    }).addCase(detallesSolicitudEncargado.fulfilled, (state,action) => {
      state.loading = false;
      state.solicitud=action.payload;
      state.detallesPendiente = true;
    })
    .addCase(detallesSolicitudEncargado.rejected, state => {
      state.loading = false;
    }).addCase(ramosSolicitudEncargado.pending, state => {
      state.loading = true;
    }).addCase(ramosSolicitudEncargado.fulfilled, (state,action) => {
      state.loading = false;
      state.ramos=action.payload;
      state.detallesPendiente = true;
      state.volverRamos = false;
    })
    .addCase(ramosSolicitudEncargado.rejected, state => {
      state.loading = false;
    }).addCase(actualizarEstadoSolicitud.pending, state => {
      state.loading = true;
    }).addCase(actualizarEstadoSolicitud.fulfilled, (state,action) => {
      state.loading = false;
      state.ramos=null;
      state.detallesPendiente = false;
      state.solicitud = null;
      state.solicitudesPendientes = false;
      state.solicitudes = null;
      state.mensaje = action.payload;
    })
    .addCase(actualizarEstadoSolicitud.rejected, state => {
      state.loading = false;
    }).addCase(getSolicitudesCompletadasEncargado.pending, state => {
      state.loading = true;
    }).addCase(getSolicitudesCompletadasEncargado.fulfilled, (state,action) => {
      state.loading = false;
      state.solicitudes=action.payload;
      state.solicitudesCompletadas = true;
      state.volverSolicitudesCompletadas =false;
      state.mensaje = null;
    })
    .addCase(getSolicitudesCompletadasEncargado.rejected, state => {
      state.loading = false;
    }).addCase(detallesSolicitudCompletadaEncargado.pending, state => {
      state.loading = true;
    }).addCase(detallesSolicitudCompletadaEncargado.fulfilled, (state,action) => {
      state.loading = false;
      state.solicitud=action.payload;
      state.solicitudesCompletadas = true;
      state.detallesCompletada = true;
      state.volverDetalle = false;
    })
    .addCase(detallesSolicitudCompletadaEncargado.rejected, state => {
      state.loading = false;
    }).addCase(ramosSolicitudCompletadaEncargado.pending, state => {
      state.loading = true;
    }).addCase(ramosSolicitudCompletadaEncargado.fulfilled, (state,action) => {
      state.loading = false;
      state.ramos=action.payload;
      state.detallesCompletada = true;
      state.volverRamos = false;
    })
    .addCase(ramosSolicitudCompletadaEncargado.rejected, state => {
      state.loading = false;
    })
  }
});

export const { realizarSolicitud,revisarSolicitud,reset,errorSubirArchivo,volverSolicitudEstudiante,volverDashboard,volverSolicitudesPendientes,volverSolicitudesPendientesDetalle,volverSolicitudesPendientesDetalleRamo,volverSolicitudesCompletadas,volverSolicitudesCompletadasDetalle,volverSolicitudesCompletadasDetalleRamo} = solicitudSlice.actions;
export default solicitudSlice.reducer;