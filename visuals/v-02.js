

hush()

bpm = 140

speed = 0.5

s0.initImage('http://localhost:8080/pic.jpeg')
src(o0)
  .layer(
    src(s0)
      .scale(() => 0.8 + a.fft[0]* 0.2)
      .luma(.2)
      .invert()
      .kaleid([3, 5, 7])
      .rotate(.5, .3)
      .contrast(1.5)
      .scrollX(.1, -.01)
      .scrollY(.3)
    )
    .modulatePixelate(src(o0), [250, 500, 1000])
  .out(o0)


a.show()

a.hide()


hush()
