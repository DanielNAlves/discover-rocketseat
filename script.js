function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Daniel Alves sorrindo, usando óculos com armação arredondada e camisa com tonalidade preta e, barba feita."
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
