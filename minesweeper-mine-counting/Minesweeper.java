public class Minesweeper {
    private static  int[][] MINEFIELD = {
        {0, 0, 0, 0, 9},
        {0, 0, 0, 0, 9},
        {9, 0, 0, 0, 0},
        {0, 0, 0, 9, 0},
        {0, 9, 0, 0, 0},
    };

    public static void print2DArray(int[][] grid) {
        for (int row = 0; row < grid.length; row++) {
            for (int col = 0; col < grid.length; col++) {
                System.out.print(grid[row][col] + " ");
            }
            System.out.println();
        }

    }

    public static void main(String[] args) {
        System.out.println("Original:");
        print2DArray(MINEFIELD);
        System.out.println();

        markMines(MINEFIELD);

        System.out.println("Result:");
        print2DArray(MINEFIELD);
        System.out.println();
    }

    public static int[][] markMines(int[][] mineField) {
        for (int row = 0; row < mineField.length; row++) {
            for (int col = 0; col < mineField.length; col++) {
                mineField[row][col] = countMines(mineField, row, col);
            }
        }

        return mineField;
    }

    private static int getCell(int[][] grid, int row, int col) {
        if (row < 0 || col < 0) {
            return 0;
        } else if (row >= grid.length) {
            return 0;
        } else if (col >= grid[row].length) {
            return 0;
        } else {
            return grid[row][col];
        }
    }

    private static int countMines(int[][] field, int row, int col) {
        int cell = getCell(field, row, col);
        if (cell == 9) {
            return 9;
        } else {
            int nearbyMines = 0;
            int[][] neighborDirections = {
                    {-1, 0}, {1, 0}, {0, 1}, {0, -1},  // north, south, east and west
                    {-1, -1}, {-1, 1}, {1, 1}, {1, -1} // nw, ne, se, sw
            };

            for (int i = 0; i < neighborDirections.length; i++) {
                int[] offsets = neighborDirections[i];

                int rowIndex = row + offsets[0];
                int colIndex = col + offsets[1];
                if (getCell(field, rowIndex, colIndex) == 9) {
                    nearbyMines++;
                }
            }
            return nearbyMines;
        }
    }
}