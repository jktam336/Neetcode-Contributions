/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
	const m = grid.length;
	const n = grid[0].length;
	let maxArea = 0;
	const directions = [[0,1], [1,0], [0,-1], [-1,0]];

	function dfs(row, col) {
		let currArea = 1;
		grid[row][col] = 0;
		for (const direction of directions) {
			const newRow = row + direction[0];
			const newCol = col + direction[1];
			if (outOfBounds(m, n, newRow, newCol) || grid[newRow][newCol] == 0) continue;
			currArea += dfs(newRow, newCol);
		};
		return currArea;
	};

	// for each cell
	for (let row = 0; row < m; row++) {
		for (let col = 0; col < n; col++) {
			if (grid[row][col] == 0) continue;

		// if land, perform dfs to find size of island
		const area = dfs(row, col);
			maxArea = Math.max(maxArea, area);
		};
	};
	return maxArea;
};

function outOfBounds (m, n, row, col) {
	return row < 0 || row == m || col < 0 || col == n;
};
