


let options = {
  threshold: 0.5,
};



let callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let valueDisplays = document.querySelectorAll(".num");
      let interval = 4000;
      valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
          startValue += 1;
          valueDisplay.textContent = startValue;
          if (startValue == endValue) {
            clearInterval(counter);
          }
        }, duration);
      });
      observer.unobserve(target)
    }
  });
};

let observer = new IntersectionObserver(callback, options);

let target = document.querySelector("#sec-f88b");
observer.observe(target);