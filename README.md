# Primeiros passos com JS.

> **Nota**: quando estáva fazendo o Curso de **JavaScript** do <a href="https://github.com/gustavoguanabara"> Gustavo Guanabara</a>, Eu resolvi transcrever o Curso para Revisa e melhorar nos estudos de *javaScript*. 

<br>

> Caso queira fazer o Curso pelo <a href="https://www.cursoemvideo.com/curso/javascript/">Curso em Video</a> e ganhar o Certificado, recomendo muito.



<h2>Módulo A: Conhecendo o JavaScript</h2>

<h3>Aula 1 – O que o JavaScript é capaz de fazer?</h3>

<a href="https://www.youtube.com/watch?v=uzEhd3Lugik&ab_channel=CursoemV%C3%ADdeo">
Curso em video Aula - 1</a>

<br>
<hr>

<h3>Aula 2 – Como chegamos até aqui?</h3>

<a href="https://www.youtube.com/watch?v=rUTKomc2gG8&ab_channel=CursoemV%C3%ADdeo">
Curso em video Aula - 2</a>

<br>
<hr>

<h3>Aula 3 – Dando os primeiros passos</h3>

<a href="https://www.youtube.com/watch?v=FdePtO5JSd0">
Curso em video Aula - 3</a>

<br>
<hr>

<h3>Aula 4 – Criando o seu primeiro script</h3>

<a href="https://www.youtube.com/watch?v=OmmJBfcMJA8&ab_channel=CursoemV%C3%ADdeo">
Curso em video Aula - 4</a>

<br>
<br>
na primeira aula apredemos que os scripts JS devem ser incluídos no final do corpo do documento __HTML__,<br>
posicionando a tag  `<script></script>` logo acima da tag de fechamento `</body>`

Nosso Primiero comando é.

```
window.alert('Olá, Mundo!')
```


A palavra `window` (opctional) é um objeto que indica uma referência á janela atual do navegaor. A palavra ``alert()`` é um método capaz de de disparar uma mine-janela de alerta para avisar algo ao usuário.


