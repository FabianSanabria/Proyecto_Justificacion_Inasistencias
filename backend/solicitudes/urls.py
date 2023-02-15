from django.urls import path
from .views import RetrieveCarreraView


urlpatterns = [
    path('carreras',RetrieveCarreraView.as_view()),
    
]