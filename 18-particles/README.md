# 18-particles

1. Geometry

    ```js
    // Points
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    particlesMaterial.transparent = true;
    particlesMaterial.alphaMap = particleTexture;
    scene.add(particles)
    ```

2. Fix edges of the particles.

   1. Using alphaTest

   ```js
   particlesMaterial.alphaTest = 0.001
   ```

   2. Using depthTest

   ```js
   particlesMaterial.depthTest = false
   ```

   3. Using depthWrite

   ```js
   particlesMaterial.depthWrite = false

   // optional
   particlesMaterial.blending = THREE.AdditiveBlending
   ```

3. Random position and color

    ```js
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for(let i = 0; i < count * 3; i++)
    {
        positions[i] = (Math.random() - 0.5) * 10
        colors[i] = Math.random()
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    ```

4. Animation

    ```js
    for(let i = 0; i < count; i++)
    {
        let i3 = i * 3

        const x = particlesGeometry.attributes.position.array[i3]
        particlesGeometry.attributes.position.array[i3 + 1] = Math.sin(elapsedTime + x)
    }
    
    particlesGeometry.attributes.position.needsUpdate = true
    ```