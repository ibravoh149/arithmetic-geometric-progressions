const assert = require('chai').assert;
const app = require('../app/app.js');
const expect = require('chai').expect;

describe('Aritmetic or Geometric or Neither', () => {
	
	describe('Aritmetic', () => {
		it('should return Aritmetic for [5, 10, 15, 20]', () => {
			expect(app.aritGeo([5, 10, 15, 20])).to.equal('Aritmetic');
		});

		it('should return Aritmetic for [-2, -3, -4, -5]', () => {
			expect(app.aritGeo([-2, -3, -4, -5])).to.equal('Aritmetic');
		});

		it('should return Aritmetic for [0.5, 1, 1.5, 2, 2.5]', () => {
			expect(app.aritGeo([0.5, 1, 1.5, 2, 2.5])).to.equal('Aritmetic');
		});

		it('should return Aritmetic for [-0.3, -0.6, -0.9, -1.2]', () => {
			assert.equal(app.aritGeo([15, 10, 5, 0, -5, -10]), 'Aritmetic')
		});
	})

	describe('Geometric', () => {
		it('should return Geometric for [3, 6, 12, 24]', () => {
			expect(app.aritGeo([3, 6, 12, 24])).to.equal('Geometric');
		});

		it('should return Geometric for [-4, -8, -16, -32]', () => {
			assert.equal(app.aritGeo([-4, -8, -16, -32]), 'Geometric')
		});

		it('should return Geometric for [-128, 64, -32, 16, -8]', () => {
			expect(app.aritGeo([-128, 64, -32, 16, -8])).to.equal('Geometric');
		});

		it('should return Geometric for [2, 6, 18, 54]', () => {
			expect(app.aritGeo([2, 6, 18, 54])).to.equal('Geometric');
		});
	})

	describe('Neither Geometric or Aritmetic', () => {
		it('should return -1 for [3, 7, 8 ,10]', () => {
			assert.equal(app.aritGeo([3, 7, 8, 10]), -1)
		});

	})

	describe('Empty Array', () => {
		it('should return 0 for []', () => {
			expect(app.aritGeo([])).to.equal (0);
		});

	})
})