


speed = 0.3

s0.initImage('https://pngimg.com/uploads/peacock/peacock_PNG40.png')
// s0.initImage('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fmonkey%2Fmonkey_PNG18728.png&f=1&nofb=1')
src(o0)
  .layer(src(o0).scale(1.01).contrast(2))
  .layer(
    src(s0)
    .scale(()=> 2)
    .hue(.3)
    // .color(0,0,1)
    .contrast(3)
    // .luma(.02)
    // .invert()
    // .rotate(.1, .5)
    .scrollX(.1, .2)
    // .scrollY(.1, -.1)
  )
  // .mask(shape(4, .99).repeat(4,4))
  // .kaleid([1,3])
  // .modulateHue(src(o0), 2, 1)
  // .scrollX(.1, .01)
  // .scrollY(.1, -.1)
  // .b()
  // .invert()
  // .rotate(.3)
  // .modulatePixelate(src(o0), 500, 50)
  .out()

  hush()



  s0.initImage('https://pngimg.com/uploads/peacock/peacock_PNG40.png')
  src(o0)
    .layer(src(o0).scale(1.01).contrast(2))
    .layer(
      src(s0)
      .scale(()=> 0.5)
      .contrast(2)
      .kaleid(2)
      .scrollX(.1, .2)
    )
    .out()


hush()

a.show()

s0.initImage('https://www.clipartmax.com/png/middle/36-366952_piq-338466-tv-pixel-art-png.png')
src(o0)
  .layer(src(o0).scale(() => a.fft[0]*0.2).contrast(2))
  .layer(
    src(s0)
    .scale(()=> 0.5)
    .contrast(2)
    .scrollX(.1, .2)
  )
  .out()


bpm=140

speed = 0.5


hush()


    s0.initImage('https://pngimg.com/uploads/peacock/peacock_PNG40.png')
    src(o0)
      .layer(src(o0).scale(1.01))
      .layer(src(s0).scale([.5, .7, 1.2, 2]).contrast(3).brightness(.5).scrollX(.1, .1))
      .out()
