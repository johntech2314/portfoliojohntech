const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalType = document.getElementById("modalType");

document.querySelectorAll(".work-image[data-src]").forEach((button) => {
    button.addEventListener("click", () => {
        const src = button.dataset.src;
        if (!src) {
            return;
        }

        modalImg.src = src;
        modalImg.alt = button.dataset.title || "Portfolio work";
        modalTitle.textContent = button.dataset.title || "Portfolio work";
        modalType.textContent = button.dataset.type || "Artwork";

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
