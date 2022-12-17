pb.setName("myGraphics")

s0.initImage('http://localhost:8081/fish-01.png')
src(o0)
  .layer(src(o0).scale(.99))
  .layer(src(s0).scale(()=> 0.3 + a.fft[0]*0.02).repeat(1,1))
  .contrast(3)
  .color(.7,.9,.1)
  // .invert(.1)
  .contrast(2.5)
  .scale(1)
  .kaleid(1)
  .scrollX(.2, .1)
  .scrollY(.5)
  .out(o0)

hush()



s0.initImage('http://localhost:8081/fish-01.png')
src(o0)
  .layer(src(o0).scale(.99))
  .layer(src(s0).scale(()=> .7 + a.fft[0]*0.02).repeat(1,1))
  .contrast(3)
  .color(.1,.8,.9)
  // .invert(.1)
  .contrast(2.5)
  .scale(1)
  // .rotate(.2,.1)
  .kaleid(1)
  .scrollX(.2, .01)
  .out(o0)



hush()


  s0.initImage('http://localhost:8080/fish-01.png')
  src(o0)
    .layer(src(o0).scale(.99))
    .layer(src(s0).scale(()=> 0.5 + a.fft[0]*0.05).repeat(2,2))
    .contrast(3)
    .color(.2,.7,.1)
    // .invert(.1)
    .contrast(2.5)
    .scale(1)
    .kaleid(1)
    .scrollX(.1, .01)
    .out(o0)


speed = 0.5

bpm =140

hush()

    s0.initImage('http://localhost:8080/fish-01.png')
    src(o0)
      .layer(src(o0))
      .layer(src(s0).scale(()=> 0.8 + a.fft[0]*0.05).repeat(2,2))
      .contrast(3)
      .color(.4,.7,.1)
      // .invert(.1)
      .contrast(2.5)
      .scale(1)
      .kaleid(1)
      .scrollX(.05, .04)
      .out(o0)









      s0.initImage('http://localhost:8080/fish-01.png')
      src(o0)
        .layer(src(o0).scale(1.01).scrollX(.1, .05))
        .layer(src(s0).scale(()=> 0.8 + a.fft[0]*0.05).repeat(2,2))
        .contrast(3)
        .color(.1,.2,.9)
        .invert(.1)
        .contrast(2.5)
        .scale(1)
        .kaleid(1)
        // .r()
        // .scrollX(.1, .01)
        .out(o0)

bpm = 140

speed = 2

s0.initImage('http://localhost:8080/fish-01.png')
src(o0)
  .layer(src(o0).scale(1.01).rotate(.002))
  .layer(src(s0).scale(()=> 0.5 + a.fft[0]*0.02))
  .contrast(3)
  .color(.9,.7,.3)
  // .invert(.1)
  .contrast(2.5)
  .scale(1)
  // .kaleid(3)
  // .scrollX(.1, .01)
  // .modulatePixelate(src(o0), 10, 10)
  .out(o0)


hush()

a.hide()





a.show()






s0.initImage('http://localhost:8080/fish-01.png')
src(o0)
  .layer(src(o0).rotate(.002).scrollY(.001).scrollX(-.001))
  .layer(src(s0).scale(1, -1).scale(()=> 0.7 + a.fft[0]*0.01).repeat(2,2))
  .contrast(3)
  .color(.2,.9,.6)
  // .invert(.1)
  .contrast(2.5)
  .scale(1)
  .kaleid(1)
  // .scrollX(.1, .01)
  // .modulatePixelate(src(o0), 10, 10)
  .out(o0)

hush()



s0.initImage('http://localhost:8080/pixel-01.png')
src(s0)
  .layer(src(o0).scale(1.01).scrollX(.01))
  .layer(src(s0).scale(()=> 0.9 + a.fft[0]*0.01))
  .contrast(3)
  .hue(.9)
  // .color(.2,.9,.6)
  // .invert(.1)
  // .contrast(2.5)
  // .scale(1)
  .kaleid(3)
  .scrollX(.1, .05)
  // .modulatePixelate(src(o0), 100, 100)
  .out(o0)

hush()








s0.initImage('http://localhost:8080/fish-01.png')
src(o0)
.layer(src(o0).scale(1.01))
.layer(
  src(s0)
    .scale(() => 0.9 + a.fft[0]* 0.1)
    // .luma(.1)
    // .invert(.1)
    // .shift(.5)
    .kaleid([3, 5, 7])
    // .modulatePixelate(src(o0), [150, 500, 1000])
    .rotate(.1, .05)
    .contrast(1.5)
    // .scrollX(.5, .02)
    .scrollY(.5)
  )
  // .modulatePixelate(src(o0), [150, 500, 1000])
// .r()
.out(o0)

hush()

a.hide()







hush()



speed=0.1

s0.initImage('http://localhost:8081/pixel-01.png')
src(o0)
.layer(src(o0).scale(1.002).brightness(-.0005))
.layer(
  src(s0)
    .scale(() => 0.9 + a.fft[0]* 0.1)
    // .luma(.02)
    .invert(.1)
    // .brightness(-.5)
    // .shift(.5)
    .kaleid([3, 5, 7])
    // .modulatePixelate(src(o0), [150, 500, 1000])
    .rotate(.1, .05)
    .contrast(1.5)
    .scrollX(.5)
    .scrollY(.5)
  )
  .modulatePixelate(src(o0), [150, 500, 1000])
.out(o0)


a.hide()

hush()

