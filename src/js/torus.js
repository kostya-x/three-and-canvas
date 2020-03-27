/* eslint-disable no-magic-numbers */
/* eslint-disable no-undef */
const $scene = document.getElementById('scene');

const scene = new THREE.Scene();

const fov = 70;
const aspectRatio = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspectRatio, near, far);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor('#ccc');
$scene.append(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
const geometry = new THREE.TorusKnotGeometry(10, 1, 300, 20, 4, 9);
const material = new THREE.MeshPhongMaterial({ color: '#0066cc' });
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

camera.position.z = 50;

const color = '#fff';
const intesity = 0.5;
const light = new THREE.DirectionalLight(color, intesity);
light.position.set(-5, 5, 100);
scene.add(light);

controls.update();

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
  torusKnot.rotation.x += 0.01;
  torusKnot.rotation.y += 0.01;
  controls.update();
}

animate();