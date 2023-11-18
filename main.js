let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #cd508a;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #fb4993;">Estudio programación y me encanta la tecnologia.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
