import Vector2 from '../../../Library/Math/Vector2.js'
import TestMatrix from './TestMatrix.js'

/** Class for testing the Vector2 class. */
export default class TestVector2 extends TestMatrix {
    /**
     * Create and run the tests.
     */
    constructor() {
        super()
        console.info('testing Vector2')
        this.testAdd()
        this.testSub()
        this.testRot()
    }

    /**
     * Test the addition method.
     */
    testAdd() {
        console.info('test Vector2.add()')
        const a = new Vector2(1, 3)
        const b = new Vector2(7, 9)
        a.add(b)
        this.assertIdentical([a.x, a.y], [8, 12])
    }

    /**
     * Test the subtraction method.
     */
    testSub() {
        console.info('test Vector2.sub()')
        const a = new Vector2(1, 3)
        const b = new Vector2(7, 9)
        a.sub(b)
        this.assertIdentical([a.x, a.y], [-6, -6])
    }
    /**
     * Test the rotation method.
     */
    testRot() {
        console.info('test Matrix2.rot()')
        const α = 90
        const a = new Vector2(1, 3)
        a.rot(α)
        this.assertIdenticalRounded([a.x, a.y], [-3, 1])
    }
}