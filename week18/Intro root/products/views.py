from django.shortcuts import render
from .models import Product

# Create your views here.

def index(request):
    all_products = Product.objects.all()
    print(all_products)
    ctx={
        'title': "Products Page",
        'content': "Find all products here",
        'products': all_products
    }
    return render(request, "products/index.html", context=ctx)
