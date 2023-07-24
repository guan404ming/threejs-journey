# 08-fullscreen-and-resizing

1.  [`BoxGeometry()`] to create a box. It has 6 parameters:

    - **width**: The size on the x axis
    - **height**: The size on the y axis
    - **depth**: The size on the z axis
    - **widthSegments**: How many subdivisions in the x axis
    - **heightSegments**: How many subdivisions in the y axis
    - **depthSegments**: How many subdivisions in the z axis

2.  Custom buffer geometry

    ```js
    const count = 50
    const positionArray = new Float32Array(count * 3 * 3)

    for (let idx = 0; idx < count * 3 * 3; idx++) {
      positionArray[idx] = (Math.random() - 0.5) * 4
    }

    const positionArrtribute = new THREE.BufferAttribute(positionArray, 3)
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', positionArrtribute)

    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true
    })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)
    ```
