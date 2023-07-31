# 16-shadows

1. Activate shadows

    ```js
    // shadowMap
    renderer.shadowMap.enabled = true

    // shadow
    sphere.castShadow = true
    plane.receiveShadow = true
    ```

    Only the following types of lights support shadows:

    - [PointLight](https://threejs.org/docs/index.html#api/en/lights/PointLight)
    - [DirectionalLight](https://threejs.org/docs/index.html#api/en/lights/DirectionalLight)
    - [SpotLight](https://threejs.org/docs/index.html#api/en/lights/SpotLight)

2. Shadow map optimisations:

   - Render size

   ```js
   directionalLight.shadow.mapSize.width = 1024
   directionalLight.shadow.mapSize.height = 1024
   ```

   - Near and far

   ```js
   directionalLight.shadow.camera.near = 1
   directionalLight.shadow.camera.far = 6
   ```

   - Amplitude

   ```js
   directionalLight.shadow.camera.top = 2
   directionalLight.shadow.camera.right = 2
   directionalLight.shadow.camera.bottom = -2
   directionalLight.shadow.camera.left = -2
   ```

   - Blur

   ```js
   directionalLight.shadow.radius = 10
   ```

    - Shadow map algorithm
        - THREE.BasicShadowMap: Very performant but lousy quality
        - THREE.PCFShadowMap: Less performant but smoother edges
        - THREE.PCFSoftShadowMap: Less performant but even softer edges
        - THREE.VSMShadowMap: Less performant, more constraints, can have unexpected results

    ```js
    directionalLight.shadow.radius = 10
    ```

3. Baking shadows

    ```js
    const plane = new THREE.Mesh(
        new THREE.PlaneGeometry(5, 5),
        new THREE.MeshBasicMaterial({
            map: bakedShadow
        })
    )
    ```
