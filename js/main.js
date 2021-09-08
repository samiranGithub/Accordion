const accordionData = [
    {
        id: 1,
        question: "What is your name ?",
        answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quisquam, adipisci
        repudiandae beatae laudantium`
    },
    {
        id: 2,
        question: "What is age ?",
        answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quisquam, adipisci
        repudiandae beatae laudantium`
    },
    {
        id: 3,
        question: "What class do you read ?",
        answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quisquam, adipisci
        repudiandae beatae laudantium`
    },
    {
        id: 4,
        question: "What is first pet name ?",
        answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quisquam, adipisci
        repudiandae beatae laudantium`
    },
    {
        id: 5,
        question: "Do you love programing ?",
        answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quisquam, adipisci
        repudiandae beatae laudantium`
    }
]

const accWrapper = document.querySelector('.accordion_wrapper');

const dataMap = accordionData.map(item => {
    const { question, answer } = item;
    return `
    <div class="accordion_items">
        <div class="acc_tabs">${question}</strong></div>
        <div class="acc_tab_content">
            <p>
             ${answer}
            </p>
        </div>
    </div>
    `
});
accWrapper.innerHTML = dataMap.join("");

const accItems = document.querySelectorAll('.accordion_items');

accItems.forEach(item => {
    const accTab = item.querySelectorAll(".acc_tabs");
    accTab.forEach(btn => {
        btn.addEventListener('click', function () {
            accItems.forEach(items => {
                if (items !== item) {
                    items.classList.remove("active");
                }
            });
            item.classList.toggle('active');
        });
    });
});
