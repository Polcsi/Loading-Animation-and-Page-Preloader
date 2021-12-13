const loaderContainer = document.querySelector('.loader-container');

const fadeOut = (ms, func) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                func()
            );
        }, ms);
    });
}

window.addEventListener('load', async () => {
    await fadeOut(3000, () => {
        loaderContainer.style.animation = "fadeOut .7s forwards ease";
        document.body.style.overflow = "auto";
    });
    await fadeOut(700, () => {
        loaderContainer.style.display = "none";
    });
});