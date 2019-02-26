import Tests from './Tests/Tests.js'
import Vector2 from './Library/Math/Vector2.js'

/** Class for the application. */
export default class Application {
    /**
     * Create a new application.
     */
    constructor() {

        console.info('Opdracht 01 | WebGL2')
        console.info('____________________')
        const tests = true
        if (tests) {
            new Tests()
        }

        // demo
        
        // const v1 = new Vector2
        // const v2 = new Vector2(1.5, 2.5)
        // console.log('start:', v1, v2)
        // v1.sub(v2)
        // console.log('v1 - v2:', v1, v2)
        // const a = 10
        // v1.scalar(a)
        // console.log('a * v1:', a, v1)
        // console.log('norm of v1:', v1.norm())
        // const v3 = new Vector2(3, 5)
        // const v4 = new Vector2(5, 3)
        // const v5 = new Vector2(-3, -5)
        // console.log('v3 . v4:', v3.dot(v4))
        // console.log('v4 . v5:', v4.dot(v5))
        // const v6 = new Vector2(3, 1)
        // console.log('v6', v6)
        // v6.rot(90)
        // console.log('v6.rot(90)', v6)
    }
}