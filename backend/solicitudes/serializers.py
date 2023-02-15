from rest_framework.serializers import ModelSerializer
from solicitudes.models import Carrera


class CarreraSerializer(ModelSerializer):
    """
    Clase para representar los campos serializados del modelo de carreras
    """
    class Meta:
        model = Carrera
        fields = ['nombreCarrera']