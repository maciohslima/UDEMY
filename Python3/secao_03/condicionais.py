#Estruturas condicionais em Python

#Entradas de usuário
nome = input('Informe seu nome: ')
idade = input('Qual sua idade: ')

#Condicional de idade
maior_de_idade = int(idade) >= 18

#Estrutura de condição
if maior_de_idade == True:
    print(f'Olá {nome}!\nDe acordo com sua idade informada de {idade} anos você pode beber cerveja!')
else:
    print(f'Olá {nome}\nDe acordo com sua idade de {idade} anos você não pode beber cerveja!')