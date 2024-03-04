---
sidebar_position: 1
---

# Automatizando Tarefas com Bash

Todos sabemos que o Bash é uma ferramenta poderosa para automatizar tarefas. E sabemos que é massante ter que ficar repetindo comandos no terminal. Então, vamos **automatizar** algumas tarefas com Bash.

:::warning Sistema Operacional

    Lembrando que o Bash é um shell do Linux, então para executar os comandos abaixo é necessário estar em um sistema operacional Linux, visto isso podemos usar o WSL(Windows Subsystem for Linux) para executar os comandos abaixo.

:::

## Criação de um Ambiente Virtual Python

Sabemos que é uma boa prática criar um ambiente virtual para cada projeto. Então, vamos criar um script que automatize a criação de um ambiente virtual Python.

### Objetivo
Criar um script que automatize a criação de um ambiente virtual Python. O script deve receber o nome do diretório onde o ambiente virtual será criado. O script deve verificar se o diretório já existe e, caso exista, deve removê-lo. Em seguida, o script deve criar um novo ambiente virtual e verificar se há um requirements.txt e instalar as dependências do projeto.

### Solução


```bash title="create_venv.sh"
#!/bin/sh

# Obtém o nome do diretório com base no primeiro argumento passado, atribuindo-o à variável dir
dir=$1

# Verifica se o nome do diretório foi informado
if [ -z "$dir" ]; then
  echo "Please provide a directory name"
  exit 1
fi

# Remoção do Ambiente Virtual caso exista
if [ -d "$dir" ]; then
  echo "Removing existing directory: $dir"
  # Remova o diretório
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
    echo "No requirements.txt file found"
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

## Execução de Programas 

Sabemos que executar programas no terminal é uma tarefa comum, então vamos criar um script que automatize a execução de um programa com base no nome do programa passado como argumento.

### Objetivo

Criar um script que automatize a execução de um programa. O script deve receber um argumento que será o nome do programa a ser executado. O script deve verificar se o programa existe e, caso exista, deve executá-lo.

### Solução
```bash title="execute.sh"

# Obtém o diretório atual e atribui-o à variável dir
dir=$(dirname "$0")

# Função auxiliar para exibir a mensagem de uso
usage() {
    echo "Usage: $0 [--extractor|-e] [--cutter|-c]"
    exit 1
}

#Iteração sobre os argumentos passados utilizando getopts e analisa se o argumento é :ec e executa a função correspondente e armazena na variável opt
while getopts ":ec" opt; do
    # Verifica se o argumento passado é e ou c e executa a função correspondente
    case ${opt} in
        e)
            echo "Extracting documents"
            # Verifica se o arquivo existe e executa
            if [ -f "$dir/src/main.py" ]; then
                python3 "$dir/src/main.py"
            else
                echo "Error: $dir/src/main.py does not exist"
                exit 1
            fi
            ;;
        c)
            echo "Cutting documents"
            if [ -f "$dir/src/utils/cutter.py" ]; then
                python3 "$dir/src/utils/cutter.py"
            else
                echo "Error: $dir/src/utils/cutter.py does not exist"
                exit 1
            fi
            ;;
        \?)
            echo "Invalid option: $OPTARG" 1>&2
            usage
            ;;
    esac
done
# Remove os argumentos que getopts processou da lista de argumentos
shift $((OPTIND -1))

# Verifica se não foi passado nenhum argumento
if [ $# -eq 0 ]; then
    usage
fi
```
