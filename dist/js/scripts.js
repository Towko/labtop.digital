function onEntry(entry) {
    entry.forEach(change => {
        if(document.documentElement.clientWidth < 768) {
            if (change.isIntersecting) {
                change.target.classList.add('showing');
            } else {
                change.target.classList.remove('showing');
            }
        }
        if (change.intersectionRatio) {
            change.target.classList.add('showing');
        } else {
            change.target.classList.remove('showing');
        }
    });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.animation');
for (let elm of elements) {
    observer.observe(elm);
}
