const countIslands = grid => {
  // Helper function to mark a space on the grid as visited
  const markSite = (grid, x, y, visited) => {
    // Can't go out of bounds
    if (x < 0 || x > grid.length - 1 || y < 0 || y > grid[x].length - 1) {
    	return
    }
    // Have we already visited the site?
    if (visited[x][y] === true) {
    	return
    }
    // Mark the site as visited
    visited[x][y] = true
    // Break and go to the next action if we're not on land
    if (grid[x][y] === 0) {
    	return
    }
    // Recurse to visit all the adjacent sites
    markSite(grid, x - 1, y, visited)
    markSite(grid, x + 1, y, visited)
    markSite(grid, x, y - 1, visited)
    markSite(grid, x, y + 1, visited)
  }

  // Initialize 2-dimensonal array of visited sites
  let visited = []
  for (let i = 0; i < grid.length; i++ ) {
  	visited[i] = []
  }

  // Initialize counter to 0
  let count = 0
  // Loop over the grid, which is a 2-dimensional array
  for (let x = 0; x < grid.length; x++) {
  	for (let y = 0; y < grid[x].length; y++) {
      // If we have not visited this site and it is an island
  	  if (grid[x][y] === 1 && !visited[x][y]) {
  	  	count += 1
        // Mark the site as visited and then visit all the adjacent sites
  	  	markSite(grid, x, y, visited)
  	  }
      visited[x][y] = true
  	}
  }
  return count
}

// This example grid should return 6 islands, including one second-order island
const exampleGrid = [
  [0, 0, 0, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 1, 1, 0],
  [1, 1, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 0, 1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 1, 0, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1]
]

console.log(countIslands(exampleGrid))