a.hide()

speed=0.2

s0.initImage('http://localhost:8081/pixel-04.png')
src(o0)
.layer(src(o0).scale(1.2).scrollY(-.005))
.layer(
  src(s0)
    .scale(() => 0.3 + a.fft[0]* 0.1)
    // .luma(.02)
    // .invert(.1)
    // .brightness(-.5)
    // .shift(.5)
    .kaleid(3)
    // .modulatePixelate(src(o0), [150, 500, 1000])
    .rotate(.1, .05)
    .contrast(1.5)
    .scrollX(.5)
    // .scrollY(.5, .02)
  )
  // .modulatePixelate(src(o0), [150, 500, 1000])
.out(o0)


hush()

speed = 0.3

s0.initImage('http://localhost:8081/bird-03.png')
src(o0)
  .layer(src(o0).scale(1.001).rotate(.005))
  .layer(src(s0).scale(.4).scrollX(.1, .1).contrast(2))
  .kaleid([1, 3])
  //.invert()
  .scrollY(.5)
  // .rotate(.1, .1)
  // .modulatePixelate(src(o0), 100, 100)
  .out(o0)



hush()


  s0.initImage('http://localhost:8081/bird-04.png')
  src(o0)
    .layer(src(o0).scale(1.001).rotate(.002).modulatePixelate(src(o0)))
    .layer(src(s0).scale(()=> 0.5 + a.fft[0]*0.2).rotate(.1, .2).scrollX(.1, .1).contrast(2))
    .kaleid(1)
    .invert(.1)
    // .scrollY(.1, .1)
    // .rotate(.1, .1)
    // .modulatePixelate(src(o0), 100, 100)
    .out(o0)

a.hide()

s0.initImage('http://localhost:8081/bird-04.png')
src(o0)
  .layer(src(o0).scale(0.99).scrollX(.001))
  .layer(src(s0).scale(.7).contrast(2).rotate(.1, .1).scrollX(.1, .05).kaleid(1))
  .contrast(2)
  .kaleid(3)
  //.r()
  .rotate(()=> a.fft[0]*0.9)
  //.invert()
  .out()

hush()

a.show()



s0.initImage('http://localhost:8081/insect-01.png')
src(shape(4,1))
  //.layer(src(o0).scale(1.01).rotate(.01))
  .layer(src(s0).scale(()=> 0.8 + a.fft[0]*0.2).contrast(2))
  .modulatePixelate(src(o0), 100, 100)
  //.color(.9, .6, .9)
  //.kaleid([1,2])
  //.scrollX(.2, .1)
  .rotate(.5)
  .out()


hush()


// base pattern

speed=0.2

a.hide()

hush()

a.hide()

a.show()


s0.initImage('http://localhost:8081/pixel-03.png')
src(o0)
  .layer(src(o0).rotate(.005).scale(1.01))
  .layer(
    src(s0)
      .contrast(2)
      .scale(() => 0.5+a.fft[0]*0.5)
      .scrollX(.1, .1)
      // .thresh(.5)
    )
  .kaleid([1,2,3])
  // .colorama(1)
  .mask(shape(4, .98).repeat(4))
  // .invert()
  // .brightness(1)
  //.modulateScale(src(o0), .9, .9)
  .hue(.3)
  //.modulatePixelate(src(o0), 100).invert()
  //.r()
  .out()

hush()



a.show()

a.hide()

speed=0.5

a.show()

a.hide()

hush()

s0.initImage('http://localhost:8080/cover.jpg')
src(s0)
  .layer(src(o0).scale(1.01).rotate(.005))
  .layer(
    src(s0)
    .scale(() => 0.3+a.fft[0]*0.1)
    .contrast(1.3)
    // .invert()
     // .colorama()
    // .hue([.6, .1, .9])
    .kaleid([2,4,6])
    .scrollX([.01, .02, .03], [.01, .02, .03])
  )
.out()


s0.initImage('http://localhost:8080/cover.jpg')
src(s0)
  .layer(src(o0).scale(1.02).rotate(.001))
  .layer(
    src(s0)
    .scale(()=> 0.2 + a.fft[0]*.2)
    .contrast(1.5)
    // .luma(.05)
     .kaleid([1,2,3,5])
    .scrollX(.1, -.1)
    .mask(shape(1,.3))
    .rotate(.3, -.1)
  )
.out()



s0.initImage('http://localhost:8080/cover.jpg')
src(s0)
  .layer(src(o0).scale(1.02).rotate(.01))
  .layer(
    src(s0)
    .scale(()=> 0.5 + a.fft[0]*.3)
    // .hue([.01, .05, .2])
    .contrast([1.3, 3])
    // .luma(.05)
    // .kaleid(3)
    .scrollX(.1, .2)
    .scale([.2, .5, .3, .7])
    .rotate(0, [-.1, -.3, -.7])
  )
.out()

hush()

a.show()

s0.initImage('http://localhost:8080/tv.png')
src(s0)
  .layer(src(o0).scrollY(.0001).rotate(.001).scale(1.001).contrast(1.2))
  .layer(
    src(s0).contrast(3)
    .scale(() => 0.7 + a.fft[0]*.01)
    // .luma(.01)
    // .rotate(.1, -.2)
    // .kaleid([2,3,1])
    .mask(shape(3, .5, 0).scrollX(.1, -.02).scrollY(.1, -.1))
    .color(0,1,0)
    // .g()
    // .r()
    // .invert()
  )
.out()
