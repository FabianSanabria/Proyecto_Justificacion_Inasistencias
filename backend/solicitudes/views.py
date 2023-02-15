from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from solicitudes.models import Carrera
from solicitudes.serializers import CarreraSerializer
# Create your views here.


class RetrieveCarreraView(APIView):

    def get(self,request):
        """
        Esta es una función que permite obtener los valores serializados de los libros en la vista.
        Args:
            request: Recibe una request desde la vista.
        Returns:
            Response: Devuelve todos los libros con sus datos serializados.
        """
        serializer = CarreraSerializer(Carrera.objects.all().values(),many=True)
        return Response(status = status.HTTP_200_OK, data=serializer.data)
