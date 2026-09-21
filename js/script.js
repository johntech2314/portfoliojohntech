const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalType = document.getElementById("modalType");

document.querySelectorAll(".work-image").forEach((button) => {
    button.addEventListener("click", () => {
        modalImg.src = button.dataset.src;
        modalImg.alt = button.dataset.title;
        modalTitle.textContent = button.dataset.title;
        modalType.textContent = button.dataset.type;

        modal.classList.add("open");
    });
});

document.getElementById("close").onclick = () => {
    modal.classList.remove("open");
};

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("open");
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        modal.classList.remove("open");
    }
});
