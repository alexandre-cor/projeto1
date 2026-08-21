
const evento = (inp, btn, ico) => {
    if (inp.getAttribute("type") === "password") {
        inp.setAttribute("type", "text");

        ico.classList.replace("fa-eye", "fa-eye-slash");
        btn.setAttribute("aria-label", "Ocultar senha");
    }
    else {
        inp.setAttribute("type", "password");

        ico.classList.replace("fa-eye-slash", "fa-eye");
        btn.setAttribute("aria-label", "Mostrar senha");
    };
}

const buttons = document.querySelectorAll(".btn-icone");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const father = button.closest(".input-group");

        const input = father.querySelector("input");

        const icone = button.querySelector("i");

        evento(input, button, icone);
    })
});


// Resetar valores de input password

function resetInput(resetForm) {
    const inputs = resetForm.querySelectorAll("input.input-password");
    inputs.forEach(input => {
        if (input.getAttribute("type") === "text") {
            input.setAttribute("type", "password");
        }

        const father = input.closest(".input-group");
        if (father) {
            const btn = father.querySelector(".btn-icone");

            if (btn) {
                const ico = btn.querySelector("i")


                ico.classList.remove("fa-eye-slash");
                ico.classList.add("fa-eye");
                btn.setAttribute("aria-label", "Mostrar senha")
            }

        }

    })
};

// Modal do cadastro.

const dialog = document.getElementById("dialogShowModal");
const register = document.getElementById("register");
const exit = document.querySelector("#exit");
const form = document.querySelector("#reset-form");
const formModal = document.querySelector("#reset-modal");


register.addEventListener("click", () => {
    dialog.showModal();
    form.reset();
    resetInput(form);
});

exit.addEventListener("click", (e) => {
    e.stopPropagation(); 
    dialog.close();
    formModal.reset();
    resetInput(formModal);
});

dialog.addEventListener("click", (e) => {
    const rec = dialog.getBoundingClientRect()

    const isOutside = (

        e.clientX < rec.left ||
        e.clientX > rec.right ||
        e.clientY < rec.top ||
        e.clientY > rec.bottom

    );

    if (isOutside) {
        dialog.close();
        formModal.reset();
        resetInput(formModal);
    };
});

