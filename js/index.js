
import * as THREE from './build/three.module.js';
import { FBXLoader } from '../js/examples/jsm/loaders/FBXLoader.js';

const  renderer = new THREE.WebGLRenderer({alpha: true, canvas: document.querySelector(".bio canvas")});
renderer.setClearColor( 0x000000, 0 ); 

const  camera = new THREE.PerspectiveCamera(70, 2, 1, 1000);
camera.position.z = 600;
camera.position.x = 50;
camera.position.y = 40;

const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(200, 200, 200);
const material = new THREE.MeshPhongMaterial({
  color: 0x555555,
  specular: 0xffffff,
  shininess: 50,
  shading: THREE.SmoothShading
});

let tv = null;
let joystick = null;
let mouse = null;
let skull = null;
const loader = new FBXLoader();
const TextureLoader = new THREE.TextureLoader();
const SkullTexture = TextureLoader.load('../textures/noisetexSkull.png');
SkullTexture.repeat = new THREE.Vector2(0.1,0.1);
console.log(SkullTexture);
loader.load( '../models/tv.fbx', function ( object ) {
    tv = object;
    object.traverse( function ( child ) {

        if ( child.isMesh ) {

            child.castShadow = true;
            child.receiveShadow = true;
        }
    } );
    tv.position.x = 50;
    tv.scale.set(1.5,1.5,1.5);
    scene.add( object );
} );

loader.load( '../models/joystick.fbx', function ( object ) {
  joystick = object;
  object.traverse( function ( child ) {

      if ( child.isMesh ) {

          child.castShadow = true;
          child.receiveShadow = true;
      }
  } );
  joystick.position.y = -200;
  joystick.position.x = -75;
  joystick.scale.set(1.5,1.5,1.5);
  scene.add( object );
} );

loader.load( '../models/mouse.fbx', function ( object ) {
  mouse = object;
  object.traverse( function ( child ) {

      if ( child.isMesh ) {

          child.castShadow = true;
          child.receiveShadow = true;
      }
  } );
  mouse.position.y = -200;
  mouse.position.x = 175;
  mouse.scale.set(1.5,1.5,1.5);
  scene.add( object );
} );
let pageName = window.location.pathname;
let modelPath = null;
switch(pageName){
  case '/yolk.html':
    modelPath = '../models/egg.fbx';
    break;

  case '/grandma.html':
    modelPath = '../models/Salt.fbx';
    break;
  
  case '/index.html':
    console.log("on home page");
    modelPath = '../models/skull.fbx';
    break;
  
  case '/trackball.html':
    modelPath = '../models/trackball.fbx';
  break;

  case '/trackball.html':
    modelPath = '../models/trackball.fbx';
  break;

  case '/climbing.html':
    modelPath = '../models/climbing.fbx';
  break;
  
  default: 
    modelPath = '../models/skull.fbx';
    break;
    
}
loader.load( modelPath, function ( object ) {
  skull = object;
  object.traverse( function ( child ) {
      if ( child.isMesh ) {
          child.castShadow = true;
          child.receiveShadow = true;
      }
  } );
  skull.scale.set(0.35,0.35,0.35);
  skull.position.y = 85;
  skull.position.z = 55;
  if( modelPath == '../models/skull.fbx') {
    skull.children[0].material[1]= new THREE.MeshBasicMaterial({
      map: SkullTexture
    })
  }
  tv.add( object );
} );

const light1 = new THREE.PointLight(0xffffff, 2, 0);
light1.position.set(200, 100, 300);
scene.add(light1);
const light2 = new THREE.AmbientLight(0xffffff, 0.9);
scene.add(light2);

function resizeCanvasToDisplaySize() {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  if (canvas.width !== width ||canvas.height !== height) {
    // you must pass false here or three.js sadly fights the browser
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    // set render target sizes here
  }
}

function animate(time) {
  time *= 0.001;  // seconds

  resizeCanvasToDisplaySize();

  if(tv != null){
    tv.rotation.y = 0.25*Math.sin(0.3*time);
  }
  if(joystick != null){
    joystick.position.y += 0.075 * Math.sin(2.8 * time + 10);
  }
  if(mouse != null){
    mouse.position.y += 0.075 * Math.sin(2.8 * time + 20);
  }


  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);