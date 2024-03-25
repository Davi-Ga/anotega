---
sidebar_position: 2
---

# Serializers

## get_queryset

O método super().update() chama a implementação do método update() na superclasse do seu serializer. No caso de um ModelSerializer no Django REST Framework, a implementação padrão do método update() atualiza a instância do modelo com os dados validados e então chama instance.save().

Por outro lado, instance.save() é um método do modelo Django que salva a instância atual no banco de dados.

A diferença entre os dois é que super().update() faz um pouco mais do que apenas salvar a instância. Ele também lida com a atualização dos campos relacionados. Por exemplo, se o seu modelo tem um campo ForeignKey, super().update() irá cuidar de atualizar esse campo, enquanto instance.save() não.

Se você está sobrescrevendo o método update() e quer manter a funcionalidade padrão (incluindo a atualização dos campos relacionados), você deve chamar super().update(). Se você só quer salvar a instância e não precisa da funcionalidade adicional fornecida por super().update(), você pode chamar instance.save().