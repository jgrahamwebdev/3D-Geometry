
const scene = new THREE.Scene();

const ambientLights = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLights);

const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(50, 0, 500);
scene.add(dirLight);

const camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 4, 100 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.SphereGeometry(2, 10, 80, 50, 400, 20, 8);
const material = new THREE.MeshPhongMaterial( { color: 0x3498db } );
const shape = new THREE.Mesh( geometry, material );
scene.add(shape);

camera.position.z = 5;

const animate = function () {
  requestAnimationFrame( animate );

  shape.rotation.x += 0.01;
  shape.rotation.y += 0.01;

  renderer.render( scene, camera );
};
animate();


// constructor: radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength
//let sphere = new THREE.SphereBufferGeometry(0, 0, 0, 0, 0, 0, 0); //r72



/*
const material = new THREE.ShaderMaterial({
  uniforms: {
    color1: {
      value: new THREE.Color("blue")
    },
    color2: {
      value: new THREE.Color("green")
    }
  },
  vertexShader: `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 color1;
    uniform vec3 color2;
  
    varying vec2 vUv;
    
    void main() {
      
      gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
    }
  `,
  wireframe: true
});
*/