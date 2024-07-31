import { ListNode } from "./LinkedList";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let current = head;
  let count: number=0;

  //moving to last head
  while (current !== null) {
    count++;
    current = current.next;
  }
  let postion = count-n;
  if (postion == 0){
    return head?head.next:null; // if head is exist it means its the only node so the next to it is null else it means
  }
  
current=head;// rest current to travers to tagret node
for (let i = 0; i < postion - 1; i++) {
    current = current!.next;
}
current!.next = current!.next!.next;// delete the target node by skipping it 
return head;
}
export {removeNthFromEnd}