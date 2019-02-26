import Matrix3 from '../../../Library/Math/Matrix3.js'
import TestMatrix from './TestMatrix.js'

/** Class for testing the Matrix3 class. */
export default class TestMatrix3 extends TestMatrix {
    /**
     * Create and run the tests.
     */
    constructor() {
        super()
        console.info('testing Matrix3')
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
        console.info('test Matrix3.add()')
        const a = [
            1, 2, 3,
            4, 5, 6,
            7, 8, 9
        ]
        const b = [
            10, 11, 12,
            13, 14, 15,
            16, 17, 18
        ]
        const expected = [
            11, 13, 15,
            17, 19, 21,
            23, 25, 27
        ]
        const m = new Matrix3(a)
        m.add(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    // /**
    //  * Test the subtraction method.
    //  */
    testSub() {
        console.info('test Matrix3.sub()')
        const a = [
            1, 2, 3,
            4, 5, 6,
            7, 8, 9
        ]
        const b = [
            10, 11, 12,
            13, 14, 15,
            16, 17, 18
        ]
        const expected = [
            -9, -9, -9,
            -9, -9, -9,
            -9, -9, -9
        ]
        const m = new Matrix3(a)
        m.sub(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    // /**
    //  * Test the multiplication method.
    //  */
    testMul() {
        console.info('test Matrix3.mul()')
        const a = [
            1, 2, 3,
            4, 5, 6,
            7, 8, 9
        ]
        const b = [
            10, 11, 12,
            13, 14, 15,
            16, 17, 18
        ]
        const expected = [
            84, 90, 96,
            201, 216, 231,
            318, 342, 366
        ]
        const m = new Matrix3(a)
        m.mul(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the multiplication method with an identity matrix.
     */
    testMulIdentity() {
        console.info('test Matrix2.mul() by identity matrix')
        const a = [
            1, 2, 3,
            4, 5, 6,
            7, 8, 9
        ]
        const i = [
            1, 0, 0,
            0, 1, 0,
            0, 0, 1,
        ]
        const expected = a
        const m = new Matrix3(a)
        m.mul(i)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the rotation method.
     */
    testRot() {
        console.info('test Matrix2.rot()')
        const α = 90
        const a = [
            1, 2, 3,
            4, 5, 6,
            7, 8, 9
        ]
        const expected = [
            -4, -5, -6,
            1, 2, 3,
            7, 8, 9
        ]
        const m = new Matrix3(a)
        m.rot(α)
        const actual = m.elements
        this.assertIdenticalRounded(actual, expected)
    }
}