class ListNode {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.root = null
  }

  prepend(value) {
    let node = new ListNode(value)
    node.next = this.root
    this.root = node
  }

  isAscending() {
    let current = this.root
    while (current && current.next) {
      if (current.value > current.next.value) {
        return false
      }
      current = current.next
    }
    return true
  }

  isSorted() {
    let isAscending = true
    let isDescending = true

    let current = this.root
    while (current && current.next) {
      if (current.value < current.next.value) {
        isDescending = false
      } else if (current.value > current.next.value) {
        isAscending = false
      }
      current = current.next
    }

    return isAscending || isDescending
  }
}

module.exports = LinkedList
