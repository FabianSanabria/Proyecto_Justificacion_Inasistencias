from rest_framework.serializers import ModelSerializer
from solicitudes.models import Carrera,Solicitud,Ramos
from rest_framework import serializers


class CarreraSerializer(ModelSerializer):
    """
    Clase para representar los campos serializados del modelo de carreras
    """
    class Meta:
        model = Carrera
        fields = ['nombreCarrera']

class CarreraIDSerializer(ModelSerializer):
    """
    Clase para representar los campos serializados del modelo de carreras
    """
    class Meta:
        model = Carrera
        fields = ['id']

class SolicitudMotivoMedCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Solicitud
        fields = ('fechaInicio','fechaTermino','rutAlumno','correoAlumno','telefono','motivo','nroFolio','cantRamos','nombreAlumno')
    def create_solicitud_MotivoMedico(self, validated_data,carrera):
        solicitud =Solicitud.objects.create_solicitud(
            fechaInicio= validated_data['fechaInicio'],
            fechaTermino=  validated_data['fechaTermino'],
            rutAlumno= validated_data['rutAlumno'],
            nombreAlumno= validated_data['nombreAlumno'],
            correoAlumno = validated_data['correoAlumno'],
            telefono= validated_data['telefono'],
            motivo= validated_data['motivo'],
            nroFolio = validated_data['nroFolio'],
            cantRamos = validated_data['cantRamos'],
            carrera = carrera,  
        )
        return solicitud
    
class SolicitudFuerzaMayorCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Solicitud
        fields = ('fechaInicio','fechaTermino','rutAlumno','motivo','cantRamos','nombreAlumno','correoAlumno','telefono')
    def create_solicitud_FuerzaMayor(self, validated_data,carrera):
        solicitud =Solicitud.objects.create_solicitud(
            fechaInicio= validated_data['fechaInicio'],
            fechaTermino=  validated_data['fechaTermino'],
            rutAlumno= validated_data['rutAlumno'],
            nombreAlumno= validated_data['nombreAlumno'],
            correoAlumno = validated_data['correoAlumno'],
            telefono= validated_data['telefono'],
            motivo= validated_data['motivo'],
            cantRamos = validated_data['cantRamos'],
            carrera = carrera,  
        )
        return solicitud

class SolicitudSerializer(serializers.ModelSerializer):
    class Meta:
        model = Solicitud
        fields = ('id','created_at','fechaInicio','fechaTermino','telefono','rutAlumno','nombreAlumno','correoAlumno','motivo','estado','archivo','carrera','cantRamos')

class SolicitudDetallesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Solicitud
        fields = ('id','created_at','fechaInicio','fechaTermino','telefono','rutAlumno','nombreAlumno','correoAlumno','motivo','estado','archivo','carrera','nroFolio','cantRamos')

class SolicitudArchivoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Solicitud
        fields = ('archivo',)

class Ramos1CreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ramos
        fields = (
            'asignatura1Nombre',
            'asignatura1Codigo',
            'asignatura1NRC',
            'asignatura1NombreDoc',
            'asignatura1CorreoDoc',
        )   
    
    def create_ramos1(self, validated_data,solicitud):
        ramos =Ramos.objects.create_ramos(
            solicitud= solicitud,
            asignatura1Nombre= validated_data['asignatura1Nombre'],
            asignatura1Codigo= validated_data['asignatura1Codigo'],
            asignatura1NRC=  validated_data['asignatura1NRC'],
            asignatura1NombreDoc= validated_data['asignatura1NombreDoc'],
            asignatura1CorreoDoc= validated_data['asignatura1CorreoDoc'],
        )
        return ramos 

