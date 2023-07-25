# 12-materials

1. The most common types of materials:

    - **[MeshBasicMaterial](https://threejs.org/docs/index.html#api/en/materials/MeshBasicMaterial)**: A material for drawing geometries in a simple shaded (flat or wireframe) way. This material is not affected by lights. Some parameters could be used:
        - `Map`
        - `Color`
        - `WireFrame`
        - `Opacity`
        - `AlphaMap`
        - `Side`

    - **[MeshNormalMaterial](https://threejs.org/docs/index.html?q=MeshNormalMaterial#api/en/materials/MeshNormalMaterial)**: A material that maps the normal vectors to RGB colors. Some parameters could be used:
        - `flatShading`
    
    - **[MeshMatcapMaterial](https://threejs.org/docs/index.html?q=MeshMatcapMaterial#api/en/materials/MeshMatcapMaterial)**: MeshMatcapMaterial is defined by a MatCap (or Lit Sphere) texture, which encodes the material color and shading. MeshMatcapMaterial does not respond to lights since the matcap image file encodes baked lighting.

    - **[MeshDepthMaterial](https://threejs.org/docs/index.html?q=MeshDepthMaterial#api/en/materials/MeshDepthMaterial)**: A material for drawing geometry by depth. Depth is based off of the camera near and far plane. White is nearest, black is farthest.
    
    - **[MeshLambertMaterial](https://threejs.org/docs/index.html?q=MeshDepthMaterial#api/en/materials/MeshLambertMaterial)**: A material for non-shiny surfaces, without specular highlights.farthest.

    - **[MeshPhongMaterial](https://threejs.org/docs/index.html?q=MeshDepthMaterial#api/en/materials/MeshPhongMaterial)**: A material for shiny surfaces with specular highlights. Some parameters could be used:
        - `shininess`
        - `specular`
    
    - **[MeshToonMaterial](https://threejs.org/docs/index.html?q=MeshDepthMaterial#api/en/materials/MeshToonMaterial)**: A material implementing toon shading.
    
    - **[MeshStandardMaterial](https://threejs.org/docs/index.html?q=MeshDepthMaterial#api/en/materials/MeshStandardMaterial)**: A standard physically based material, using Metallic-Roughness workflow. Some parameters could be used:
        - `metalness`
        - `roughness`
        - `map`
        - `aomap` & `aoIntensity`
        - `displacementMap` &rarr; may need more subdivisions
        - `normalMap`
        - `alphaMap`

2.  Environment map

    - [`CubeTextureLoader`](https://threejs.org/docs/index.html?q=CubeTextureLoader#api/en/loaders/CubeTextureLoader)
        
        ```js
        const cubeTextureLoader = new THREE.CubeTextureLoader()

        const environmentMapTexture = cubeTextureLoader
            .setPath( 'textures/cubeMaps/' )
            .load([
                'px.jpg',
                'nx.jpg',
                'py.jpg',
                'ny.jpg',
                'pz.jpg',
                'nz.jpg',
            ])

        // Update material
        material.envMap = environmentMapTexture
        ```

