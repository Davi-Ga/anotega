---
sidebar_position: 6
---

# Testes no Django

Testes são uma parte essencial do desenvolvimento de software. Eles garantem que o código que escrevemos funciona como esperado e que as mudanças que fazemos não quebram o que já está funcionando. No Django, temos várias ferramentas para escrever testes, como o módulo `unittest` e o `TestCase` do Django.

TestCase é uma subclasse de `unittest.TestCase` que adiciona várias funcionalidades específicas do Django. Ele nos permite criar um banco de dados temporário para testes, carregar dados iniciais e executar testes de integração.

## Exemplo de Teste

Vamos criar um teste simples para a nossa aplicação. Suponha que temos um modelo `User` e queremos testar se ele está funcionando corretamente.

```python
from django.test import TestCase
from .models import User

class UserTestCase(TestCase):
    def setUp(self):
        User.objects.create(name="John", email="", password="123456")

    def test_user_creation(self):
        user = User.objects.get(name="John")
        self.assertEqual(user.password, "123456")
```

Neste exemplo, criamos um teste que verifica se um usuário é criado corretamente. Primeiro, usamos o método `setUp` para criar um usuário na base de dados. Em seguida, usamos o método `test_user_creation` para verificar se o usuário foi criado corretamente.  
O `setUp` é um método especial que é executado antes de cada teste. Ele é usado para configurar o ambiente de teste, como criar objetos no banco de dados ou carregar dados iniciais.  
Os `asserts` são métodos que verificam se uma condição é verdadeira. Se a condição for falsa, o teste falhará, ou seja 'assertEqual' verifica se dois valores são iguais.

## Diferença entre setUp e setUpTestData


O método `setUp` é invocado antes de cada teste individual, o que significa que ele pode ser executado múltiplas vezes durante uma suíte de testes. Se você estiver criando um grande número de objetos no banco de dados dentro deste método, isso pode resultar em testes mais lentos devido ao tempo de criação e configuração desses objetos.

Por outro lado, o método `setUpTestData` é executado uma única vez antes de todos os testes serem iniciados. Isso o torna mais eficiente para a criação de objetos no banco de dados, já que a criação e configuração desses objetos ocorre apenas uma vez, independentemente do número de testes. Isso pode resultar em uma execução de teste mais rápida e eficiente.

## APIRequestFactory vs Client

`self.client` é uma instância de `django.test.Client`. Ele é usado para simular um cliente da web em testes. Ele pode fazer solicitações GET, POST, PUT, DELETE, etc., e retorna uma resposta que pode ser testada. `self.client` também mantém um estado de sessão entre as solicitações, o que significa que você pode fazer login com um usuário e esse usuário permanecerá autenticado nas solicitações subsequentes.

Por outro lado, `APIRequestFactory` é uma fábrica de solicitações que permite criar solicitações de teste. As solicitações criadas com `APIRequestFactory` não têm suporte para cookies e sessões. Isso significa que você não pode usar `APIRequestFactory` para testar a autenticação baseada em sessão. No entanto, `APIRequestFactory` é útil quando você precisa criar uma solicitação e passá-la diretamente para uma view para testar a view isoladamente.

Em resumo, `self.client` é mais adequado para testes de integração onde você precisa testar a autenticação e a interação entre várias partes do seu aplicativo, enquanto `APIRequestFactory` é mais adequado para testes unitários onde você precisa testar uma view isoladamente.

:::tip Atenção

    Vale lembrar que APIRequestFactory serve apenas para criar solicitações, mas ele não as enviará para a view. Para isso, você precisará chamar a view diretamente com a solicitação criada.

:::