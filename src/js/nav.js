const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll('[data-value]');

function handleIntersect(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');

      navLinks.forEach(link => {
        link.removeAttribute('data-active')
        if (link.getAttribute('data-value') === id) {
          link.setAttribute('data-active', 'true');
        }
      });
    }
  });
};

const highThresholdObserver = new IntersectionObserver(handleIntersect, {
  threshold: 0.6
});

const lowThresholdObserver = new IntersectionObserver(handleIntersect, {
  threshold: 0.2
});

sections.forEach(section => {
  if (section.id === "reviews") {
    lowThresholdObserver.observe(section);
  } else {
    highThresholdObserver.observe(section);
  }
});