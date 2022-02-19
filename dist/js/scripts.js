function onEntry(entry) {
    entry.forEach(change => {
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