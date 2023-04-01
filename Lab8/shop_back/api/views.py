from django.shortcuts import render

from django.http import JsonResponse
from .models import Category, Product


# Create your views here.

def getProducts(request):
    products = Product.objects.all().values()

    return JsonResponse(list(products), safe=False, json_dumps_params={'indent': 2})

