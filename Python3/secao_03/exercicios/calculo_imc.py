nome = input(str('Informe seu nome: '))
altura = float(input('Informe sua altura: '))
peso = float(input('Informe seu peso: '))

imc = int(peso / altura ** 2)
# print(
#     'Olá {}, de acordo com os dados de peso e altura seu IMC é de: {}'.format(nome, imc)
#     )

print(
    '{} tem {:.2f} metros de altura, pesa {:.2f} quilos e seu IMC é {:.2f}'.format(nome, altura, peso, imc)
)