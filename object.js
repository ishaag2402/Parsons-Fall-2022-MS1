class Sphere {

  constructor(SphereRadius,SphereColor){

    this.sphere = new THREE.SphereGeometry(SphereRadius,SphereRadius*25,SphereRadius*25);
    this.material = new THREE.MeshBasicMaterial({
      color: SphereColor,
      transparent: true,
      opacity: 0.65
    });
    this.mesh = new THREE.Mesh(this.sphere,this.material);

    // this.ophoto = new THREE.TextureLoader();
    // this.omaterial = new THREE.SpriteMaterial({
    //   map: this.ophoto,
    //   // color: 0xff0000,
    //   transparent: true,
    //   opacity: 1
    // });
    // this.osprite = new THREE.Sprite(this.omaterial);

  }

  drawSphere(SphereScene,SphereX,SphereY,SphereZ){
    this.mesh.position.set(SphereX,SphereY,SphereZ);
    SphereScene.add(this.mesh);
  }

  // drawPhoto(SpherePhotoScene,SpherePhoto){
  //   this.ophoto.load("images/image"+SpherePhoto+".png");
  //   this.osprite.position.set(0,0,0);
  //   this.osprite.scale.set(50,50,1);
  //   SpherePhotoScene.add(this.osprite);
  // }

}

// let photos = [];
// for (let j=0;j<data.length;j++){
//   photos[j] = new THREE.TextureLoader().load("images/image"+j+".png");
// };


  //draw data
  // for (let i=0; i<data.length; i++){

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
    // omaterial[i] = new THREE.SpriteMaterial({
    //   map: photos[i],
    //   // color: 0xff0000,
    //   transparent: true,
    //   opacity: 0.5
    // });
    // osprite[i] = new THREE.Sprite(omaterial[i]);
    // osprite[i].position.set(0,0,0);
    // osprite[i].scale.set(50,50,1);
    // // oscene.add(osprite[i]);

  // }
