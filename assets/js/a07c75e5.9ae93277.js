"use strict";(self.webpackChunkanotega=self.webpackChunkanotega||[]).push([[426],{8853:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>i,contentTitle:()=>t,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=o(5893),n=o(1151);const r={sidebar_position:2},t="Serializers",d={id:"Django/serializers",title:"Serializers",description:"get_queryset",source:"@site/docs/Django/serializers.md",sourceDirName:"Django",slug:"/Django/serializers",permalink:"/anotega/docs/Django/serializers",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Django/serializers.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"anotacoesSidebar",previous:{title:"Views",permalink:"/anotega/docs/Django/views"},next:{title:"Models",permalink:"/anotega/docs/Django/models"}},i={},c=[{value:"get_queryset",id:"get_queryset",level:2},{value:"Exemplo",id:"exemplo",level:3}];function l(e){const a={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"serializers",children:"Serializers"}),"\n",(0,s.jsx)(a.h2,{id:"get_queryset",children:"get_queryset"}),"\n",(0,s.jsxs)(a.p,{children:["O m\xe9todo ",(0,s.jsx)(a.code,{children:"super().update()"}),"  chama a implementa\xe7\xe3o do m\xe9todo ",(0,s.jsx)(a.code,{children:" update()"}),"  na superclasse do seu serializer. No caso de um ModelSerializer no Django REST Framework, a implementa\xe7\xe3o padr\xe3o do m\xe9todo update() atualiza a inst\xe2ncia do modelo com os dados validados e ent\xe3o chama ",(0,s.jsx)(a.code,{children:" instance.save()"})," ."]}),"\n",(0,s.jsxs)(a.p,{children:["Por outro lado, ",(0,s.jsx)(a.code,{children:" instance.save()"}),"  \xe9 um m\xe9todo do modelo Django que salva a inst\xe2ncia atual no banco de dados."]}),"\n",(0,s.jsxs)(a.p,{children:["A diferen\xe7a entre os dois \xe9 que ",(0,s.jsx)(a.code,{children:" super().update()"}),"  faz um pouco mais do que apenas salvar a inst\xe2ncia. Ele tamb\xe9m lida com a atualiza\xe7\xe3o dos campos relacionados. Por exemplo, se o seu modelo tem um campo ForeignKey, ",(0,s.jsx)(a.code,{children:" super().update()"}),"  ir\xe1 cuidar de atualizar esse campo, enquanto ",(0,s.jsx)(a.code,{children:" instance.save()"}),"  n\xe3o."]}),"\n",(0,s.jsxs)(a.p,{children:["Se voc\xea est\xe1 sobrescrevendo o m\xe9todo ",(0,s.jsx)(a.code,{children:" update()"}),"  e quer manter a funcionalidade padr\xe3o (incluindo a atualiza\xe7\xe3o dos campos relacionados), voc\xea deve chamar ",(0,s.jsx)(a.code,{children:" super().update()"})," . Se voc\xea s\xf3 quer salvar a inst\xe2ncia e n\xe3o precisa da funcionalidade adicional fornecida por ",(0,s.jsx)(a.code,{children:" super().update()"})," , voc\xea pode chamar ",(0,s.jsx)(a.code,{children:"instance.save()"})," ."]}),"\n",(0,s.jsx)(a.h3,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:"class MyModelSerializer(serializers.ModelSerializer):\n    def update(self, instance, validated_data):\n        # Fa\xe7a algo antes de chamar super().update()\n        super().update(instance, validated_data)\n        # Fa\xe7a algo depois de chamar super().update()\n\n    def create(self, validated_data):\n        # Fa\xe7a algo antes de chamar super().create()\n        instance = super().create(validated_data)\n        # Fa\xe7a algo depois de chamar super().create()\n        return instance\n"})})]})}function u(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,a,o)=>{o.d(a,{Z:()=>d,a:()=>t});var s=o(7294);const n={},r=s.createContext(n);function t(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);