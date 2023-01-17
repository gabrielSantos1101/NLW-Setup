;(async () => {
  await loadStarsPreset(tsParticles) // this is required only if you are not using the bundle script

  await tsParticles.load('tsparticles', {
    preset: 'stars'
  })
})()

tsParticles.load('tsparticles', {
  particles: {
    shape: {
      type: 'circle' // starting from v2, this require the square shape script
    },
    links: {
      enable: false,
      opacity: 0.2
    },
    move: {
      enable: true,
      speed: 0.1
    },
    opacity: {
      value: 0.2
    },
    size: {
      value: { min: 1, max: 4 }
    }
  },
  preset: 'stars'
})
