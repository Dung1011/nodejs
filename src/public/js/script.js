//bóng đá
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
	btn,
	prevBtn,
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
	btn,
	nextBtn,
	slideElement,
	ratio,
	currentSlideRatio,
	setCurrentSlideRatio,
	max = 0,
	min = -100,
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
	slideNextHorizontalFn({
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
const imageContainer = document.querySelector(".picture-spotlight-image-container");
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

    if (currentIndex >= document.querySelectorAll(".picture-spotlight-image img").length / 2) {
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
        currentIndex = document.querySelectorAll(".picture-spotlight-image img").length / 2 - 1;
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
	const container = document.getElementById('adsContainer');
	const cards = document.querySelectorAll('.ad-card');
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
            const list = document.getElementById('thongtin-list');
            const container = document.querySelector('.thongtin-list-container');
            const itemWidth = 270;
            const maxScroll = list.scrollWidth - container.clientWidth;
            position += direction * itemWidth;
            position = Math.max(Math.min(position, 0), -maxScroll);
            list.style.transform = `translateX(${position}px)`;
        }


//load video
function loadVideo(videoSrc, videoTitle) {
	const mainVideoPlayer = document.getElementById('main-video-player');
	const mainVideoTitle = document.getElementById('main-video-title');

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

	 (emailInput.value.trim() === "") 
		errorMessage.style.display = "block"; 
	
}


//render dữ liệu
async function fetchAndRenderArticles() {
    try {
        const response = await fetch('/api/articles'); // Gọi API lấy dữ liệu từ MySQL
        const articles = await response.json();

        if (articles.length === 0) {
            document.querySelector('.main_content').innerHTML = '<p>Không có bài viết nào.</p>';
            return;
        }

        
        const mainContent1 = document.querySelector('.main_content1');
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

       
        const otherArticles = articles.slice(1); 

        // Bài viết phụ 1 (main_content2_1)
        if (otherArticles[0]) {
            const article2_1 = otherArticles[0];
            document.querySelector('.main_content2').innerHTML += `
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
        if (otherArticles[1]) {
            const article2_2 = otherArticles[1];
			document.querySelector('.main_content2').innerHTML += `
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

        // Góc nhìn (main_content2_3)
        if (otherArticles[2]) {
            const article2_3 = otherArticles[2];
            document.querySelector('.main_content2').innerHTML += `
			<div class="main_content2_3">
				<p>
					<a href="/articles/${article2_3.article_id}">
						${article2_3.title}
					</a>
				</p>
				<img  src="${article2_3.image_url}" alt="${article2_3.title}"  />
			</div>
		`;

		
	}
    } catch (error) {
        console.error('Lỗi khi lấy dữ liệu từ API:', error);
    }
}

// Gọi hàm khi trang load
window.onload = fetchAndRenderArticles;



