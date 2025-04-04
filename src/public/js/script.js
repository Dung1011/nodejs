0; //bóng đá
function slideHorizontal(elementSlide, slideRatio) {
  elementSlide.style.transition = "all 0.5s ease-in-out";
  elementSlide.style.transform = `translateX(${slideRatio}%)`;
}

function slideVertical(elementSlide, slideRatio) {
  elementSlide.style.transition = "all 0.5s ease-in-out";
  elementSlide.style.transform = `translateY(${slideRatio}%)`;
}

function disableButton(button) {
  button.disabled = true;
  button.classList.add("hidden");
}

function enableButton(button) {
  button.disabled = false;
  button.classList.remove("hidden");
}

const sportSlidePrevBtn = document.querySelector(".schedule-button-prev");
const sportSlideNextBtn = document.querySelector(".schedule-button-next");
const sportSlide = document.querySelector(".matches");

const sportDisplaySlides = 3;
const sportSlideRatio = 100 / sportDisplaySlides;
let currentSportSlideRatio = 0;
const setCurrentSportSlideRatio = (ratio) => (currentSportSlideRatio = ratio);

const slideNextHorizontalFn = ({
  btn,
  prevBtn,
  slideElement,
  ratio,
  currentSlideRatio,
  setCurrentSlideRatio,
  min = -100,
}) => {
  enableButton(prevBtn);
  if (currentSlideRatio - ratio <= min) {
    setCurrentSlideRatio(min);
    currentSlideRatio = min;

    disableButton(btn);
  } else {
    setCurrentSlideRatio(currentSlideRatio - ratio);
    currentSlideRatio -= ratio;
  }
  slideHorizontal(slideElement, currentSlideRatio);
};
const slidePrevHorizontalFn = ({
  btn,
  nextBtn,
  slideElement,
  ratio,
  currentSlideRatio,
  setCurrentSlideRatio,
  max = 0,
}) => {
  enableButton(nextBtn);
  if (currentSlideRatio + ratio >= max) {
    setCurrentSlideRatio(max);
    currentSlideRatio = max;

    disableButton(btn);
  } else {
    setCurrentSlideRatio(currentSlideRatio + ratio);
    currentSlideRatio += ratio;
  }
  slideHorizontal(slideElement, currentSlideRatio);
};

const slideNextVerticalFn = ({
  slideElement,
  ratio,
  currentSlideRatio,
  setCurrentSlideRatio,
  min = -100,
}) => {
  if (currentSlideRatio - ratio <= min) {
    setCurrentSlideRatio(min);
    currentSlideRatio = min;
  } else {
    setCurrentSlideRatio(currentSlideRatio - ratio);
    currentSlideRatio -= ratio;
  }
  slideVertical(slideElement, currentSlideRatio);
};
const slidePrevVerticalFn = ({
  slideElement,
  ratio,
  currentSlideRatio,
  setCurrentSlideRatio,
  max = 0,
}) => {
  if (currentSlideRatio + ratio >= max) {
    setCurrentSlideRatio(max);
    currentSlideRatio = max;
  } else {
    setCurrentSlideRatio(currentSlideRatio + ratio);
    currentSlideRatio += ratio;
  }
  slideVertical(slideElement, currentSlideRatio);
};

disableButton(sportSlidePrevBtn);

sportSlideNextBtn.addEventListener("click", () => {
  slideNextHorizontalFn({
    btn: sportSlideNextBtn,
    prevBtn: sportSlidePrevBtn,
    slideElement: sportSlide,
    ratio: sportSlideRatio,
    currentSlideRatio: currentSportSlideRatio,
    setCurrentSlideRatio: setCurrentSportSlideRatio,
  });
});

sportSlidePrevBtn.addEventListener("click", () => {
  slidePrevHorizontalFn({
    btn: sportSlidePrevBtn,
    nextBtn: sportSlideNextBtn,
    slideElement: sportSlide,
    ratio: sportSlideRatio,
    currentSlideRatio: currentSportSlideRatio,
    setCurrentSlideRatio: setCurrentSportSlideRatio,
  });
});

