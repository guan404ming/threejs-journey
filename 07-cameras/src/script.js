import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// Cursor
const cursor = {
    x: 0,
    y: 0,
}
window.addEventListener('mousemove', (e) => {
    cursor.x = e.clientX / sizes.width - 0.5;
    cursor.y = -(e.clientY / sizes.height - 0.5);
})

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Scene
const scene = new THREE.Scene()

// Object
const meshGroup = new THREE.Group();
for (let index = 0; index < 5; index++) {
    const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
        new THREE.MeshBasicMaterial({ color: `#ffffff`, fog: true })
    )
    mesh.position.z = index * 2 + 1;
    meshGroup.add(mesh);
}
scene.add(meshGroup)

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 100)
camera.position.x = 2
camera.position.y = 2
camera.position.z = 10

// OrthographicCamera
// const aspectRatio = sizes.width / sizes.height
// const camera = new THREE.OrthographicCamera(-1 * aspectRatio, aspectRatio, 1, -1, 0.1, 100)

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Animate
const clock = new THREE.Clock()

const tick = () => {

    // Update objects
    meshGroup.rotation.y = clock.getElapsedTime();

    // Update camera
    // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
    // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3
    // camera.position.y = cursor.y * 5
    // camera.lookAt(meshGroup.position)
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()