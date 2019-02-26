import Matrix4 from '../../../Library/Math/Matrix4.js'
import TestMatrix from './TestMatrix.js'

/** Class for testing the Matrix3 class. */
export default class TestMatrix4 extends TestMatrix {
    /**
     * Create and run the tests.
     */
    constructor() {
        super()
        console.info('testing Matrix4')
        this.testAdd()
        this.testSub()
        this.testMul()
        this.testMulIdentity()
        this.testRot()
    }

    // /**
    //  * Test the addition method.
    //  */
    testAdd() {
        console.info('test Matrix4.add()')
        const a = [
            1, 2, 3, 4, 
            5, 6, 7, 8,
            9, 10, 11, 12,
            13, 14, 15, 16
        ]
        const b = [
            17, 18, 19, 20,
            21, 22, 23, 24,
            25, 26, 27, 28,
            29, 30, 31, 32
        ]
        const expected = [
            18, 20, 22, 24,
            26, 28, 30, 32,
            34, 36, 38, 40,
            42, 44, 46, 48
        ]
        const m = new Matrix4(a)
        m.add(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    // /**
    //  * Test the subtraction method.
    //  */
    testSub() {
        console.info('test Matrix4.sub()')
        const a = [
            1, 2, 3, 4, 
            5, 6, 7, 8,
            9, 10, 11, 12,
            13, 14, 15, 16
        ]
        const b = [
            17, 18, 19, 20,
            21, 22, 23, 24,
            25, 26, 27, 28,
            29, 30, 31, 32
        ]
        const expected = [
            -16, -16, -16, -16,
            -16, -16, -16, -16,
            -16, -16, -16, -16,
            -16, -16, -16, -16
        ]
        const m = new Matrix4(a)
        m.sub(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    // /**
    //  * Test the multiplication method.
    //  */
    testMul() {
        console.info('test Matrix4.mul()')
        const a = [
            1, 2, 3, 4, 
            5, 6, 7, 8,
            9, 10, 11, 12,
            13, 14, 15, 16
        ]
        const b = [
            17, 18, 19, 20,
            21, 22, 23, 24,
            25, 26, 27, 28,
            29, 30, 31, 32
        ]
        const expected = [
            250, 260, 270, 280,
            618, 644, 670, 696,
            986, 1028, 1070, 1112,
            1354, 1412, 1470, 1528
        ]
        const m = new Matrix4(a)
        m.mul(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the multiplication method with an identity matrix.
     */
    testMulIdentity() {
        console.info('test Matrix4.mul() by identity matrix')
        const a = [
            1, 2, 3, 4, 
            5, 6, 7, 8,
            9, 10, 11, 12,
            13, 14, 15, 16
        ]
        const i = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ]
        const expected = a
        const m = new Matrix4(a)
        m.mul(i)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the rotation method.
     */
    testRot() {
        console.info('test Matrix4.rot()')
        const α = 90
        const a = [
            1, 2, 3, 4, 
            5, 6, 7, 8,
            9, 10, 11, 12,
            13, 14, 15, 16
        ]
        const expected = [
            -5, -6, -7, -8, 
            1, 2, 3, 4, 
            9, 10, 11, 12, 
            13, 14, 15, 16
        ]
        const m = new Matrix4(a)
        m.rot(α)
        const actual = m.elements
        this.assertIdenticalRounded(actual, expected)
    }
}