//ảnh
const downBtn = document.querySelector(".picture-spotlight-down-btn");
const upBtn = document.querySelector(".picture-spotlight-up-btn");
const imageContainer = document.querySelector(
  ".picture-spotlight-image-container"
);
const newContainer = document.querySelector(".new-container");

imageContainer.innerHTML += imageContainer.innerHTML;
newContainer.innerHTML += newContainer.innerHTML;

let currentIndex = 0;
let itemHeight = 480;

function updateSpotlight(index) {
  imageContainer.style.transform = `translateY(-${index * itemHeight}px)`;
  newContainer.style.transform = `translateY(-${index * 240}px)`;
}

downBtn.addEventListener("click", () => {
  currentIndex++;
  imageContainer.style.transition = "transform 0.5s ease-in-out";
  newContainer.style.transition = "transform 0.5s ease-in-out";

  updateSpotlight(currentIndex);

  if (
    currentIndex >=
    document.querySelectorAll(".picture-spotlight-image img").length / 2
  ) {
    setTimeout(() => {
      imageContainer.style.transition = "none";
      newContainer.style.transition = "none";
      currentIndex = 0;
      updateSpotlight(currentIndex);
    }, 500);
  }
});

upBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex =
      document.querySelectorAll(".picture-spotlight-image img").length / 2 - 1;
    imageContainer.style.transition = "none";
    newContainer.style.transition = "none";
    updateSpotlight(currentIndex);
  } else {
    imageContainer.style.transition = "transform 0.5s ease-in-out";
    newContainer.style.transition = "transform 0.5s ease-in-out";
  }
  updateSpotlight(currentIndex);
});
//raovat
let index = 0;
function slide(direction) {
  const container = document.getElementById("adsContainer");
  const cards = document.querySelectorAll(".ad-card");
  const totalCards = cards.length;
  const cardWidth = cards[0].offsetWidth + 10;

  index += direction;
  if (index < 0) {
    index = totalCards - 2;
  } else if (index >= totalCards - 1) {
    index = 0;
  }

  container.style.transform = `translateX(-${index * cardWidth}px)`;
}
//trượt ảnh
let position = 0;
function slide(direction) {
  const list = document.getElementById("thongtin-list");
  const container = document.querySelector(".thongtin-list-container");
  const itemWidth = 270;
  const maxScroll = list.scrollWidth - container.clientWidth;
  position += direction * itemWidth;
  position = Math.max(Math.min(position, 0), -maxScroll);
  list.style.transform = `translateX(${position}px)`;
}

//load video
function loadVideo(videoSrc, videoTitle) {
  const mainVideoPlayer = document.getElementById("main-video-player");
  const mainVideoTitle = document.getElementById("main-video-title");

  mainVideoPlayer.src = videoSrc;
  mainVideoPlayer.play();
  mainVideoTitle.textContent = videoTitle;
}

//gmail
function validateEmail() {
  let emailInput = document.getElementById("email");
  let errorMessage = document.getElementById("error-message");

  if (emailInput.value.trim() === "") {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
    alert("Đăng ký thành công!");
  }
}
//gmail
function validateEmail() {
  let emailInput = document.getElementById("email");
  let errorMessage = document.getElementById("error-message");

  emailInput.value.trim() === "";
  errorMessage.style.display = "block";
}

