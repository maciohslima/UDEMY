# conversão de tipos, coerção
# type convertion, typacasting, coercion
# É o ato de converter um tipo em outro
# tipos imutáveis e primitivos
# str, int, float, bool
print(int('1'), type(int('1')))
print(float('1') + 1)

a = input('Insira um número: ')
b = input('Insira um segundo número: ')
soma = int(a) + int(b)

print("A Soma de {} + {} é igual a: {}".format(a,b,soma))