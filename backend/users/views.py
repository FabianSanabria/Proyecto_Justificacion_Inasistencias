from rest_framework.views import APIView
from rest_framework import permissions, status
from rest_framework.response import Response
from django.contrib.auth import get_user_model
User = get_user_model()
from .serializers import EncargadoCreateSerializers, EncargadoSerializers
from solicitudes.models import Carrera 

class EncargadoRegisterView(APIView):
    
    def post(self,request):
        data = request.data
        
        carrera = Carrera.objects.get(nombreCarrera=data['nombreCarrera'])
        
        serializer = EncargadoCreateSerializers(data=data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

        encargado = serializer.create(serializer.validated_data,carrera)
        encargado = EncargadoSerializers(encargado)
        return Response(encargado.data, status= status.HTTP_201_CREATED)
 
class RetrieveEncargadoView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        encargado = request.user
        encargado = EncargadoSerializers(encargado)
        
        return Response(encargado.data, status= status.HTTP_200_OK)


