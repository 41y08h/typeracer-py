(() => {
  const copyToClipboard = (str) => {
    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  const participants = document.querySelector(".scoreboard").childElementCount;
  const paragraph = document
    .querySelectorAll("td[align=left]")
    [9 + participants * 2 + 1 + 1].querySelector("td>div>div").innerText;

  console.log(paragraph);
  copyToClipboard(paragraph);
})();