class Ramos2CreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ramos
        fields = (
            'asignatura1Nombre',
            'asignatura1Codigo',
            'asignatura1NRC',
            'asignatura1NombreDoc',
            'asignatura1CorreoDoc',
            'asignatura2Nombre',
            'asignatura2Codigo',
            'asignatura2NRC',
            'asignatura2NombreDoc',
            'asignatura2CorreoDoc',
        )
    def create_ramos2(self, validated_data,solicitud):
        ramos =Ramos.objects.create_ramos(
            solicitud= solicitud,
            asignatura1Nombre= validated_data['asignatura1Nombre'],
            asignatura1Codigo= validated_data['asignatura1Codigo'],
            asignatura1NRC=  validated_data['asignatura1NRC'],
            asignatura1NombreDoc= validated_data['asignatura1NombreDoc'],
            asignatura1CorreoDoc= validated_data['asignatura1CorreoDoc'],
            asignatura2Nombre= validated_data['asignatura2Nombre'],
            asignatura2Codigo= validated_data['asignatura2Codigo'],
            asignatura2NRC=  validated_data['asignatura2NRC'],
            asignatura2NombreDoc= validated_data['asignatura2NombreDoc'],
            asignatura2CorreoDoc= validated_data['asignatura2CorreoDoc'],
        )
        return ramos
    
        

class Ramos3CreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ramos
        fields = (
            'asignatura1Nombre',
            'asignatura1Codigo',
            'asignatura1NRC',
            'asignatura1NombreDoc',
            'asignatura1CorreoDoc',
            'asignatura2Nombre',
            'asignatura2Codigo',
            'asignatura2NRC',
            'asignatura2NombreDoc',
            'asignatura2CorreoDoc',
            'asignatura3Nombre',
            'asignatura3Codigo',
            'asignatura3NRC',
            'asignatura3NombreDoc',
            'asignatura3CorreoDoc',
        )

    def create_ramos3(self, validated_data,solicitud):
        ramos =Ramos.objects.create_ramos(
            solicitud= solicitud,
            asignatura1Nombre= validated_data['asignatura1Nombre'],
            asignatura1Codigo= validated_data['asignatura1Codigo'],
            asignatura1NRC=  validated_data['asignatura1NRC'],
            asignatura1NombreDoc= validated_data['asignatura1NombreDoc'],
            asignatura1CorreoDoc= validated_data['asignatura1CorreoDoc'],
            asignatura2Nombre= validated_data['asignatura2Nombre'],
            asignatura2Codigo= validated_data['asignatura2Codigo'],
            asignatura2NRC=  validated_data['asignatura2NRC'],
            asignatura2NombreDoc= validated_data['asignatura2NombreDoc'],
            asignatura2CorreoDoc= validated_data['asignatura2CorreoDoc'],
            asignatura3Nombre= validated_data['asignatura3Nombre'],
            asignatura3Codigo= validated_data['asignatura3Codigo'],
            asignatura3NRC=  validated_data['asignatura3NRC'],
            asignatura3NombreDoc= validated_data['asignatura3NombreDoc'],
            asignatura3CorreoDoc= validated_data['asignatura3CorreoDoc'],
            
        )
        return ramos

class Ramos4CreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ramos
        fields = (
            'asignatura1Nombre',
            'asignatura1Codigo',
            'asignatura1NRC',
            'asignatura1NombreDoc',
            'asignatura1CorreoDoc',
            'asignatura2Nombre',
            'asignatura2Codigo',
            'asignatura2NRC',
            'asignatura2NombreDoc',
            'asignatura2CorreoDoc',
            'asignatura3Nombre',
            'asignatura3Codigo',
            'asignatura3NRC',
            'asignatura3NombreDoc',
            'asignatura3CorreoDoc',
            'asignatura4Nombre',
            'asignatura4Codigo',
            'asignatura4NRC',
            'asignatura4NombreDoc',
            'asignatura4CorreoDoc',
        )

    def create_ramos4(self, validated_data,solicitud):
        ramos =Ramos.objects.create_ramos(
            solicitud= solicitud,
            asignatura1Nombre= validated_data['asignatura1Nombre'],
            asignatura1Codigo= validated_data['asignatura1Codigo'],
            asignatura1NRC=  validated_data['asignatura1NRC'],
            asignatura1NombreDoc= validated_data['asignatura1NombreDoc'],
            asignatura1CorreoDoc= validated_data['asignatura1CorreoDoc'],
            asignatura2Nombre= validated_data['asignatura2Nombre'],
            asignatura2Codigo= validated_data['asignatura2Codigo'],
            asignatura2NRC=  validated_data['asignatura2NRC'],
            asignatura2NombreDoc= validated_data['asignatura2NombreDoc'],
            asignatura2CorreoDoc= validated_data['asignatura2CorreoDoc'],
            asignatura3Nombre= validated_data['asignatura3Nombre'],
            asignatura3Codigo= validated_data['asignatura3Codigo'],
            asignatura3NRC=  validated_data['asignatura3NRC'],
            asignatura3NombreDoc= validated_data['asignatura3NombreDoc'],
            asignatura3CorreoDoc= validated_data['asignatura3CorreoDoc'],
            asignatura4Nombre= validated_data['asignatura4Nombre'],
            asignatura4Codigo= validated_data['asignatura4Codigo'],
            asignatura4NRC=  validated_data['asignatura4NRC'],
            asignatura4NombreDoc= validated_data['asignatura4NombreDoc'],
            asignatura4CorreoDoc= validated_data['asignatura4CorreoDoc'],
        )
        return ramos
    

