input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 F D B F D F G ", 120)
})
input.onButtonPressed(Button.B, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 9999, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
})
music.playTone(523, music.beat(BeatFraction.Breve))
