document.getElementById("texto").innerHTML="Nessa aula estudaremos variáveis"

//var 
//let
//const

//DECLARAÇÂO DE VARIÁVEIS

var a, b, c;

a = 4
b = 7
c = a + b;

//reatribuição de variáveis em var. Em let e const não é possível.

var a = 8
// O resultado será oitro, em vez de 4.

//Em concatenção de váriaveis, usa-se o operador de adição. Entretanto, o Java Script fará a junção das duas string. Assim, para separá-las, caso necessário, use um espaço em branco com duas aspas " " e o operador de adição ao final da primeira string e no começo da string seguinte.
    //var nome, sobrenome, nomeCompleto;
    //nome = "Antonio"
    //sobreno = "Gomes"
    //nomeCompleto = nome + " " + sobrenome
    //resutaldo ---- Antonio Gomes

    //var é universal
    
//let é uma forma de impedir a redeclaração da variável.
    //Ao contrário de var que receberá uma redeclaração mesmo dentro de um bloco de código, let não poderá ser redeclarada. 

    //O let é mais seguro para uso em funções, pois se pode definir o valor específico de uma variável que esteja fora do bloco de código. 

//const é uma constante. Uma vez que a variável tenha sido atribuída, ela será permanente, independente do bloco e do escopo do código. 