import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Szene, Kamera und Renderer initialisieren
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('donut').appendChild(renderer.domElement);

// OrbitControls für die Interaktivität
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.screenSpacePanning = false;
controls.maxPolarAngle = Math.PI / 2;

// GLTFLoader für das Laden der .glb Datei
const loader = new GLTFLoader();
loader.load('./glb/donut.glb', (gltf) => {
    // Das geladene Modell zur Szene hinzufügen
    scene.add(gltf.scene);
    // Das Modell umpositionieren (falls nötig)
    gltf.scene.position.set(0, 0, 0);

    // Kameraeinstellung, damit das Modell sichtbar wird
    camera.position.z = 5;
    
    // Animationsloop
    animate();
}, undefined, (error) => {
    console.error('Ein Fehler ist beim Laden des Modells aufgetreten:', error);
});

// Resize Event für die Anpassung der Ansicht
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// Animationsloop
function animate() {
    requestAnimationFrame(animate);

    // Aktualisiere die Steuerung
    controls.update();

    // Renderer mit der Szene und der Kamera anzeigen
    renderer.render(scene, camera);
}

const text = "Erfindungen von Schüler*innen am Gymnasium Langenhagen!";
const initialDelay = 500; // milliseconds
const letterDelay = 50; // milliseconds

let index = 0;

function writeText() {
  document.getElementById('text').innerText = text.slice(0, index);
  index++;
  
  if(index <= text.length) {
    setTimeout(writeText, letterDelay);
  }
}

setTimeout(writeText, initialDelay);

document.addEventListener("DOMContentLoaded", function() {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navLinks = document.getElementById('nav-links');

  hamburgerMenu.addEventListener('click', function() {
      navLinks.classList.toggle('show');
  });
});