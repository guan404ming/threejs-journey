# 15-lights

1. The most common types of materials:

    - **[AmbientLight](https://threejs.org/docs/index.html#api/en/lights/AmbientLight)**: This light globally illuminates all objects in the scene equally.

    - **[DirectionalLight](https://threejs.org/docs/index.html#api/en/lights/DirectionalLight)**: A light that gets emitted in a specific direction. This light will behave as though it is infinitely far away and the rays produced from it are all parallel.
    
    - **[HemisphereLight](https://threejs.org/docs/index.html#api/en/lights/HemisphereLight)**: A light source positioned directly above the scene, with color fading from the sky color to the ground color.

    - **[PointLight](https://threejs.org/docs/index.html#api/en/lights/PointLight)**: A light that gets emitted from a single point in all directions. A common use case for this is to replicate the light emitted from a bare lightbulb.
    
    - **[RectAreaLight](https://threejs.org/docs/index.html#api/en/lights/RectAreaLight)**: RectAreaLight emits light uniformly across the face a rectangular plane. This light type can be used to simulate light sources such as bright windows or strip lighting.

    - **[SpotLight](https://threejs.org/docs/index.html#api/en/lights/SpotLight)**: This light gets emitted from a single point in one direction, along a cone that increases in size the further from the light it gets. Some parameters could be used:
        - `color`
        - `intensity`
        - `distance`
        - `angle`
        - `penumbra`
        - `decay`

2.  Performance

    - Minimal cost:
        - AmbientLight
        - HemisphereLight

    - Moderate cost:
        - DirectionalLight
        - PointLight

    - High cost:
        - SpotLight
        - RectAreaLight
    
3. Helpers

    - [HemisphereLightHelper](https://threejs.org/docs/index.html#api/en/helpers/HemisphereLightHelper)
    - [DirectionalLightHelper](https://threejs.org/docs/index.html#api/en/helpers/DirectionalLightHelper)
    - [PointLightHelper](https://threejs.org/docs/index.html#api/en/helpers/PointLightHelper)
    - [RectAreaLightHelper](https://threejs.org/docs/index.html#examples/en/helpers/RectAreaLightHelper)
    - [SpotLightHelper](https://threejs.org/docs/index.html#api/en/helpers/SpotLightHelper)
