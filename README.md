# DESAFIO DE PROGRAMAÇÃO - ACADEMIA CAPGEMINI

![center](https://capgemini.proway.com.br/assets/img/logo-capgemini.png)

Repositório dedicado ao desafio de programação Capgemini

Como executar: Extraia o projeto em uma pasta. Os códigos podem ser execudado com qualquer Browser ou IDE que suporte a execução das tecnologias HTML, CSS e JS. Ao executar o HTML abrirá uma interface escrita em HTML e CSS com as respectivas questões com input de entrada e o botão de execução chamado "Verificar" que acionará o JS para a resolução dos desafios.

Insira a entrada de teste e clique no botão "verificar" para gerar o resultado.

## Questão 1
Escreva um algoritmo que mostre na tela uma escada de tamanho n utilizando o caractere * e espaços. A base e altura da escada devem ser iguais ao valor de n. A última linha não deve conter nenhum espaço.

Entrada: n = 6 

Saída: 

```         
     *
    **
   ***
  ****
 *****
******
```


## Questão 2
Débora se inscreveu em uma rede social para se manter em contato com seus amigos. A página de cadastro exigia o preenchimento dos campos de nome e senha, porém a senha precisa ser forte. O site considera uma senha forte quando ela satisfaz os seguintes critérios:
- Possui no mínimo 6 caracteres.
- Contém no mínimo 1 digito.
- Contém no mínimo 1 letra em minúsculo.
- Contém no mínimo 1 letra em maiúsculo.
- Contém no mínimo 1 caractere especial. Os caracteres especiais são: !@#$%^&*()-+

Entrada: Ya3

Saída: 
```
3
```

Explicação: 

Ela pode tornar a senha segura adicionando 3 caracteres, por exemplo, &ab, transformando a senha em Ya3&ab. 2 caracteres não são suficientes visto que a senha precisa ter um tamanho mínimo de 6 caracteres.


## Questão 3
Duas palavras podem ser consideradas anagramas de si mesmas se as letras de uma palavra podem ser realocadas para formar a outra palavra. Dada uma string qualquer, desenvolva um algoritmo que encontre o número de pares de substrings que são anagramas.

Entrada: ovo

Saída:
```
2
```

Explicação: 

A lista de todos os anagramas pares são: [o, o], [ov, vo] que estão nas posições [[0], [2]], [[0, 1], [1, 2]] respectivamente.

Exemplo 2)
Entrada:
ifailuhkqq


Saída:
```
3
```


Explicação:
A lista de todos os anagramas pares são: [i, i], [q, q] e [ifa, fai] que estão nas posições [[0, 3]], [[8, 9]] e [[0, 1, 2], [1, 2, 3]].
