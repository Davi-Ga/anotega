---
sidebar_position: 1
---



# Views

Views são responsáveis por receber uma requisição HTTP(`request`), realiza um processamento solicitado para aquela View e retorna uma resposta HTTP(`response`). No Django, as views são implementadas como funções ou classes que geralmente são mapeadas para URLs específicas em um arquivo de roteamento, como o `urls.py` e possuem o método HTTP correspondente, como `GET`, `POST`, `PUT`, `DELETE`, entre outros.

:::tip Retorno
    O retorno de uma view dever ser um objeto `HttpResponse`, `JsonResponse`, `Redirect`, `TemplateResponse`, entre outros.
:::

## Tipos

Há várias maneiras de implementar views no Django, como funções, classes, views genéricas, views baseadas em métodos, views baseadas em classes, entre outras. Cada uma dessas abordagens tem suas próprias vantagens e desvantagens, e a escolha de qual usar depende do contexto específico do projeto.

### Funções

As views baseadas em funções são a maneira mais simples de implementar uma view no Django. Elas são definidas como funções Python que recebem um objeto `HttpRequest` como argumento e retornam um objeto `HttpResponse`. As views baseadas em funções são úteis para implementar views simples que não precisam de muita lógica ou manipulação de dados.

```python	
from django.http import HttpResponse

def my_view(request):
    return HttpResponse("Hello, world!")
```

### Classes

As views baseadas em classes são uma maneira mais avançada de implementar views no Django. Elas são definidas como classes Python que herdam de uma classe base fornecida pelo Django, como `View`, `TemplateView`, `ListView`, `DetailView`, entre outras. As views baseadas em classes são úteis para implementar views mais complexas que precisam de mais lógica e manipulação de dados.

```python views.py
from django.views import View
from django.http import HttpResponse

class MyView(View):
    def get(self, request):
        return HttpResponse("Hello, world!")
```

`django.views.View` é uma classe base que fornece métodos para lidar com solicitações HTTP, como GET, POST, PUT, DELETE, entre outros. Para criar uma view baseada em classes, você deve criar uma subclasse de View e implementar os métodos correspondentes para cada tipo de solicitação HTTP que deseja lidar.


```python TemplateView.py
from django.views.generic import TemplateView

class HomePageView(TemplateView):
    template_name = 'home.html'
```

`django.views.generic.TemplateView` é uma classe base que fornece suporte para renderizar um modelo de template. Para criar uma view baseada em classes que renderiza um modelo de template, você deve criar uma subclasse de TemplateView e definir o atributo template_name com o nome do modelo de template que deseja renderizar.

### Views Genéricas

As views genéricas são uma maneira conveniente de implementar views comuns no Django. Elas são fornecidas pelo Django como classes base que implementam funcionalidades comuns, como exibir uma lista de objetos, exibir um objeto único, criar um novo objeto, atualizar um objeto existente, excluir um objeto, entre outros. As views genéricas são úteis para implementar views padrão que seguem um padrão comum de interação com o banco de dados.

```python ListView.py
from django.views.generic import ListView
from .models import MyModel

class MyModelListView(ListView):
    model = MyModel
    template_name = 'my_model_list.html'
    context_object_name = 'my_model_list'
```

`django.views.generic.ListView` é uma classe base que fornece suporte para exibir uma lista de objetos de um modelo. Para criar uma view baseada em classes que exibe uma lista de objetos de um modelo, você deve criar uma subclasse de ListView e definir os atributos model, template_name e context_object_name conforme necessário.


### Views Baseadas em Métodos

As views baseadas em métodos são uma maneira de implementar views que respondem a solicitações HTTP com base no método HTTP usado. Elas são definidas como métodos de uma classe Python que herda de uma classe base fornecida pelo Django, como `View`, `APIView`, entre outras. As views baseadas em métodos são úteis para implementar views que respondem a diferentes tipos de solicitações HTTP de maneira flexível e eficiente.

```python

from rest_framework.views import APIView
from rest_framework.response import Response

class MyAPIView(APIView):
    def get(self, request, *args, **kwargs):
        return Response({"message": "Hello, world!"})
```

`rest_framework.views.APIView` é uma classe base fornecida pelo Django REST Framework que fornece suporte para criar APIs RESTful. Para criar uma view baseada em métodos que responde a solicitações HTTP com base no método usado, você deve criar uma subclasse de APIView e implementar os métodos correspondentes para cada tipo de solicitação HTTP que deseja lidar.


## Querysets e QueryParams

**Querysets** são objetos extremamente poderosos e versáteis que representam uma `coleção de objetos` do banco de dados. Eles são a interface principal para interagir com o banco de dados em muitos frameworks de desenvolvimento web, como o Django.

Os **Querysets** são usados para `buscar objetos` do banco de dados de maneira eficiente, permitindo que você recupere apenas os dados que precisa. Eles também podem ser filtrados de acordo com critérios específicos, o que é útil para encontrar um subconjunto de dados que atenda a determinadas condições. Além disso, os Querysets podem ser ordenados, o que é essencial para apresentar os dados de uma maneira que faça sentido para os usuários.

Os **Querysets** também são `mutáveis`, o que significa que você pode atualizá-los para refletir as alterações nos dados subjacentes. E, se necessário, você pode deletar objetos diretamente de um Queryset, o que é uma maneira eficiente de remover dados desnecessários ou desatualizados do banco de dados.

Por outro lado, **QueryParams** são `parâmetros que podem ser passados para a URL para filtrar os objetos que serão retornados.` Eles são uma parte crucial da construção de APIs RESTful, pois permitem que os clientes especifiquem exatamente quais dados eles querem receber.

Os **QueryParams** podem ser `usados para filtrar, ordenar e limitar os dados retornados`, tornando-os uma ferramenta poderosa para personalizar a resposta de uma API. Eles também podem ser usados para paginar os resultados, o que é essencial para lidar com grandes conjuntos de dados.

## Dicionário de Views

- **Context** - O contexto é um dicionário Python que contém dados que serão passados para o template ao renderizá-lo. O contexto é usado para fornecer dados dinâmicos ao template, como variáveis, listas, dicionários, objetos, entre outros.

- **Template** - O template é um arquivo HTML que contém a estrutura e o conteúdo da página que será exibida ao usuário. Os templates são usados para separar a lógica de apresentação do código Python

- **Args** - Args é uma lista de argumentos posicionais que são passados para a view ao chamar a função ou a classe que a define. Os args são usados para fornecer dados à view que são necessários para processar a solicitação do cliente.