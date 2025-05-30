particlesJS("underwater", {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 1000
            }
        },
        color: {
            value: "#00a2ff"
        },
        opacity: {
            value: 0.8,
            random: true,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 2,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: "top",
            random: true,
            out_mode: "out",
            attract: {
                enable: false
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover:{
                enable: false,
                mode: "repulse"
            },
            onclick: {
                enable: false,
                mode: "push"
            }
        },
        modes: {
            grab:{
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: 100,
            duration: 0.4
        },
        push: {
            particles_nb: 4
        },
        remove: {
            particles_nb: 2
        }
    },
    retina_detect: true
})