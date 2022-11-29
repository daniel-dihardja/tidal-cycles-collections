
a.show()

a.hide()

s0.initImage("http://pentaxians.eu/forumimages/2015/3341/3341_2015040954_braunkohlekraftwerkthierbach-1.jpg")
s1.initImage("https://i.pinimg.com/originals/e5/b4/3e/e5b43ed4e94edc3cc86a6b308f318371.jpg")
s2.initImage("https://marodes.de/wp-content/uploads/2014/06/phoca_thumb_l_mlw-medizin-labortechnik-1.jpg")


src(o0)
  // .layer(osc([100, 160, 80, 40],-.02, 0).kaleid(10).color(.7,.7,.6).luma(.7).contrast(2).modulate(noise(2, .1)).scale(()=> 1 + a.fft[0]*0.5))
  .layer(src(s2).color(1, .6 , .6).hue(.5).luma().contrast(2).scale(()=> 1 + a.fft[0]*0.2).scrollX(0.01, 0.005).scrollY(.01, -.01))
  .layer(src(s1).hue(.9).luma(.1).contrast(1.5).scrollX(0.2, -0.01))
  .out(o0)


hush()
