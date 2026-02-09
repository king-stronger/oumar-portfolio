const buttons = document.querySelectorAll(".popover-btn");
const panels = document.querySelectorAll(".tab-panel");
const menu = document.getElementById("menu");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

openMenu.addEventListener("click", () => {
    menu.classList.add("show")
})

closeMenu.addEventListener("click", () => {
    menu.classList.remove("show")
})

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const target = btn.dataset.tab;

        // boutons
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // panels
        panels.forEach(panel => {
            panel.classList.toggle(
                "active",
                panel.dataset.panel === target
            );
        });
    });
});

document.querySelector('[data-tab="work"]').classList.add("active");
