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
 Aula 5 - Variáveis e tipos Primitivos

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


<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/ToString">Mais Exemplo</a>


<hr>

(Template strings)

Dentro de uma __Template strings__ podemos usar __placeholders__ no seu interior. um placeholder é representado pelos símbolos `${}` e podem ser usados para facilitar a exibição de conteúdos de variáveis ou expressões.

(com __Template strings__) <br>

`alert(crases A soma enter é,  ${soma}crases)`

(sem) <br>

`alert('a soma dos Números é, ' +(soma))`

<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals">Exemplo</a>
