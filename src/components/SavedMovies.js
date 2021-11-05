import React from "react";
import MoviesCard from "./MoviesCard";

function SavedMovies(props) {
  return (
    <section className="cards content__cards">
      <ul className="cards__list">
        <MoviesCard id="1" name="33 слова о дизайне" duration="1ч 42м" image="https://2.downloader.disk.yandex.ru/preview/4dbb00e4019271f721af0e7710bb439a028a8e4cf9a8b470b97896373fbf25c7/inf/r3IZaOk1yLJCjwAcgdGTOotKlSMCl2SRn7HdySG9j5G9A9AEIfa9tHax7RD3sc2GRX_1I9fxXFmqrjCgLShJCQ%3D%3D?uid=325175125&filename=pic__COLOR_pic.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=325175125&tknv=v2&size=1903x969" />
        <MoviesCard id="2" name="Киноальманах «100 лет дизайна»" duration="1ч 42м" image="https://2.downloader.disk.yandex.ru/preview/6251945ced0826be99618ffe5001aba360ac78fbf106a56d7087220059243899/inf/4fo00nuGEYVgSO-gih0mu4ZotrkUocPy7ODLvyF9RqC9Kl1l-lXCUUeLcKTdx1LTyyWs1rRayD0nQ5G55jZ7OA%3D%3D?uid=325175125&filename=pic__COLOR_pic-1.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=325175125&tknv=v2&size=1903x969" />
        <MoviesCard id="3" name="В погоне за Бенкси" duration="1ч 42м" image="https://4.downloader.disk.yandex.ru/preview/c8336672240535944cc6e56e076b71120e095fc2401e611d5f723d080aef96ea/inf/pXNUqjy4AoHInwo-oKlW2BEy7oOZq5pNMxuHPv_hO6zRBSBK3ESAEV6DCEsIvytBqxpYdr9fBDLxp9Wr3PReMw%3D%3D?uid=325175125&filename=pic__COLOR_pic-2.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=325175125&tknv=v2&size=1903x969" />
      </ul>
    </section>
  )
}

export default SavedMovies;