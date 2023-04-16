from django.shortcuts import render
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response

from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

from rest_framework import viewsets


class CompanyViewSet(viewsets.ViewSet):

    def list(self, request):
        queryset = Company.objects.all()
        serializer = CompanySerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = CompanySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Company.objects.all()
        company = get_object_or_404(queryset, pk=pk)
        serializer = CompanySerializer(company)
        return Response(serializer.data)

    def update(self, request, pk=None):
        queryset = Company.objects.all()
        company = get_object_or_404(queryset, pk=pk)
        serializer = CompanySerializer(company, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def destroy(self, request, pk=None):
        queryset = Company.objects.all()
        company = get_object_or_404(queryset, pk=pk)
        company.delete()
        return Response({'deleted': True})

    def list_vacancies(self, request, pk=None):
        queryset = Vacancy.objects.all().filter(company=pk).order_by('-salary')[:10]
        serializer = VacancySerializer(queryset, many=True)
        return Response(serializer.data)


class VacancyViewSet(viewsets.ModelViewSet):
    serializer_class = VacancySerializer
    queryset = Vacancy.objects.all()

    def list_top10(self, request):
        vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
