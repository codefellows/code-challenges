class Tower {
  public String name;
  public int height;
}

// Assume the towers look something like this, with the Ocean
// on the right. This function should return towers H, F and C.
//
//     #
//     #     #
// #   #     #
// #   # #   #   #
// # # # # # # # #    O C E A N
// A B C D E F G H~~~~~~~~~~~~~~~~~
public Set<Tower> getTowersWithViews(List<Tower> towers) {
  // Create a set to contain towers that have views.
  // Immediately return that empty set if the list of towers is empty.
  Set<Tower> results = new HashSet<>();
  if (towers.size() == 0) {
    return results;
  }

  // The tower at the end of the list is the first tower on the
  // beach and it can't possibly have another tower blocking it.
  Tower first = towers.get(towers.size() - 1);
  results.add(first);


  // go backwards through the list and keep track of the tallest
  // tower seen so far.
  int tallestHeight = first.height;
  for (int i = towers.size() - 2; i >= 0; i--) {
    if (towers.get(i).height > tallestHeight) {
      tallestHeight = towers.get(i).height;
      results.add(towers.get(i));
    }
  }

  return results;
}
