Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Right, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
    basic.clearScreen()
    radio.sendValue("right", 0)
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Down, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
    basic.clearScreen()
    radio.sendValue("backwards", 0)
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Down, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    radio.sendValue("backwards", 1)
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
    basic.clearScreen()
    radio.sendValue("left", 0)
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Up, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    radio.sendValue("forwards", 1)
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Up, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
    basic.clearScreen()
    radio.sendValue("forwards", 0)
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Right, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    radio.sendValue("right", 1)
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    radio.sendValue("left", 1)
})
radio.setGroup(1)