//render dữ liệu
async function fetchAndRenderArticles() {
  try {
    const response = await fetch("/api/articles");

    const articles = await response.json();
    articles.sort((a, b) => a.article_id - b.article_id);
    console.log("Danh sách bài viết sau khi sắp xếp:", articles);

    if (articles.length === 0) {
      document.querySelector(".main_content").innerHTML =
        "<p>Không có bài viết nào.</p>";
      return;
    }

    const mainContent1 = document.querySelector(".main_content1");
    const mainArticle = articles[0];

    mainContent1.innerHTML = `
            <div class="main_content1_img">
                <h1>
                    <img src="${mainArticle.image_url}" alt="${mainArticle.title}" />
                </h1>
            </div>
            <div class="main_content1_text">
                <h1>
                    <a href="/articles/${mainArticle.article_id}">${mainArticle.title}</a>
                </h1>
                <p>
                    <a href="/articles/${mainArticle.article_id}">${mainArticle.content}</a>
                </p>
            </div>
        `;

    const otherArticles = articles.slice(0);

    // Bài viết phụ 1 (main_content2_1)
    if (otherArticles[1]) {
      const article2_1 = otherArticles[1];
      document.querySelector(".main_content2").innerHTML += `
                <div class="main_content2_1">
                    <p>
                        <a href="/articles/${article2_1.article_id}">
                            ${article2_1.title}
                        </a>
                    </p>
                    <img src="${article2_1.image_url}" alt="${article2_1.title}" />
                </div>
            `;
    }

    // Bài viết phụ 2 (main_content2_2)
    if (otherArticles[2]) {
      const article2_2 = otherArticles[2];
      document.querySelector(".main_content2").innerHTML += `
			<div class="main_content2_2">
				<p>
					<a href="/articles/${article2_2.article_id}">
						${article2_2.title}
					</a>
				</p>
				<img src="${article2_2.image_url}" alt="${article2_2.title}" />
			</div>
		`;
    }
    if (otherArticles[3]) {
      const article2_3 = otherArticles[3];
      document.querySelector(".main_content2").innerHTML += `
			<div class ="main_content2_3">      
			  <p class="title" style="color: #a00; font-weight: bold;">${article2_3.category_name}</p>
				
					<a href="/articles/${article2_3.article_id}" style="color: #000; text-decoration: none;">
						${article2_3.title}
					</a>
				
				<p style="color: #555;">
					${article2_3.content}
				</p>
				<div style="display: flex; align-items: center; ">
					<span style="color: #000; font-style: italic;">Bùi Phú Châu</span>
					<img src="https://i1-vnexpress.vnecdn.net/2017/11/17/jessepngpng-1510857625.png?w=100&h=100&q=100&dpr=2&fit=crop&s=Idkqaz_9ddgZIHvmwYxIBQ" 
						style="width: 70px; height: 40px; border-radius: 50%; margin-left:px;" 
						alt="Tác giả" />
				</div>

			</div>
			`;
    }

    // Thêm phần hỗ trợ vào main content

    const supportingContentLeft = document.querySelector(
      ".supporting_content_left"
    );
    supportingContentLeft.innerHTML = "";

    otherArticles.slice(4, 13).forEach((article) => {
      supportingContentLeft.innerHTML += `
                <div class="supporting_content_item" style="  border-bottom: 1px solid #eee; padding-bottom: 10px;">
				        <h3 style="  font-size: 14px;">
                            <a href="/articles/${article.article_id}" style="text-decoration: none; color: #000; font-weight: bold;">
                                ${article.title}
                            </a>
                        </h3>
                    
                    <div style ="display:flex; margin-top:10px;">
                        <img src="${article.image_url}" alt="${article.title}" style="width: 146px; height: 87px; object-fit: cover; margin-right: 10px;">
                        <p style="margin: 5px 0; color: #555; font-size: 14px; width:260px; height:77px;">${article.content}</p>
                    </div>
                </div>
            `;
    });

    const kinhDoanhArticles = articles.filter(
      (article) => article.category_id === 5
    );

    // ==== KINH DOANH
    const haglContainer = document.querySelector(".hagl");
    haglContainer.innerHTML = "";

    if (kinhDoanhArticles[0]) {
      const article1 = kinhDoanhArticles[0];
      haglContainer.innerHTML += `
                <div class="hagl_img">
                    <a href="/articles/${article1.article_id}">
                        <img src="${article1.image_url}" alt="${article1.title}" style="width: 225px">
                    </a>
                </div>
                <div class="hagl_pr">
                    <h1>
                        <a href="/articles/${article1.article_id}">${article1.title}</a>
                    </h1>
                    <p>
                        <a href="/articles/${article1.article_id}">${article1.content}...</a>
                    </p>
                </div>
            `;
    }
    if (kinhDoanhArticles[1]) {
      const article2 = kinhDoanhArticles[1];
      haglContainer.innerHTML += `
                <div class="wl">
                    <h1>
                        <a href="/articles/${article2.article_id}">${article2.title}</a>
                    </h1>
                    <p>
                        <a href="/articles/${article2.article_id}">${article2.content}...</a>
                    </p>
                </div>
            `;
    }
    const jejuContainer = document.querySelector(".jeju1");
    jejuContainer.innerHTML = "";

    kinhDoanhArticles.slice(2, 5).forEach((article) => {
      jejuContainer.innerHTML += `
                <li class="jeju1_ct">
                    <a href="/articles/${article.article_id}">
                      <b>${article.title}</b>
                    </a>
                </li>
            `;
    });

    const batdongSanArticles = articles.filter(
      (article) => article.category_id === 11
    );

    // Bất động sản
    const bdsContainer = document.querySelector(".bds");
    bdsContainer.innerHTML = "";

    if (batdongSanArticles[0]) {
      const article1 = batdongSanArticles[0];
      bdsContainer.innerHTML += `
                <div class="bds_img">
                    <a href="/articles/${article1.article_id}">
                        <img src="${article1.image_url}" alt="${article1.title}" style="width: 225px">
                    </a>
                </div>
                <div class="bds_pr">
                    <h1>
                        <a href="/articles/${article1.article_id}">${article1.title}</a>
                    </h1>
                    <p>
                        <a href="/articles/${article1.article_id}">${article1.content}...</a>
                    </p>
                </div>
            `;
    }
    if (batdongSanArticles[1]) {
      const article2 = batdongSanArticles[1];
      bdsContainer.innerHTML += `
                <div class="bds_right">
                    <h1>
                        <a href="/articles/${article2.article_id}">${article2.title}</a>
                    </h1>
                    <p>
                        <a href="/articles/${article2.article_id}">${article2.content}...</a>
                    </p>
                </div>
            `;
    }
    const bdsBottomContainer = document.querySelector(".bds_bottom");
    bdsBottomContainer.innerHTML = "";

    batdongSanArticles.slice(2, 5).forEach((article) => {
      bdsBottomContainer.innerHTML += `
                <li class="bds_ct">
                    <a href="/articles/${article.article_id}">
                      <b>${article.title}</b>
                    </a>
                </li>
            `;
    });

    //thể thao
    const theThaoArticles = articles.filter(
      (article) => article.category_id === 1
    );
    const theThaoContainer = document.querySelector(".thethao");
    theThaoContainer.innerHTML = "";

    if (theThaoArticles[0]) {
      const article1 = theThaoArticles[0];
      theThaoContainer.innerHTML += `
                <div class="thethao_img">
                    <a href="/articles/${article1.article_id}">
                        <img src="${article1.image_url}" alt="${article1.title}" style="width: 225px">
                    </a>
                </div>
                <div class="thethao_pr">
                    <h1><a href="/articles/${article1.article_id}">${article1.title}</a></h1>
                    <p><a href="/articles/${article1.article_id}">${article1.content}...</a></p>
                </div>
            `;
    }

    if (theThaoArticles[1]) {
      const article2 = theThaoArticles[1];
      theThaoContainer.innerHTML += `
                <div class="thethao_right">
                    <h1><a href="/articles/${article2.article_id}">${article2.title}</a></h1>
                    <p><a href="/articles/${article2.article_id}">${article2.content}...</a></p>
                </div>
            `;
    }

    const theThaoBottomContainer = document.querySelector(".thethao_bottom");
    theThaoBottomContainer.innerHTML = "";

    theThaoArticles.slice(2, 5).forEach((article) => {
      theThaoBottomContainer.innerHTML += `
                <li class="thethao_ct">
                    <a href="/articles/${article.article_id}"><b>${article.title}</b></a>
                </li>
            `;
    });

    //giải trí
    const giaiTriArticles = articles.filter(
      (article) => article.category_id === 3
    );
    const giaiTriContainer = document.querySelector(".giaitri");
    giaiTriContainer.innerHTML = "";

    if (giaiTriArticles[0]) {
      const article1 = giaiTriArticles[0];
      giaiTriContainer.innerHTML += `
        <div class="giaitri_img">
            <a href="/articles/${article1.article_id}">
                <img src="${article1.image_url}" alt="${article1.title}" style="width: 225px">
            </a>
        </div>
        <div class="giaitri_pr">
            <h1><a href="/articles/${article1.article_id}">${article1.title}</a></h1>
            <p><a href="/articles/${article1.article_id}">${article1.content}...</a></p>
        </div>
    `;
    }

    if (giaiTriArticles[1]) {
      const article2 = giaiTriArticles[1];
      giaiTriContainer.innerHTML += `
        <div class="giaitri_right">
            <h1><a href="/articles/${article2.article_id}">${article2.title}</a></h1>
            <p><a href="/articles/${article2.article_id}">${article2.content}...</a></p>
        </div>
    `;
    }

    const giaiTriBottomContainer = document.querySelector(".giaitri_bottom");
    giaiTriBottomContainer.innerHTML = "";

    giaiTriArticles.slice(2, 5).forEach((article) => {
      giaiTriBottomContainer.innerHTML += `
        <li class="giaitri_ct">
            <a href="/articles/${article.article_id}"><b>${article.title}</b></a>
        </li>
    `;
    });
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu từ API:", error);
  }
}

