s0.initImage('http://127.0.0.1:8080/psycloud.png')
src(o0)
  .layer(src(o0).scale(1.01))
  .layer(src(s0).scale(() => .5 + a.fft[0]*.2).luma(.2).contrast(3))
  .kaleid(2)
  // .contrast(2)
  .invert()
  // .scrollX(.1, .1)
  .out()


hush()
