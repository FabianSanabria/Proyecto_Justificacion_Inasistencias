from django.db import models
from django.contrib.auth.models import   AbstractBaseUser, PermissionsMixin

# Create your models here.

class SolicitudManager():
        
    def create_solicitud(self, fechaInicio,fechaTermino,nroFolio, rutAlumno,motivo):
        """
        Crea una solicitud .
        """
        
        solicitud = self.model(
            fechaInicio = fechaInicio,
            fechaTermino= fechaTermino,
            nroFolio = nroFolio,
            rutAlumno = rutAlumno,
            motivo = motivo,
        )

        solicitud.save(using=self._db)
        return solicitud



class Solicitud(models.Model):

    fechaInicio = models.DateField()
    fechaTermino = models.DateField()
    nroFolio = models.IntegerField()
    rutAlumno = models.CharField(max_length=100)
    motivo = models.TextField()
    carrera = models.ForeignKey('Carrera', on_delete=models.CASCADE)


    objects = SolicitudManager()
    
    REQUIRED_FIELDS = ['fechaInicio', 'fechaTermino','nroFolio','rutAlumno','motivo']



class Carrera(models.Model):

    nombreCarrera = models.CharField(max_length=100,unique=True)
    
    
    REQUIRED_FIELDS = ['nombreCarrera']
    def __str__(self):
        return self.nombreCarrera


