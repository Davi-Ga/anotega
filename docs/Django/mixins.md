---
sidebar_position: 4
---

# Mixins

## Introdução

Mixins são classes que contêm métodos que podem ser usados por outras classes sem a necessidade de herança direta. Eles são uma forma de reutilizar código em Python e são frequentemente usados para adicionar funcionalidades a classes existentes sem modificar sua hierarquia de herança.

Os mixins são uma forma de composição, onde uma classe é composta por outras classes que fornecem funcionalidades específicas. Isso permite que as classes sejam mais flexíveis e modulares, facilitando a reutilização de código e a manutenção do sistema.

## Exemplo

Vamos ver um exemplo simples de como usar mixins em Python. Suponha que temos uma classe `Animal` que representa um animal genérico e queremos adicionar funcionalidades específicas para diferentes tipos de animais, como `Cachorro` e `Gato`.

```python
class Animal:
    def __init__(self, nome):
        self.nome = nome

    def falar(self):
        pass

class Cachorro(Animal):

    def falar(self):
        return "Au Au!"

class Gato(Animal):

    def falar(self):
        return "Miau!"

```

Agora, vamos adicionar um mixin `Voador` que fornece a funcionalidade de voar para os animais que o utilizam.

```python

class Voador:
    def voar(self):
        return "Voando!"

class Passaro(Animal, Voador):

    def falar(self):
        return "Piu Piu!"

```

Neste exemplo, a classe `Passaro` herda de `Animal` e `Voador`, permitindo que ela tenha as funcionalidades de ambas as classes. Isso nos permite adicionar funcionalidades específicas para diferentes tipos de animais sem modificar a hierarquia de herança.

## Django Mixins

Em Django, mixins são frequentemente usados para adicionar funcionalidades comuns a várias views ou models. Por exemplo, o `LoginRequiredMixin` é um mixin que pode ser usado para restringir o acesso a uma view apenas a usuários autenticados.

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class MinhaView(LoginRequiredMixin, View):
    def get(self, request):
        return HttpResponse("Apenas usuários autenticados podem acessar esta view.")
```