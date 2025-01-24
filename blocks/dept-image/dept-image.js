import { div, img } from "../../scripts/dom-helpers.js";

export default function decorate(block) {
  const props = Array.from(block.children, (row) => row.firstElementChild);
  block.textContent = "";

  return block.appendChild(
    div(
      {
        class: "dept-image",
        style:
          "display: flex; flex-direction: column; align-items: center; justify-content: center;",
      },
      img({
        src: props[0].querySelector("picture > img").src,
        title: props[0].querySelectorAll("p")[1].textContent,
        rel: props[1].textContent,
      }),
      img({
        src: props[2].querySelector("picture > img").src,
        title: props[2].querySelectorAll("p")[1].textContent,
        rel: props[3].textContent,
      }),
      div(
        {
          class: "button-container",
        },
        props[4].querySelector("a")
      )
    )
  );
}
