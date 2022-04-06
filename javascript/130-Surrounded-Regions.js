/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solve = function(board) {
	const m = board.length;
	const n = board[0].length;
	const directions = [[0,1], [1,0], [0,-1], [-1,0]];

	// flooding in approach
	// find all regions touching a border
	// all remaining regions are changed to X's

	function dfs(row, col) {
    board[row][col] = 'E';
		for (const direction of directions) {
			const newRow = row + direction[0];
			const newCol = col + direction[1];
			if (outOfBounds(m, n, newRow, newCol) || board[newRow][newCol] == 'X' || board[newRow][newCol] == 'E') continue;
			dfs(newRow, newCol);
		};
	};

	for (let col = 0; col < n; col++) {
		if (board[0][col] == 'O') dfs(0, col);
    if (board[m-1][col] == 'O') dfs(m-1, col);
	};

  for (let row = 0; row < m; row++) {
		if (board[row][0] == 'O') dfs(row, 0);
		if (board[row][n-1] == 'O') dfs(row, n-1);
	};

	for (let row = 0; row < m; row++) {
		for (let col = 0; col < n; col++) {
			if (board[row][col] == 'O') board[row][col] = 'X';
      else if (board[row][col] == 'E') board[row][col] = 'O';
		};
	};
	return board;
};

function outOfBounds(m, n, row, col) {
	return row < 0 || row == m || col < 0 || col == n;
};

