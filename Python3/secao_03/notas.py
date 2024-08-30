# Notas de aulas Python
# Criado em 30/08/2024
# @author maciohslima

# Aula 53 - Flags, is, is not, None

# condicao = True
# passou_no_if = None

# if condicao:
#     passou_no_if = True
#     print('Faça algo')
# else:
#     print('Não faça algo')


# if passou_no_if is None:
#     print('Não passou no if')

# if passou_no_if is not None:
#     print('Passou no if...')



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

"""
Faça um programa que pergunte a hora ao usuário e, baeando-se no horário descrito,
exiba a saudação apropriada. Ex.:
Bom dia 0-11, Boa tarde 12-17, Boa noite 18-23.
"""

"""
Faça um programa que peça o primeiro nome do usuário. Se o nome tiver 4 letras ou menos
escreva "Seu nome é curto"; Se tiver entre 5 e seis letras, escreva
"Seu nome é normal"; maior que 6 letras escreva "Seu nome é grande".
"""