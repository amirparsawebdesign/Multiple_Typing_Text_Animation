const text = document.querySelector(".second_text");

const textLoad = () => {
      setTimeout(() => {
            text.textContent = "YouTuber";
            console.log(text.textContent);
      }, 0);
      setTimeout(() => {
            text.textContent = "Developer";
            console.log(text.textContent);
      }, 4000);
      setTimeout(() => {
            text.textContent = "Blogger";
            console.log(text.textContent);
      }, 8000);
};

textLoad();
setInterval(textLoad, 12000)