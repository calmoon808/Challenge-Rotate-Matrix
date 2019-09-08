const Direction = require("./Direction").Direction;

/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
module.exports = class MatrixRotator {
  constructor( matrix ) {
    this.matrix = matrix;
  }

  //      |-- Must be Direction.CW
  //      v        or Direction.CCW
  rotate (direction) {
    // do work here
    let newMatrix = [];
    if (direction === Direction.CCW){
      for (let i = 0; i < this.matrix.length; i++){
        let newArr = [];
        for(let j = 0; j < this.matrix.length; j++){
          newArr.push(this.matrix[j][i])
        }
        newMatrix.unshift(newArr);
      }
      this.matrix = newMatrix;
    } else if (direction === Direction.CW){
      for (let i = this.matrix.length - 1; i >= 0; i--){
        let newArr = [];
        for(let j = this.matrix.length - 1; j >= 0; j--){
          newArr.push(this.matrix[j][i])
        }
        newMatrix.unshift(newArr);
      }
      this.matrix = newMatrix;
    }
  }
};