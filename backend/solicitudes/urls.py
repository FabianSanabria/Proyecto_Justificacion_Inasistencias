from django.urls import path
from .views import RetrieveCarreraView,SolicitudCreateView,RamosCreateView,SolicitudArchivoView,RetrieveSolicitudesConRutView,RetrieveDetallesSolicitudView,RetrieveArchivoSolicitudView
from .views import RetrieveSolicitudesPendientesView,RetrieveDetallesEncargadoSolicitudView,RetrieveRamosEncargadoSolicitudView,RetrieveSolicitudesCompletadasView

urlpatterns = [

    path('carreras',RetrieveCarreraView.as_view()),
    path('create-solicitud',SolicitudCreateView.as_view()),
    path('create-ramos',RamosCreateView.as_view()),
    path('subir-archivo',SolicitudArchivoView.as_view()),
    path('ObtenerSolicitudesConRut',RetrieveSolicitudesConRutView.as_view()),
    path('ObtenerDetalle',RetrieveDetallesSolicitudView.as_view()),
    path('descargar-archivo',RetrieveArchivoSolicitudView.as_view()),
    path('ObtenerSolicitudesPendientes',RetrieveSolicitudesPendientesView.as_view()),
    path('ObtenerSolicitudesCompletadas',RetrieveSolicitudesCompletadasView.as_view()),
    path('ObtenerDetalleEncargado',RetrieveDetallesEncargadoSolicitudView.as_view()),
    path('ObtenerRamosEncargado',RetrieveRamosEncargadoSolicitudView.as_view()),
    path('ActualizarEstado',RetrieveRamosEncargadoSolicitudView.as_view()),
    

]