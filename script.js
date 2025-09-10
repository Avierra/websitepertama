function goToBlog() {
  const hello = document.getElementById("helloPage");
  const blog = document.getElementById("blogPage");

  // mulai fade out halaman hello
  hello.style.opacity = "0";

  // setelah selesai transisi, ganti ke blog
  setTimeout(() => {
    hello.classList.remove("active");
    blog.classList.add("active");
  }, 700);
}


function goToBlog() {
  document.getElementById("helloPage").classList.remove("active");
  document.getElementById("blogPage").classList.add("active");
}

function openPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

function backToBlog() {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("blogPage").classList.add("active");
}


// Fungsi pindah ke halaman blog
function goToBlog() {
  document.getElementById("helloPage").classList.remove("active");
  document.getElementById("blogPage").classList.add("active");
}

// Fungsi generate bubble & partikel random
function createBubbles() {
  const helloPage = document.getElementById("helloPage");

  for (let i = 0; i < 10; i++) { // 10 bubble
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.style.width = bubble.style.height = `${Math.random() * 60 + 20}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${Math.random() * 6 + 6}s`;
    helloPage.appendChild(bubble);
  }

  for (let i = 0; i < 15; i++) { // 15 partikel kecil
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 4 + 3}s`;
    helloPage.appendChild(particle);
  }
}

// jalankan setelah page load
window.onload = createBubbles;


