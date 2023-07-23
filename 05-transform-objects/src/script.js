import * as THREE from 'three'

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
group.position.set(0, 1, 0);
group.rotation.y = 1;
group.scale.y = 2;

// Axes Helper
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
