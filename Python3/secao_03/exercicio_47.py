"""
Exercício
Peça ao usuário para digitar seu nome
Peça ao usuário para digitar sua idade
Se nome e idade forem digitados:
    Exiba:
        Seu nome é: {nome}
        Seu nome invertido é: {nome_invertido}
        Seu nome contem (ou não) espaços
        Seu nome tem {n} letras
        A primeira letra do seu nome é: {primeira_letra}
        A última letra do seu nome é: {ultima_letra}
Se nada for digitado em nome ou idade:
    Exiba:
        "Desculpe, você deixou campos vazios..."
"""

nome = input('Digite seu nome: ')
idade = input('Digite sua idade: ')

nome_invertido = nome[::-1]
letras = len(nome)
primeira_letra = nome[0]
ultima_letra = nome[len(nome) -1]

if (nome != '' and idade != ''):
    print(f'Seu nome é {nome}!')
    print(f'Sua idade é {idade} anos...')
    print(f'Seu nome invertido é {nome_invertido}')
    print(f'Seu nome tem {letras} letras')
    print(f'A primeira letra do seu nome é {primeira_letra}')
    print(f'A última letra do seu nome é {ultima_letra}')
else:
    print('Desculpe, você deixou campos vazios...')