// bóng đá
async function loadMatches() {
  try {
    const response = await fetch("http://localhost:8080/matches");
    const matches = await response.json();
    const matchesContainer = document.querySelector(".matches");
    matchesContainer.innerHTML = "";
    matchesContainer.innerHTML = matches
      .map(
        (match) => `
      <div class="match">
        <span class="time">${new Date(match.match_date).toLocaleString(
          "vi-VN",
          { weekday: "long", hour: "2-digit", minute: "2-digit" }
        )}</span>
        <div class="teams">
          <span class="team">
            <img src="${match.home_logo}" alt="${match.home_team}" />
            ${match.home_team}
          </span>
          <span class="team">
            <img src="${match.away_logo}" alt="${match.away_team}" />
            ${match.away_team}
          </span>
        </div>
      </div>
    `
      )
      .join("");
  } catch (error) {
    console.error("Lỗi tải dữ liệu:", error);
  }
}

loadMatches();

window.onload = fetchAndRenderArticles;

async function fetchVideos() {
  try {
    const response = await fetch("/api/articles");
    const articles = await response.json();

    const sidebar = document.querySelector(".sidebar");
    // sidebar.innerHTML = "";

    articles.forEach((article) => {
      if (!article.video_url) return;

      const videoItem = document.createElement("div");
      console.log(videoItem); // Kiểm tra xem có tạo được div không
      videoItem.classList.add("video-item");
      videoItem.setAttribute(
        "onclick",
        `loadVideo('${article.video_url}', '${article.title}')`
      );

      videoItem.innerHTML = `
              <video>
                  <source src="${article.video_url}" type="video/mp4" />
              </video>
              <div class="info">
                  <div class="title">${article.title}</div>
                  <div class="meta"> ${article.category_name}</div>
                  <div class="time">03:20</div>
              </div>
          `;
      console.log("Thêm vào sidebar:", videoItem);

      sidebar.appendChild(videoItem);
    });
  } catch (error) {
    console.error("Lỗi khi tải video:", error);
  }
}

