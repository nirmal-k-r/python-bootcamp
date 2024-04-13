from django.urls import path #path function
from . import views # . is shorthand for the current directory


#define routes
urlpatterns = [
    path('',views.index, name='index'),
]