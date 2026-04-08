from django.shortcuts import render
from .models import *

def home(request):
  context = {
    'logotipo': Image.objects.get(nome="logotipo"),
    'quem_somos': Text.objects.get(identifier="quem-somos"),
    'card_conservacao': Text.objects.get(identifier="card-conservacao"),
    'card_no_campo': Text.objects.get(identifier="card-no-campo"),
    'card_politicas_publicas': Text.objects.get(identifier="card-politicas-publicas"),
    'card_educacao': Text.objects.get(identifier="card-educacao"),
    'card_aves_migratorias': Text.objects.get(identifier="card-aves-migratorias"),
  }
  return render(request, 'home.html', context)

def quemSomos(request):
  context = {
    'quem_somos_page': Text.objects.get(identifier="quem-somos-page"),
    'card_proposta_1': Text.objects.get(identifier="card-proposta-1"),
    'card_proposta_2': Text.objects.get(identifier="card-proposta-2"),
    'card_proposta_3': Text.objects.get(identifier="card-proposta-3"),
    'card_proposta_4': Text.objects.get(identifier="card-proposta-4"),
  }
  return render(request, 'quem-somos.html', context )

def projetos(request):
  context = {
    'acoes_que_transformam': Text.objects.get(identifier="acoes-que-transformam"),
    'projeto_conservacao': Text.objects.get(identifier="projeto-conservacao"),
    'projeto_conservacao_objetivo': Text.objects.get(identifier="projeto-conservacao-objetivo"),
    'projeto_educacao': Text.objects.get(identifier="projeto-educacao"),
    'projeto_educacao_objetivo': Text.objects.get(identifier="projeto-educacao-objetivo"),
    'projeto_visita': Text.objects.get(identifier="projeto-visita"),
    'projeto_visita_objetivo': Text.objects.get(identifier="projeto-visita-objetivo"),
    'projeto_aves': Text.objects.get(identifier="projeto-aves"),
    'projeto_aves_objetivo': Text.objects.get(identifier="projeto-aves-objetivo"),
  }
  return render(request, 'projetos.html', context)

def contato(request):
  context = {
    'contato_texto': Text.objects.get(identifier="contato-texto"),
    'numero_1': Text.objects.get(identifier="numero-1"),
    'numero_2': Text.objects.get(identifier="numero-2"),
    'endereco': Text.objects.get(identifier="endereco"),
    'instagram': Text.objects.get(identifier="instagram"),
  }
  return render(request, 'contato.html', context)