fetchVideos();

async function fetchAndRenderSections() {
  try {
    const response = await fetch("/api/articles");
    const articles = await response.json();
    const khoaHocArticles = articles.filter(
      (article) => article.category_id === 12
    );
    renderKhoaHoc(khoaHocArticles);
    renderCaVoi(khoaHocArticles);
    renderBoxTo4(khoaHocArticles);
  } catch (error) {
    console.error("Lỗi khi fetch dữ liệu:", error);
  }
}

// Hàm render phần Khoa Học (1 bài)
function renderKhoaHoc(articles) {
  const container = document.querySelector(" .future");
  container.innerHTML = "";
  articles.sort((a, b) => a.article_id - b.article_id);

  if (articles[0]) {
    const article = articles[0];
    container.innerHTML = `
    <div class="future">
      <div class="future_img">
        <a href="">
          <img src="${article.image_url}" alt="${article.title}" 
               style="width: 455px; height: 273px" />
        </a>
      </div>
      <div class="future_pr">
        <h1><a href="">${article.title}</a></h1>
        <p style="font-size:13px; margin-top:8px;">
          <a href="${article.link}">${article.content}</a>
        </p>
      </div>
    </div>
  `;
  }
}

// Hàm render phần Cá Voi (2 bài)
function renderCaVoi(articles) {
  const container = document.querySelector(".main_cavoi");
  container.innerHTML = "";

  if (articles[1]) {
    const article1 = articles[1];
    container.innerHTML += `
      <div class="cavoi">
        <div class="cavoi_img">
          <a href="${article1.link}">
            <img src="${article1.image_url}" alt="${article1.title}" />
          </a>
          <h1 style= "font-size:21px; border-bottom:1px solid #e5e5e5; padding-bottom:10px;"><a href="${article1.link}">${article1.title}</a></h1>
        </div>
      </div>
    `;
  }

  if (articles[2]) {
    const article1 = articles[2];
    container.innerHTML += `
      <div class="cavoi">
        <div class="cavoi_img">
          <a href="${article1.link}">
            <img src="${article1.image_url}" alt="${article1.title}" />
          </a>
          <h2 style="font-size:21px; "><a href="${article1.link}">${article1.title}</a></h2>
        </div>
      </div>
    `;
  }
}
// hàm render box-to-4
function renderBoxTo4(articles) {
  const container = document.querySelector(".box_to_4");
  container.innerHTML = "";

  articles.slice(3, 7).forEach((article) => {
    container.innerHTML += `
      <div class="laser">
        <h1 style="font-size:18px;">
          <a href="${article.link}">${article.title}</a>
        </h1>
        <a href="${article.link}">
          <img src="${article.image_url}" alt="${article.title}" 
               style="width: 120px; height: 72px" />
        </a>
      </div>
    `;
  });
}
fetchAndRenderSections();

