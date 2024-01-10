---
sidebar_position: 1
---

# Abstract Factory

Define uma **interface** para criar famílias de objetos relacionados ou dependentes *sem especificar suas classes concretas*, o código cliente chama os métodos de criação da fábrica (Factory) em vez de criar objetos diretamente com uma instrução new. Como resultado disso, o código cliente trabalha com qualquer fábrica concreta e com qualquer família de produtos.


:::tip Vantagens

- *Principio da responsabilidade única:* Você pode mover a criação de objetos de seu próprio produto para um lugar único, tornando o código mais fácil de suportar.

- *Principio da aberto/fechado:* Você pode introduzir novas variantes de produtos sem quebrar o código cliente existente.


:::


## Implementação

1. Crie um mapeamento entre os diferentes tipos de produtos e suas variantes.

2. Defina interfaces de produto abstratas para todos os tipos de produtos e faça com que todas as classes de produtos concretos as implementem.

3. Defina a interface da fábrica abstrata com um conjunto de métodos de criação para todos os produtos abstratos.

4. Implemente um conjunto de classes de fábrica concretas, uma para cada variante de produto.

5. Inicialize a fábrica em algum lugar do aplicativo, instanciando uma das classes de fábrica concretas com base na configuração do aplicativo ou no ambiente atual. Passe este objeto de fábrica para todas as classes que constroem produtos.

6. Substitua todas as chamadas diretas para construtores de produtos por chamadas para o método de criação apropriado no objeto de fábrica.


## Exemplo

Imagine que você irá implementar um sistema de pagamento com base em uma API existente, na qual permite criar cartões, clientes e planos. Para isso, você precisa criar uma interface para cada tipo de produto e implementar uma classe concreta para cada variante de produto.   
    
```python
from abc import ABC, abstractmethod
from django.conf import settings


class AbstractCreateFactory(ABC):
    def __init__(self, user_profile=None, card_token=None, customer_id=None):
        self.user_profile = user_profile
        self.card_token = card_token
        self.customer_id = customer_id

    @abstractmethod
    def create_customer(self):
        pass
    
    @abstractmethod
    def create_card(self):
        pass


class APIFactory(AbstractCreateFactory):
    def create_customer(self):
        from features.subscription.services.api import APICreate

        return APICreate(self.user_profile).create_customer()

    def create_card(self):
        from features.subscription.services.api import APICreate

        return APICreate(self.card_token).create_card()
```
No código acima, temos a interface `AbstractCreateFactory` que define os métodos de criação de clientes e cartões, além disso, temos a classe concreta `APIFactory` que implementa os métodos de criação de clientes e cartões, porém, não é responsável por criar os clientes e cartões, ela delega essa responsabilidade para a classe `APICreate` que é responsável por criar os clientes e cartões através da API.

```python
import requests
from requests.auth import HTTPBasicAuth
from urllib.parse import urljoin
from django.conf import settings
from features.subscription.services import factory
import json
import json


class PagarMeCreate(factory.AbstractCreateFactory):
    def __init__(self, user_profile):
        super().__init__(user_profile)
        self.username = settings.USERNAME

    def to_dict(self):
        return self.__dict__

    
    def create_customer(self):
        url = settings.CUSTOMER_URL
        data = {
           #Todos os dados necessários para criar um cliente
        }
        try:
           #Toda a requisicao necessária para criar um cliente
        except requests.RequestException as e:
            return {"error": e, "status": 500}
```

No código acima, temos a classe concreta `PagarMeCreate` que implementa os métodos de criação de clientes e cartões, além disso, ela é responsável por criar os clientes e cartões através da API.
