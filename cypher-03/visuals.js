speed=0.5

a.show()

s0.initImage('http://localhost:8081/pixel-03.png')
src(s0)
  .layer(src(o0).scale(1.01).rotate(.005))
  .layer(
    src(s0)
    .scale(() => 0.6+a.fft[0]*0.3)
    .contrast(3)
    //.invert()
     //.colorama()
    .hue([.6, .1, .9])
    .kaleid([2,4,6])
    .scrollX([.01, .02, .03], [.01, .02, .03])
  )
.out()

hush()
