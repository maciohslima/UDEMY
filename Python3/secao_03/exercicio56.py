# Exércicio 56
"""
    Faça um programa que pergunte a hora ao usuário e, com base no horário
    descrito, exiba a saudação apropriada. Ex.:
     - Entre 00h e 11h = Bom dia!
     - Entre 12h e 17h = Boa tarde!
     - Entre 18h e 23h = Boa noite!
"""

# hora_atual = input('Insira a hora atual (formato 24h): ')
# hora_atual_int = int(hora_atual)

# if hora_atual.isdigit:
#     if hora_atual_int >= 00 and hora_atual_int <= 11:
#         print(f'A hora atual é de {hora_atual_int}h. Bom dia!')
#     elif hora_atual_int >= 12 and hora_atual_int <= 17:
#         print(f'A hora atual é de {hora_atual_int}h. Boa tarde!')
#     if hora_atual_int >= 18 and hora_atual_int <= 23:
#         print(f'A hora atual é de {hora_atual_int}h. Boa noite!')
#     else:
#         print('Formato de hora inválido!')
# print(type(hora_atual), type(hora_atual_int))

# Forma 2

# entrada = input('Insira a hora em números inteiros: ')

# try:
#     hora = int(entrada)

#     if hora >= 00 and hora <= 11:
#         print(f'A hora digitada foi {hora}h. Bom dia!')
#     elif hora >= 12 and hora <= 17:
#         print(f'A hora digitada foi {hora}h. Boa tarde!')
#     elif hora >= 18 and hora <= 23:
#         print(f'A hora digitada foi {hora}h. Boa noite!')
#     else:
#         print('Hora inválida!')
# except:
#         print('Por favor digite apenas números inteiros entre 00 e 23!')

## Usando hora do sistema

import time


entrada = time.localtime().tm_hour
hora_min = time.localtime().tm_min
# print(entrada)

try:
    if int(entrada) >= 00 and int(entrada) <= 11:
        print(f'Hora atual: {entrada}h:{hora_min}m.\nBom dia!')
    elif int(entrada) >= 12 and int(entrada) <= 17:
        print(f'Hora atual: {entrada}h:{hora_min}m.\nBoa tarde!')
    elif int(entrada) >= 18 and int(entrada) <= 23:
        print(f'Hora atual: {entrada}h:{hora_min}m.\nBoa noite!')
    else:
        print('Não foi possível determinar a hora do sistema')
except:
        print('Hora do sistema inválida, favor verificar...')