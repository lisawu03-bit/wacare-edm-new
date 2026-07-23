document.documentElement.classList.add("js-enabled");

/* ==========================================================
   只需要改這個檔案，就能更換影片與職涯連結
   ========================================================== */

/* 請填入 YouTube 影片 ID，不要貼整串網址 */
const VIDEO_IDS = {
  googleCheckup: "",
  humanitarian: "d2FtP_3Jvdk"
};


/* 載入 YouTube 影片 */
document.querySelectorAll("[data-video]").forEach((frame) => {
  const id = VIDEO_IDS[frame.dataset.video];

  if (!id) return;

  const iframe = document.createElement("iframe");
  const origin = window.location.origin;

iframe.src =
  `https://www.youtube.com/embed/${id}` +
  `?rel=0&playsinline=1&origin=${encodeURIComponent(origin)}`;
  iframe.title = "WaCare YouTube video";
  iframe.loading = "lazy";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;

  frame.innerHTML = "";
  frame.appendChild(iframe);
});


/* 自動顯示當年度 */
document.getElementById("year").textContent = new Date().getFullYear();

/* 滾動浮現動畫 */
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("in");
  });
}

/* 數字動畫 */
const counters = document.querySelectorAll("[data-count]");
let counterStarted = false;

function startCounters() {
  if (counterStarted) return;

  counterStarted = true;

  counters.forEach((element) => {
    const target = Number(element.dataset.count);
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      element.textContent = Math.floor(target * eased).toLocaleString("en-US");

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  });
}

const stats = document.querySelector(".stats-grid");

if (stats) {
  const statsObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        startCounters();
        statsObserver.disconnect();
      }
    },
    { threshold: 0.25 }
  );

  statsObserver.observe(stats);
}