Dentro dos parêntes do método `alert()`, temos uma __string__ entre aspas (que podem ser __´aspas simples´__, __"aspas dupla"__ ou __crases__  para delimitar as palavras que efetivamente aparecerão na janela de alerta.

<br>
<hr>

<h2>Módulo B: Comandos Básicos do JavaScript</h2>


<h3>Aula 5 – Variáveis e Tipos Primitivos</h3>

<a href="https://www.youtube.com/watch?v=Vbabsye7mWo&ab_channel=CursoemV%C3%ADdeo">
Curso em video Aula - 5</a>


<br>
<hr>

<h3> Aula 6 - tratramento de dados </h3>

conversão de __String__ para __number__ e para isso exites várias maneiras.

 Aprimeira delas é utilizar o
`Number.parseint()`
ou simplimente `parseint()`

Nisso ele vai fazer uma conversão de um número para um Número inteiro.

Se Você quise um Número real, Um Número com Vírgula nós utilizamos o `Number.parseFloat()` converte a string recebida como argumento e a retorna como um número de ponto flutuante. Este método se comporta de maneira idêntica a da função global parseFloat e é parte da especificação ECMAScript 6 (seu propósito é a modularização dos objetos globais).

ele se chama __Float__ porque aquele pontinho, por exemplo, (5.5) esse ponto a gente chama de ponto flutuante ou floating point __Float__

`Number()` ele utilizar tanto o __parseFloat()__ quanto o __parseint()__ è claro que essa síntese, só não elimina as de cima, porque ás vezes só precisa efetivamente trata como real. Então, vou utilizar o __parseint()__ e quando for somente utilizar o Número real usamos o __parseFloat()__ JavaScript decide de acordo com o valor que ele recebeu, se é inteiro ou se é real

---

Convensão de __Número__ para __String__

existe duas maneiras 

Eu posso utilizar o `String()` Assim como eu utilizei "Number", número, eu posso utilizar o __String__ ou o valor que eu quiser.

(Exemplo) 
```
 alert('a soma dos Números é, ' + String(soma))
```

Todo objeto possui um método `.toString()`  que é chamado automaticamente quando o objeto precisa ser representado como um valor em texto ou quando o objeto é referenciado de uma maneira que requeira uma string. Por padrão, o método toString() é herdado de todo objeto descendente de  Object. Se e o método não é sobrescrito em um objeto personalizado, toString() retorna "[object type]", onde type é o tipo do objeto. O código a seguir ilustra isso:

```
var o = new Object();
    o.toString();          // retorna [object Object]

```

<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/ToString" target="_blank">Mais Exemplo em developer mozilla</a>


<hr>

**(Template strings)**

Dentro de uma __Template strings__ podemos usar __placeholders__ no seu interior. um placeholder é representado pelos símbolos `${}` e podem ser usados para facilitar a exibição de conteúdos de variáveis ou expressões.

(com __Template strings__) <br>
```
alert(`A soma enter é,  ${}`)
```

(sem) <br>
```
alert('a soma dos Números é, ' +(soma))
```

<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals" target="_blank">Exemplo em developer mozilla</a>

---

(Formatando Números)

`toFixed()`

exemplo sem __toFixed()__

```
var n1 = 1545.5 

n1
1545.5
```

exemplo com __toFixed()__
nesse segundo exemplo vemos que foi adicionado a segunda casa decimal ao (50)

```
var n1 = 1545.5, 

n1.toFixed(2)
'1545.50'
```

---

como troca
caracteres determinado como exemplo o ponto por virgula com  `replace()`

```
n1.toFixed(2).replace('.', ',')
'1545,50'
```

O método __replace()__ retorna uma nova string com ou como correspondência de um ou todas as alterações padrão por um caractere determinado (). O padrão pode ser uma string ou uma RegExp, a substituição pode ser uma string ou uma função a ser chamada para cada correspondência. Se o padrão for, apenas a primeira vez será alterado.

A string original não é modificada.

---

<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace" target="_blank">String.prototype.replace()
em developer mozilla</a>


O método `toLocaleString()` retorna uma string com uma representação sensível a linguagem deste número.

(exemplos)
```
n1.toLocaleString()
'1.545,5'
```

```
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
'R$ 1.545,50'
```

__pt-BR__ segnificar eu quero localizar para o Brasil, <br>
o __Style__ _currency_ Segnificar dinheiro/Moeda e o <br> segundo __currency__ Segnificar se vai ser _REAl do Brasil_

__(como converter em Dolares)__

```
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
'US$ 1.545,50'
```

*No __node__ ele não faz a inversão da vígula e o ponto mas no Navegador ele faz corretamente*

<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString" target="_blank">Number.prototype.toLocaleString() em developer mozilla</a>

---

<h3> Aula 7 - Operadores (Parte 1) </h3>

Opedadores logicos

**Aritméticos**

Esses são todos os operadores aritméticos da linguagem **JavaScript**

**(+)** <br>
**(-)** <br>
**(*)** <br>
**(/)** <br>
**(%)** <br>
__(**)__



para exemplificar, esses são os operandos que são aquele que vão fazer os operadores funcionarem. todos esses oparadores aqui são operadores que a gente chama de binários, são operadores que precisam de **2 operandos.** <br>

5 **( + )** 2 <br>
5 **( - )** 2 <br>
5 __( * )__ 2 <br>
5 **( / )** 2 <br>
5 **( % )** 2 <br>
5 __( ** )__ 2

Resultado

5 (+) 2 = __7__<br>
5 (-) 2 = __3__<br>
5 (*) 2 = __10__<br>
5 (/) 2 = __2.5__<br>
5 (%) 2 = __1__<br>
5 (**) 2  = __25__

A multiplicação é feita por um **asterisco**, e não pelo sinal de *(x)* ou pelo sinal de *ponto* como a matemática coloca.

Sempre que você quiser multiplicar um valor pelo outro, usa o __(*)__


A divisão, é o proximo é bem fácil também identificar, é a **(/)**

Então o 5/2 para o JavaScript, é **divisão real** 
isso é aquela divisão que leva números reais, que leva a vírgula

existe também a divisão inteira. inclusive o próximo operador precisa que você saiba fazer divisão inteira.
__divisão inteira é aquela em que você não usa vírgula__
quando você for precisar colocar vírgula, você para de dividir.

basicamente é assim, __5 % 2__, que é o próximo operador, ele não é usado para calcular porcentagem, ele é o operador de resto da divisão inteira.

<a href="https://www.youtube.com/watch?v=hZG9ODUdxHo&ab_channel=CursoemV%C3%ADdeo" target="_blank">exemplo de cálculo no minuto 6:25</a>

<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_aritmeticos" target="_blank">Expressões e operadores em developer mozilla</a>


E o último operador, ele surgiu no javaScript nas últimas versões, Ele é a potência.
Esse __5 (**) 2__ significa 5 ao quadrado, e 5 ao quadrado é _25_


(Precedência de Operadores)


Resumo <br>
*cuidado*,
A precedência de operadores determina a ordem em que os operadores são processados. Operadores com maior precedência são processados primeiro.

exemplo simple

__5 + 3 / 2__

ser por acaso sua Resposta for *4*, eu sinto te informar você errou a conta.

explicação, quando uma mesma expressão tem soma e divisão, primeira a gente faz a divisão.
então na verdade <br> 5 + 3 / 2 não dá *4*, ele vai dar *6.5* 


em vez de fazer 
<br>5 + 3 = *8* <br>
8 / 2 = *4* 
<br>ele na verdade faz primeiro o 
<br>3 / 2 = *1.5*, <br>
5 + 1.5 = *6.5* <br>
que é o resultado

<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operator_Precedence" target="_blank">Precedência de Operadores em developer mozilla</a>


se você quise fazer <br>**5 + 3 / 2**, <br>e eu quero fazer *5 + 3* primeiro e depois dividir por dois, Nesse caso é só você colocar parêntenses extamente como a matemática faz <br>(5 + 3) / 2 <br>
Se você utilizar os parênteses Você muda a ordem de procedência, isso é, você vai fazer primeiro <br> **(5 + 3) = 8** <br>
**8/2 = 4**


---

(Precedência)

**( )** <br>
__(**)__ <br>
 __(*) ( / )  ( % )__ <br>
 __(+) (-)__


em qualquel linguagem  de programação, tudo, em primeiro lugar, é analisado todos os **parêntes**, depois dos parênteses vai fazer as **potências**, em seguida das potências, nòs termos a **multiplicaçâo** a **divisâo** e o **resto da divisão**

Você perceber que os três aqui estâo na mesma linha? É por que eles tem a mesma ordem de precedência, não necessariamente a _multiplicação_ vem antes, qualquer um desses três vem antes e se por acaso mais de um deles tiver a mesma expressâo, você vai fazer da *esquerda* para *direita* quem aparecer primeiro.

E por fim a gente vai fazer
as somas e as subtraçôes

---

(Atribuição simples)

`var a = 5 + 3` <br> R=**8** <br>
`var b = a % 5` <br>
(8/5 = 1,6) (5*1 = 5 prá 8 resta 3) R=**3** <br>
`var c = 5 * b ** 2  `<br>  (3 * 3 = 9)  (5 * 9 =  45) R=**45** <br>
`var d = 10 - a / 2` <br> (8/2 = 4) (10-4 =6) R=**6** <br>
`var e =  6 * 2 / d` <br> (6 * 2 = 12) (12/6 = 2 ) R=**2** <br>
`var f =  b % e + 4 /e` <br> (3 * 2 = 1,5 ) (4/2 = 3) (1 + 2 = 3)  R=**3**<br>


---
(Auto-atribuiçôes)

São atribuicôes á própria variável, por exemplo,
Criei uma atruibuição simples,

`var n = 3`

se na próxima linha eu fiz <br> `n = n + 4` <br>
agora vou somar o que está depois do recebe, vou soma <br> **n + 4**
e o resultado vou jogar dentro de **n.** <br> agora _n + 4_ passar a vale **7**

Lembre-se, A variavel e como se fosse a vaga de um carro, para colocar um segundo carro eu tenho que tirar o primeiro, foi exatamente isso que aconteceu.

eu tinha 3, deixou de valer 3 e passou a valer 7. isso é a auto-atribuiçâo

eu posso fazer coisas do tipo
`n = n - 5` que está valendo 7 agora, -5 dá 2
então o **n** deixar de valer 7 e passa a valer *2*.

E eu posso fazer qualquer tipo de atribuição
`n = n * 4`
eu estou multiplicando esse *2* por *4*, então vai virar *8*. Deixa de valer *2* e passa a valer *8*.

Outra coisa que posso fazer `n = n / 2` Eu vou dividir o *8* por *2* vai dar 4, ele vai deixar de valer 8 e passar a valer *4* na **variável n.**

`n = n ** 2`
Também posso fazer uma exponenciação, posso pegar esse n elevar ao quadradro e está valendo *4*, 4 ao quadradro dá 16. Ele deixar de valer 4 e passar a valer **16**.

`n = n % 5`
por fim, posso fazer o resto da divisão. Se eu pego esse 16 e divido por 5 vai dar *3* vezes *5* dá **15**, para 16 resta **1**.

Tudo isso que aconteceu aqui fez a Variável **n**
partir de 3, assumir vários valores, e terminar com *1* **isso são Auto-atribuiçôes**
E eu posso simplificar

---

(Simplifiçôes)

Simplifiçôes todas essas auto-atribuições <br>


`var n = 3` <br> essa 
primeira não é auto-atribuição, é atribuição simplies.
Se eu pego uma variável, por exemplo <br>
`n = n + 4 ` 
Eu posso reescrever isso de  uma maneira encurtada
que é o <br> `n += 4`. Esse **+=** ´so serve, preste antenção, **se a mesma váriável receber ela + 4**
Exemplo `n = n`

se for `n = x + 4`, não funcionar
mas se **n = n** recerber ele mesmo + 4 eu posso usar o **+=** Sem problema.

(Formas resulmindas) <br>
`n = n + 4` /  `n+=4`


`n = n - 5` /  `n-=5`

`n = n * 4` /  `n*=4`

`n = n / 2` /  `n/=2`

exponenciação <br>
`n = n ** 4` /  `n**=5` <br>

`n = n % 5` /  `n%=5` <br>
Resto da divisão

---

(Operadores de incremento)

`var x = 5`

Então, o 5 vai para a variável x. Eu posso fazer operaçôes simples, como por exemplo
`x = x + 1`
1 é sinal de que o *x* vai deixar de valer *5* e vai passar a valer **6**

`x = x - 1`
ele vai tira uma unidade. Então, se ele está valendo *6* nesse exato momento ele vai passar a valer 5

(Simplificação) <br>
`x = x + 1` / `x +=1` <br>

`x = x - 1` / `x -=1`

Essa parte você entedeu, só que nas linguagens de programação quando a gente vai avançando, você vai ver que  a gente  vai fazer muti **x = x + 1**
 A variável recebe a variável + 1

 então, exite um simplicador ainda maior que é o **operador de incremento** e eu posso simplificar **x +=1**, que já estava simplificado, para **x++**, o mesmo acontece com o **-=1** e eu posso simplificar para **x--**

 (Simplificação ainda maior) <br>
`x = x + 1` / `x++` <br>

`x = x - 1` / `x--`

---

<h3> Aula 8 - Operadores(Parte 2) </h3>

no javaScript exite Operadores

**aritméticos <br>
atribuição  
Relacionais <br>
lógicos
ternário**

na aula 7 (parte 1)
a gente abrangeu os dois operadores, o **aritmético** e o de **atribuição**

E nessa aula vamos aprender <br>*Relacionais* <br>
*lógicos* <br>
*ternário*

**Relacionais**

Os operadores relacionais do JavaScript são da grande maioria da linguagem de programação. são os operadores de *maior*, *menor*, *maior ou igual*, *menor ou igual*


__(>) maior <br>
(<) menor <br>
(>=) maior ou igual <br>
(<=) menor ou igual <br>
(==) igual <br>
(!=) diferente__

<a href="https://www.youtube.com/watch?v=BP63NhITvao&ab_channel=CursoemV%C3%ADdeo" target="_blank">Dica para saber a diferença entre o maior e menor <br>(minuto 2:30)</a>

vou colocar valores qualquer, vou usar só valores inteiros, mas tambèm serve em valores reais, que são aquele valores que tenha vírgula <br>

**5 (>) 2 <br>
7 (<) 4  <br>
8 (>=) 8  <br>
9 (<=) 7  <br>
5 (==) 5  <br>
4 (!=) 4**

de todas essas expressões que a gente acabou de gerar. È importante dizer o seguinte: *para toda a expressão que tenha um operador relacional ligado á ela, o resultado dessa expressão vai ser sempre um valor __booleano__, vai ser um valor do tipo __vardedeiro__ ou __falso__.*


vamos analisa o primeiro, `5 > 2` <br> o valor **5** é maior do que o valor **2**? Sim. Então, se o valor *5* é maior do que valor *2*, o Resultado dessa expressão é **true**, que é o valor verdadeiro
`5 > 2` **(true)**<br> 

No segundo `7 < 4 ` <br>
O *7* é menor do que *4*? não. o 7 não é menor do que *4*. Então, o resultado é **false**,

No proximo
`8 >= 8 ` <br> 8 é **maior ou igual** a 8? Note que eu falo **Maior ou igual**. Eu não falo **maior e igual**
Uma coisa não pode ser maior e igual á outra. Ou é maior ou igual. 8 não é maior do que 8, mas ele é igual. Então, isso é verdadeiro

No proximo
`9 <= 7 ` O 9 é menor ou igual a 7? nâo. O 9 è maior. Ele nem é menor, e nem é igual. Então é **false**. 

aqui embaixo tem o sinal de igual e percebe o seguinte:
 a igualdade no JavaScript não é *1 sinal de igual*. nos já vimos várias vezes durante a aulas que um símbolo de igual no JavaScript é a mesma coisa que muitas outras lingugens de programação, a gente lê como **recebe**. Ele é um operador de atribuição. Ele não é um operador de igualdade.  o operador de igualdade do JavaScript é esse aqui. `5 == 5` sendo assim *5* è igual a *5*? sim. Então é **true**


 E por último,  `4 != 4`,<br>
  4 Esse **!=** quer dizer __"não igual"__. E uma coisa que não é igual, è **diferente** Então, 4 é difente de 4 ? não. 4 é igual a qutro. Então é **false**

Resultados:

`5 > 2 -> true` <br>
`7 < 4 -> false`  <br>
`8 >= 8 -> true`  <br>
`9 <= 7 -> false`  <br>
`5 == 5 -> true`  <br>
`4 != 4 -> false`


posso reunir algumas expressôes.
`var a = 8, var b = 15`
`a <= b - 10 ` R= **false**

a, que é 8, è menor ou igual a b-10? você percebe que quando eu tenho operadores relacionais e operadores aritméticos na mesma linha, ou mesma expressâo, primeiro eu faço os aritmèticos e depois eu vou fazer os relacionais. Entâo, b-10 vai dar 5. E, 8 è menor ou igual a 5? nâo, * não é menor ou igual, è menor



<a href="https://www.youtube.com/watch?v=BP63NhITvao&ab_channel=CursoemV%C3%ADdeo" target="_blank">mais exemplos no (minuto 4:14)</a>



(exemplos mais claros)

A primeira que está aqui embaixo è, o preço è maior ou igual a 200,50?
`preço >=200.50`
O que estou testando è: <br>  o preço è maior ou igual a 200 reais e 50 centeavos, por exemplo ?

`idade < 18`
a idade é menor que 18 ? o que ele está perguntado è: <br> A pessoa é menor de 18 anos? 18 anos não entra nessa comparação. tem que ser 17 para trás.

`curso== 'JavaScript'`
O curso é igual a JavaScript?
Entâo, eu posso testar tambèm variáveis **string**. A string curso è igual a string JavaScript?


`n1 != n2`
O Primeiro número è diferente do segundo?

<a href="https://www.youtube.com/watch?v=BP63NhITvao&ab_channel=CursoemV%C3%ADdeo" target="_blank">mais exemplos no (minuto 7:13)</a>

---

(identidade)

operadores relacionais que a gente chama de operadores de identidade.

por exemplo
 `5 == 5`
 5 é igual a 5? sim. Então é **true**

 agora, se eu tiver `5 =='5'`? è a mesma frase, foi exatamente igual
 Esse 5 é igual ao outro '5'?

 para o JavaScript, 5 é, sim igual a '5'.
isso porque o sinal de igualdade não testa o tipo. Eu tenho **valor 5 inteiro** lá no início, E eu tenho  **valor '5' em string**

O que o javaScript faz é analisar se esse cinco tem o mesmo valor que o valor que o outro, e são valores de tipo difenrentes. Mas, eles têm a mesma Grandeza.

para isso exite um outro operador, que é **o operador de identidade, tambem conhecido como operador de igualdade restrita**, que no lugar de dois sinais de igual, são três sinais de igual. <br>
`5 === '5'`. Nesse caso, eu estou testando se os dois cinco são idênticos, e **idêntico é ser do mesmo valor e do mesmo tipo.**
Nesse caso eles têm o mesmo valor. Mas eles nâo têm o mesmo tipo. Entâo ele è **false**

e uma dúvidade pode surgir: <br> `5 === 5` R= **true**
Eles são indênticos.


Resultados: <br>
`5 == 5` R= **true** <br>
`5 =='5'` R= **true** <br>
`5 === '5'` R= **false** <br>
`5 === 5` R= **true**

---

(operadores lógicos)
Que no javaScript são três: a exclamação, os dois "&" comerciais e os dois pipes, que são dois traços em pé.

`!` **Negaçâo** <br>
`&&` **conjunçâo** <br>
`||` **disjunção**

`!` sempre que aparecer **!** quer dizer *negação*, quer dizer **não**

`&&` comerciais, isso é uma *conjunção*. ou a gente chama de **"e"** é nosso e logico.


`||` E o ùltimo, que são dois pipes, são *disjunção* ou entâo é o nosso **ou** logico


vamos começa pelo operador de *negação* `!` , o **"não"**, Ele é tratado como operador unário, isto é, ele só tem um operando. Ou seja, depois da exclamaçâo ou eu coloco **"true"** ou **"false**.

segundo operador de conjunção são os dois `&&` comerciais. Esse operadores, assim como o de *disjunção* também, ele é um operador binário. isto é eu tenho dois valores lógicos, um de cada lado

<a href="https://www.youtube.com/watch?v=BP63NhITvao&ab_channel=CursoemV%C3%ADdeo" target="_blank">mais exemplos no (minuto 13:00)</a>


E por fim, a **disjunção** que são os dois pipes `||` também um operador binário que tem dois valores lógicos, um de cada lado. Dependendo da posição deles e do resultado lógico, eu tenho tambèm o valor lógico de resultado. E na **disjunção** basta que um deles seja verdadeiro para o resultado ser verdadeiro.


exemplo <br> 
`var a = 5` <br> `var b = 8`

`a > b && b % 2 == 0`

vamos entender o seguinte, quando eu tenho operadores aritméticos, relacionais e lógicos na mesma expressão, olha a ordem que é feita. *primeira vou fazer todos os operadores __aritméticos__ depois vou fazer os operadores __relacionais__ e depois os operadores __lógicos__.*

E por acaso numa mesma expressão eu tiver um __"e"__, um __"ou"__ e um __"não"__, a ordem de execução é sempre essa, <br> primeiro o __"não" `!`__, <br> depois o __"e" `&&`__, <br> e por ultimo __"ou" `||`__.

<a href="https://www.youtube.com/watch?v=BP63NhITvao&ab_channel=CursoemV%C3%ADdeo" target="_blank">mais exemplos no (minuto 16:56)</a>

<hr>

Operadores (**Ternário**)

`?`
`:`

operadores ternário é composto por dois símbolos que aparecem na mesma expressão, a interrogação **?** e os dois pontos **:**. ele se chama ternário porque tem três partes. Dá uma olhada nos blocos que aparecem aqui embaixo.

**teste `?` true `:` false**


esses três blocos são os blocos de teste, o bloco verdaeiro e o bloco false. È por isso, que esse operador se chama ternário, porque juna três operandos.

<a href="https://www.youtube.com/watch?v=BP63NhITvao&ab_channel=CursoemV%C3%ADdeo" target="_blank">mais exemplos no (minuto 19:15)</a>

<hr>

<h2>Módulo C: Entendendo o DOM</h2>

<h3>Aula 9 – Introdução ao DOM</h3>

Dom é um acrônimo para *Document Object Model* que é modelo de objetos para documentos, basicamente é um conjunto de objetos dentro do seu navegador que vai dar acesso aos componentes internos do seu website. O *Dom* ele não funciona dentro do *node js* por exemplo, O Dom está presente quando estou rodando JavaScript dentro do meu navegador.
é uma coisa importante que você deve conhecer e deve saber fazer é a sua *ávore Dom* do seu site, basicamente a ávore *Dom* começa da raiz e essa raiz dentro do navedaor é chamada de **windows**, então tudo dentro do javaScript está dentro de um objeto chamado window que quer dizer janela então aquela janela do seu navegador é um objeto Dom e ele se chama **window**,
dentro do window eu tenho vários outros objetos como <br>
`window` <br>
`location` <br>
`document` <br>
`history`

exemplos: eu tenho o `location` que diza localização do seu site, qual é a url, qual é a página atua, foi a página anterior <br>

temos o `document` que é o documento atual <br>

e o `history` que vai guardando de onde você veio para onde você vai, isso facilita a navegação dentro do seu site, exitem muitos outros objetos

dentro do `document` no nosso caso exite outros objeto muito importante é o bjeto `HTML`, que é exatamente a parte **HTML** do meu site, dentro de HTML eu tenho basicamnte dois objetos ou filhos que a gente chama, o *child* que é o head e o body que é a cabaçalho e a parte de corpo.

<a href="https://www.youtube.com/watch?v=WWZX8RWLxIk&ab_channel=CursoemV%C3%ADdeo" target="_blank">Complemento (minuto 10:08)</a>

<hr>

**(Selecionar elementos no Dom)**

 dentro da ávore Dom exitem vários métos para isso, alguns exemplo deles

**por Marca** <br>
em primeiro lugar vamos como selecionar por *Marca* ou *tag name*
`getElementsByTagName()`

<a href="https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementsByTagName" target="_blank">Exemplo: getElementsByTagName </a>

**por ID** <br>
`getElementById()`

<a href="https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementById" target="_blank">Exemplos: getElementById</a>

**por Nome** <br>
se eu tenho uma propriedade name então vou utilizar o **getElementsByName**, pecebe aqui que ele tem o **s** no plura, então eu preciso usar o colchete [ ], quando eu tenho mais de um objeto da mesma *classe* ou *Nome* eu vou usar muito **por marca** e tabem por <br>
`getElementsByName`



<a href="https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementsByName" target="_blank"> Exemplos: getElementsByName</a>


**por Classe** <br>
`getElementsByClassName`

<a href="https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementsByClassName" target="_blank">Exemplo: getElementsByClassName</a>

**por Seletor** <br>
`querySelector()`


<a href="https://developer.mozilla.org/pt-BR/docs/Web/API/Document/querySelector" target="_blank">Exemplos: querySelector</a>

<hr>

<h3>Aula 10 - Eventos Dom</h3>

<a href="https://www.youtube.com/watch?v=wWnBB-mZIvY" target="_blank"> exemplo de forma visual em (minuto 06:26):</a>

evento é tudos aquilo que possa acontecer com qualquer elemento, mas no nosso exemplo essa **div** e se você começar a analisar, o que pode acontecer com essa **div** um monte de coisas, o mais comum: *eventos de mouse, então eu posso por exemplo chegar com curso do mouse e mover o mouse até encostar, até chegar dentro da* **div**, quando chega o mouse dentro da **div** vai disparar um evento o **mouseenter** que o mouse entrou na **div**, 

<br>outra coisa que eu posso fazer é continuar movendo o mouse por dentro da **div**. Nesse momento ver ser disparado várias vezes o método **mousemove**, que enquanto tiver movendo dentro da **div** ele vai disparar o evento **mousemove**.

<br> se eu pegar o mouse e clicar e segurar, eu tenho o disparo do **mousedown**, no momento em que eu soltar o botão do mouse eu disparo outro evento o **mouseup**, 

<br>eu também tem o movimento do click inteiro, apertar e solta rapidamente eu tenho o evento **click** e da mesma maneira que com o **mouseenter**, quando eu mover o mouse para fora dessa **div** ele vai disparar evento **mouseout**. Então olha só a gente viu seis métodos, seis eventos que podem ser disparados só com o movimento do mouse, existem outros esses não são os únicos e se por acaso você dá uma pesquisa nos eventos que podem acontecer dentro de elementos em javascript 

<a href="https://developer.mozilla.org/pt-BR/docs/Web/Events" target="_blank">Event reference em developer mozilla:</a>

Só como curiosidade, agora com o eventos dos celulares, você tem os **"Touch events"** que sâo diferentes dos **Mouse events**

<a href="https://developer.mozilla.org/pt-BR/docs/Web/API/Touch_events" target="_blank">Touch events em developer mozilla:</a>

porem para disparar um evento, para tratar um evento, eu preciso te explicar antes o que é uma função ou uma funcionalidade.


<hr>

- **Função**

Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.

Então por exemplo: eu vou programa dez linhas, essas dez linhas a gente chama de bloco, então imagina que esse bloco tivesse 10 linhas, essas 10 linhas não vão ser executados auomaticamente, o primeiro passa é colocar lá dentro de um bloco, um bloco em JavaScript ele é delimitado entre os sinais de chavas **{ }**, esse bloco você tem que nomear ele como uma **function** que quer dizer função antes do bloco assim 

```
function  {
  bloco de códico aqui
}

```

no JavaScript exite isso aqui: **função anônima**, é uma função que simplesmente não tem nome, só que para o método possa funcionar, _eu tenho que dar um nome para essa função e geralmente os nomes das funções são_ **ações** que nós podemos fazer, 

```
function ação() {
  bloco de códico aqui
}

```

geralmente funçôes de evento, eles são nomes de açâo, você vai colocar o nome da **ação** que vai acontecer e fecha parênteses. 

e opcionalmente voê pode também colocar dentro desses *parênteses* alguns **parâmetros**, pode ser um, ou pode ser vários **parâmetros**

```
function ação(parâmetros) {
  bloco de códico aqui
}

```

<a href="https://www.youtube.com/watch?v=wWnBB-mZIvY" target="_blank"> exemplo de forma visual em (minuto 10:43):</a>



<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions" target="_blank">Funções em developer mozilla:</a>

<hr>

<h2>Módulo D: Condições em JavaScript</h2>

<h3>Aula 11 - Condições (part 1)</h3>

<a href="https://www.youtube.com/watch?v=cOdG4eACN2A&ab_channel=CursoemV%C3%ADdeo" target="_blank">exemplo de forma visual em 2:56</a>

Antes de falar das nossas condiçôes, precisamos fala de  **sequências**, porque todos os código feito até o momento foram código sequenciais. Entâo, veja o exemplo, o meu primeiro comando que aparecer aqui
```
var n = 3
```
com esse comando, acabamos de declarar uma variável e colocar um valor dentro dela

No próximo comando, eu faço, por exemplo
```
n += 2
```
essa segunda linha vai pegar o valor de **n**, que é 3, e vai somar mais *2* e jogar o resultado, que é **5**, dentro do próprio **n** é por fim, o último comando
```
window.alert(n)
```
Esse último comando vai mostrar uma janela de alerta no navegador

Sendo assim, eu te pergunto: o primeiro comando, o segundo comando e o terceiro nesse caso aqui, tem como executar o primeiro, depois o terceiro e por fim o segundo? Não.

Eu tenho que executar o primeiro, segundo e o terceiro, não posso mudar a ordem. Outra coisa, eu posso por exemplo, executar o priemiro, terceiro e não executar o do meio em alguma situação? também não porque é só olhar o fluxo. *O fluxo que está representado aqui* tem que ser, já que ele é uma *sequência*, têm que se executar 
``` 
var n = 3
n+= 2
window.alert(n)
``` 

**Codiçôes**

<a href="https://www.youtube.com/watch?v=cOdG4eACN2A&ab_channel=CursoemV%C3%ADdeo" target="_blank">exemplo de forma visual em 3:43</a>

Veja começa na primeira bolinha e termina na última bolinha.

![condições](https://user-images.githubusercontent.com/88457552/162501311-e4020634-fdba-452b-a005-a7748074c6d8.PNG)

Então, basicamente eu tenho dois comandos e eu tenho um comando aqui embaxio. No meio está vazio porque, dependendo de alguma coisa, eu quero executar um determinado comando. E se não der certo eu executo outro comando. por exemplo, como eu represento isso aqui do lado?

seria por exemplo, um losango. vou representar como losango. Ele vai fazer um filtro

tipo uma placa de tânsito. Sabe aquele placa que você está andando de carro, mas chega uma hora que você só pode virar á esquerda ou virar á direita, extamanete. imagina essa placa, <br>
O meu programa está sendo executado de cima para baixo, esatamente como está aqui

![condições2](https://user-images.githubusercontent.com/88457552/162501528-2086839e-bc07-4132-afc4-cbc4f9168451.PNG)

Chegou aqui embaixo, eu vou ter duas possibilidades. Existe uma **bifucarçâo**, exatamente como está sendo representado aqui na imagem embaixo, Essa **bifucarçâo**, vai me levar para dois caminhos possíveis

![condições3](https://user-images.githubusercontent.com/88457552/162501805-c417bc8f-95ce-461a-a83e-0a2b2c09cf7e.PNG)

para um lado, se acontecer alguma coisa.

![bifucarçâo](https://user-images.githubusercontent.com/88457552/162505761-7758aaaf-5892-4bac-80db-d9a68f285856.PNG)



E pro outro lado, se essa coisa não acontecer. Meu programa, agora não será executado de cima para baixo, do início ao fim. **Exite uma bifurcação no meio do caminho.** *Depois que eu executo um dos lados dessa bifurcação*


![bifucarçâo2](https://user-images.githubusercontent.com/88457552/162506859-a46c9694-9109-41c6-ae94-015604302ba6.PNG)

*ele vão se encontra de novo e então fluxo do meu programa vai terminar* vai seguir normalmente até o fim dele, até esse último ponto. Então, basicamente eu não sigo mais uma linha vertical. eu tenho desvios, E a gente chama esse primeiro desvio de **condicional**.

<br>Esse desvio *condicional* é muito importante. **Ele faz parte dos fundamentos da programaçâo. Toda a linguagem de programação que a genete conhece dita imperativa**
aquelas lingugens mais populares, elas têm vários tipos de condições e o JavaScript é uma linguagem popular. Então, ela tembèm tem esse tipo de estrutura.

![condições4](https://user-images.githubusercontent.com/88457552/162502008-3b4f8af3-e051-4ec3-b470-c22acc2a6bc8.PNG)

vamos isolar apenas a condição, vamos começar pelo *losango* (essa marcação em amarelo). 

![Capturar1](https://user-images.githubusercontent.com/88457552/162511034-75940902-ed7a-4943-bd29-0d113090afea.PNG)

Pro losango em JavaScript, a gente vai ultizar a **estrutura** `if`, Então vou colocar ``if`` e vou botar uma condição qualquel. *E nessa condição, eu tenho duas possibilidade:* **a possibilidade da esquerda** e a
**a possibilidade da direita**

![if](https://user-images.githubusercontent.com/88457552/162511767-5e43b619-b45b-4f2c-bee3-73bd984284e6.PNG)


Vamos começa com a possibilidade da esquerda, Essa parte será representada como? Eu vou criar um bloco. você sabe que um bloco é um par de chaves, abertura e fechamento de chaves **{ }**, e aqui dentro vou colocar o bloco. Logo falaremos agora sobre esse bloco, 


![if 2](https://user-images.githubusercontent.com/88457552/162515605-4ff86f12-703e-409e-a167-2557c88d2410.PNG)

Agora vamos passar para a outra parte, O lado direito, Nesse caso, esse que está marcado aqui embaixo. para eu fazer o lado direito, eu tenho que utilizar uma palavra tambèm, que é a palavra ``else`` _que quer dizer **senão**._ 
<br>``if`` quer dizer **"se"**. <br>**Else**  é o oposto de **"se"**
Então, eu tenho um bloco para fazer, Eu vou fazer também um bloco, isto é, eu abro e fecho chaves. Entâo, essa é a estrutrura. Ela tem dois blocos.

![is4](https://user-images.githubusercontent.com/88457552/162517110-8e3aa51e-0e01-4ca5-b763-6ec6e31d3020.PNG)

Um bloco é pra quando o ``if`` der positivo, isto é, são os comandos com os executados caso essa condição aqui seja verdadeira. 

![true](https://user-images.githubusercontent.com/88457552/162519422-cd3851ad-d4ac-4e76-bff3-3afcf9d8d2ab.PNG)

*e esse bloco não precisa ter apenas um comando não, pode ter varios comandos, sem problema nenhum.* Esse bloco de verdadeiro é como se fosse esse bloco aqui de cima. Está vendo? Do lado esquerdo


![flase](https://user-images.githubusercontent.com/88457552/162528079-af612830-57df-45df-bb28-882fe243ac9b.PNG)

Já o bloco aqui de baixo, o último vai ser executado caso essa condição que está aqui em cima ja **falsa.** _E mais uma vez, esse bloco que está escrito **false** aqui embaixo, podem ser vários comandos. não precisa ser apenas um só_ e ele está localizado no bloco da direita.

Essa é uma maneira mais completa de representar as condições. O conceito é esse **Condições é uma estrutura de controle muito imprtante para programação.**

<hr>

<a href="https://www.youtube.com/watch?v=cOdG4eACN2A&ab_channel=CursoemV%C3%ADdeo" target="_blank">exemplo de forma visual em 8:16</a>

*Existe dois tipos de condição*
e eu vou te explicar a diferença entre eles. Na verdade, exitem mais tipos. Nessa aula, a gente vai ver dois tipos de condição, Aqui embaixo a gente vai ter uma condição bem Simple, que ela só tem um tipo de bloco. 

![condição simples](https://user-images.githubusercontent.com/88457552/162532462-3c29714e-f2be-4508-af6d-6864c8e8ad2f.PNG)

Então eu tenho apenas o bloco do verdadeiro. o bloco do falso não existe.Eu já vou dar um Exemplo típico do uso desse tipo de estrutura, E essa estrutura, por ser simples, é considerada, é chamada tecnicamente de **condição simples.**

![consição mais](https://user-images.githubusercontent.com/88457552/162533911-90d40567-1da7-4e6e-a880-05d4842d38ed.PNG)

já a da direita tem o **if** e o **else** e os dois blocos relacionados.  
<br>se na primeira **condição simples.** a condição for falsa, nada vai acontecer em especial. o fluxo do programa continua funcionado sem problemas. 

<br>caso a da segunda seja **verdadeira** que tem o **if** e o **else** vai acontecer uma coisa e caso seja **falsa** tem outra coisa para fazer.

<hr>

<h3>Aula 12 - Condições (part 2)</h3>

**Condições Aninhadas**

vou colocar uma condição **composta**, como a gente viu na aula anterior, ela só nos dá duas opções: sim ou não.

![condições aninhadas](https://user-images.githubusercontent.com/88457552/162822605-c868a4e7-726a-4b52-b14a-80a0bf09c2cb.PNG)


 Só que exite uma possibilidade de criar o que eu escrevi aqui em baixo: **condições Aninhadas** O que seria isso? Bem simples, **eu vou pegar uma condição composta e vou colocar outras condições dentro dela.**


![part2](https://user-images.githubusercontent.com/88457552/162823310-2b01f8a6-6a95-4daf-866c-a2201b2b6b9d.PNG)

por exemplo na minha condição que acabei de representar, dê uma analisada aqui. Lembrando o que a gente viu no vídeo anterior, Nessa condição, se for verdade faz aquele bloco que está sendo representado ali do lado, senão, eu faço outro bloco.

![condições aninhadas part3](https://user-images.githubusercontent.com/88457552/162823668-ab2cca0f-31f6-43ac-9ce1-8219073d726f.PNG)

Eu coloco outra condição e isso amplia muito as minhas possibilidades. Essa minha condição vai ter duas possibilidades. *Eu posso executar um bloco e fazer outra condição dentro, e ir Aninhado, vem de ninho, um dentro do outro.* Nesse meu caso aqui, eu não vou ficar colocando um dentro do outro não, vou colocar só dois níveis. **Mas lembrando que pode fazer vários níveis.**
Aqui, se for verdade eu faço uma e se for mentira eu faço outra. **Então agora eu tenho três possibilidades, é só você olhar a quantidade de blocos que têm aqui em cima.** 

![condições aninhadas part4](https://user-images.githubusercontent.com/88457552/162830396-44ea82ac-a1b1-4717-b439-66e5ae63d4d3.PNG)

Sendo assim, quando eu tenho uma condição Aninhada, eu tenho exatamente isso que está aqui em cima, uma condição dentro da outra. Na verdade o que você está vendo ali, está puxando a condição de cima, está puxando para os dois lados. _Eu poderia puxar para os lados e criar duas condições, uma dentro de cada. **Não exite uma regra de Aninhamento.**_ 

Mas é muito mais comum você fazer desse jeito aqui. tão comum que o JavaScript tem uma estrutura, um comando bem especial que é o **else if.** A gente vai ver como ele funcionar, Mas a gente vai se deter aqui, a representar essa estrutura que está aqui em cima. Onde a gente tem um **if** dentro do outro. 

![condições aninhadas part5](https://user-images.githubusercontent.com/88457552/162834559-ab818302-6280-491b-a789-2cf5b56c58ba.PNG)


vamos fazer a sua relação ecrita em JavaScript. Então eu tenho aqui, a minha condição principal, a minha condição 1, eu tenho um **if** aqui, *vou fazer a linha de indentação.*

 _Lembrando que não é identação, é **indetação** que vem de indente que é recuo em ingles._ Então eu escrevo uma coisa dentro da outra, escrevo uma coisa aninhada á outra, exatamente como está aparecendo aqui em cima. 
 


  Se por acaso a condição 1 for verdadeira, ele faz um bloco 1.

 ![condições aninhadas part6](https://user-images.githubusercontent.com/88457552/162836221-52c8977e-e877-4c29-b490-a00d4c90c521.PNG)

  Agora se não, que é a parte de baixo, ele não vai fazer o bloco 2, que seria uma **condição composta.** Ele vai fazer outra condição. 
  
  ![condições aninhadas part7](https://user-images.githubusercontent.com/88457552/162836471-6375a398-b1bb-4bf0-af42-bcd3a2de7e60.PNG)


  
  E vai fazer um outro **if**. Então vou colocar lá, se a condição 2 for satifeita, eu faço o bloco 2. 


![condições aninhadas part8](https://user-images.githubusercontent.com/88457552/162837448-6c60808b-701b-4695-9b4c-b36ec2b586db.PNG)


  **È importante que você perceba o seguinte: para execurta o bloco 2, a condição 1 tem que ser falsa porque se ela for verdadeira já executa o bloco 1**

  È uma questão de raciocínio lógico. Se a condição 1 for falsa e a condção 2 for verdadeira ele faz o bloco 2.
  
  ![condições aninhadas part9](https://user-images.githubusercontent.com/88457552/162838470-addcfa5f-7ac4-439a-a90a-56ffcf44cc43.PNG)
 

Agora se a condição 1 for falsa e a condição 2 for falsa, ele faz o bloco 3. *E nada me impede de no lugar do bloco 3 colocar outra condição. Eu estaria aumentando um nível no meu Aninhamento.* 

a gente não vai adicionar muitos níveis. Mas sim, eles são possíveis dentro da programação.


![condições aninhadas part11](https://user-images.githubusercontent.com/88457552/162839447-a3e8f763-a425-40e9-83fc-c5f2d71da9c4.PNG)

 Então claramente 
 aqui em cima, eu tenho uma condição dentro da outra. Eu acabei de tracejar em volta da condição exatamente como tinha feito lá na gráfico anterior. E como eu já disse várias vezes a essa estrutura a gente dá o nome de **Condição Aninhada.**

<hr>


**Condição múltipla** 
que serve para valores fixos. È muito útil no mundo da programação principalmente quando eu quero trabalhar com valores fixos, como acabei de falar. Ela não serve muito para intervalo de valores como tinhamos visto,

![condição múltipla](https://user-images.githubusercontent.com/88457552/163270043-0c3b9492-1012-40e7-8a62-36ee38383942.PNG)

__Essa condição múltipla, ela tem a possibilidade não só do *sim* e *não*, ela tem a possibilidade de outros valores, de valores fixos.__ Então por exemplo

![condição múltipla 2](https://user-images.githubusercontent.com/88457552/163270491-28cfcf9d-d823-465c-adc1-629a4d218ef6.PNG)

se for um determinado valor faz um bloco, se for outro valor faz outro. Então eu consigo representar esse tipo de estrutura aqui, dessa maneira. Então eu tenho uma condição, na verdade uma expressão. E dessa expressão eu testo vários valores e depois eu volto para o fluxo normal do meu programa.

![condição múltipla 3](https://user-images.githubusercontent.com/88457552/163271732-4f844a11-20c6-4df7-b5c1-2c31f30db1c0.PNG)

**Esse tipo de estrutura condicional aqui é minha condição múltipla. Ela não é aplicável para todos tipo de situação. O _if_ com _else if_ que a gente acabou de ver é aplicar para todo tipo de situação, mas essa aqui é muito útil em situações pontuais, específicas.**  <br>Para representar essa estrutura que está aqui, A gente representa da seguinte maneira _tem um comando dentro do JavaScript que é o comando `switch`._ 

![switch](https://user-images.githubusercontent.com/88457552/163274775-ae3989f3-4a22-4c54-aa90-c9aca96ffcf7.PNG)

Então vou colocar `switch`, __nota que não é uma condição, é uma expressão e esse *switch*__ tem um bloco relacionado. Lembrando, a gente viu nas aulas anteriores, um bloco é todo `{ }` de chaves dentro da linguagem JavaScript. cada linguagem tem suas regras. <br>
Então vou colocar **switch** que está aqui em baixo e vou colocar os valores dentro dela.

![switch 4](https://user-images.githubusercontent.com/88457552/163276114-3fcabcf7-559c-4475-9de8-25f0b9290007.PNG)

Então eu tenho várias possibilidades de valor. Para cada 1 eu vou colocar um case. isto é, se essa expressão for o valor 1 faz aquele primeiro, 
<br> se for valor 2 faz o segundo, 
<br> se for o valor 3 faz o outro. __tem uma cláusula aqui embaixo que é o `default`__ que é como se fosse o `else` do `switch`. Se nenhum dos valores aqui de cima forem satisfeito, ele vai fazer o daqui de baixo.

![condição múltipla 5](https://user-images.githubusercontent.com/88457552/163277890-c8208e4a-7257-4751-8026-36135c1ec901.PNG)

 E para cada um dos cases eu tenho um bloco. Então basicamente a estrutura é dessa maneira. Eu vou colocar um case para cada valor e por fim, **opcionalmente, eu posso colocar um `default` que é o padrão.** Assim se nenhum dos de cima forem satisfeitos.

 **Só que eu tenho uma informação importante para te dar antes de prosseguir. Dentro da estrutura _switch isso veio lá da linguagem C._** Existe um detalhezinho que precisa ser seguido. Dentro da cada bloco.

 ![condição múltipla 6](https://user-images.githubusercontent.com/88457552/163279678-d2e34477-2e86-43cc-a48f-f074767e452d.PNG)
 
 _Eu preciso colocar um comando `break`. Então pra cada um eu tenho um `break`. Na última é opcional mas vamos colocar sempre._ **Esse `break` é obrigatório.** 
 

 ![condição múltipla 7](https://user-images.githubusercontent.com/88457552/163280434-42b508ab-6349-481c-82d6-79efac92b7f7.PNG)

 E como é que funciona o negócio? Ele vai testar essa expressão que está aqui em cima. Vamos supor que esse expressão resulte no valor 2 que está aqui. Então ele vai desviar

 
![condição múltipla 8](https://user-images.githubusercontent.com/88457552/163281061-55b6ce4d-3f61-4bdb-bde6-2419970124dc.PNG)

vai executar os comandos que tiverem nesse bloco, na verdade pode se um ou vários comandos e no final ele vai bater no `break`. 


![condição múltipla 9](https://user-images.githubusercontent.com/88457552/163281762-841a32b2-2f1c-4b10-90e6-d623c233e9ec.PNG)



Quando ele bate no **break**, olha o que vai acontecer com o fluxo ele vai ser desviado lá pra baixo. Se por acaso esse `break` não existir, vai dar problema porque vai continuar executando todos os comandos até achar um `break`.


<hr>

<h2>Módulo E: Repetições em JavaScript</h2>

<h3> Aula 13 - Repetições (part 1)</h3>

Essa é a primeira parte do assunto e nós vamos começar a aprender essas estruturas que a gente também pode chamar de **Laços** ou **interações.**

Na nossa vida existem vários momentos em que a gente faz repetições e um dos exemplos que eu coloco aqui é por exemplo comer uma pizza, comer uma pizza é uma atividade que requer repetições, vamos supor que você é guloso ou gulosa e vai querer comer essa pizza inteira, pensando nisso eu já criei aqui embaixo a minha `function comerPizza()`, a minha function é uma função que eu faço constantemente

![repeticao](https://user-images.githubusercontent.com/88457552/170758697-51dc14af-5a21-4cf1-8352-8836c342fb8c.PNG)

Então vou criar uma `function comerPizza()` pra mim, essa função ela vai ter um bloco então eu abro e fecho chaves `{ }`, está vendo? Está amarelinho aqui embaixo e eu vou começar minha atividade de comer essa pizza inteira e pra começar,

![function](https://user-images.githubusercontent.com/88457552/170761753-f79466e2-2c31-4783-ab12-1af3eaa67593.PNG)


*eu tenho que fazer alguns passos:* primeiro passo que eu vou fazer aqui é comer a primeira fatia, quando eu como a primeira fatia, já não está mais lá, 

![comerFatia](https://user-images.githubusercontent.com/88457552/170763177-854f94ad-5967-41ab-83ae-c88930c9865b.PNG)


o próximo passo da minha atividade é comer outra fatia, então ele já comeu a segunda fatia ali,

![comerFatia](https://user-images.githubusercontent.com/88457552/170764773-c267487a-0fd3-4b51-984a-c3f0a2da350e.PNG)


vamos fazer mais um comando que é comer mais uma fatia

![comerFatia](https://user-images.githubusercontent.com/88457552/170765782-3d2c904c-762a-4777-912b-9191cf25ab19.PNG)

e assim sucessivamente até a pizza acabar. Eu vou fazer a minha função de comer a pizza é exatamente essa daqui de baixo, você percebe que a minha pizza tinha oito pedaços, então aqui embaixo eu tenho oito comandos, *comer Fatia.* Então assim minha atividade é partir do primeiro comando até o último comando para cumprir a minha missão que foi comer essa pizza inteira.

![comerPizza](https://user-images.githubusercontent.com/88457552/170766102-6a38004d-fbd0-4ad7-acd8-402e080e5e28.PNG)


e com a programação também é assim, a gente parte de um ponto **A** e vai até um ponto **B**, a sua tarefa na hora de programar é conseguir escrever os programas pra que você saia do ponto *A* e chegue ao ponto *B* que é o seu objetivo e para conseguir atingir os nossos objetivos

![pontoAeB](https://user-images.githubusercontent.com/88457552/170767632-e934a116-3de4-4e13-accd-891df74ebfe1.PNG)


existem várias formas que a gente chama de **Estrururas de Controle**. <br>
A primeira estrutura de controle, a mais simples de todas é a sequência onde eu vou desde o ponto **A** até o ponto **B** executando tarefas sequencialmente até chegar ao objetivo que foi exatamente o que aconteceu na hora de comer pizza eu coloquei um passo depois do outro várias vezes até o momento em que eu comia a pizza inteira, só que nem tudo é uma maravilha como isso daqui, ás vezes existem desvios 

![sequencias](https://user-images.githubusercontent.com/88457552/170769028-7b8b149e-b1d2-446a-a19a-4ea6a3025ff9.PNG)

existem possibilidades e então a gente viu lá durante a *aula 12 do Módulo D* e todos os exercícios as condições onde eu tenho um teste lógico que e representado por esse losango aqui e esse teste ele tem

![1](https://user-images.githubusercontent.com/88457552/170771373-1f1b8897-f079-411a-91b7-12e1a574ac47.PNG)

duas possibilidades: **verdade** ou **falso**. E de acordo com esse valor vão ser executadas tarefas específicas, você vê aqui do lado por exemplo: imagina que eu tenho uma pizza de oito pedaços, mas existe um pedaço de pizza de Margherita e eu não gosto de Margherita, então se a pizza não for de Margherita eu como

![2](https://user-images.githubusercontent.com/88457552/170771380-22de6540-49b2-4d22-a2dd-6f9c9404a802.PNG)

se não eu não como, e eu consigo também chegar de um ponto a outro, nem tudo na programação é feita de uma sequência como a gente viu anteriormente, ás vezes é necessário isso daqui, mas o nosso assunto não é as condições, caso tenha dificuldade volte para O *Módulo D*, porque nessa a gente vai ver um novo tipo de *estrutura de controle*

![3](https://user-images.githubusercontent.com/88457552/170775596-21005b3f-3ce2-4092-a878-c0ec840fabdf.PNG)



que são as Repetiçôes ou como eu chamei anteriormente os laços. Um laço ele começa exatamente como uma condiçâo ele vai testar uma expressão e assim como acontecia nas expressões de condição eu tenho duas possibilidades: ou esse teste é verdadeiro ou ele é falso, só que o comportamento aqui é um pouquinho diferente. 


![repetições](https://user-images.githubusercontent.com/88457552/170777018-e6372c37-6ce6-4b2d-9ada-619caf509446.PNG)


se esse condição, se esse teste lógico for verdade ele vai executar um bloco só que ele não vai seguir desse bloco para o ponto final que está embaixo, ele vai volta ele vai fazer um looping,

![a](https://user-images.githubusercontent.com/88457552/170778237-df139b3a-bd9b-4af1-89c5-d2d607ceb64a.PNG)

ele vai fazer um laço, uma repetiçao. Voltando para
o losango ele vai testar de novo essa condição, se essa condição for verdadeira de novo,


![b](https://user-images.githubusercontent.com/88457552/170778241-03a72413-87a0-42bf-8e7c-0b325c6dbcff.PNG)

ele vai executar tarefa e fazer outro laço como acabou de acontecer e vai testar mais uma vez, 

![c](https://user-images.githubusercontent.com/88457552/170778249-c56dd004-7d53-4ffc-b622-b123bc9df998.PNG)

testando e sendo verdadeiro, ele vai executar esse bloquinho de novo e mais uma vez vai voltar e ele vai fazer isso enquanto essa condição for verdadeira, 
<br> percebe na minha frase: *"enquanto essa condição (que é esse losango) for verdade,* 

![estrutura](https://user-images.githubusercontent.com/88457552/170782626-7542cc3a-595d-49db-886f-e6a1cdf84ca8.PNG)

a partir do momento em que esse losango" não for verdade, for mentira o laço é quebrado e eu sigo o meu fluxo natural,   


![estrutura](https://user-images.githubusercontent.com/88457552/170783626-655a8172-3fbc-493d-a775-3a93a5fd3853.PNG)


então essa estrutura daqui de cima é a nossa estrutura de laço principal, ela é a primeira que a gente sempre vê quando vai estudar programação, existem outras? Existem, mas essa é a mais comum de todas.

> Se você já tem conhecimento em outra linguagens de programação principalmente liguagem *C* ou liguagem *Java* é exatamente da mesma maneira


Lembra que quando eu li essa estrutura eu coloquei: *"enquanto alguma coisa for verdade",* essa palavra *"enquanto"* em inglês ela se escreve `while`, ela se diz While.


![while](https://user-images.githubusercontent.com/88457552/170785167-387fd1f9-a5ad-48b0-9177-40dce8968560.PNG)


Então eu vou colocar While e uma condição que é exatamente a condição que eu testari aqui dentro desse losango, 

![while 2](https://user-images.githubusercontent.com/88457552/170785173-a51939a2-b110-4644-bc39-d0c83654f506.PNG)


quando eu escrevo um while eu tenho que colocar um bloco, lembrando em JavaScript, bloco são sinais de chaves `{}`, tudo que estiver entre chaves é um bloco,

![while 3](https://user-images.githubusercontent.com/88457552/170785308-1f7bdd0a-cd05-4d5d-b61f-4cdc0053f8b7.PNG)



então esse bloco que está relacionado a esse enquanto, vai acontecer enquanto esse condição for verdadeira, sendo ela verdadeira, todo o comando que foi escrito aqui dentro vai ser executado,

![while 4](https://user-images.githubusercontent.com/88457552/170785314-7ebf273e-cf44-42aa-aa31-6ce1870176ff.PNG)

depois que esse bloco foi executado, chegando na chave aqui de baixo ele vai voltar pro while, e vai testar de novo a condição, se ela for veradeira, mais uma vez ele vai executar esse bloco e voltar. É assim que funciona,

E a partir do momento em que essa condição deixar de ser verdadeira e passa a ser falsa, o fluxo e desviado pelo lado de fora.


![while 5](https://user-images.githubusercontent.com/88457552/170789202-c7c1a4ad-beaf-405b-9b1c-bf5256214cad.PNG)


Compara essa parte daqui de baixo com a parte de cima é exatamente o mesmo diagrama, é exatamente a mesma estrutura de laço



![comerFatia](https://user-images.githubusercontent.com/88457552/170790003-0e5f4b1b-b96e-4679-b403-b3eb3943b542.PNG)



mas vamos voltar a nossa história de comer pizza, comer pizza é uma repetição e vamos montar a nossa estrutura da função mais uma vez, lembra que antigamente era comer fatia 8 vezes 
e se eu dividir essa pizza em 16 ou 20 vezes? 
<br>
Aquele meu algoritmo anterior, aquele meu programa onde tinha comer fatia 8 vezes já não serve mais e isso sem falar que tem uma repetição de comandos desnecessária, na verdade desnecessária não, chata de fazer, mas agora que você conhece a estrutura `while` tudo vai ficar mais fácil.

> Sempre que você encontrar a palavra `while`, leia como **enquanto**, então dá uma olhada aqui:


![while 6](https://user-images.githubusercontent.com/88457552/170792086-80b03445-0374-4061-9292-4b63011a87eb.PNG)

enquanto tem fatia, fiz um teste, dá uma olhada em cima tem fatia? sim, tem fatia



![while](https://user-images.githubusercontent.com/88457552/170792754-f94e1a8f-ecf5-48c5-8ef5-d434e1c09901.PNG)

então eu vou criar um bloco e dentro desse bloco eu vou colocar o comando *comer fatia*, então olhando aqui em cima tem fatia? Tem

![while 7](https://user-images.githubusercontent.com/88457552/170792096-c4f227fb-707d-47b1-87d7-8404ec6a84b5.PNG)


então ele come uma fatia e chegando no final do bloco

![while 8](https://user-images.githubusercontent.com/88457552/170792097-d80567a8-5e40-4d73-9aef-982db570e0f1.PNG)

ele vai fazer o nosso looping, ele vai fazer a repetição como a gente representou aqui agora, o teste vai ser feito de novo, ainda tem fatia em cima? Tem, então ele come a fatia e volta de novo, então esse mesmo processo de repetição está acontecendo, enquanto tem fatia ele está comendo as fatis


![while9](https://user-images.githubusercontent.com/88457552/170792098-1c3e4108-7a2b-4301-9bc3-4cabb103f30c.PNG)


até chegar o momento em que só tem uma fatia. Vamos fazer o teste de novo enquanto tem fatia, tem fatia? Tem uma fatia.


![while10](https://user-images.githubusercontent.com/88457552/170792092-39359d4a-3527-472d-a4c5-fa00f58eeb5d.PNG)

ele vai comer a fatia e voltar de novo, pergunta mais uma vez, tem fatia? agora não tem fatia, ficou **falso** então ele vai sair e terminou a minha função de comer pizza.


> Então a primeira coisa que a gente vai fazer é esse programa é muito mais eficiente que o anterior, eu vou colocar o anterior na tela só para você comparar

![comparacao](https://user-images.githubusercontent.com/88457552/170795464-43470ef1-f657-4f19-a1b8-b094ca35dbce.PNG)





dá uma olhada na parte de cima e dá uma olhada na parte de baixo 

> <br>e mais importante: o de baixo só serve para eu comer oito fatias, o de cima serve para qualquer tamanho de pizza. esse programa de cima é mais eficiente.


> E se nesse momento você está pensando: "ah Guanabara é só pegar o debaixo dar um **(CTRL + C)** e **(CRTL + V)** se for 20 fatias" e se for por exemplo 50 fatias, 
<br> você vai ter que pegar o *comer fatias* e copiar 50 vezes, aqui em cima funciona sem alterações, para 1, 2, 50, 500 fatias,  Deu para entender a ultilidae de uma estrutura de pepetição como essa que a gente tá acabando de ver?


Forma de fazer no **JavaScript**

<a href="https://www.youtube.com/watch?v=5rZqYPKIwkY" target="_blank"> exemplo de forma visual em (minuto 12:05):</a>

```
let c = 1

while (c <= 6) {
  console.log(`passos ${c}`)
  c++
}


// resultado
  passos 1 
  passos 2
  passos 3 
  passos 4 
  passos 5
  passos 6
```

<a hrf="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while" target="_blank">Saiba mais sobre: [while] em (developer mozilla)</a>




![loop](https://user-images.githubusercontent.com/88457552/171040275-21df998c-2d51-433b-99da-29f97203bd96.PNG)

Sendo assim essa estrutura daqui de cima que é o `while`, ela é classificada como **estrutura de repetição com teste lógico no início**, isso porque ele faz o teste sendo verdadeiro ele faz o bloco, só que existe uma outra possibilidade, existe também a possibiidade em vez de fazer o teste lógico no início que é testa, executa e faz looping


![loop 2](https://user-images.githubusercontent.com/88457552/171040254-af5551f7-b576-43e6-b066-7ac9ba79e5ef.PNG)


eu posso fazer também a estrutura ao contrario, primeiro eu executo bloco e depois eu faço teste, exatamente como acabou de aparecer aqui, 
e a linha de raciocínio igual,


![loop 3](https://user-images.githubusercontent.com/88457552/171040283-5a6e60c7-5410-4b1b-8013-b430e83da285.PNG)

se o teste lógico for verdadeiro, ele faz o looping e executa o bloco de novo e ele vai ficar nesse looping enquanto esse teste for verdade.

![loop 4](https://user-images.githubusercontent.com/88457552/171040286-61ea171b-c764-4c68-b340-49b9f8a35a44.PNG)

a partir do momento em que esse teste não é mais verdade é mentira o fluxo sai da estrutura de repetição.

> Compare esse diagrama de cima com o debaixo, eles são essencialmente estruturas de repetição mas eles têm comportamentos diferentes: **o bloco de cima ele primeiro testa e depois executa o bloco**, 
<br> **aqui embaixo ele primeiro executa o bloco e depois ele testa**

![loop7](https://user-images.githubusercontent.com/88457552/171049139-015fd70b-86bc-4ec7-869b-1df6c8a0f899.PNG)


e para fazer essa estrutura aqui debaixo é muito simples em vez de `while` alguma coisa, você vai fazer `do`, "do" quer dizer "faça" então escrever `do`, abre e fecha bloco `{}` faça. esse bloco que acabei de desenhar aqui enquanto a codição,

![loop 5](https://user-images.githubusercontent.com/88457552/171040297-a15256c2-117e-4b48-a816-328c9c7d6041.PNG)

enquanto essa condição for verdadeira ele vai fazendo o bloco exatamente como acabou de representar aqui em cima, vai ficar repetindo

![lopp6](https://user-images.githubusercontent.com/88457552/171040300-f5cb0ee4-860d-4775-9592-513c01b80e0b.PNG)

e partir do momento em que aquela condição passar a ser falsa, ele sai do bloco e segue sua vida normal na execução do programa.


![estrutura de repetição](https://user-images.githubusercontent.com/88457552/171050937-04a69eba-aa1d-423b-bd19-1fdefe87521c.PNG)


Dessa maneira essas duas estruturas que estão representadas aqui em cima são as minhas duas primeiras estruturas de repetição dentro do JavaScript, 
<br>
a de cima que é a `while`, **a gente chama de estrutura de repetição com teste lógico no início** a de baixo que é `do while` **a gente chama de estrutura de repetição com teste lógico no final.**

<a href="https://www.youtube.com/watch?v=5rZqYPKIwkY" target="_blank"> exemplo de forma visual em (minuto 17:00):</a>


```
let c = 1

do{
  console.log(`passos ${c}`)
  c ++
} while (c <= 6)


// resultado
  passos 1 
  passos 2
  passos 3 
  passos 4 
  passos 5
  passos 6
```


* <a href="https://github.com/jhonatasv/javascript/tree/master/aulas/aula13" target="_blank">Código dessa aula de estrutura Repetições</a>

* <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/do...while" target="_blank">Saiba mais sobre:  (do...while) em developer mozilla</a>

<hr>

<h3> Aula 14 – Repetições (Parte 2) </h3>

A partir de agora. A estrutura de repetição com variável de controle, que é representada polo hexágono irregular.

![est-1](https://user-images.githubusercontent.com/88457552/171210389-4059f146-2f5b-40dc-9e2e-a2f2d5f2a55d.PNG)

basicamente, nesta hexágono, são feitas três coisas: inicialização, um teste lógico e o incremento. Na primeira passagem, exatamente como está aqui, ele faz a inicialização e o teste lógico. Sendo esse  teste lógico verdadeiro.

![est-2](https://user-images.githubusercontent.com/88457552/171210763-c5d40c3a-3889-4edb-879a-29896c6e28ae.PNG)

ele vai executar
o bloco, exatamente como acabou de acontecer, e nesse bloco pode ter um ou vários comandos, como a gente já viu. E feito o bloco, ele vai automaticamente

![est-3](https://user-images.githubusercontent.com/88457552/171210770-2787148b-e907-40e2-81bc-60d9648dcf92.PNG)


voltar. Exatamente como a gente tinha feito nas estruturas `while` e `do..while`, só que dessa vez, no momento do looping, ele também vai fazer o incremento, uma das três partes que estão aqui em cima nesse hexágono irregular. O teste lógico, então é feito mais uma vez, E sendo verdadeiro.


![est-4](https://user-images.githubusercontent.com/88457552/171215162-f093219c-79e7-44f8-9efb-474c3f4615c1.PNG)

mais uma vez esse bloco vai ser executado e o looping acontecerá novamente. Essa estrutura vai ficar acontecendo. Cada vez que voltar, eu incremento e faço o teste lógico. Quando esse teste lógico ficar **falso**.

![est-5](https://user-images.githubusercontent.com/88457552/171215158-edd5d492-7e03-47d9-b6f4-c1e40e52b15e.PNG)


ele vai seguir esse caminho, que é o caminho de encerramento. 

Então essa estrutura está aqui em cima é o que a gente chama de **estrutura de repetição com variável de controle.** E se essa explicação ficou meio confusa, é porque a gente não viu na prática.


![est-6](https://user-images.githubusercontent.com/88457552/171228950-fd0e2f46-b4fd-4366-9833-8dd0c2627fe9.PNG)

O comando que a gente vai utilizar, é o comando `for`, a estrutura `for`, exatamante como está representada aqui abaixo.

como eu disse anteriormente, a estrutura `for` tem três partes: o início (a inicialização), um teste lógico e um incremento. E, tem um bloco, que você viu, abre chave e fecha a chave. 

<br>Então, explicando mais uma vez:

> na primeira passagem pelo `for`, ele vai fazer a inicialização e o teste.

![est-7](https://user-images.githubusercontent.com/88457552/171257032-83e5fe1d-1384-45e1-bb37-8bc8733844f0.PNG)

Sendo esse teste verdadeiro, ele vai executar um bloco com quantidade de comandos que ele tiver. 

> inclusive eu posso colocar dentro de `for`, um `while`, um `do..while`, um `if` ou um `switch` eu posso colocar qualquer estrutura que a gente viu das aulas anteriores até aqui. Não existe limitação nenhuma para programação.

![est-8](https://user-images.githubusercontent.com/88457552/171259026-514a0942-f645-4d84-8a55-bd487e62897b.PNG)

Uma vez executado esse bloco, ele vai voltar para cima, exatamente, como você acabou de ver. Só que enquanto ele está voltando, ele vai fazer aquele incremento que está ali no final, e de novo vai fazer o teste lógico. Sendo esse teste lógico verdadeiro, ele executa o bloco de novo e volta. Nessa volta, ele faz um incremento de novo e faz o teste lógico mais uma vez.

isso vai acontecer enquanto esse teste lógico for verdadeiro. 


![est-9](https://user-images.githubusercontent.com/88457552/171261461-8f619be4-4b48-4fb8-99c3-c48cccbc0058.PNG)


Se por acaso esse teste lógico for *falso*, ele vai sair da estrutura e segue se o fluxo natural de execução do nosso script.


> e se caso ainda não tenha ficando tão claro para você o funcionamento desse incremento, dessa teste lógico e inicialização, com certeza vou conseguir te provar agora. Eu vou escrever um código que é muito familiar á você, se você viu a aula anterior pricipalmente, que é um código que utiliza a estrutura `while`, que é enqunto.


![est-10](https://user-images.githubusercontent.com/88457552/171269361-c5443769-8bce-43fa-a024-22197f5a135e.PNG)

Comecei com variável **c**, que recebe *1.* Exatamente como está escrito aqui em cima, Vou colocar um `while` que é "enquanto", uma estrutura enquanto, e vou colocar o teste lógico, `c <= 10`. isto é, o **"c"** começa com *1*. Enqunato **"c"** for menor ou igual a 10, ele vai fazer uma determinada coisa, vai fazer um bloco. e eu vou colocar `c++`. 

> Lembrando que `c++` significar `c + 1`. O *"c"* que estava valando *1*, vai passar a valer *2*. Vai voltar. voltando ele teste, `c <= 10` ? Sim. Ele vai fazer, vai virar *3* e vai voltar. Ele vai fazer isso até passar de *10*, quando ele passar de *10*, ele sai. 

agora vamos ver como reescreve esse mesmo código só que utilizando a estrutura `for`. 



![est-11](https://user-images.githubusercontent.com/88457552/171273370-40953d48-3393-4052-9c1a-71b7080a3d04.PNG)

Lembrando que `for`, como está em cima, tem três áreas pricipais. A primeira área é a inicialização. 

![est-10](https://user-images.githubusercontent.com/88457552/171273380-3e07dda3-30bc-46a0-9d54-2f39882f94ea.PNG)

E a inicialização do código de cima está ali. Acabei de mascar pra você. `var c = 1`. Sendo assim, a minha inicialização sendo essa, eu escrevo na linha do `for`, na **primeira parte:** o primeiro elemento é a inicialização.

> Então eu inicializei o **"c"** com valor *1*.

![est-12](https://user-images.githubusercontent.com/88457552/171279088-c2d3f53c-9e0c-444a-a596-d5fa3fccd1d6.PNG)


**A segunda parte:** do bloco é o *teste lógico*. Exatamente esse teste lógico. aqui em cima. `c <= 10`. Vou pegar esse mesmo elemento. vou escrever aqui embaixo. Então, `c <= 10` para a segunda parte. 


![est-13](https://user-images.githubusercontent.com/88457552/171280169-17a8aad9-629f-4942-b0e6-490994f97a01.PNG)


**A terceira parte:** é o  incremento. No nosso caso do código de cima do meu incremento é o `c++`. Então vou pegar exatamente esse `c++` e vou escrever aqui em baixo, no `for` como sendo a terceira parte. 

> O que estou tentando explicar é que o código de cima e o código de baixo tem exatamente a mesm funcionalidade. Elas vão começar no *1*, e vão terminar no *10*. Então, tanto faz escrever da maneira de cima, quanto da maneira de baixo.


* saiba mais sobre: <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for">(for) em developer mozilla</a>

<hr>

<h2>Módulo F: Avançando os estudos em JavaScript</h2>


<h3>Aula 15 – Variáveis Compostas</h3>

Vamos entender a diferença entre variáveis simples  e variáveis compostas.

como a gente já viu durante as aulas anteriores, toda aula a gente usou variáveis

variáveis simples só consegue armazenar um valor por vez, então quando você cria uma variável com *var* ou *let*, você criou uma variável *N* e essa variável *N* recebe *5* por exemplo, sua variável está valendo 5, se por acaso você tentar atribuir 8 a ela, ela perder o *5* isso porque é uma variável simples e variáveis simples só guarda um valor por vez e você não precisa nem pensar muito para a conclusão que uma variável composta



![variáveis-simples](https://user-images.githubusercontent.com/88457552/173413980-7c67e0d2-50d2-4c41-aee4-6f4650763111.PNG)



uma variável composta deve ser capaz de armazenar vários valores em uma mesma estrutura, isso é você colocou 5 ela guarda, colocou 8 ela guarda também, e colocou um 12 ela guarda também, isso é, ela não vai perder os valores anteriores para poder guardar os proximos valores, esse é um conceito fundamental de variáveis compostas.

![variáveis composta](https://user-images.githubusercontent.com/88457552/173416406-a6c03ab1-851c-4d83-a396-52fcd1564ce1.PNG)

mas para te explicar direito daquele jeito que a gente sempre faz, e para dar uma relembrada num conceito ou num exemplo prático que eu te dei lá anteriormente na aula de variáveis.

você deve se lembrar muito bem do exemplo que a gente viu anteriormente naquele lance do terreno para fazer um estacionamento, agente tinha um terreno exatamente como está aqui e a gente colocava várias vagas de automóveis, agente delimita para poder caber dentro de uma vaga apenas um automóvel

![va](https://user-images.githubusercontent.com/88457552/173420213-f4ed4e4f-cd6b-4756-9b97-23be74f6c627.PNG)

nós fizemos isso durante as aulas de variáveis e para facilitar para eu saber onde que eu guardei o carro, eu coloco um identificador, um nome para cada uma dessas vagas, eu coloquei aqui do lado do **a0** até o **a5**, só que isso consumia muito código na hora que a gente programava, quando a gente precisa de muitas varáveis em um programa, ela consome muito código,
a gente tem que escrever muito então por exemplo para declara essas vagas que estão aqui em baixo


![a5](https://user-images.githubusercontent.com/88457552/173421764-b91afc5d-f3b7-4615-b88e-160fbaa2327c.PNG)

eu tenho que colocar vaga  várias vezes que seria o nosso var ou let e eu tenho que colocar o nome de cada um dos indecadores de **a0** até **a5**, agora você imagina que sejam 200 vagas, imagina o tamanho do código que iria aparecer aqui do meu lado

![v6](https://user-images.githubusercontent.com/88457552/173422860-19dbcf2c-82a5-4cb9-a08f-fa0b6eb764e7.PNG)


a partir do momento em que eu declarei essas variáveis, que declarei essas vagas de estacionamento, eu consigo colocar automóveis ali dentro sem problema nenhum e a gente viu durante as aulas de de váráveis, A gente naquele momento utilizou o código maior e eu nem me lembro se durante  a aula eu prometi reduzir esse código mas a gente vai reduzir a partir de agora, <br>naquela aula também eu coloquei um carro na vaga **a2**, se por acaso eu quiser colocar outro carro na vaga **a2** eu sou obrigado a tirar esse daqui, isso porque elas são variáveis simples e se eu quiser colocar em outra vaga que esteja livre por exemplo **a1**, tem uma vaga ali eu posso colocar sem problema porque a vaga está livre, mas qualquer vaga se eu quiser colocar outro carro eu tenho que tirar um carro que por ventura esteja lá.

![v7](https://user-images.githubusercontent.com/88457552/173423958-e959aa20-22ce-4f81-8a13-85632526aabd.PNG)

o que eu vou fazer agora é propor uma outra forma em que você vai escrever menos e vai ser muito mais fácil para você gerenciar os automóveis que estão nessas vagas.
Eu não vou dar mais um identificador pra cada vaga, eu vou chamar elas toda pelo mesmo nome, então eu vou traçar uma linha aqui, dá uma olhada nessa linha azul que eu tracei, todas essas vagas vão se chamar a, que são vaga para automóveis, por isso que coloquei o **a**.


![a](https://user-images.githubusercontent.com/88457552/173427659-7286b317-8d21-40d7-b3fb-223c6a96d7cb.PNG)

> Nunca se esqueça pequeno Gafanhoto, coloque nomes claros para suas variáveis, não adianta ficar sendo programador alfabeto (a, b, c, d, e, f) para todas as variáveis e nem o programador contador (n1, n2, n3, n4)

aqui eu utilizei **a** porque é uma vaga de automóveis poderia ser "auto" por exemplo também, você escolhe o nome contanto que ele seja claro pra você.

Sendo assim eu estou com vagas **a** e você vai falar: "mas não tem a identificação de cada vaga", tem sim porque essa variável grandona é a minha variável *a* e eu vou colocar um identificador de índice, <br>
uma chave que vai indentificar cada uma delas e para declarar essas vagas eu só vou usar uma linha, **vaga a**

![va](https://user-images.githubusercontent.com/88457552/173434284-d9acccf0-fc6a-4a62-b3e5-ee029d7a4882.PNG)

e para cada vaga eu coloco uma chave, um índice, exatamente o que acabou de acontecer aqui

> e aí você pode estar pensando: "ah mas deu no mesmo", não é exatamente no mesmo, eu simplesmente escrevi muito menos

agora eu continuo tendo do **a0** até o **a5**, só que vou escrever de uma forma um pouco difente, utilizando colchetes, já você vai ver, o que eu quero é que você entenda que antes eu utilizei um monte de linha para declarar, agora eu só utilizei uma e para que eu faça essa variável funcionar como uma variável composta que é exatamente isso que acabei de explicar, essa é uma variável única chamada **a** que guarda vários valores identificados por uma chave que é a identificação de cada vaga

![va2](https://user-images.githubusercontent.com/88457552/173435055-65ca01b4-1a72-4584-845b-b40eadf92f67.PNG)

pra eu declarar isso em JavaScript é muito simples! É só colocar isso aqui: **vaga a =[ ]**, e é claro que não é só colocar assim, porque se você olhar aqui eu tenho carros nas vagas como é que eu declaro uma variável desse tipo e já coloca os carros na vaga

![va3](https://user-images.githubusercontent.com/88457552/173438228-27900d72-a5b9-457a-8549-6156614cc2b7.PNG)

simples dá uma olhada aqui, vou colocar: vaga a = [ , , ] e vou colocar 3 áreas ali, se você identificar dentro dos colchetes eu tenho 3 espaços para colocar carros


![v4](https://user-images.githubusercontent.com/88457552/173440016-90d1e262-df02-441d-ad8f-3e473824687d.PNG)

é só eu colocar os carros ali, automaticamente quando eu faço isso ele já vai arrumando os carros nas vagas.

![v5](https://user-images.githubusercontent.com/88457552/173440527-db5875ea-f241-4339-8919-98b8c928fbd6.PNG)


Basicamente o que vai acontecer é eu vou declarar uma variável **a**, olha lá embaixo como é que tá acontecendo, só que essa variável **a** é um pouco mais espaçosa, isso porque ela vai ter que ser divida em 3 partes, no caso pela declaração ali em cima, não precisa ser sempre 3 partes, pode ser quantas partes você precisar, 

quando eu faço aquela inha que está ali em cima, vaga **a** abre colchete e coloca os 3 carros, automaticamente

![a](https://user-images.githubusercontent.com/88457552/173633247-453f39c9-d45f-4a8d-a9b8-9e4efbe45f62.PNG)


os 3 carros vão para essas vagas, vão para esses espaços e cada espaço desse recebe uma identificação, recebe um número que a gente chama de chave ou índice então coloquei ali embaixo de vermelho

![a1](https://user-images.githubusercontent.com/88457552/173635558-8858bf00-ccb4-4e9a-b2cf-c0cbccf9d6cd.PNG)

os números, então eu tenho **a0** que está com o primeiro carro, **a1** que está com o segundo carro e **a2** que está com o terceiro carro, aquele menorzinho.

> E uma observação muito important, geralmene as pessoa que estão começando se enrolam um pouco porque as variáveis compostas na maioria das linguagens de programação começam com índece 0, geralmente a gente pensa assim: a primeira vaga é a vaga 1, so que na programação, já acostume-se com isso, tem várias liguagens de programação que funcionam assim, a primeira vaga não é a vaga 1, é a vaga 0, então uma variável composta de 10 posições não vai de 1 a 10, vai de 0 a 9 acostume-se com isso.




vamos começar a dar nome ás coisa, essa variável composta que a gente declarou, essa variável **a** ela é uma variável do tipo composta ou **array** ou em português **vetor** <br>
*então sempre que você pensar assim: "ah, o vetor tal", vetor é uma variável com vários espaços, exatamente como está representada aqui embaixo,*

![a2](https://user-images.githubusercontent.com/88457552/173638940-664af1cb-37bd-499c-8d74-7c3c75c6e49c.PNG)

o **vetor** ele é composto de elementos, um elemento de um **vetor**, ele é um par que agrupa o espaço de memória, o valor colocado dentro dele e o índice.

![a3](https://user-images.githubusercontent.com/88457552/173641587-c2ce0ac0-801d-4531-9646-e8db74c216e0.PNG)

E por fala em índice, **índice** é esse número que está aqui embaixo também pode ser chamado de chave ou em inglês **key** 

![a4](https://user-images.githubusercontent.com/88457552/173644862-9a33893a-51f8-46b9-a6c7-0366932eaf1f.PNG)


e por último aqui nosso componente está o conteúdo de cada elemento

![a5](https://user-images.githubusercontent.com/88457552/173649757-bf515402-4458-435e-8fb3-9886f4802b06.PNG)

então analisando esse gráfico que tem na sua tela fica muito simples, <br>
um **array** ou um **vetor** ou uma **variável composta** é uma variável que tem vários elementos, cada elemento é composto por seu valor e por uma chave de identificação.


E como é que eu faço isso aqui que aconteceu com carros, acontecer em JavaScript?

então vou colocar: `let num = []` é uma variável composta então ela não vai guardar um número, ela vai guardar vários números

![a6](https://user-images.githubusercontent.com/88457552/173659056-15166eb1-4363-4fc9-99b8-2ef216a70d70.PNG)


sendo assim essa linha que apareceu vai declarar uma variável **num**, que é um poquinho mais larguinha, um pouco mais gordinha, dentro dos colchetes [ ], que estão aqui embaixo, vou utiliza vírgulas para separar os elementos, nesse caso mais uma vez eu separei 3 espaços

![a7](https://user-images.githubusercontent.com/88457552/173659966-5495eee2-a73e-40da-a6b3-c0c79ed49f83.PNG)

quando eu separo 3 espaços automaticamente ele vai dividir variável em 3 partes e já vai dar os índices exatamente como aconteceu ali


![a8](https://user-images.githubusercontent.com/88457552/173668715-a63360e9-a318-4c15-af11-62bb0e5fb731.PNG)


Lembrando o primeiro índice não é 1, é 0, vou colocar o primeiro valor ali, vou escrever 5 o que vai acontecer?  O 5 vai para o primeiro espaço

![a9](https://user-images.githubusercontent.com/88457552/173672417-baa54c1c-0b76-4fbb-8077-fc14136f314f.PNG)

vou colocar o segundo valor 8 e 8 foi para o espaço 1. 

![a10](https://user-images.githubusercontent.com/88457552/173672979-b9fe2888-0835-40fe-8663-81ec789ea555.PNG)


vou colocar mais um valor 4 e o 4 vai pro espaço 2.

![a11](https://user-images.githubusercontent.com/88457552/173673677-89a25b6a-87b5-4fe0-8457-c293ad2e08fe.PNG)

sendo assim acabei de representar aqui, um vetor de 3 elementos, elementos 0, 1 e 2  que tem os valores 5, 8 e 4.

* <a href="https://www.youtube.com/watch?v=XdkW62tkAgU&ab_channel=CursoemV%C3%ADdeo">
testando o código de forma visual no minuto (10:45)</a>

<br>


> Como acrescentar um valor, sem perder os valores que estão lá?

Então estamos aqui exatamente onde a gente parou, o vetor aqui está com 5, 8 e 4 e você percebe que os índices são 0, 1 e 2, 

![a11](https://user-images.githubusercontent.com/88457552/173673677-89a25b6a-87b5-4fe0-8457-c293ad2e08fe.PNG)

se eu quiser acrescentar a vaga 3, é muito simples, é só fazem assim: `num[3] = 6` <br> quando eu coloco **num** e entre colchetes eu coloco **3**, estou dizendo assim para o JavaScript: Coloque o valor **6** na posição **3**, só que a posição **3** se você olhar o gráfico, não existe. o JavaScript percebe isso e cria pra você.


![a13](https://user-images.githubusercontent.com/88457552/173892697-be79171d-1425-4aa8-8154-27396476e616.PNG)

Então essa linha que apareceu `num[3] = 6`, vou ler **3** só que você não vai escrever **num** **3** sem o colchete, não pode esquecer o colchete, quando eu digito essa linha ele vai criar mais um elemento, vai colocar o índice 3 e vai colocar o valor que está ali, o valor **6**, vai colocar dentro do elemento.


Essa é uma maneira automatizada do JavaScript 

![a14](https://user-images.githubusercontent.com/88457552/173897703-e5a71ed7-884b-4206-8a44-a444f58d8c8f.PNG)

mas se você quiser colocar explicitamente olha eu quero coloque na última posição, não quero saber qual é a posição, não quero ficar preocupado com isso, é só você usar um comando muito fácil que é: `num.push(7)` que é um **método interno** que vai acrescentar valores a um **array**


![array](https://user-images.githubusercontent.com/88457552/173905392-63cd0a1b-0e59-428f-a538-eb709b48df0c.PNG)

então estou tentando acrescentar o valor **7** é só olhar aquele comando que está escrito ali, com isso o JavaScript já vai criar mais um elemento já vai automaticamente decidir que o índice, que a chave é **4** 


![array2](https://user-images.githubusercontent.com/88457552/173907869-c60c8947-8448-4336-8568-8a5258e32030.PNG)


e vai colocar lá dentro o valor **7** exatamente como acabou de aparecer


![a15](https://user-images.githubusercontent.com/88457552/173904539-17c6a933-ed98-469e-bf1b-2f3ab42df09b.PNG)

* <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push" target="_blank">Saiba mais sobre: [  push( ) ] em developer mozilla</a>

Outra coisa que a gente pode fazer também com arrays, que a gente pode utilizar os comandos aqui é saber comprimento dele 
<br> como que vou saber o comprimento? Simples,  `num.length`

> cuidado, como se escreve a palavra length muita gente se confude e coloca "lenght", confude bastante principalmente pra gente que o inglês não é a primeira língua e outra confusão muito grande é que do lado de length não tem parênteses para o JavaScript, em outras linguagens têm, **length não é um método**, **length é um atributo** e pra que ele serve?

Simple, é só você olhar o desenho que está aqui embaixo, quantas casas, quantos elemento exitem no array **num** se você respondeu que tem **5** elementos, você é bem observador e é exatamente esse valor **5** que é o `num.length` que é o comprimento do meu vetor

![array4](https://user-images.githubusercontent.com/88457552/173915699-5055e91d-7aa1-422d-9651-cfbb3141469e.PNG)


vou te ensinar mais um comando, um método interno também de todo vetor que é muito útil que é o método `sort()`, então quando eu coloco `num.sort()`, ele vai simplemente pegar todos esse valores, olha nesse momento como está meu vetor, os elementos são 5, 8, 4 e 6 e 7 posições 0, 1, 2, 3, 4 

![array5](https://user-images.githubusercontent.com/88457552/173916319-f362f10c-e891-4081-b738-35f6e16755fb.PNG)

<br>

quando eu uso o  `num.sort()`, olha o que ele vai fazer, ele vai pegar todos os elementos e colocar em ordem crescente sendo assim e tenho agora 4, 5, 6, 7 e 8 ordenados

![array6](https://user-images.githubusercontent.com/88457552/173921165-0a6529e0-f0ea-457a-a210-09bfa4213388.PNG)

* <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" target="_blank">Saiba mais sobre: [ sort( ) ] em developer mozilla</a>


* <a href="https://www.youtube.com/watch?v=XdkW62tkAgU&ab_channel=CursoemV%C3%ADdeo">testando o código de forma visual no minuto (15:50)</a>



Outra coisa que é muito comum da gente fazer com o vetor é mostrar ele na tela sem a formatação padrão, porque geralmente ele mostra aquela formatação padrão com colchetes é bem bagunçado, <br>
se você quiser mostrar da maneira que você preferir, vou te mostrar como fazer isso


aqui na tela está o vetor que a gente criou anteriormente, ele tem 5 elementos, de 0 a 4 e ele está la com 4, 5, 6, 7 e 8 já está ordenado porque a gente deu `sort()` nele, 

![0](https://user-images.githubusercontent.com/88457552/174298992-db42d199-03ad-4ce9-81e4-08dba599f25a.PNG)

para eu escrever esse vetor como a gente acabou de ver, a gente pode fazer isso por exemplo eu coloco: `console.log(num[0])`, quando eu colocar `num[0]`, ele vai mostrar o valor **4** que é o primeiro elemento,

![1](https://user-images.githubusercontent.com/88457552/174301769-c231c61e-904d-4fd7-938c-38114061ae8b.PNG)


se eu quise mostrar o segundo é só colocar: `console.log(num[1])` e eu posso fazer a mesma coisa pra todos os elementos eu dou um `console.log()` para cada um deles e dentro de cada um dos parentes eu colo `num[2]` `num[3]` `num[4]` e assim sucessivamente.

![3](https://user-images.githubusercontent.com/88457552/174303670-00070c73-30d0-4db6-8664-8680745e7f34.PNG)


Da só uma olhada no tamanho do código que eu gerei só pra mostrar um vetor de 5 posições, imagina agora se ele tivesse por exemplo 200 posições, seria um grande trabalho de código e não é assim que a gente trabalha, mas a solução para isso é muito simple e a resposta está nas aulas anteriores, por isso que eu perguntei no início, você praticou o suficiente o uso `while`, `do...while` e do `for`, pricipalmente o do `for`? pois esse conhecimento vai ser extremamente útil para você agora, 
<br> dá uma analisada nessas linhas que estão aqui `console.log(num[0])` e etc, o que tem de diferente dentro de cada uma dessas linhas? A unica diferença entre elas é isso aqui que eu acabei de marcar, são os índeces, então eu tenho 0 na primeira, 1 na segunda, na terceira e assim sucessivamente.


![4](https://user-images.githubusercontent.com/88457552/174320720-1b07bc27-7e7e-4f27-b81c-bb3af37abcd3.PNG)

Pois esses números que estão marcados aqui são exatamente as minhas chaves, ela indicam a posição  dentro de cada vetor, agora você imagina que eu possa utilizar, criar variável chamada "pos" e essa variável **pos** começar valendo 0 e for valendo até 4, que é exatamente o limite do meu vetor, se eu fizer uma repetição para isso eu escrevo essas linha de `consolo.log()` apenas uma vez e coloco dentro de uma estrutura de repetição <br>

> e se por acaso você tem problemas em estrutura de repetição, volte e assistar aulas 12, 13 e 14 porque a grande dificuldade dos vetores não é o vetor, é a estrutura de repetição. 

![5](https://user-images.githubusercontent.com/88457552/174322064-8a0cdd7e-abdc-4fa0-9de6-d4d1c91965b7.PNG)


Sendo assim eu vou substituir esse código todo que está aqui em cima, por apenas duas linha, vou criar uma estrutura chamada `for` que a gente já viu nas anteriores, vou fazer um for aqui, você viu durante a aula que o `for` tem 3 elementos, o primeiro elemento é a inicialização, o segundo teste lógico e o terceiro incremento.


![6](https://user-images.githubusercontent.com/88457552/174338486-313ef843-7674-41e5-8c89-1fbcb1a763ea.PNG)


vou colocar aqui dentro do `for` o `console.log` e vou escrever alguma coisa ali dentro e vamos comerçar, e vamos preencher aqui o nosso `for` em primeiro luar a inicialização, como eu disse há alguns segundos atrás, eu vou criar uma variável `let pos = 0` 
<br>
ela vai se inicializar, variável **pos** vai se inicializa com **0**, o meu teste lógico é fazer o **pos** chegar até 4, só que chegar até **4** pra um vetor de 4 posições e se o vetor tiver 200? ou se tiver 50? Tem como eu saber quantas as posições têm? Tem, eu acabei de ensinar!

![7](https://user-images.githubusercontent.com/88457552/174341243-f455a92a-3d1d-40c9-8fbb-f5cd65bfe5fb.PNG)

È só fazer isso aqui: `pos < num.length` isso é enquanto ele não chega no final do meu vetor, que é o comprimento dele


![teste](https://user-images.githubusercontent.com/88457552/174345997-35b8a3d5-7812-4837-afed-5a67dfed9854.PNG)



vou fazer: `pos++` pra ele adicionar um cada vez que ele fizer um looping.

![8](https://user-images.githubusercontent.com/88457552/174345291-b153ae90-e529-4ad9-b7b7-8ab1bc632391.PNG)

então acabamos de montar o `for` aqui do lado, sendo assim eu tenho uma variável **pos** que vai começar **0** e vai até o tamanho do vetor.
Então eu vou ter 0, 1, 2, 3, 4 e 5 até chegar no final do vetor, para escrever na tela é só substituir aquele pedaço do `console.log()` por `num[pos]` em vez de **num[0]**, **num[1]**, e **num[2]** eu coloco **num** no índece **pos**

![9](https://user-images.githubusercontent.com/88457552/174349040-a7b9afd4-3544-4d60-8ba9-7c3dc262ff43.PNG)

* <a href="">testando o código de forma visual no minuto (22:22)</a>

> Essa não é a unica de maneira de fazer, tem uma um poquinho mais simples e é que a gente gosta mais de utilizar!

Esse código que está em cima é o código tradicinal do percurso em vetores isso é o que a gente chama de percuso para exibição no vetor e o JavaScript a partir das versões mais recentes do ECMAScript tem um jeito mais fácil, mais simplificado para fazer.

Vou criar uma estrutura que a gente chama de `for` só que utilizando o `in` dentro, Então vou utilizar o `for..in` e ele não tem 3 elementos como está aqui no primeiro `for`, ele é um `for` um pouco mais simplificado e ele é otimizado para variável compostas e objetos, isso porque vetores e objetos são muito importantes para a linguagem JavaScript.


![8](https://user-images.githubusercontent.com/88457552/174357969-8f07079c-30c2-4505-9f86-26820f080c7f.PNG)

vou colocar aqui dentro o mesmo `consolo.log()` exatamente como está aqui em cima e olha como vai ficar pequeno: a primeira coisa que vou botar aqui dentro do `for` é o meu índice, é a variável que eu criei aqui em cima `let pos = 0`, só vouc colocar `let pos`  ou `var pos`


![10](https://user-images.githubusercontent.com/88457552/174375732-345954a5-457e-4b92-a39f-ede84fdc04db.PNG)

e do lado `in` basta colocar o nome da variável composta, olha que simples, no nosso caso aqui, a minha variável composta se chama **num**, então eu vou colocar: para cada podição dentro de `num`
<br>

![11](https://user-images.githubusercontent.com/88457552/174386123-d43b483b-f3a6-420b-a15a-215701269ce2.PNG)


è assim que a gente vai ler, o `for` a gente lê para, o `in` a gente lê dentro ou "em" em português.
Então vamos ler essa frase em português: para cada posição em **num**, para cada posição na variável composta, eu vou mostar o **num** **pos**, simples, olhar que simplicidade


>Lembrando que essa sintaxe do `for` ela só funciona para arrarys e objetos, que na verdade são a "mesma coisa" porque todo array em JavaScript é um object.

![12](https://user-images.githubusercontent.com/88457552/174387245-9dbbd282-1b21-4c95-a88d-586d1bb592e7.PNG)


* <a href="https://www.youtube.com/watch?v=XdkW62tkAgU&ab_channel=CursoemV%C3%ADdeo">testando o código de forma visual no minuto (26:48)</a>

* <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in">Saiba mais sobre: (for...in) em developer mozilla</a>

---

como buscar valores dentro de um vetor, dá pra fazer isso com comandos bem simples dá uma olhadinha.
coloquei aqui mais uma vez o mesmo vetor que a gente estava trabalhando aqui como exemplo, nosso vetor **num**, e vou fazer o seguinte: eu quero buscar o valor lá dentro

![index](https://user-images.githubusercontent.com/88457552/174664569-6263edde-ebdd-4487-bf74-13ef0477c93f.PNG)

vou utilizar o método `indexOf()`, lembrando, que o **O** de **Of** com letra maiúscula senão não vai funcionar.

o que é `indexOf(7)`? Ele vai procurar lá no vetor embaixo onde está o valor 7, se você é observador(a), você percebeu que o 7 está ali, essa função então vai me retornar a chave onde esse valor se encontra


![index 2](https://user-images.githubusercontent.com/88457552/174668952-5c1a3b44-5d7e-4398-85b0-8d2db45174e5.PNG)


então por exemplo mandei aqui com esse comando `num.indeOf(7)`, pesquisar  "JavaScript tem o valor 7 dentro do vetor?" Ele vai me responder "tem e está na posição 3", então é exatamente dessa maneira que o `indexOf()` funciona e você pode estar pergutando: "tá Guanabara e se eu der um `num.indeOf(3)`?" 

![Capturar](https://user-images.githubusercontent.com/88457552/174670728-aee36320-29a5-43e2-9bb7-d444f7eff4f1.PNG)



dá uma procurada ali existe 3? E se você está dizendo que existe presta atenção, não é o número vermelho lá debaixo é o valor, não é a chave, não existe o valor 3, 
ele vai procurar e vai falar: "3 não tem",

![inde](https://user-images.githubusercontent.com/88457552/174672045-2a2e204a-4464-4850-9511-b8592aa3a528.PNG)

ele deu uma olhada no vetor e não tem, sendo assim ele retorna o valor (**-1**), <br>
(**- 1**) significar para o JavaScript que **Ele pesquisou dentro do vetor e não encontrou nenhuma ocorrência**

![indexOf](https://user-images.githubusercontent.com/88457552/174672489-47a3cf5f-2142-445f-b543-457f49740b89.PNG)


* <a href="https://www.youtube.com/watch?v=XdkW62tkAgU&ab_channel=CursoemV%C3%ADdeo">testando o código de forma visual no minuto (29:48)</a>

* <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf">Saiba mais sobre: ( indexOf( ) ) em developer mozilla</a>
