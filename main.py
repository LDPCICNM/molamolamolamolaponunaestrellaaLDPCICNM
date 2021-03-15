Distancia = 0

def on_forever():
    global Distancia
    Distancia = k_Bit.ultra()
basic.forever(on_forever)

def on_forever2():
    if True:
        pass
    else:
        pass
basic.forever(on_forever2)
