def zip_linked_lists(linked_1, linked_2):
    curr = linked_1.head
    
    while linked_2 is not None:
        if curr.next is None: 
            curr.next = linked_2.head
            return linked_1
        
        temp_1 = curr.next
        curr.next = linked_2.head
        temp_2 = linked_2.head.next
        linked_2.head.next = temp_1
        curr = temp_1
        linked_2.head = temp_2
    
    retrun linked_1
