nome = input(str('Informe seu nome: '))
altura = float(input('Informe sua altura: '))
peso = float(input('Informe seu peso: '))

imc = int(peso / altura ** 2)
# print(
#     'Olá {}, de acordo com os dados de peso e altura seu IMC é de: {}'.format(nome, imc)
#     )

print(
    '{} tem {} de altura, pesa {} quilos e seu IMC é {}'.format(nome, altura, peso, imc)
)