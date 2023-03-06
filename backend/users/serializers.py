from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from django.core import exceptions
from solicitudes.models import Carrera
from solicitudes.serializers import CarreraSerializer

User = get_user_model()



class EncargadoCreateSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('nombreCompleto','correo','password')
    
    def validate(self, data):
        user = User(**data)
        password = data.get('password')
        try:
            validate_password(password, user)
        except exceptions.ValidationError as e:
            serializers_errors = serializers.as_serializer_error(e)
            raise exceptions.ValidationError({
                'password': serializers_errors['non_field_errors']
            })
        return data

    def create(self, validated_data):
        user =User.objects.create_encargado(
            nombreCompleto = validated_data['nombreCompleto'],
            correo = validated_data['correo'],
            password = validated_data['password'],
        )
        return user

class EncargadoSerializers(serializers.ModelSerializer):
    carreras = CarreraSerializer(read_only=True,many=True)
    class Meta:
        model = User
        fields = ('nombreCompleto','correo','carreras')
    