class Ramos5CreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ramos
        fields = (
            'asignatura1Nombre',
            'asignatura1Codigo',
            'asignatura1NRC',
            'asignatura1NombreDoc',
            'asignatura1CorreoDoc',
            'asignatura2Nombre',
            'asignatura2Codigo',
            'asignatura2NRC',
            'asignatura2NombreDoc',
            'asignatura2CorreoDoc',
            'asignatura3Nombre',
            'asignatura3Codigo',
            'asignatura3NRC',
            'asignatura3NombreDoc',
            'asignatura3CorreoDoc',
            'asignatura4Nombre',
            'asignatura4Codigo',
            'asignatura4NRC',
            'asignatura4NombreDoc',
            'asignatura4CorreoDoc',
            'asignatura5Nombre',
            'asignatura5Codigo',
            'asignatura5NRC',
            'asignatura5NombreDoc',
            'asignatura5CorreoDoc',
        )

    def create_ramos5(self, validated_data,solicitud):
        ramos =Ramos.objects.create_ramos(
            solicitud= solicitud,
            asignatura1Nombre= validated_data['asignatura1Nombre'],
            asignatura1Codigo= validated_data['asignatura1Codigo'],
            asignatura1NRC=  validated_data['asignatura1NRC'],
            asignatura1NombreDoc= validated_data['asignatura1NombreDoc'],
            asignatura1CorreoDoc= validated_data['asignatura1CorreoDoc'],
            asignatura2Nombre= validated_data['asignatura2Nombre'],
            asignatura2Codigo= validated_data['asignatura2Codigo'],
            asignatura2NRC=  validated_data['asignatura2NRC'],
            asignatura2NombreDoc= validated_data['asignatura2NombreDoc'],
            asignatura2CorreoDoc= validated_data['asignatura2CorreoDoc'],
            asignatura3Nombre= validated_data['asignatura3Nombre'],
            asignatura3Codigo= validated_data['asignatura3Codigo'],
            asignatura3NRC=  validated_data['asignatura3NRC'],
            asignatura3NombreDoc= validated_data['asignatura3NombreDoc'],
            asignatura3CorreoDoc= validated_data['asignatura3CorreoDoc'],
            asignatura4Nombre= validated_data['asignatura4Nombre'],
            asignatura4Codigo= validated_data['asignatura4Codigo'],
            asignatura4NRC=  validated_data['asignatura4NRC'],
            asignatura4NombreDoc= validated_data['asignatura4NombreDoc'],
            asignatura4CorreoDoc= validated_data['asignatura4CorreoDoc'],
            asignatura5Nombre= validated_data['asignatura5Nombre'],
            asignatura5Codigo= validated_data['asignatura5Codigo'],
            asignatura5NRC=  validated_data['asignatura5NRC'],
            asignatura5NombreDoc= validated_data['asignatura5NombreDoc'],
            asignatura5CorreoDoc= validated_data['asignatura5CorreoDoc'],
            
        )
        return ramos



