from django.shortcuts import render

from django.http import HttpResponse
from django.template import loader


# Create your views here.

def sayHello(resp):
    template = loader.get_template('index1.html')
    return HttpResponse(template.render())
