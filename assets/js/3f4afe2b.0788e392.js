"use strict";(self.webpackChunkanotega=self.webpackChunkanotega||[]).push([[117],{1225:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=o(5893),t=o(1151);const i={sidebar_position:1},r="Automatizando Tarefas com Bash",s={id:"Configurando Ambiente de Produ\xe7\xe3o/automatizando-com-bash",title:"Automatizando Tarefas com Bash",description:"Todos sabemos que o Bash \xe9 uma ferramenta poderosa para automatizar tarefas. E sabemos que \xe9 massante ter que ficar repetindo comandos no terminal. Ent\xe3o, vamos automatizar algumas tarefas com Bash.",source:"@site/docs/Configurando Ambiente de Produ\xe7\xe3o/automatizando-com-bash.md",sourceDirName:"Configurando Ambiente de Produ\xe7\xe3o",slug:"/Configurando Ambiente de Produ\xe7\xe3o/automatizando-com-bash",permalink:"/anotega/docs/Configurando Ambiente de Produ\xe7\xe3o/automatizando-com-bash",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Configurando Ambiente de Produ\xe7\xe3o/automatizando-com-bash.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"anotacoesSidebar",previous:{title:"Configurando o ambiente de desenvolvimento",permalink:"/anotega/docs/category/configurando-o-ambiente-de-desenvolvimento"},next:{title:"Creational Patterns",permalink:"/anotega/docs/category/creational-patterns"}},d={},m=[{value:"Automatizando Cria\xe7\xe3o de um Ambiente Virtual Python",id:"automatizando-cria\xe7\xe3o-de-um-ambiente-virtual-python",level:2},{value:"Objetivo",id:"objetivo",level:3},{value:"Solu\xe7\xe3o",id:"solu\xe7\xe3o",level:3}];function c(e){const a={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"automatizando-tarefas-com-bash",children:"Automatizando Tarefas com Bash"}),"\n",(0,n.jsxs)(a.p,{children:["Todos sabemos que o Bash \xe9 uma ferramenta poderosa para automatizar tarefas. E sabemos que \xe9 massante ter que ficar repetindo comandos no terminal. Ent\xe3o, vamos ",(0,n.jsx)(a.strong,{children:"automatizar"})," algumas tarefas com Bash."]}),"\n",(0,n.jsx)(a.admonition,{title:"Sistema Operacional",type:"warning",children:(0,n.jsx)(a.p,{children:"Lembrando que o Bash \xe9 um shell do Linux, ent\xe3o para executar os comandos abaixo \xe9 necess\xe1rio estar em um sistema operacional Linux, visto isso podemos usar o WSL(Windows Subsystem for Linux) para executar os comandos abaixo."})}),"\n",(0,n.jsx)(a.h2,{id:"automatizando-cria\xe7\xe3o-de-um-ambiente-virtual-python",children:"Automatizando Cria\xe7\xe3o de um Ambiente Virtual Python"}),"\n",(0,n.jsx)(a.p,{children:"Sabemos que \xe9 uma boa pr\xe1tica criar um ambiente virtual para cada projeto. Ent\xe3o, vamos criar um script que automatize a cria\xe7\xe3o de um ambiente virtual Python."}),"\n",(0,n.jsx)(a.h3,{id:"objetivo",children:"Objetivo"}),"\n",(0,n.jsx)(a.p,{children:"Criar um script que automatize a cria\xe7\xe3o de um ambiente virtual Python. O script deve receber o nome do diret\xf3rio onde o ambiente virtual ser\xe1 criado. O script deve verificar se o diret\xf3rio j\xe1 existe e, caso exista, deve remov\xea-lo. Em seguida, o script deve criar um novo ambiente virtual e verificar se h\xe1 um requirements.txt e instalar as depend\xeancias do projeto."}),"\n",(0,n.jsx)(a.h3,{id:"solu\xe7\xe3o",children:"Solu\xe7\xe3o"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",metastring:'title="create_venv.sh"',children:'#!/bin/sh\n\n# Obt\xe9m o nome do diret\xf3rio com base no primeiro argumento passado, atribuindo-o \xe0 vari\xe1vel dir\ndir=$1\n\n# Verifica se o nome do diret\xf3rio foi informado\nif [ -z "$dir" ]; then\n  echo "Please provide a directory name"\n  exit 1\nfi\n\n# Remo\xe7\xe3o do Ambiente Virtual caso exista\nif [ -d "$dir" ]; then\n  echo "Removing existing directory: $dir"\n  # Remova o diret\xf3rio\n  rm -rf $dir\n  sleep 2\n\nfi\n\n# Cria\xe7\xe3o do Ambiente Virtual\necho "Creating virtual environment: $dir"\npython3 -m venv $dir\nsleep 2\n\n# Ativa\xe7\xe3o do Ambiente Virtual\necho "Activating virtual environment: $dir"\nsource $dir/bin/activate\n\nif [ -f "requirements.txt" ]; then\n    # Instale os requisitos\n    echo "Installing requirements"\n    pip install -r requirements.txt\n    sleep 2\nelse\n    echo "No requirements.txt file found"\n    exit 1\nfi\n'})}),"\n",(0,n.jsx)(a.p,{children:"Para executar o script, basta executar o comando abaixo:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-zsh",children:"./create-venv.sh {nome_do_diretorio}\n"})}),"\n",(0,n.jsxs)(a.admonition,{title:"Transformando em Execut\xe1vel",type:"tip",children:[(0,n.jsx)(a.p,{children:"Caso queira podemos transformar esse bash em um execut\xe1vel, para isso devemos executar alguns comandos ap\xf3s a cria\xe7\xe3o do bash."}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"chmod +x create-venv.sh\n"})}),(0,n.jsx)(a.p,{children:"Esse comando acima dar\xe1 permiss\xe3o de execu\xe7\xe3o do tipo +x ao bash."}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"mv create_venv.sh /usr/local/bin/create_venv\n"})}),(0,n.jsx)(a.p,{children:"Agora com esse comando acima movemos o bash para a pasta /usr/local/bin, onde ficam os execut\xe1veis do sistema."}),(0,n.jsx)(a.p,{children:"Agora podemos executar o bash em qualquer lugar do sistema apenas com o comando abaixo:"}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"create_env {nome_do_diretorio}\n"})})]})]})}function u(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,a,o)=>{o.d(a,{Z:()=>s,a:()=>r});var n=o(7294);const t={},i=n.createContext(t);function r(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);