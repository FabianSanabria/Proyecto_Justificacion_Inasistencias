from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status,permissions
from solicitudes.models import Carrera,Solicitud,Ramos
from solicitudes.serializers import CarreraSerializer,CarreraIDSerializer,SolicitudMotivoMedCreateSerializer,SolicitudFuerzaMayorCreateSerializer,SolicitudSerializer,Ramos1CreateSerializer,Ramos2CreateSerializer,Ramos3CreateSerializer,Ramos4CreateSerializer,Ramos5CreateSerializer,Ramos6CreateSerializer,RamosSerializer,SolicitudDetallesSerializer,SolicitudArchivoSerializer
from django.http import HttpResponse, HttpResponseNotFound
from http import HTTPStatus
from users.models import User
import os
# Create your views here.

class RetrieveCarreraView(APIView):

    def get(self,request):
       
        serializer = CarreraSerializer(Carrera.objects.all().values(),many=True)
        return Response(status = status.HTTP_200_OK, data=serializer.data)

class SolicitudCreateView(APIView):
    
    def post(self,request):
        data = request.data
        carrera = Carrera.objects.get(nombreCarrera=data['carrera'])    
        if(data.get("nroFolio") != ""):
            serializer = SolicitudMotivoMedCreateSerializer(data=data)    
            if not serializer.is_valid():
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            solicitud = serializer.create_solicitud_MotivoMedico(serializer.validated_data,carrera)
            solicitud = SolicitudSerializer(solicitud)
            return Response(solicitud.data, status= status.HTTP_201_CREATED)
        else:
            serializer = SolicitudFuerzaMayorCreateSerializer(data=data)    
            if not serializer.is_valid():
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            solicitud = serializer.create_solicitud_FuerzaMayor(serializer.validated_data,carrera)
            solicitud = SolicitudSerializer(solicitud)
            return Response(solicitud.data, status= status.HTTP_201_CREATED)
    
class RamosCreateView(APIView):
    
    def post(self,request):
        data = request.data
        solicitud = Solicitud.objects.latest('id')       
        if(data.get("cantRamos") == '1'):
            serializer = Ramos1CreateSerializer(data=data)
            if not serializer.is_valid():
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            ramos = serializer.create_ramos1(serializer.validated_data,solicitud)  
            ramos = RamosSerializer(ramos)
            return Response(ramos.data, status= status.HTTP_201_CREATED)  
        if(data.get("cantRamos") == '2'):
            serializer = Ramos2CreateSerializer(data=data)
            if not serializer.is_valid():
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            ramos = serializer.create_ramos2(serializer.validated_data,solicitud)
            ramos = RamosSerializer(ramos)
            return Response(ramos.data, status= status.HTTP_201_CREATED)  
        if(data.get("cantRamos") == '3'):
            serializer = Ramos3CreateSerializer(data=data)
            if not serializer.is_valid():
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            ramos = serializer.create_ramos3(serializer.validated_data,solicitud)
            ramos = RamosSerializer(ramos)
            return Response(ramos.data, status= status.HTTP_201_CREATED)  
        if(data.get("cantRamos") == '4'):
            serializer = Ramos4CreateSerializer(data=data)
            if not serializer.is_valid():
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            ramos = serializer.create_ramos4(serializer.validated_data,solicitud)
            ramos = RamosSerializer(ramos)
            return Response(ramos.data, status= status.HTTP_201_CREATED)  
        if(data.get("cantRamos") == '5'):
            serializer = Ramos5CreateSerializer(data=data)
            if not serializer.is_valid():
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            ramos = serializer.create_ramos5(serializer.validated_data,solicitud)
            ramos = RamosSerializer(ramos)
            return Response(ramos.data, status= status.HTTP_201_CREATED)  
        if(data.get("cantRamos") == '6'):
            serializer = Ramos6CreateSerializer(data=data)
            if not serializer.is_valid():
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            ramos = serializer.create_ramos6(serializer.validated_data,solicitud)
            ramos = RamosSerializer(ramos)
            return Response(ramos.data, status= status.HTTP_201_CREATED)  

class SolicitudArchivoView(APIView):
    def post(self,request):
        data = request.data
        file = request.FILES.get('file')
        try:
            solicitud = Solicitud.objects.get(id = data.get('solicitud_id'))
            solicitud.archivo.save(file.name,file)
            return Response(status= status.HTTP_202_ACCEPTED,data="Solicitud creada con éxito")
        except:
            return Response(status= status.HTTP_400_BAD_REQUEST,data="Error al subir archivo, intente crear solicitud nuevamente")

class RetrieveSolicitudesConRutView(APIView):

    def get(self,request):
        
        serializer = SolicitudSerializer(Solicitud.objects.filter(rutAlumno= request.GET.get('rutAlumno',None)).order_by("-created_at","-id"),many=True)
        if(serializer != None):
            return Response(status = status.HTTP_200_OK, data=serializer.data)
        else:
            return Response(status = status.HTTP_400_BAD_REQUEST)

