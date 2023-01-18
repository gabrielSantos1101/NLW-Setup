tsParticles.load('tsparticles', {
  particles: {
    shape: {
      type: 'circle' // starting from v2, this require the square shape script
    },
    size: {
      value: { min: 1, max: 4 }
    },
    move: {
      enable: true,
      speed: 0.1
    }
  },
  preset: 'stars'
})
