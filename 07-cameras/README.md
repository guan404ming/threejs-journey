# 07-cameras

1.  [`PerspectiveCamera()`](https://threejs.org/docs/#api/en/cameras/PerspectiveCamera) simulated a real-life camera with perspective.

    - **`Field of view`**

      - Small angle &rarr; **long scope effect**
      - Wide angle &rarr; **fish eye effect**, the objects will be stretched or squeezed to fit the canvas.

    - **`Aspect ratio`** corresponds to the width divided by the height

    - **`Near and far`** correspond to how close and how far the camera can see.

2.  Custom controls

    ```js
    // Cursor

    window.addEventListener('mousemove', event => {
      cursor.x = event.clientX / sizes.width - 0.5
      cursor.y = -(event.clientY / sizes.height - 0.5)
    })

    const tick = () => {
      // Update camera
      camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2
      camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2
      camera.position.y = cursor.y * 3
      camera.lookAt(mesh.position)
    }

    tick()
    ```

3.  Built-in controls

    ```js
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

    // Controls
    const controls = new OrbitControls(camera, canvas)
    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true

    const tick = () => {
      // Update controls
      controls.update()
    }

    tick()
    ```
