class IslandCounter
  def count_islands(grid)
    # Initialize 2-dimensional array of visited sites
    visited = []
    grid.each_with_index do |_, i|
      visited[i] = []
    end
    # Initialize counter to 0
    count = 0
    # Loop over the grid, which is a 2-dimensional array
    grid.each_with_index do |x_array, x|
      x_array.each_with_index do |_, y|
        # If the site is land AND we have not visited it yet
        if grid[x][y] == 1 && !visited[x][y]
          count += 1
          # Mark the site as visited and then visit all the adjacent sites
          mark_site(grid, x, y, visited)
        end
        visited[x][y] = true
      end
    end
    return count
  end

  private

  # Helper function to mark a space on the grid as visited
  def mark_site(grid, x, y, visited)
    # Can't go out of bounds
    return if x < 0 || x > grid.length - 1 || y < 0 || y > grid[x].length - 1
    # Have we already visited the site?
    return if visited[x][y]
    # Mark the site as visited
    visited[x][y] = true
    # Break and go to the next action if we're not on land
    return if (grid[x][y] == 0)
    # Recurse to visit all adjacent sites
    mark_site(grid, x - 1, y, visited)
    mark_site(grid, x + 1, y, visited)
    mark_site(grid, x, y - 1, visited)
    mark_site(grid, x, y + 1, visited)
  end
end

# This example grid should return 6 islands, including one second-order island
example_grid = [
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

app = IslandCounter.new
puts app.count_islands(example_grid)
