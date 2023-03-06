from django.db import models
from django.contrib.auth.models import   AbstractBaseUser, PermissionsMixin
from django.core.validators import FileExtensionValidator
# Create your models here.

class SolicitudManager(models.Manager):
        
    def create_solicitud(self, fechaInicio,fechaTermino, rutAlumno,correoAlumno,telefono,nombreAlumno,motivo,carrera,cantRamos,nroFolio=None,):
        """
        Crea una solicitud .
        """
        
        solicitud = self.model(
            fechaInicio = fechaInicio,
            fechaTermino= fechaTermino,
            nroFolio = nroFolio,
            rutAlumno = rutAlumno,
            nombreAlumno = nombreAlumno,
            motivo = motivo,
            carrera = carrera,
            cantRamos = cantRamos,
            correoAlumno = correoAlumno,
            telefono = telefono,
            estado = "Pendiente",
        )
        solicitud.save(using=self._db)
        return solicitud



class Solicitud(models.Model):
    rutAlumno = models.CharField(max_length=100)
    nombreAlumno = models.CharField(max_length=100,default="Nombre")
    telefono = models.CharField(max_length=100,default="+56911111111")
    correoAlumno = models.EmailField(max_length=100,default="corre@gmail.com")
    fechaInicio = models.DateField()
    fechaTermino = models.DateField()
    nroFolio = models.CharField(null=True,max_length=10)
    motivo = models.TextField()
    carrera = models.ForeignKey('Carrera', on_delete=models.CASCADE)
    archivo = models.FileField(null=True,validators=[FileExtensionValidator(allowed_extensions=['pdf'])])
    estado = models.CharField(max_length=20)
    cantRamos = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    objects = SolicitudManager()
    
    REQUIRED_FIELDS = ['fechaInicio', 'fechaTermino','rutAlumno','motivo','nombreAlumno','telefono','correoAlumno']

class CarreraManager(models.Manager):
     def get_all_objects(self):
        queryset = self._meta.model.objects.all()
        # can use the below method also
        # queryset = self.__class__.objects.all()   
        return queryset

class Carrera(models.Model):

    nombreCarrera = models.CharField(max_length=100,unique=True)
    REQUIRED_FIELDS = ['nombreCarrera']
    def __str__(self):
        return self.nombreCarrera

    objects = CarreraManager()


class RamosManager(models.Manager):
        
    def create_ramos(
            self,
            solicitud,
            asignatura1Nombre,
            asignatura1Codigo,
            asignatura1NRC,
            asignatura1NombreDoc,
            asignatura1CorreoDoc,
            asignatura2Nombre= None,
            asignatura2Codigo= None,
            asignatura2NRC = None,
            asignatura2NombreDoc= None,
            asignatura2CorreoDoc= None,
            asignatura3Nombre= None,
            asignatura3Codigo= None,
            asignatura3NRC= None,
            asignatura3NombreDoc= None,
            asignatura3CorreoDoc= None,
            asignatura4Nombre= None,
            asignatura4Codigo= None,
            asignatura4NRC= None,
            asignatura4NombreDoc= None,
            asignatura4CorreoDoc= None,
            asignatura5Nombre= None,
            asignatura5Codigo= None,
            asignatura5NRC= None,
            asignatura5NombreDoc= None,
            asignatura5CorreoDoc= None,
            asignatura6Nombre= None,
            asignatura6Codigo= None,
            asignatura6NRC= None,
            asignatura6NombreDoc= None,
            asignatura6CorreoDoc= None,
            ):
        """
        Crea fila con ramos de la solicitud .
        """
        
        ramos = self.model(
            solicitud = solicitud,
            asignatura1Nombre = asignatura1Nombre,
            asignatura1Codigo = asignatura1Codigo,
            asignatura1NRC = asignatura1NRC,
            asignatura1NombreDoc = asignatura1NombreDoc,
            asignatura1CorreoDoc = asignatura1CorreoDoc,
            asignatura2Nombre= asignatura2Nombre,
            asignatura2Codigo = asignatura2Codigo,
            asignatura2NRC = asignatura2NRC,
            asignatura2NombreDoc= asignatura2NombreDoc,
            asignatura2CorreoDoc= asignatura2CorreoDoc,
            asignatura3Nombre= asignatura3Nombre,
            asignatura3Codigo = asignatura3Codigo,
            asignatura3NRC= asignatura3NRC,
            asignatura3NombreDoc= asignatura3NombreDoc,
            asignatura3CorreoDoc= asignatura3CorreoDoc,
            asignatura4Nombre= asignatura4Nombre,
            asignatura4Codigo = asignatura4Codigo,
            asignatura4NRC= asignatura4NRC,
            asignatura4NombreDoc= asignatura4NombreDoc,
            asignatura4CorreoDoc= asignatura4CorreoDoc,
            asignatura5Nombre= asignatura5Nombre,
            asignatura5Codigo = asignatura5Codigo,
            asignatura5NRC= asignatura5NRC,
            asignatura5NombreDoc= asignatura5NombreDoc,
            asignatura5CorreoDoc= asignatura5CorreoDoc,
            asignatura6Nombre= asignatura6Nombre,
            asignatura6Codigo = asignatura6Codigo,
            asignatura6NRC= asignatura6NRC,
            asignatura6NombreDoc= asignatura6NombreDoc,
            asignatura6CorreoDoc= asignatura6CorreoDoc,
        )

        ramos.save(using=self._db)
        return ramos

