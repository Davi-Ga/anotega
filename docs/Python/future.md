---
sidebar_position: 1
---

# `__future__`

Em Python, o `__future__` é um módulo especial que permite usar funcionalidades *futuras* do Python hoje. Isso é útil para testar e usar recursos que ainda não foram lançados oficialmente.

## Annotations

O modulo `from __future__ import annotations` implementa o PEP 526,permitindo usar as [annotations](https://docs.python.org/3/library/typing.html), que são uma forma de adicionar metadados aos parâmetros e valores de retorno das funções. Essas anotações de variáveis podem ser usadas por ferramentas externas, como linters ou ferramentas de análise estática, para fornecer informações sobre o tipo de dados esperado.

:::tip O que é um PEP?

    PEP é a sigla para "Python Enhancement Proposal", e os números são atribuídos a propostas específicas de aprimoramento do Python.
:::

## Exemplo

```python title="annotations.py"
from __future__ import annotations

numbers: list[int] = [1, 2, 3, 4, 5]

def list_sum(numbers: list[int]) -> int:
    return sum(numbers)

```

No exemplo acima, atribuímos uma lista de inteiro à variável `numbers` e temos a função `list_sum` que recebe uma lista de inteiros e retorna a soma dos valores da lista. Para isso, usamos a annotation `list[int]` para indicar que a função recebe uma lista de inteiros e a annotation `int` para indicar que a função retorna um inteiro.


## Exemplo POO

```python title="annotationsPOO.py"
class Person:
    def __init__(self, name: str, age: int) -> None:
        self.name = name
        self.age = age

    def create_person(self) -> Person:
        return f"Person(name={self.name}, age={self.age})"

```

No exemplo acima, temos a classe `Person` que recebe uma `name` do tipo `str` e uma `age` do tipo `int` e retorna uma instância da classe `Person`.


:::tip Uso em POO

    Em Python, quando a anotação de tipo de uma classe é usada em um método dentro da própria classe, é comum erros de referência circular. Conhecido como "forward references", então, para evitar esse erro, é necessário usar a annotation `from __future__ import annotations`.
:::

