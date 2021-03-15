let Distancia = 0
basic.forever(function () {
    Distancia = k_Bit.ultra()
})
basic.forever(function () {
    if (Distancia < 10) {
        k_Bit.carStop()
        basic.pause(2000)
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, 51)
        basic.pause(500)
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 52)
        basic.pause(500)
        k_Bit.run(DIR.RunForward, 63)
        basic.pause(5000)
    } else {
        k_Bit.run(DIR.RunForward, 52)
    }
})