///////// Thời sự
async function fetchthoiSuArticles() {
  try {
    const response = await fetch("api/articles");
    const articles = await response.json();

    // Lọc bài viết thuộc danh mục Thời sự (category_id = 13)
    const thoiSuArticles = articles.filter(
      (article) => article.category_id === 13
    );

    // Lấy 2 bài viết đầu tiên
    const twoArticles = thoiSuArticles.slice(0, 2);

    // Gọi hàm render cho Thời sự
    renderThoiSuData(twoArticles);
  } catch (error) {
    console.error("Có lỗi khi lấy dữ liệu bài viết:", error);
  }
}

// Hàm render bài viết Thời sự
function renderThoiSuData(articles) {
  const container = document.querySelector(".thoisu_main");
  container.innerHTML = "";
  const firstArticle = articles[0];
  const firstArticleHTML = `
    <div class="thoisu_img_pr">
      <div class="thoisu_img">
        <a href="${firstArticle.link}">
          <img src="${firstArticle.image_url}" alt="${firstArticle.title}" />
        </a>
      </div>
      <div class="thoisu_pr">
        <h1>
          <a href="${firstArticle.link}">${firstArticle.title}</a>
        </h1>
        <p>
          <a href="${firstArticle.link}">${firstArticle.content}</a>
        </p>
      </div>
    </div>
  `;
  container.innerHTML += firstArticleHTML;

  const secondArticle = articles[1];
  const secondArticleHTML = `
    <div class="thoisu_article">
      <h1>
        <a href="${secondArticle.link}">${secondArticle.title}</a>
      </h1>
      <p>
        <a href="${secondArticle.link}">${secondArticle.content}</a>
      </p>
    </div>
  `;
  container.innerHTML += secondArticleHTML;
}
fetchthoiSuArticles();

