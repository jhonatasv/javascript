# Primeiros passos com JS.

<h2>Módulo A</h2>


---
na primeira aula apredemos que os scripts JS devem ser incluídos no final do corpo do documento __HTML__,<br>
posicionando a tag  `<script></script>` logo acima da tag de fechamento `</body>`

Nosso Primiero comando é

` window.alert('Olá, Mundo!')`


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

 `alert('a soma dos Números é, ' + String(soma))`


Todo objeto possui um método `.toString()`  que é chamado automaticamente quando o objeto precisa ser representado como um valor em texto ou quando o objeto é referenciado de uma maneira que requeira uma string. Por padrão, o método toString() é herdado de todo objeto descendente de  Object. Se e o método não é sobrescrito em um objeto personalizado, toString() retorna "[object type]", onde type é o tipo do objeto. O código a seguir ilustra isso:


`var o = new Object();
o.toString();           // retorna [object Object]`


<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/ToString">Mais Exemplo em developer mozilla</a>


<hr>

(Template strings)

Dentro de uma __Template strings__ podemos usar __placeholders__ no seu interior. um placeholder é representado pelos símbolos `${}` e podem ser usados para facilitar a exibição de conteúdos de variáveis ou expressões.

(com __Template strings__) <br>

`alert(crases A soma enter é,  ${soma}crases)`

(sem) <br>

`alert('a soma dos Números é, ' +(soma))`

<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals">Exemplo em developer mozilla</a>

---

(Formatando Números)

`toFixed()`

exemplo sem __toFixed()__

`var n1 = 1545.5, Resultando  n1 1545.5` <br>

exemplo com __toFixed()__
nesse segundo exemplo vemos que foi adicionado a segunda casa decimal ao (50)

`n1.toFixed(2),  Resultando n1 1545.50` <br>

---

como troca
caracteres determinado como exemplo o ponto por virgula com  `replace()`

`n1.toFixed(2).replace('.', ',')`
`Resultando 1545,50`


O método __replace()__ retorna uma nova string com ou como correspondência de um ou todas as alterações padrão por um caractere determinado (). O padrão pode ser uma string ou uma RegExp, a substituição pode ser uma string ou uma função a ser chamada para cada correspondência. Se o padrão for, apenas a primeira vez será alterado.

A string original não é modificada.

---

<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace">Mais exemplos em developer mozilla</a>


O método `toLocaleString()` retorna uma string com uma representação sensível a linguagem deste número.

(exemplos)

n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

Resultando 'R$ 1,545.50'

__pt-BR__ segnificar eu quero localizar para o Brasil, <br>
o __Style__ _currency_ Segnificar dinheiro/Moeda e o <br> segundo __currency__ Segnificar se vai ser _REAl do Brasil_



(como converter em Dolares)

n1.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})

Resultando 'US$ 1,545.50'

No __node__ ele não faz a inversão da vígula e o ponto mas no Navegador ele faz corretamente

<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString">Mais exemplos em developer mozilla</a>

---

Aula 7 - tratramento de dados

Opedadores logicos

Aritméticos

Esses são todos os operadores aritméticos da linguagem **JavaScript**

**(+)** <br>
**(-)** <br>
**(*)** <br>
**(/)** <br>
**(%)** <br>
__(**)__



para exemplificar, esses são os operandos que são aquele que vão fazer os operadores funcionarem. todos esses oparadores aqui são operadores que a gente chama de binários, são operadores que precisam de **2 operandos.** <br>

5 (+) 2 <br>
5 (-) 2 <br>
5 (*) 2 <br>
5 (/) 2 <br>
5 (%) 2 <br>
5 (**) 2

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

<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_aritmeticos">saiba mais em developer mozilla</a>


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


em vez de fazer <br>5 + 3 = *8* <br>
8 / 2 = *4*, ele na verdade faz primeiro o <br>3 / 2 = *1.5*, <br>
5 + 1.5 = *6.5* <br>
que é o resultado

<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operator_Precedence">saiba mais em developer mozilla</a>


se você quise fazer <br>**5 + 3 / 2**, e eu quero fazer *5 + 3* primeiro e depois dividir por dois, Nesse caso é só você colocar parêntenses extamente como a matemática faz <br>(5 + 3) / 2 <br>
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
`var d = 10 - a / 2` <br> (8/2 = 4) (10-4 =6) R=6 <br>
`var e =  6 * 2 / d` <br> (6 * 2 = 12) (12/6 = 2 ) R=**2** <br>
`var f =  b % e + 4 /e` <br> (3 * 2 = 1,5 ) (4/2 = 3) (1 + 2 = 3)  R=**3**<br>


---
(Auto-atribuiçôes)

São atribuicôes á própria variável, por exemplo,
Criei uma atruibuição simples,

`var n = 3`

se na próxima linha eu fiz <br> `n = n + 4` <br>
agora vou somar o que está depois do recebe, vou soma **n + 4**
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

`n = n ** 4` /  `n**=5` <br>
exponenciação

`n = n % 5` /  `n*=5` <br>
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

 então, exite um simplicador ainda maior que é o **operador de incremento** e eu posso simplificar **x +=1**, que já estava simplificado, para **x ++**, o mesmo acontece com o **-=1** e eu posso simplificar para **x--**

 (Simplificação ainda maior) <br>
`x = x + 1` / `x ++` <br>

`x = x - 1` / `x --`
