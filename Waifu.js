let image = document.getElementById('image')


 button_Anime = () => {
  fetch("https://api.waifu.pics/sfw/waifu")
  .then(res => res.json())
  .then(result => {
    console.log(result)
    document.getElementById("url").innerHTML = result.url
    let anime_result = document.getElementById("anime_result");
    anime_result.innerHTML = `<img src="${result.url}"/>`
  })
  .catch(err => console.error(err));
}
