"use strict";

require("../src/feedforwardNeuralNetworks");
var Matrix = require('ml-matrix');

describe('Feedforward Neural Networks', function () {
    it('Training the neural network with XOR', function () {
        var X = Matrix([[0, 0], [0, 1], [1, 0], [1, 1]].reverse());

        var labels = [0, 1, 1, 0];

        var xorNeuralNetwork = new FeedforwardNeuralNetworks();
        xorNeuralNetwork.train(X, labels, 0.8, 0.5, 2, 1500, 15);
        var result = xorNeuralNetwork.predict(Matrix([[1, 1], [0, 1], [1, 0], [0, 0]]));

        (result[0][0] > result[0][1]).should.be.equal(false);
        (result[1][0] > result[1][1]).should.be.equal(true);
        (result[2][0] > result[2][1]).should.be.equal(true);
        (result[3][0] > result[3][1]).should.be.equal(false);
    });
});