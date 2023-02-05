---
title: "Var, let y const en javascript"
description: "Un post para aclarar las dudas al declarar variables en javascript"
pubDate: "Febrero 04 2023"
heroImage: "/variables.webp"
---

Una de las preguntas que más se hacen los principiantes al momento de empezar a tocar
el tema de declarar variables en javascript es en que se diferencian las 'keywords' reservadas
para ello, en total en javascript tenemos 3 formas de declarar variables:

- `var`
- `let`
- `const`

Vamos a verlas una a una:

### Var

Esta es la que usualmente se aprende y es la manera mas antigua de declarar variables en javascript,
antes de la llegada de Ecmascript 6, esta era la forma que reinaba.

Para entender las diferencias, es preciso conocer el 'scope' o ambito donde se encuentran disponibles
las variables, en concreto el ambito de `var` es global para variables declaradas por fuera de una función
y local para las que son declaradas dentro de una.

Tomemos por ejemplo estas dos variables

~~~
var saludo = "hola"


function saludar () {
    var miSaludo = "Hola mundo!"
}
~~~

si intentamos hacer un console.log() para imprimir la primera variable por fuera de la función, la imprimirá sin problemas, sin embargo si hacemos lo mismo con la segunda nos arrojaría un error, ya que esa variable está
solamente disponible dentro de la función.

~~~
var saludo = "hola"


function saludar () {
    var miSaludo = "Hola mundo!"
}

console.log(saludo) // -> hola
console.log(miSaludo) //-> Uncaught ReferenceError: miSaludo is not defined
~~~

las variables declaradas con `var` también se pueden redeclarar es decir, esto está permitido:

~~~
var saludo = "hola"
var saludo = "buenos días"
~~~

al igual que esto:

~~~
var saludo = "hola"
saludo = "buenos días"
~~~

### Let

let es preferible actualmente para la declaración de variables, esto es así por que
resuelve un problema que teníamos con `var`: `var` tiene ambito de función pero no de bloque,
es decir, que podemos acceder a una variable dentro de un bloque por ejemplo de un condicional
'if', lo que nos puede ocasionar algunos problemas:

~~~
if(true){
   var saludo = "buenos días"
}

console.log(saludo) //-> buenos días
~~~

Esto con `let` no se puede hacer, nos da error de variable no definida:

~~~
if(true){
    let saludo = "buenos días"
}

console.log(saludo) //-> Uncaught ReferenceError: saludo is not defined
~~~

Además `let` a diferencia de `var`, no permite redeclarar una variable, aunque si permite cambiar su valor:

~~~
let miSaludo = 'hola'
let miSaludo = 'buenas tardes' //-> incluso nos señalara un error directamente en el editor: miSaludo has already been declared
~~~


Cambiar el valor si esta permitido:
~~~
let miSaludo = 'hola'
miSaludo = 'buenas tardes'
~~~


### Const

Por último tenemos a `const`, este funciona de manera muy similar a `let`, en cuanto a que tambien tiene
ambito de bloque y no se puede re declarar, pero tiene una gran diferencia: no se les puede cambiar
el valor a las variables, de allí su nombre: `const` de constant:

~~~
const miSaludo = 'hola'
// incluso nos señalara un error directamente en un editor de codigo como visual studio code
miSaludo = 'buenas tardes' // -> Uncaught TypeError: Assignment to constant variable.
~~~

Con esto llegamos al final, espero haber despejado dudas acerca de las diferentes maneras de declarar
variables en Javascript 😃.