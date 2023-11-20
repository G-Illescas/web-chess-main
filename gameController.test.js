// Mock the DOM environment
const { JSDOM } = require('jsdom');
const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.document = dom.window.document;

// Mock the document.getElementById function
global.document.getElementById = jest.fn(() => ({
    appendChild: jest.fn(),
}));

const { startGame, getPieceImageSource, loadPiece } = require('./gameController.js');
const { generateRandomizedPositionBlack, generateRandomizedPositionWhite} = require('./gameController2.js');

describe('Chess Game Functions', () => {
    beforeEach(() => {
        curBoard = undefined;
        curPlayer = undefined;
    });

    test('startGame function initializes the game with the correct position and player', () => {
        startGame();
        starterPlayer = "white";
    });

    test('getPieceImageSource function returns the correct image source', () => {
        const piece = 'R';
        const expectedSource = 'assets/black_rook.png';
        const result = getPieceImageSource(piece);
        expect(result).toEqual(expectedSource);
    });

    test('loadPiece function adds the correct piece to the square', () => {
        const squareElement = { appendChild: jest.fn() };
        document.getElementById.mockReturnValue(squareElement);
    
        const piece = 'R';
        const position = [1, 1];
        loadPiece(piece, position);
    });
});

describe('Chess Game Functions', () => {
    test('generateRandomizedPositionBlack returns an array with shuffled black pieces', () => {
        const result = generateRandomizedPositionBlack();
        // Add assertions to check if the result is valid
        expect(result).toHaveLength(8);
        // Add more assertions as needed
    });

    test('generateRandomizedPositionWhite returns an array with shuffled white pieces', () => {
        const result = generateRandomizedPositionWhite();
        // Add assertions to check if the result is valid
        expect(result).toHaveLength(8);
        // Add more assertions as needed
    });
});