class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
class LinkedList {
  public head : ListNode | null;
  constructor(){
    this.head = null;
  }
  add(data: number): void {
    if (!this.head) {
      let newNode = new ListNode(data)
      this.head = newNode
    }else{
      let current = this.head
      while(current.next !== null){
        current = current.next
    }
    let newNode = new ListNode(data)
    current.next = newNode
  }
}
print():void{
  let current = this.head
  while(current !== null){
    console.log(current.val)
    current=current.next
  }
}
}
export {ListNode ,LinkedList}

