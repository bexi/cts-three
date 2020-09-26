import * as THREE from 'three';

function run() {

    function animate() {
      requestAnimationFrame( animate );
      renderer.render( scene, camera );
    }
  
      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

      camera.position.z = 5;

      const geometry: THREE.BoxGeometry = new THREE.BoxGeometry(1,1,1)
      const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({ color: '#eab8b2', wireframe: true })
      const cube: THREE.Mesh = new THREE.Mesh(geometry, material)
      scene.add(cube)
      cube.position.set(0, 0, 0);
  
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( renderer.domElement );
  
      animate();
  }
  
run()