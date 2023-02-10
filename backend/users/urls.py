from django.urls import path
from .views import EncargadoRegisterView, RetrieveEncargadoView


urlpatterns = [
    path('register',EncargadoRegisterView.as_view()),
    path('me',RetrieveEncargadoView.as_view())
    
]