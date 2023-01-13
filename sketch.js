import { OrbitControls } from "https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js";

//setup
let camera, scene, renderer;
//data
let sphere = [];
//background
let bgscene, bgmesh, bgload;
//mouse interaction
let raycaster, mouse;
let currentIntersection = null;
//overlays
// let oscene, ocamera;
// let osprite = [];
// let omaterial = [];


draw();
animate();

//draw
function draw() {

  //setup
  //camera
  camera = new THREE.PerspectiveCamera(
    50, //fov
    window.innerWidth / window.innerHeight, //aspect
    0.01, //near plane
    2000 //far plane
  );
  camera.position.set(-15,40,355);
  // camera.position.set(-15,40,-355);
  // camera.position.set(20,20,20);
  //mouse interaction
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();
  //scene setup
  scene = new THREE.Scene();

  //overlays
  // ocamera = new THREE.OrthographicCamera( 
  //   window.innerWidth / - 2, 
  //   window.innerWidth / 2, 
  //   window.innerHeight / 2, 
  //   window.innerHeight / - 2,
  //   -500, 
  //   1000 
  // );
  // ocamera.position.set(0,0,0);
  // oscene = new THREE.Scene();

  //draw data
  for (let i=0;i<data.length;i++){
    sphere[i] = new Sphere(data[i].radius,data[i].color);
    sphere[i].drawSphere(scene,data[i].x,data[i].y,(data[i].radius+data[i].z));
    // sphere[i].drawPhoto(oscene,data[i].index);
  }  
  
  //draw background
  bgscene = new THREE.Scene();
  const imagesize = 285;
  var bg = new THREE.PlaneGeometry(imagesize,6*imagesize);
  bgload = new THREE.TextureLoader().load("assets/base.png");
  var bgmaterial = new THREE.MeshBasicMaterial({ 
    map: bgload,
    // color: 0xffff00, 
    transparent: true, 
    opacity: 1
  });
  bgmesh = new THREE.Mesh(bg,bgmaterial);
  bgmesh.position.set(0,0,0);
  bgmesh.rotation.set(Math.PI/2,Math.PI,Math.PI);
  bgscene.add(bgmesh);

  

  //renderer
  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x050A25);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  //add mouse interaction to renderer
  renderer.domElement.addEventListener('pointermove', onMouseMove, false);
  //resize window
  window.addEventListener('resize',()=>{
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight;  
    camera.updateProjectionMatrix();
  });

}

//mouse interaction
function onMouseMove(event) {

  mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
  mouse.y = - (event.clientY / renderer.domElement.clientHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObject(scene, true);
  
  // for (let i=0;i<data.length;i++){
  if (intersects.length > 0) {
    currentIntersection = intersects[0].object;
    currentIntersection.material.opacity = 1;
    // console.log(currentIntersection.index);
    console.log("intersect");
  } else {
    if (currentIntersection !== null) {
      currentIntersection.material.opacity = 0.55;
      currentIntersection = null;
      console.log("remove");
    }
  }
  // }

}

//render
function animate() {
  requestAnimationFrame(animate);
  renderer.clear();
  renderer.render(scene, camera);
  renderer.autoClear = false;
  renderer.render(bgscene, camera);
  // renderer.clearDepth();
  // renderer.render(oscene,ocamera);
}

//orbit controls
const controls = new OrbitControls(camera,renderer.domElement);