class Ramos6CreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ramos
        fields = (
            'asignatura1Nombre',
            'asignatura1Codigo',
            'asignatura1NRC',
            'asignatura1NombreDoc',
            'asignatura1CorreoDoc',
            'asignatura2Nombre',
            'asignatura2Codigo',
            'asignatura2NRC',
            'asignatura2NombreDoc',
            'asignatura2CorreoDoc',
            'asignatura3Nombre',
            'asignatura3Codigo',
            'asignatura3NRC',
            'asignatura3NombreDoc',
            'asignatura3CorreoDoc',
            'asignatura4Nombre',
            'asignatura4Codigo',
            'asignatura4NRC',
            'asignatura4NombreDoc',
            'asignatura4CorreoDoc',
            'asignatura5Nombre',
            'asignatura5Codigo',
            'asignatura5NRC',
            'asignatura5NombreDoc',
            'asignatura5CorreoDoc',
            'asignatura6Nombre',
            'asignatura6Codigo',
            'asignatura6NRC',
            'asignatura6NombreDoc',
            'asignatura6CorreoDoc',
        )
    
    def create_ramos6(self, validated_data,solicitud):
        ramos =Ramos.objects.create_ramos(
            solicitud= solicitud,
            asignatura1Nombre= validated_data['asignatura1Nombre'],
            asignatura1Codigo= validated_data['asignatura1Codigo'],
            asignatura1NRC=  validated_data['asignatura1NRC'],
            asignatura1NombreDoc= validated_data['asignatura1NombreDoc'],
            asignatura1CorreoDoc= validated_data['asignatura1CorreoDoc'],
            asignatura2Nombre= validated_data['asignatura2Nombre'],
            asignatura2Codigo= validated_data['asignatura2Codigo'],
            asignatura2NRC=  validated_data['asignatura2NRC'],
            asignatura2NombreDoc= validated_data['asignatura2NombreDoc'],
            asignatura2CorreoDoc= validated_data['asignatura2CorreoDoc'],
            asignatura3Nombre= validated_data['asignatura3Nombre'],
            asignatura3Codigo= validated_data['asignatura3Codigo'],
            asignatura3NRC=  validated_data['asignatura3NRC'],
            asignatura3NombreDoc= validated_data['asignatura3NombreDoc'],
            asignatura3CorreoDoc= validated_data['asignatura3CorreoDoc'],
            asignatura4Nombre= validated_data['asignatura4Nombre'],
            asignatura4Codigo= validated_data['asignatura4Codigo'],
            asignatura4NRC=  validated_data['asignatura4NRC'],
            asignatura4NombreDoc= validated_data['asignatura4NombreDoc'],
            asignatura4CorreoDoc= validated_data['asignatura4CorreoDoc'],
            asignatura5Nombre= validated_data['asignatura5Nombre'],
            asignatura5Codigo= validated_data['asignatura5Codigo'],
            asignatura5NRC=  validated_data['asignatura5NRC'],
            asignatura5NombreDoc= validated_data['asignatura5NombreDoc'],
            asignatura5CorreoDoc= validated_data['asignatura5CorreoDoc'],
            asignatura6Nombre= validated_data['asignatura6Nombre'],
            asignatura6Codigo= validated_data['asignatura6Codigo'],
            asignatura6NRC=  validated_data['asignatura6NRC'],
            asignatura6NombreDoc= validated_data['asignatura6NombreDoc'],
            asignatura6CorreoDoc= validated_data['asignatura6CorreoDoc'],
        )
        return ramos
    

class RamosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ramos
        fields = (
            'asignatura1Nombre',
            'asignatura1Codigo',
            'asignatura1NRC',
            'asignatura1NombreDoc',
            'asignatura1CorreoDoc',
            'asignatura2Nombre',
            'asignatura2Codigo',
            'asignatura2NRC',
            'asignatura2NombreDoc',
            'asignatura2CorreoDoc',
            'asignatura3Nombre',
            'asignatura3Codigo',
            'asignatura3NRC',
            'asignatura3NombreDoc',
            'asignatura3CorreoDoc',
            'asignatura4Nombre',
            'asignatura4Codigo',
            'asignatura4NRC',
            'asignatura4NombreDoc',
            'asignatura4CorreoDoc',
            'asignatura5Nombre',
            'asignatura5Codigo',
            'asignatura5NRC',
            'asignatura5NombreDoc',
            'asignatura5CorreoDoc',
            'asignatura6Nombre',
            'asignatura6Codigo',
            'asignatura6NRC',
            'asignatura6NombreDoc',
            'asignatura6CorreoDoc',
            'solicitud_id',
        )
