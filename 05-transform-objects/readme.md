# 05-transform-objects

## Setup

Download [Node.js](https://nodejs.org/en/download/).
Run this followed commands:

```bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:5173
npm run dev

# Build for production in the dist/ directory
npm run build
```

## Four properties to transform objects in our scene

1. position (to move the object)

   - [Vector3](https://threejs.org/docs/#api/en/math/Vector3)
   - [position](https://threejs.org/docs/#api/en/core/Object3D.position)

2. scale (to resize the object)

   - [Vector3](https://threejs.org/docs/#api/en/math/Vector3)
   - [scale](https://threejs.org/docs/#api/en/core/Object3D.scale)

3. rotation (to rotate the object)

   - [Euler](https://threejs.org/docs/index.html#api/en/math/Euler)
   - [rotation](https://threejs.org/docs/#api/en/core/Object3D.rotation)

4. quaternion (to also rotate the object)

   - [Quaternion](https://threejs.org/docs/#api/en/math/Quaternion)
   - [quaternion](https://threejs.org/docs/#api/en/core/Object3D.quaternion)

## Others

- [AxesHelper](https://threejs.org/docs/#api/en/helpers/AxesHelper)
- [Group](https://threejs.org/docs/?q=group#api/en/objects/Group)
