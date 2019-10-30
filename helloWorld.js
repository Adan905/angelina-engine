const canvas = document.getElementById('glcanvas');

const initShader = (gl, vsShader, fsShader)=>{

}

const main = ()=>{
    const gl = canvas.getContext('webgl');

    if (!gl) {
        alert("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    }

    initShader(gl, vsSource, fsShader)

    const loadShader = (gl, type, source)=>{
        const shader = gl.creeateShader(type);
        
    }
    

    gl.shaderSource(shader, )

    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

window.onload = main;