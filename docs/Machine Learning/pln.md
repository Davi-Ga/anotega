---
sidebar_position: 4
---

# Processamento de Linguagem Natural (PLN)

O Processamento de Linguagem Natural (PLN) é uma área da ciência da computação e da inteligência artificial que estuda a `interação entre computadores e linguagem humana`. O objetivo do PLN é permitir que os computadores entendam, interpretem e respondam à linguagem humana de maneira útil.


## Etapas de Pré-processamento

### Remoção de palavras irrelevantes (stopwords)

Palavras irrelevantes, como artigos, preposições e conjunções, são removidas do texto. Isso ajuda a reduzir o ruído e a focar nas palavras-chave.

```python
import nltk
from nltk.corpus import stopwords
nltk.download(‘stopwords’)
stop = stopwords.words(portuguese)
print(stop)

```

### Flexão

A flexão é a variação de uma palavra para expressar diferentes significados. Por exemplo, a palavra "casa" pode ser flexionada para "casas", "casa", "casarão", etc. A flexão é normalizada para reduzir a complexidade do texto.

Para realizar isso utilizamos a `Lematização` ou a `Stemming`.

#### Lematização

A lematização é o processo de reduzir as palavras flexionadas adequadamente garantindo que a palavra raiz pertença ao idioma. A lematização é mais precisa do que o stemming, pois usa um dicionário para mapear palavras flexionadas em suas formas raiz.

```python

```

#### Stemming

O stemming é o processo de reduzir palavras flexionadas ao seu radical ou raiz. O stemming é mais rápido e menos preciso do que a lematização.

```python

```