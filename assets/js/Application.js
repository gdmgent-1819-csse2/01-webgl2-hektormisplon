import Canvas from './Library/Canvas.js'
import Tests from './Tests/Tests.js'

/** Class for the application. */
export default class Application {
    /**
     * Create a new application
     */
    constructor() {
        console.info('Opdracht 01 | WebGL2')
        console.info('____________________')
        const tests = true
        if (tests) {
            new Tests()
            this.shaderSources = {
                fragment: null,
                vertex: null,
            }
            this.preloader()
        }
    }
    /**
     * Load in shaders (asynchronous) before calling run
     */
    async preloader() {
        console.info('Preloading source code for shaders')
        await fetch('./assets/glsl/vertex-shader.glsl')
            .then(response => response.text())
            .then(source => this.shaderSources.vertex = source)
            .catch(error => console.error(error.message))
        await fetch('./assets/glsl/fragment-shader.glsl')
            .then(response => response.text())
            .then(source => this.shaderSources.fragment = source)
            .catch(error => console.error(error.message))
        this.run()
    }
    /**
     * Create an instance of @class Canvas
     */
    run() {
        const width = 600
        const height = 480

        new Canvas(width, height, this.shaderSources)
    }
}
