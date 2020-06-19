radio.setGroup(1)
basic.forever(function () {
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Up)) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . . . #
            . . # . .
            . . # . .
            `)
        radio.sendValue("forwards", 1)
    } else if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Down)) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        radio.sendValue("backwards", 1)
    } else if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Left)) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        radio.sendValue("left", 1)
    } else if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Right)) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        radio.sendValue("right", 1)
    } else {
        radio.sendValue("stop", 1)
        basic.clearScreen()
    }
})
