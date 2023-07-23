import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('.webgl');

// Sizes
const sizes = {
    width: 800,
    height: 600
};

// Scene
const scene = new THREE.Scene();

// Object
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: '#ffffff' });
const mesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(mesh);

const group = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: '#ff0000' })
);

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: '#00ff00' })
);
cube2.position.x = -2;

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: '#0000ff' })
);
cube3.position.x = 2;

group.add(cube1, cube2, cube3);

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);


// Animation
const clock = new THREE.Clock();

const tick = () => {
    const deltaTime = clock.getElapsedTime();

    // // Update Object
    group.rotation.y = Math.tan(deltaTime);
    group.rotation.x = Math.tan(deltaTime);
    group.rotation.z = Math.tan(deltaTime);
    group.position.set(Math.sin(deltaTime), Math.cos(deltaTime), Math.cos(deltaTime));

    mesh.rotation.y = Math.PI * deltaTime;

    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
};

tick();