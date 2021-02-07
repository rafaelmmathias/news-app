# Getting started

```
$ git clone git@github.com:rafaelmmathias/news-app.git
$ cd news-app
$ yarn
$ yarn start
```

# Testes de regressão visual

```
$ yarn storybook
$ yarn visual_test
```

# Design tokens

Alterando um token
```
$ cd design-tokens
$ yarn
$ yarn build
$ cd ..
$ yarn update
$ yarn start
```

# Considerações:

  Primeira coisa que fiz foi tentar entender como funciona o sistema do style-dictionary e como ele se relaciona com os tipos diferentes de frameworks e libs,
  até que entendi que o que ele faz é basicamente transpilar um JSON para um formato qualquer de estilos, entendi também que você pode utilizar os formatos
  de output pré existentes ou criar o seu próprio e que pelo arquivo de config.json é possível modularizar os tokens, inserir coisas específicas de uma tecnologia e
  até deixar comentários para quem for utilizar.
  
  Comecei os estudos pela documentação e em seguida achei alguns repositórios e por fim comecei a rodar alguns códigos.
  Após esse entendimento inicial de como é o funcionamento e qual o propósito do styled-dictionary percebi que não fazia sentido que ele ficasse dentro do repositório do
  meu projeto e por isso criei ele como um repositório local e instalei como dependência simulando que eu estaria consumindo esses estilos através de uma lib instalada.
  Nessa altura eu já tinha idealizado utilizá-lo junto com um sistema de temas para que fosse possível integrá-lo com styled-components. Essa parte foi um ponto chave pois
  no começo eu estava imaginando integrar coisas do tipo: theme-ui, rebass, chackra-ui até perceber que não fazia sentido para esse case pois todas elas já vinham com alguns
  presets de temas e eu precisava ter total controle. Foi então que decidi utilizar o styled-system juntamente com o styled-components e particularmente gostei bastante do resultado
  com algumas ressalvas que ainda precisaria de avaliar:
 - O arquivo da configuração do tema (theme.js) ficou bastante verboso e um pouco extenso.
 - Senti bastante necessidade de ter um autocomplete na hora de utilizar as nomenclaturas dos tokens no tema e entendo que isso deve ser resolvido de forma bem natural com o typescript. Isso facilitaria bastante a manutenção.
 - Outra coisa que ajudaria na otimização do desenvolvimento e qualidade são os testes de regressão visuais por componente.

  Decidido quais libs utilizar e como seria a implementação, montei o arquivo theme.js e comecei a criação de cada componente respeitando suas definições. Nessa eu percebi também
  que ficou muito mais fácil montar os componentes do que da forma tradicional que eu estava acostumado, muito prático e a gente escreve somente o necessário, eu ainda não havia utilizado
  a lib do styled-system e achei sensacional.
 