class Ramos(models.Model):

    asignatura1Nombre = models.CharField(max_length=255)
    asignatura1Codigo = models.CharField(max_length=255,default="DAM-11111")
    asignatura1NRC= models.CharField(max_length=255)
    asignatura1NombreDoc= models.CharField(max_length=255)
    asignatura1CorreoDoc= models.EmailField()
    asignatura2Nombre= models.CharField(max_length=255,null=True)
    asignatura2Codigo = models.CharField(max_length=255,default="DAM-11111",null=True)
    asignatura2NRC= models.CharField(max_length=20,null=True)
    asignatura2NombreDoc= models.CharField(max_length=255,null=True)
    asignatura2CorreoDoc=models.EmailField(null=True)
    asignatura3Nombre= models.CharField(max_length=255,null=True)
    asignatura3Codigo = models.CharField(max_length=255,default="DAM-11111",null=True)
    asignatura3NRC= models.CharField(max_length=20,null=True)
    asignatura3NombreDoc= models.CharField(max_length=255,null=True)
    asignatura3CorreoDoc= models.EmailField(null=True)
    asignatura4Nombre= models.CharField(max_length=255,null=True)
    asignatura4Codigo = models.CharField(max_length=255,default="DAM-11111",null=True)
    asignatura4NRC= models.CharField(max_length=20,null=True)
    asignatura4NombreDoc= models.CharField(max_length=255,null=True)
    asignatura4CorreoDoc= models.EmailField(null=True)
    asignatura5Nombre= models.CharField(max_length=255,null=True)
    asignatura5Codigo = models.CharField(max_length=255,default="DAM-11111",null=True)
    asignatura5NRC= models.CharField(max_length=20,null=True)
    asignatura5NombreDoc= models.CharField(max_length=255,null=True)
    asignatura5CorreoDoc= models.EmailField(null=True)
    asignatura6Nombre= models.CharField(max_length=255,null=True)
    asignatura6Codigo = models.CharField(max_length=255,default="DAM-11111",null=True)
    asignatura6NRC= models.CharField(max_length=20,null=True)
    asignatura6NombreDoc= models.CharField(max_length=255,null=True)
    asignatura6CorreoDoc= models.EmailField(max_length=255,null=True)
    solicitud = models.ForeignKey('Solicitud', on_delete=models.CASCADE)

    
    objects = RamosManager()

