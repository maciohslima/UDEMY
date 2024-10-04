"""
Formatação de Strings com fstrings
"""

variavel = "ABC"
print(f'{variavel}')
print(f"{variavel: >10}.")
print(f"{variavel: <10}.")
print(f'{variavel: ^10}.')
print(f'{1000.46573568:0=+10,.1f}')
print(f'O Hexadecimal de {1500} é {1500:08X}')
print(f'{variavel!r}')
