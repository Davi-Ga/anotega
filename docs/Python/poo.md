---
sidebar_position: 2
---

# Programação Orientada a Objetos (POO)

A Programação Orientada a Objetos (POO) é um paradigma de programação que utiliza objetos e classes para organizar e estruturar o código. Em POO, os objetos são instâncias de classes, que são modelos que definem as características e comportamentos dos objetos.

## Classes

:::tip Instanciar e Chamar

    No Python caso você tenha uma classe com o método `__call__` você pode instanciar a classe e chamar a instância como se fosse uma função em uma unica linha, utilizando os parenteses duplos `()`. 

    ```python	
    class MyClass:
        def __call__(self, *args, **kwargs):
            print("Hello, World!")
    

    obj = MyClass()()

    ```
:::