///////// Thế giới
async function fetchtheGioiArticles() {
  try {
    const response = await fetch("api/articles");
    const articles = await response.json();

    const theGioiArticles = articles.filter(
      (article) => article.category_id === 14
    );
    const twoArticles = theGioiArticles.slice(0, 2);
    renderTheGioiData(twoArticles);
  } catch (error) {
    console.error("Có lỗi khi lấy dữ liệu bài viết:", error);
  }
}
function renderTheGioiData(articles) {
  const container = document.querySelector(".thegioi_main");
  container.innerHTML = "";

  const firstArticle = articles[0];
  const firstArticleHTML = `
    <div class="thegioi_img_pr">
      <div class="thegioi_img">
        <a href="${firstArticle.link}">
          <img src="${firstArticle.image_url}" alt="${firstArticle.title}" />
        </a>
      </div>
      <div class="thegioi_pr">
        <h1>
          <a href="${firstArticle.link}">${firstArticle.title}</a>
        </h1>
        <p>
          <a href="${firstArticle.link}">${firstArticle.content}</a>
        </p>
      </div>
    </div>
  `;
  container.innerHTML += firstArticleHTML;

  const secondArticle = articles[1];
  const secondArticleHTML = `
    <div class="thegioi_article">
      <h1>
        <a href="${secondArticle.link}">${secondArticle.title}</a>
      </h1>
      <p>
        <a href="${secondArticle.link}">${secondArticle.content}</a>
      </p>
    </div>
  `;
  container.innerHTML += secondArticleHTML;
}
fetchtheGioiArticles();

///Pháp luật

async function fetchphapLuatArticles() {
  try {
    const response = await fetch("api/articles");
    const articles = await response.json();

    const phapLuatArticles = articles.filter(
      (article) => article.category_id === 6
    );
    const twoArticles = phapLuatArticles.slice(0, 2);
    renderPhapLuatData(twoArticles);
  } catch (error) {
    console.error("Có lỗi khi lấy dữ liệu bài viết:", error);
  }
}
function renderPhapLuatData(articles) {
  const container = document.querySelector(".phapluat_main");
  container.innerHTML = "";

  const firstArticle = articles[0];
  const firstArticleHTML = `
    <div class="phapluat_img_pr">
      <div class="phapluat_img">
        <a href="${firstArticle.link}">
          <img src="${firstArticle.image_url}" alt="${firstArticle.title}" />
        </a>
      </div>
      <div class="phapluat_pr">
        <h1 >
          <a href="${firstArticle.link}">${firstArticle.title}</a>
        </h1>
        <p >
          <a href="${firstArticle.link}">${firstArticle.content}</a>
        </p>
      </div>
    </div>
  `;
  container.innerHTML += firstArticleHTML;

  const secondArticle = articles[1];
  const secondArticleHTML = `
    <div class="phapluat_article">
      <h1 >
        <a href="${secondArticle.link}">${secondArticle.title}</a>
      </h1>
      <p>
        <a href="${secondArticle.link}">${secondArticle.content}</a>
      </p>
    </div>
  `;
  container.innerHTML += secondArticleHTML;
}
fetchphapLuatArticles();

