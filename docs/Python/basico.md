---
sidebar_position: 2
---

# Python Básico

## Listas

```python	

    def create_fake_card(self):
        card_elements_with_numbers = ['']
        while len(card_elements_with_numbers[0]) < 13 or len(card_elements_with_numbers[0]) > 19:
            card = fake.credit_card_full().replace("\n", " ")
            card_elements = card.split(" ")
            card_elements_with_numbers = [
                element
                for element in card_elements
                if any(char.isdigit() for char in element)
            ]
        return card_elements_with_numbers

```

Esta função cria um número de cartão de crédito falso. O número do cartão é gerado pela biblioteca `Faker` e é validado para ter entre 13 e 19 dígitos, card_elements_with_numbers é uma lista que armazena os elementos do cartão que contém números.