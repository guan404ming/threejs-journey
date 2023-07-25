# 13-3d-text

1. Load the font and Create the geometry
    ```js
    import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
    fontLoader.load(
        '/fonts/helvetiker_regular.typeface.json',
        (font) => {
            const textGeometry = new TextGeometry(
                'Hello, world!!',
                {
                    font: font,
                    size: 0.5,
                    height: 0.2,
                    curveSegments: 10,
                    bevelEnabled: true,
                    bevelThickness: 0.03,
                    bevelSize: 0.02,
                    bevelOffset: 0,
                    bevelSegments: 2
                }
            )

            const textMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapTexture });
            const textMesh = new THREE.Mesh(textGeometry, textMaterial);
            scene.add(textMesh);
        }
    )
    ```

2. Center the geometry

    - Custom center
        ```js
        textGeometry.computeBoundingBox();
        textGeometry.translate(
            - (textGeometry.boundingBox.max.x - textGeometry.parameters.options.bevelSize) / 2,
            - (textGeometry.boundingBox.max.y - textGeometry.parameters.options.bevelSize) / 2,
            - (textGeometry.boundingBox.max.z - textGeometry.parameters.options.bevelThickness) / 2
        );
        ```
    
    - Build-in center
        ```js
        textGeometry.center();
        ```
