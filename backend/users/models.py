from django.db import models
from django.contrib.auth.models import  BaseUserManager, AbstractBaseUser, PermissionsMixin


class UserAccountManager(BaseUserManager):
        
    def create_user(self, correo,nombreCompleto,tipo, password=None):
        """
        Crea un usuario a partir del nombre.
        """
        
        user = self.model(
            nombreCompleto = nombreCompleto,
            correo= correo,
            tipo = tipo,

        )
        user.set_password(password)

        user.save(using=self._db)
        return user

    def create_superuser(self, correo, nombreCompleto, password=None):
        """
        Crea administrador a partir de correo, nombre y password.
        """
        if not correo:
            raise ValueError('Usuario debe tener correo')
        
        correo = self.normalize_email(correo)
        correo = correo.lower()
        
        user = self.create_user(
            nombreCompleto,
            correo,
            password,
            tipo = 0, #tipo 0 es admin
        )
        
        user.save(using=self._db)
        return user
    
    def create_encargado(self,correo,nombreCompleto,password=None):
        """
        Crea Encargado/Jefe de Carrera a partir de correo, nombre y password.
        """
        if not correo:
            raise ValueError('Usuario debe tener correo')
        
        correo = self.normalize_email(correo)
        correo = correo.lower()
        
        user = self.create_user(
            correo = correo,
            nombreCompleto = nombreCompleto,
            tipo = 1,           #tipo 1 es Encargado/Jefe de Carrera
            password = password,
        )

        user.save(using=self._db)
        return user

    def create_alumno(self,correo,nombreCompleto,password=None):
        """
        Crea alumno a partir de correo, rut y nombre.
        """
        user = self.create_user(
            nombreCompleto,
            correo,
            password,
            tipo = 2,           #tipo 2 es Alumno
        )
    
        user.save(using=self._db)
        return user

class User(AbstractBaseUser, PermissionsMixin):

    nombreCompleto = models.CharField(max_length= 255)
    tipo = models.IntegerField()
    correo = models.EmailField(unique=True)
    carrera = models.CharField(max_length=100, null= True)

    objects = UserAccountManager()
    
    USERNAME_FIELD = 'correo'
    REQUIRED_FIELDS = ['nombreCompleto', 'tipo']
    def __str__(self):
        return self.correo

