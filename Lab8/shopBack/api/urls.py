from django.urls import path
from . import views

urlpatterns = [
  path('categories/', views.get_categories, name='Get all categories'),
  path('products/', views.getProducts, name='Get all products'),
  path('products/<int:id>/', views.getProductById, name='Get product by id'),
  path('categories/<int:id>', views.getCategoryById, name='Get category by id'),
    path('categories/<int:id>/products', views.getProductsByCategory, name='Get category products')
]