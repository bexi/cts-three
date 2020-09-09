import lodash, { runInContext } from 'lodash';
import hello from './testThree'
import * as THREE from 'three';
import { CircleBufferGeometry } from 'three';


function run() {
  function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
  }

    const element = document.createElement('div');
  
    element.innerHTML = lodash.join(['Hello', 'webpack'], ' ');
  
    console.log('hi there 34');

    hello('rebecka 2ß')

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );  
    camera.position.z = 5;

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    animate();

  }
  
run()