const LinkedList = require('./is-linked-list-sorted.js');

const EMPTY_LIST = new LinkedList()
const ONE_ITEM_LIST = new LinkedList()
const SORTED_TWO_ITEM_LIST = new LinkedList()
const UNSORTED_TWO_ITEM_LIST = new LinkedList()
const SORTED_MANY_ITEM_LIST = new LinkedList()
const UNSORTED_MANY_ITEM_LIST = new LinkedList()
const DESCENDING_LIST = new LinkedList()

ONE_ITEM_LIST.prepend(1)

UNSORTED_TWO_ITEM_LIST.prepend(1)
UNSORTED_TWO_ITEM_LIST.prepend(2)

SORTED_MANY_ITEM_LIST.prepend(5)
SORTED_MANY_ITEM_LIST.prepend(4)
SORTED_MANY_ITEM_LIST.prepend(3)
SORTED_MANY_ITEM_LIST.prepend(2)
SORTED_MANY_ITEM_LIST.prepend(1)

UNSORTED_MANY_ITEM_LIST.prepend(4)
UNSORTED_MANY_ITEM_LIST.prepend(5)
UNSORTED_MANY_ITEM_LIST.prepend(3)
UNSORTED_MANY_ITEM_LIST.prepend(2)
UNSORTED_MANY_ITEM_LIST.prepend(1)

DESCENDING_LIST.prepend(1)
DESCENDING_LIST.prepend(2)
DESCENDING_LIST.prepend(3)
DESCENDING_LIST.prepend(4)
DESCENDING_LIST.prepend(5)

describe("isAscending", () => {
  it("should return true for an empty list", () => {
    expect(EMPTY_LIST.isAscending()).toBe(true)
  })

  it("should return true for a single-item list", () => {
    expect(ONE_ITEM_LIST.isAscending()).toBe(true)
  })

  it("should return true for an ascending many-item list", () => {
    expect(SORTED_MANY_ITEM_LIST.isAscending()).toBe(true)
  })

  it("should return false if items aren't ascending", () => {
    expect(UNSORTED_TWO_ITEM_LIST.isAscending()).toBe(false)
  })

  it("should return false if many items aren't ascending", () => {
    expect(UNSORTED_MANY_ITEM_LIST.isAscending()).toBe(false)
  })
})

describe("isSorted", () => {
  it("should return true for an empty list", () => {
    expect(EMPTY_LIST.isSorted()).toBe(true)
  })

  it("should return true for a single-item list", () => {
    expect(ONE_ITEM_LIST.isSorted()).toBe(true)
  })

  it("should return true for an ascending many-item list", () => {
    expect(SORTED_MANY_ITEM_LIST.isSorted()).toBe(true)
  })

  it("should return true for a descending list", () => {
    expect(DESCENDING_LIST.isSorted()).toBe(true)
  })

  it("should return false if it's not sorted in either order", () => {
    expect(UNSORTED_MANY_ITEM_LIST.isSorted()).toBe(false)
  })
})
