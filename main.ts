let a = 0
let c = 0
basic.forever(function () {
    a = randint(0, 4)
    c = randint(0, 4)
    led.plot(a, c)
    basic.pause(1000)
    if (a == 2 && c == 2) {
        basic.showString("Cahan")
    }
    led.unplot(a, c)
})
