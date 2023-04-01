from django.shortcuts import render

from django.http import JsonResponse
from .models import Category, Product


# Create your views here.

def getProducts(request):
    products = Product.objects.all().values()

    return JsonResponse(list(products), safe=False, json_dumps_params={'indent': 2})


def getProductById(request, id):
    product = Product.objects.filter(pk=id)
    product = [p.to_json() for p in product]

    return JsonResponse(product, safe=False, json_dumps_params={'indent': 2})


def getCategories(request):
    categories = Category.objects.all().values()

    return JsonResponse(list(categories), safe=False, json_dumps_params={'indent': 2})


def getCategoryById(request, id):
    category = Category.objects.filter(pk=id)
    category = [c.to_json() for c in category]

    return JsonResponse(category, safe=False, json_dumps_params={'indent': 2})


def getProductsByCategory(request, id):
    productsByCat = Category.objects.filter(id=id)
    productsByCat = [p_c.to_json() for p_c in productsByCat]

    return JsonResponse(productsByCat, safe=False, json_dumps_params={'indent': 2})

