# 08-fullscreen-and-resizing

1.  Handle resize

    ```js
    window.addEventListener('resize', () => {
      // Upadte Sizes
      sizes.width = window.innerWidth
      sizes.height = window.innerHeight

      // Update Camera
      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix()

      // Update renderer
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })
    ```

2.  Handle fullscreen

    ```js
    window.addEventListener('dblclick', () => {
      const fullscreenElement =
        document.fullscreenElement || document.webkitFullscreenElement

      if (!fullscreenElement) {
        if (canvas.requestFullscreen) {
          canvas.requestFullscreen()
        } else if (canvas.webkitRequestFullscreen) {
          canvas.webkitRequestFullscreen()
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen()
        }
      }
    })
    ```
