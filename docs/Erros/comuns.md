---
sidebar_position: 1
---

# Erros Comuns

```sequence item 0: expected str instance, NoneType found```

Geralmente ocorre quando você tenta juntar uma lista de strings que contém um valor None. No Python, você não pode converter None em uma string usando o método str.

Para corrigir esse problema, você precisa garantir que nenhum valor None seja incluído na lista que você está tentando juntar. Você pode fazer isso adicionando uma verificação para excluir valores None antes de juntar a lista.

### Exemplo

```python
 def verify_objects(self):
        ids_api = {obj["id"] for obj in self.response[self.field_name]["data"]}
        ids_back = {obj[f"{self.object_type}_provider_id"] for obj in self.object_data}

        return ids_api, ids_back
```

Essa função verifica se os objetos retornados pela API e os objetos armazenados no banco de dados são os mesmos. Se houver um objeto que não está presente em um dos lados, ele retornará um erro, mas se houver um objeto None, ele retornará o erro descrito acima.

Para corrigir isso, você pode adicionar uma verificação para excluir valores None antes de retornar os valores.

```python
 def verify_objects(self):
        ids_api = {str(obj["id"]) for obj in self.response[self.field_name]["data"] if obj["id"] is not None}
        ids_back = {str(obj[f"{self.object_type}_provider_id"]) for obj in self.object_data if obj[f"{self.object_type}_provider_id"] is not None}

        return ids_api, ids_back


```
