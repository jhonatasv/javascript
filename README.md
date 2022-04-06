# Primeiros passos com JS.

<h2>Módulo A</h2>


---
na primeira aula apredemos que os scripts JS devem ser incluídos no final do corpo do documento __HTML__,<br>
posicionando a tag  `<script></script>` logo acima da tag de fechamento `</body>`

Nosso Primiero comando é
```
window.alert('Olá, Mundo!')
```


A palavra `window` (opctional) é um objeto que indica uma referência á janela atual do navegaor. A palavra ``alert()`` é um método capaz de de disparar uma mine-janela de alerta para avisar algo ao usuário.


Dentro dos parêntes do método `alert()`, temos uma __string__ entre aspas (que podem ser __´aspas simples´__, __"aspas dupla"__ ou __crases__  para delimitar as palavras que efetivamente aparecerão na janela de alerta.


<h2>Módulo B</h2>

---

Aula 6 - tratramento de dados

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

<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/ToString">Mais Exemplo em developer mozilla</a>


<hr>

(Template strings)

Dentro de uma __Template strings__ podemos usar __placeholders__ no seu interior. um placeholder é representado pelos símbolos `${}` e podem ser usados para facilitar a exibição de conteúdos de variáveis ou expressões.

(com __Template strings__) <br>
```
alert(`A soma enter é,  ${}`)
```

(sem) <br>
```
alert('a soma dos Números é, ' +(soma))
```

<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals">Exemplo em developer mozilla</a>

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

<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace">String.prototype.replace()
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

<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString">Number.prototype.toLocaleString() em developer mozilla</a>

---

Aula 7 - Operadores (Parte 1)

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

<a href="https://www.youtube.com/watch?v=hZG9ODUdxHo&ab_channel=CursoemV%C3%ADdeo">exemplo de cálculo no minuto 6:25</a>

<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_aritmeticos">Expressões e operadores em developer mozilla</a>


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

<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operator_Precedence">Precedência de Operadores em developer mozilla</a>


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

Lembre-se, A variavel e como se fosse a vaga de um carro, para colocar um segundo carro eu teho que tirar o primeiro, foi exatamente isso que aconteceu.

eu tinha 3, deixou de valer 3 e passou a valer 7. isso é a auto-atribuiçâo

eu posso fazer coisas do tipo
`n = n - 5` que está valendo 7 agora, -5 dá 2
então o *n* deixar de valer 7 e passa a valer *2*.

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

Aula 8 - Operadores(Parte 2)

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

<a href="https://www.youtube.com/watch?v=BP63NhITvao&ab_channel=CursoemV%C3%ADdeo">Dica para saber a diferença entre o maior e menor <br>(minuto 2:30)</a>

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



<a href="https://www.youtube.com/watch?v=BP63NhITvao&ab_channel=CursoemV%C3%ADdeo">mais exemplos no (minuto 4:14)</a>



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

<a href="https://www.youtube.com/watch?v=BP63NhITvao&ab_channel=CursoemV%C3%ADdeo">mais exemplos no (minuto 7:13)</a>

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

<a href="https://www.youtube.com/watch?v=BP63NhITvao&ab_channel=CursoemV%C3%ADdeo">mais exemplos no (minuto 13:00)</a>


E por fim, a **disjunção** que são os dois pipes `||` também um operador binário que tem dois valores lógicos, um de cada lado. Dependendo da posição deles e do resultado lógico, eu tenho tambèm o valor lógico de resultado. E na **disjunção** basta que um deles seja verdadeiro para o resultado ser verdadeiro.


exemplo <br> 
`var a = 5` <br> `var b = 8`

`a > b && b % 2 == 0`

vamos entender o seguinte, quando eu tenho operadores aritméticos, relacionais e lógicos na mesma expressão, olha a ordem que é feita. *primeira vou fazer todos os operadores __aritméticos__ depois vou fazer os operadores __relacionais__ e depois os operadores __lógicos__.*

E por acaso numa mesma expressão eu tiver um __"e"__, um __"ou"__ e um __"não"__, a ordem de execução é sempre essa, <br> primeiro o __"não" `!`__, <br> depois o __"e" `&&`__, <br> e por ultimo __"ou" `||`__.

<a href="https://www.youtube.com/watch?v=BP63NhITvao&ab_channel=CursoemV%C3%ADdeo">mais exemplos no (minuto 16:56)</a>

<hr>

Operadores (**Ternário**)

`?`
`:`

operadores ternário é composto por dois símbolos que aparecem na mesma expressão, a interrogação **?** e os dois pontos **:**. ele se chama ternário porque tem três partes. Dá uma olhada nos blocos que aparecem aqui embaixo.

**teste `?` true `:` false**


esses três blocos são os blocos de teste, o bloco verdaeiro e o bloco false. È por isso, que esse operador se chama ternário, porque juna três operandos.

<a href="https://www.youtube.com/watch?v=BP63NhITvao&ab_channel=CursoemV%C3%ADdeo">mais exemplos no (minuto 19:15)</a>

<hr>

Aula 9 - Entendendo o *DOM*

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

<a href="https://www.youtube.com/watch?v=WWZX8RWLxIk&ab_channel=CursoemV%C3%ADdeo">Complemento (minuto 10:08)</a>

<hr>

(Selecionar elementos no Dom)

 dentro da ávore Dom exitem vários métos para isso, alguns exemplo deles

**por Marca** <br>
em primeiro lugar vamos como selecionar por *Marca* ou *tag name*
`getElementsByTagName()`

<a href="https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementsByTagName">Exemplo: getElementsByTagName </a>

**por ID** <br>
`getElementById()`

<a href="https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementById">Exemplos: getElementById</a>

**por Nome** <br>
se eu tenho uma propriedade name então vou utilizar o **getElementsByName**, pecebe aqui que ele tem o **s** no plura, então eu preciso usar o colchete [ ], quando eu tenho mais de um objeto da mesma *classe* ou *Nome* eu vou usar muito **por marca** e tabem por <br>
`getElementsByName`



<a href="https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementsByName"> Exemplos: getElementsByName</a>


**por Classe** <br>
`getElementsByClassName`

<a href="https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementsByClassName">Exemplo: getElementsByClassName</a>

**por Seletor** <br>
`querySelector()`


<a href="https://developer.mozilla.org/pt-BR/docs/Web/API/Document/querySelector">Exemplos: querySelector</a>

<hr>

Aula 10 - Eventos *Dom*

<a href="https://www.youtube.com/watch?v=wWnBB-mZIvY"> exemplo de forma visual em (minuto 06:26):</a>

evento é tudos aquilo que possa acontecer com qualquer elemento, mas no nosso exemplo essa **div** e se você começar a analisar, o que pode acontecer com essa **div** um monte de coisas, o mais comum: *eventos de mouse, então eu posso por exemplo chegar com curso do mouse e mover o mouse até encostar, até chegar dentro da* **div**, quando chega o mouse dentro da **div** vai disparar um evento o **mouseenter** que o mouse entrou na **div**, 

<br>outra coisa que eu posso fazer é continuar movendo o mouse por dentro da **div**. Nesse momento ver ser disparado várias vezes o método **mousemove**, que enquanto tiver movendo dentro da **div** ele vai disparar o evento **mousemove**.

<br> se eu pegar o mouse e clicar e segurar, eu tenho o disparo do **mousedown**, no momento em que eu soltar o botão do mouse eu disparo outro evento o **mouseup**, 

<br>eu também tem o movimento do click inteiro, apertar e solta rapidamente eu tenho o evento **click** e da mesma maneira que com o **mouseenter**, quando eu mover o mouse para fora dessa **div** ele vai disparar evento **mouseout**. Então olha só a gente viu seis métodos, seis eventos que podem ser disparados só com o movimento do mouse, existem outros esses não são os únicos e se por acaso você dá uma pesquisa nos eventos que podem acontecer dentro de elementos em javascript 

<a href="https://developer.mozilla.org/pt-BR/docs/Web/Events">Event reference em developer mozilla:</a>

Só como curiosidade, agora com o eventos dos celulares, você tem os **"Touch events"** que sâo diferentes dos **Mouse events**

<a href="https://developer.mozilla.org/pt-BR/docs/Web/API/Touch_events">Touch events em developer mozilla:</a>

porem para disparar um evento, para tratar um evento, eu preciso te explicar antes o que é uma função ou uma funcionalidade.


<hr>

- *Função*

Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.

Então por exemplo: eu vou programa dez linhas, essas dez linhas a gente chama de bloco, então imagina que esse bloco tivesse 10 linhas, essas 10 linhas não vão ser executados auomaticamente, o primeiro passa é colocar lá dentro de um bloco, um bloco em JavaScript ele é delimitado entre os sinais de chavas **{ }**, esse bloco você tem que nomear ele como uma **function** que quer dizer função antes do bloco assim 

```
function  {
  bloco de códico aqui
}

```

no JavaScript exite isso aqui: **função anônima**, é uma função que simplesmente não tem nome, só que para o método possa funcionar, _eu tenho que dar um nome para essa função e geralmente os nomes das funções são_ **ações** que nós podemos fazer, 

```
function açães() {
  bloco de códico aqui
}

```

geralmente funçôes de evento, eles são nomes de açâo, você vai colocar o nome da **ação** que vai acontecer e fecha parênteses. 

e opcionalmente voê pode também colocar dentro desses *parênteses* alguns **parâmetros**, pode ser um, ou pode ser vários **parâmetros**

```
function açães(parâmetros) {
  bloco de códico aqui
}

```

<a href="https://www.youtube.com/watch?v=wWnBB-mZIvY"> exemplo de forma visual em (minuto 10:43):</a>



<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions">Funções em developer mozilla:</a>

