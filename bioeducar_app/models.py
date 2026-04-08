from django.db import models

class Image(models.Model):
  image = models.FileField()
  nome = models.CharField(max_length=50)
  criador = models.CharField(max_length=100, blank=True)
  licenca = models.CharField(max_length=100, blank=True)

  def __str__(self):
    return self.nome

class Text(models.Model):
  texto = models.TextField()
  titulo = models.CharField(max_length=100, default="", blank=True)
  pagina = models.CharField(max_length=20)
  section = models.CharField(max_length=2)
  identifier = models.CharField(max_length=50)

  def __str__(self):
    return self.identifier