class RetrieveSolicitudesPendientesView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def get(self,request):
        try:
            correoEncargado = request.GET.get('correo',None)
            encargado = User.objects.get(correo__exact= correoEncargado)
            carreras = encargado.carreras.all()
            carreras_id =  list()
            for carrera in carreras:
                carrera_serializer = CarreraIDSerializer(carrera)
                carreras_id.append(carrera_serializer.data.get("id"))
                
            solicitudes_serializer = SolicitudSerializer(Solicitud.objects.filter(carrera_id__in= carreras_id).filter(estado= "Pendiente").order_by("-created_at","-id"),many=True)

            return Response(status = status.HTTP_200_OK, data=solicitudes_serializer.data)
        except Exception as e:
            return Response(status = status.HTTP_400_BAD_REQUEST, data=e)


class RetrieveSolicitudesCompletadasView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def get(self,request):
        try:
            correoEncargado = request.GET.get('correo',None)
            encargado = User.objects.get(correo__exact= correoEncargado)
            carreras = encargado.carreras.all()
            carreras_id =  list()
            for carrera in carreras:
                carrera_serializer = CarreraIDSerializer(carrera)
                carreras_id.append(carrera_serializer.data.get("id"))
                
            solicitudes_serializer = SolicitudSerializer(Solicitud.objects.filter(carrera_id__in= carreras_id).filter(estado= "Completada").order_by("-created_at","-id"),many=True)

            return Response(status = status.HTTP_200_OK, data=solicitudes_serializer.data)
        except Exception as e:
            return Response(status = status.HTTP_400_BAD_REQUEST, data=e)



class RetrieveDetallesSolicitudView(APIView):

    def get(self,request):
        solicitud = Solicitud.objects.get(id = request.GET.get('solicitud_id',None))
        if(solicitud == None):
            return Response(status = status.HTTP_400_BAD_REQUEST)
        elif(solicitud.motivo == "Fuerza Mayor"):
            serializer = SolicitudSerializer(solicitud)
            return Response(status = status.HTTP_200_OK, data=serializer.data)

        else:
            serializer = SolicitudDetallesSerializer(solicitud)
            return Response(status = status.HTTP_200_OK, data=serializer.data)
    



class RetrieveDetallesEncargadoSolicitudView(APIView):

    permission_classes = [permissions.IsAuthenticated]
    def get(self,request):
        solicitud = Solicitud.objects.get(id = request.GET.get('solicitud_id',None))
        if(solicitud == None):
            return Response(status = status.HTTP_400_BAD_REQUEST)
        elif(solicitud.motivo == "Fuerza Mayor"):
            serializer = SolicitudSerializer(solicitud)
            return Response(status = status.HTTP_200_OK, data=serializer.data)
        else:
            serializer = SolicitudDetallesSerializer(solicitud)
            return Response(status = status.HTTP_200_OK, data=serializer.data)


class RetrieveRamosEncargadoSolicitudView(APIView):

    permission_classes = [permissions.IsAuthenticated]
    def get(self,request):
        solicitud = Solicitud.objects.get(id = request.GET.get('solicitud_id',None))
        ramos = Ramos.objects.get(solicitud_id = request.GET.get('solicitud_id',None))
        if(ramos == None):
            return Response(status = status.HTTP_400_BAD_REQUEST)
        else:
            if(solicitud.cantRamos == 1):
                serializer = Ramos1CreateSerializer(ramos)
                return Response(status = status.HTTP_200_OK, data=serializer.data)
            if(solicitud.cantRamos == 2):
                serializer = Ramos2CreateSerializer(ramos)
                return Response(status = status.HTTP_200_OK, data=serializer.data)
            if(solicitud.cantRamos == 3):
                serializer = Ramos3CreateSerializer(ramos)
                return Response(status = status.HTTP_200_OK, data=serializer.data)
            if(solicitud.cantRamos == 4):
                serializer = Ramos4CreateSerializer(ramos)
                return Response(status = status.HTTP_200_OK, data=serializer.data)
            if(solicitud.cantRamos == 5):
                serializer = Ramos5CreateSerializer(ramos)
                return Response(status = status.HTTP_200_OK, data=serializer.data)
            if(solicitud.cantRamos == 6):
                serializer = Ramos6CreateSerializer(ramos)
                return Response(status = status.HTTP_200_OK, data=serializer.data)
            
    def put(self,request):

        solicitud = Solicitud.objects.get(id = request.GET.get('solicitud_id',None))
        if(solicitud == None):
            return Response(status = status.HTTP_400_BAD_REQUEST,data="Error al actualizar solicitud")
        solicitud.estado = "Completada"
        solicitud.save()
        return Response(status = status.HTTP_202_ACCEPTED,data="Solicitud actualizada Correctamente")






class RetrieveArchivoSolicitudView(APIView):

    def get(self,request):
        solicitud = Solicitud.objects.get(id = request.GET.get('solicitud_id',None))
        if(solicitud == None):
            return Response(status = status.HTTP_400_BAD_REQUEST)
        serializer = SolicitudArchivoSerializer(solicitud)
        archivo_name = serializer.data
        archivo_location = archivo_name.get('archivo')
        archivo_location = archivo_location[1:]
        try:
            with open(archivo_location,'rb') as f:
                file_data = f.read()
            # sending response 
            response = HttpResponse(file_data, content_type='application/pdf')
            response['Content-Disposition'] = 'attachment; filename="'+archivo_name.get('archivo')[5:]+'"'
            return response
        except Exception as e :
            # handle file not exist case here
            response = HttpResponseNotFound('<h1>File not exist</h1>')
            return response




    