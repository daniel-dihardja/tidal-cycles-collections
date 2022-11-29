s0.initImage('http://localhost:8080/pixel-03.png')
src(o0)
  .layer(src(o0).rotate(.005).scale(1.01))
  .layer(
    src(s0)
      .contrast(3)
      .scale(() => 0.7+a.fft[0]*0.2)
      .scrollX(.1, .1)
      // .thresh(.5)
    )
  .kaleid([1,2,3])
  // .colorama(1)
  .mask(shape(4, .98).repeat(4))
  // .invert()
  // .brightness(1)
  // .modulateScale(src(o0), .1, .9)
  .hue(.9)
  //.modulatePixelate(src(o0), 100)
  //.invert()
  //.r()
  .out()

hush()