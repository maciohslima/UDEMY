
"""
Repetições
while (enquanto)
Executa uma ação enquanto uma condição for verdadeira
"""

# condicao = True

# while condicao:
#     nome = input('Qual o seu nome: ')
#     print(f'Seu nome é {nome}')
#     break

# contador = 0

# while contador <= 10:
#     print(contador)
#     contador += 1

# print('Fim do código')

contador = 0

while contador <= 100:
    contador += 1

    if contador == 6:
        print('Pula o 6...')
        continue

    if contador >= 10 and contador <= 27:
        continue

    print(contador)

    if contador == 40:
        break

print('Acabou')