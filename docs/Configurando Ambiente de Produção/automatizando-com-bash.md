---
sidebar_position: 1
---

# Automatizando Tarefas com Bash

Todos sabemos que o Bash é uma ferramenta poderosa para automatizar tarefas. E sabemos que é massante ter que ficar repetindo comandos no terminal. Então, vamos **automatizar** algumas tarefas com Bash.

:::warning Sistema Operacional

    Lembrando que o Bash é um shell do Linux, então para executar os comandos abaixo é necessário estar em um sistema operacional Linux, visto isso podemos usar o WSL(Windows Subsystem for Linux) para executar os comandos abaixo.

:::

## Automatizando Criação de um Ambiente Virtual Python

Sabemos que é uma boa prática criar um ambiente virtual para cada projeto. Então, vamos criar um script que automatize a criação de um ambiente virtual Python.

### Objetivo
Criar um script que automatize a criação de um ambiente virtual Python. O script deve receber o nome do diretório onde o ambiente virtual será criado. O script deve verificar se o diretório já existe e, caso exista, deve removê-lo. Em seguida, o script deve criar um novo ambiente virtual e verificar se há um requirements.txt e instalar as dependências do projeto.

### Solução


```bash
#!/bin/sh

# Obtém o nome do diretório com base no primeiro argumento passado
dir=$1

# Verifica se o nome do diretório foi informado
if [ -z "$dir" ]; then
  echo "Please provide a directory name"
  exit 1
fi

# Remoção do Ambiente Virtual caso exista
if [ -d "$dir" ]; then
  echo "Removing existing directory: $dir"
  rm -rf $dir
  sleep 2

fi

# Criação do Ambiente Virtual
echo "Creating virtual environment: $dir"
python3 -m venv $dir
sleep 2

# Ativação do Ambiente Virtual
echo "Activating virtual environment: $dir"
source $dir/bin/activate

if [ -f "requirements.txt" ]; then
    # Instale os requisitos
    echo "Installing requirements"
    pip install -r requirements.txt
    sleep 2
else
    echo "Arquivo requirements.txt não encontrado no diretório atual."
    exit 1
fi
```

Para executar o script, basta executar o comando abaixo:

```zsh
./create-venv.sh {nome_do_diretorio}
```

:::tip Transformando em Executável

    Caso queira podemos transformar esse bash em um executável, para isso devemos executar alguns comandos após a criação do bash.

    ```bash
    chmod +x create-venv.sh
    ```
    Esse comando acima dará permissão de execução do tipo +x ao bash.

    ```bash
    mv create_venv.sh /usr/local/bin/create_venv
    ```
    Agora com esse comando acima movemos o bash para a pasta /usr/local/bin, onde ficam os executáveis do sistema.

    Agora podemos executar o bash em qualquer lugar do sistema apenas com o comando abaixo:

    ```bash
    create_env {nome_do_diretorio}
    ```


:::