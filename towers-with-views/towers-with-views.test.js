const towersWithViews = require('./towers-with-views.js');

describe("", () => {
  it("should return an empty list for an empty list", () => {
    let input = [];
    let result = towersWithViews(input);
    let expected = [];
    expect(result).toEqual(expected);
  })

it("should return one tower when there's just one tower", () => {
  let input = [1];
  let result = towersWithViews(input);
  let expected = [0];
  expect(result).toEqual(expected);
})

  it("should handle the simpe case when there's just one tower blocking one other tower", () => {
    let input = [1, 2];
    let result = towersWithViews(input);
    let expected = [1];
    expect(result).toEqual(expected);
  })

  /*
   * Here's the example shown in the README
   * It could be represented simply as an array like this
   *
   * [2,1,3,2,1,5,2,4]
   *
   * in which case the returned list would refer to the indexes of the towers
   *
   * [0,  2,    5    ]
   *
   * or as a map with names and heights like this, but if it's a map make sure
   * there's a good way to keep track of the order! Objects and maps don't
   * necessarrily represent order.
    
    {
     'A': 2,
     'B': 1,
     'C': 3,
     'D': 2,
     'E': 1,
     'F': 5,
     'G': 2,
     'H': 4,
    }
        #     
        #     #   
    #   #     #   
    #   # #   #   #
    # # # # # # # #    O C E A N
    A B C D E F G H~~~~~~~~~~~~~~~~~ 
  [     2     5   7 ]
  */
  it("should handle the complicated case presented in the README", () => {
    let input = [3, 1, 5, 2, 1, 4, 1, 2];
    let result = towersWithViews(input);
    let expected = [2, 5, 7];
    expect(result).toEqual(expected);
  })
})
