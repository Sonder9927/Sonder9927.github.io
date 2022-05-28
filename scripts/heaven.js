const html = document.documentElement;
html.style.setProperty(' --r', '0px')
html.addEventListener("mousemove", (e) => {
    const { clientX, clientY} = e;
    html.style.setProperty('--x', clientX + 'px');
    html.style.setProperty('--y', clientY + 'px');
});
html.addEventListener("click", (e) => {
    const r = html.style.getPropertyValue("--r");
    html.style.setProperty("--r", r === '0px' ? '180px' : '0px');
})
