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
# idade = input('Digite sua idade: ')

nome_invertido = nome[::-1]
primeira_letra = nome[0]
ultima_letra = nome

print(ultima_letra)