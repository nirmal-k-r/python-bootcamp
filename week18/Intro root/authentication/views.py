from django.shortcuts import render
from django.http import HttpResponse # pass view information into the browser
from django.template import loader

# Create your views here.
def test(request):
    return HttpResponse("Hello, welcome to to the project")

def index(request):
    ctx={
        'title': "Login Page",
        'content': "Welcome to the login page"
    }
    return render(request, "authentication/login.html", context=ctx)
