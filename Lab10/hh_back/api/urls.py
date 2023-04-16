from django.urls import path
from rest_framework.routers import DefaultRouter

from . import views

urlpatterns = [
    path('companies/', views.CompanyViewSet.as_view({'get': 'list', 'post': 'create'}), name='companies'),
    path('companies/<int:pk>/', views.CompanyViewSet.as_view({'get': 'retrieve'}), name='company details'),
    # path('companies/<int:id>/vacancies/', views.list_company_vacancies, name='list of vacancies of company'),
    # path('vacancies/', views.list_vacancies, name='list of vacancies'),
    # path('vacancies/<int:id>/', views.vacancy_details, name='vacancy details'),
    # path('vacancies/top_ten/', views.list_topten_vacancies, name='list of top ten vacancies'),
]

