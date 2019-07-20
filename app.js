const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 100, y: -20},
        {x: 300, y: 10},
        {x: 500, y: 100},
        {x: 750, y: -100},
        {x: 350, y: -50},
        {x: 600, y: 100},
        {x: 800, y: 0},
        {x: 500, y: -250},
        {x: window.innerWidth, y: 150}
    ]
}

const tween = new TimelineLite();

tween.add(
    TweenLite.to('.paper-plane', 7, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
)