import { ListNode } from "./LinkedList";
import { LinkedList } from "./LinkedList";
import { removeNthFromEnd } from "./removeNthFromEnd";
let linkedList = new LinkedList()
linkedList.add(1)
linkedList.add(2)
linkedList.add(3)
let headNode = linkedList.head
removeNthFromEnd(headNode,2) // it will delete the 2nd node which is value =2
linkedList.print()