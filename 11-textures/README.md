# 11-textures

1. The most common types of textures:

    - **Color (or albedo)**: It'll only take the pixels of the texture and apply them to the geometry.
    
    - **Alpha**: The alpha texture is a grayscale image where white will be visible, and black won't.
    
    - **Height**: It is a grayscale image that will move the vertices to create some relief.

    - **Normal**: It is very useful to add details with good performance because you don't need to subdivide the geometry.
    
    - **Ambient occlusion**: It is a grayscale image that will fake shadow in the surface's crevices.
    
    - **Metalness**: It will add small details. It won't move the vertices, but it will lure the light into thinking that the face is oriented differently. 
    
    - **Roughness**: It is a grayscale image that comes with metalness, and that will specify which part is rough (white) and which part is smooth (black).

2.  Load textures

    - Native JS

        ```js
        const image = new Image();
        const texture = new THREE.Texture(image);

        image.src = '/textures/door/color.jpg'
        image.onload = () => {
            texture.needsUpdate = true
        }
        ```

    - [`TextureLoader()`](https://threejs.org/docs/#api/en/loaders/TextureLoader) & [`LoadingManager()`](https://threejs.org/docs/?q=loading#api/en/loaders/managers/LoadingManager)
        
        ```js
        const loadindManager = new THREE.LoadingManager();
        loadindManager.onError = () => {
            console.log('error')
        }


        const textureLoader = new THREE.TextureLoader(loadindManager);
        const colorTexture = textureLoader.load('/textures/minecraft.png')
        ```

3. [Transform texture](https://threejs.org/docs/#api/en/textures/Texture)
    - `Texture.repeat`
    - `Texture.wrapS` / `Texture.wrapT`
    - `Texture.offset`
    - `Texture.rotation`
    - `Texture.center`
    - `Texture.minFilter` / `Texture.magFilter`
    - `Texture.generateMipmaps`
