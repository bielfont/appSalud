class Persona():
    def __init__(self, dni, nom) -> None:
        self.dni = dni
        self.nom = nom

    def __str__(self) -> str:
        return f'Persona {self.nom} amd Dni {self.dni}'
        

p1 = Persona("000000A", "Test")
p2 = Persona("0000000B", "Test2")

print (p1)
print (p1.dni)