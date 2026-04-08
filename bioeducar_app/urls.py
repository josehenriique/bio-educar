from django.urls import path
from . import views

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
  path('', views.home, name='home'),
  path('quem-somos', views.quemSomos, name='quem-somos'),
  path('projetos', views.projetos, name='projetos'),
  path('contato', views.contato, name='contato'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)