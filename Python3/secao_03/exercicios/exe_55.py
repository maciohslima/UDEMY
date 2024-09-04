# Exercícios Fixação Python

"""
Faça um programa que peça ao usuário para digitar um número inteiro,
informe se este número é par ou ímpar. Caso o usuário não digite um número inteiro,
informe que o número não é um número inteiro.
"""
entrada = input("Digite um número: ")
txt_par_impar = 'ímpar'

if entrada.isdigit():
    entrada_int = int(entrada)
    par_impar = entrada_int % 2 == 0

    if par_impar:
        txt_par_impar = 'par'

    print(f'O número {entrada_int} é {txt_par_impar}')
else:
    print('Você não digitou um número inteiro, tente novamente ...')