////////////Tâm sự

async function fetchTamsuArticles() {
  try {
    const response = await fetch("api/articles");
    const articles = await response.json();
    const tamsuArticles = articles.filter(
      (article) => article.category_id === 15
    );
    renderTamsuData(tamsuArticles);
  } catch (error) {
    console.error("Có lỗi khi lấy dữ liệu bài viết:", error);
  }
}

function renderTamsuData(articles) {
  const container = document.querySelector(".tamsu_pr");
  container.innerHTML = "";
  const firstArticle = articles[0];
  const firstArticleHTML = `
    <div class="tamsu_pr_1">
      <i class="fa-regular fa-heart">
        <a href="${firstArticle.link}">
          ${firstArticle.title}
        </a>
      </i>
      <p style="font-size:14px;">
        <a href="${firstArticle.link}">
          ${firstArticle.content}
        </a>
      </p>
    </div>
  `;
  container.innerHTML += firstArticleHTML;

  // Lấy bài thứ hai (tamsu_pr_3)
  const secondArticle = articles[1];
  const secondArticleHTML = `
    <div class="tamsu_pr_2">
      <div class="tamsu_pr_3">
        <i class="fa-regular fa-heart">
          <a href="${secondArticle.link}">
            ${secondArticle.title}
          </a>
        </i>
        <p>
          <a href="${secondArticle.link}">
            ${secondArticle.content}
          </a>
        </p>
      </div>
  `;

  // Lấy bài thứ ba (tamsu_pr_4)
  const thirdArticle = articles[2];
  const thirdArticleHTML = `
    <div class="tamsu_pr_4">
      <i class="fa-regular fa-heart">
        <a href="${thirdArticle.link}">
          ${thirdArticle.title}
        </a>
      </i>
      <p>
        <a href="${thirdArticle.link}">
          ${thirdArticle.content}
        </a>
      </p>
    </div>
  </div>
  `;

  container.innerHTML += secondArticleHTML + thirdArticleHTML;
}

fetchTamsuArticles();

async function fetchEbankArticles() {
  try {
    const response = await fetch("api/articles");
    const articles = await response.json();

    const EbankArticles = articles.filter(
      (article) => article.category_id === 2
    );
    const threeArticles = EbankArticles.slice(0, 4);

    renderEbankData(threeArticles);
  } catch (error) {
    console.error("Có lỗi khi lấy dữ liệu bài viết:", error);
  }
}

function renderEbankData(articles) {
  const container = document.querySelector(".news-list");
  container.innerHTML = "";

  articles.forEach((article) => {
    const articleHTML = `
      <div class="news-item">
        <img
          src="${article.image_url}"  
          alt=""       
        />
        <p>
          <a href="${article.link}">${article.title}</a>
        </p>
      </div>
    `;
    container.innerHTML += articleHTML;
  });
}

fetchEbankArticles();

/////////////ý kiến
async function fetchYkienArticles() {
  try {
    const response = await fetch("api/articles");
    const articles = await response.json();

    const YkienArticles = articles.filter(
      (article) => article.category_id === 16
    );
    const fourArticles = YkienArticles.slice(0, 4);
    renderYkienData(fourArticles);
  } catch (error) {
    console.error("Có lỗi khi lấy dữ liệu bài viết:", error);
  }
}

function renderYkienData(articles) {
  const container = document.querySelector(".ykien_box");
  container.innerHTML = "";

  articles.forEach((article) => {
    const articleHTML = `
      
      <h1>
        <a href="${article.link}">
        ${article.title}
        </a>
      </h1>
      <p>
        <a href="${article.link}">${article.content}</a>
      </p>
    
    `;
    container.innerHTML += articleHTML;
  });
}

fetchYkienArticles();
