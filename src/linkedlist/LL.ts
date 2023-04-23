export class N<T> {
  private value: T
  private n?: N<T> | null
  constructor(val : T) {
    this.value = val
    this.n = null
  }
  set val(val: T) { this.value = val }
  get val() { return this.value }

  set next(val: N<T> | null) { this.n = val}
  get next() { return this.n as N<T> }
}
export default class LLL<T>{
  private size:number = 0
  public first?:N<T> | null
  public last?:N<T> | null
  constructor(){
    this.first = null
    this.last = null
  }
   push(val:T):void{
    const node = new N<T>(val)
    if(this.isEmpty()){
      this.first = this.last = node
    }else{
      node.next = this.first as N<T>
      this.first = node
    }
    this.size++
  }

  isEmpty(): boolean { return this.size === 0}
  value() {
    let current = this.first
    while (current) {
      console.log(current.val)
      current = current.next
    }
  }
  pop(): unknown {
    if(this.isEmpty()) return false;
    let lastItem = null
    if(this.count() == 1) {
      lastItem = this.first
      this.first = this.last = null
    } else {
      lastItem = this.last
      this.last = this.getPrevLast() as N<T>
    }
    this.size--
    return lastItem
  }
  shift() {  // like pop but it takes the first item and remove it from items
    if(this.isEmpty()) return false
    let first = this.first
    if(this.first == this.last) { // means item is 1
      this.first = this.last = null
    }else{
      this.first = this.first?.next
      first!.next = null
    }
    this.size--
    return first
  }
  unshift(val:T) { // insert first
    // insert last because push take this purpose's function
    const node = new N(val)
    if(this.isEmpty()) {
      this.first = this.last = node
    }else{
      // new node must be last val
      this.last!!.next = node
      this.last = node
    }
    this.size++
  }

  delete(val:T){
    if(this.isEmpty()){
      return "items is empty"
    }
    let isF = false;
    if(this.first?.val === val){
      this.first = this.first.next
      isF = true
    }else{
      let current = this.first,
          prev = current;

      while (current != null) {
        if(current.val === val) {
          prev!.next = current.next
          isF = true
          break
        }
        prev = current // val before current
        current = current.next
     }
    }
    if (isF) {
     this.size--
     return true
    }
    return -1
  }
  count() {return this.size}
  getPrevLast():N<T> | string {
    if(this.isEmpty())return "items is empty"

    let current = this.first,
      prev = null;
    while (current != null){
      if (current.next == this.last) {
        prev =  current
        current.next = null
      }
      current = current.next
    }
    return prev as N<T>
  }

}

// const l = new LLL()
// l.push(10)
// l.push(20)
// l.push(30)
// l.push(40)
// const prev = l.getPrevLast()
// console.log(prev, l)
