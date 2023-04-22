import LLL from "../LL";
import { N } from '../LL'

describe('LL class', () => {
  describe('function push', () => {
    const ll = new LLL();
    it('should persist correctly', async () => {
      ll.push(10)
      expect(ll.count()).toBe(1);
    });
  });
  describe('function isEmpty', () => {
    const ll = new LLL();
    it('should return true', async () => {
      expect(ll.isEmpty()).toBe(true);
    })
    it('should return false', async () => {
      ll.push(10)
      expect(ll.isEmpty()).toBe(false)
    })
  })
  describe('function detele', () => {
    const ll = new LLL();
    it('should return error', async () => {
      expect(ll.delete(10)).toEqual("items is empty");
    })
    it('should delete correctly', async () => {
      ll.push(0)
      ll.push(10)
      ll.push(20)
      ll.delete(0)
      expect(ll.count()).toBe(2);
    })
  })
  describe('function getpRevLast', () => {
    const ll = new LLL();
    it('should return items are empty', async () => {
      expect(ll.getPrevLast()).toEqual("items is empty");
    })
    it('should return item correctly', async () => {
      const expected = new N(20) // last is the first inserted
      ll.push(10)
      ll.push(20)
      ll.push(30)
      ll.push(40)
      // Arrange
      const prev = ll.getPrevLast()
      // Assert
      expect(prev).toEqual(expected)
      expect(ll.count()).toEqual(4)
    })
  })

  describe('function pop', () => {
    const ll = new LLL();
    it('should return false when item is empty', async () => {
      expect(ll.pop()).toBe(false)
    })
    it('should return empty item correcty when item is one', async () => {
      ll.push(10)
      ll.pop()
      expect(ll.first).toBe(null)
      expect(ll.count()).toBe(0)
    })
    // now item is empty
    it('should return last item correcty', async () => {
      //
      ll.push(10) // last Stack
      ll.push(20)
      ll.push(30)
      ll.push(40)
      // Ararnge
      const expectLast = ll.pop() // pop 10
      // Assert
      expect(expectLast).toEqual(new N(10))
      expect(ll.count()).toEqual(3)
      expect(ll.last).toEqual(new N(20))

    })
  })
  describe('function shift', () => {
    const ll = new LLL();
    it('should return false when item is empty', async () => {
      expect(ll.pop()).toBe(false)
    })
    it('should return null item when item size is one', async () => {
      ll.push(10)
      expect(ll.shift()).toEqual(new N(10))
      expect(ll.count()).toBe(0)
    })
    // item is 0
    it('should return first item correctly when items is two ', async () => {
      ll.push(10)
      ll.push(20)
      expect(ll.shift()).toEqual(new N(20))
      expect(ll.count()).toBe(1)
      expect(ll.first).toEqual(new N(10))

      expect(ll.first).toEqual(ll.last)
    })

    it('should return first item correctly when items more than two ', async () => {
      const linkedList = new LLL()
      linkedList.push(10)
      linkedList.push(20)
      linkedList.push(30)
      linkedList.push(40)
      expect(linkedList.shift()).toEqual(new N(40))
      expect(linkedList.count()).toEqual(3)
      expect(linkedList.first?.val).toEqual(new N(30).val)
      expect(linkedList.last).toEqual(new N(10))

    })
  })
  describe('function unshift', () => {
    let ll = new LLL();
    it('should insert item correctly', async () => {
      ll.unshift(10)
      expect(ll.count()).toEqual(1)
    });
    // last dulu karena push take this purpose function
    it('should insert last item correctly', async () => {
      let ll = new LLL()
      ll.unshift(10) // last => because ll size is one
      ll.unshift(20)
      expect(ll.count()).toEqual(2)
      expect(ll.last).toEqual(new N(20))
      ll.unshift(30)
      expect(ll.count()).toEqual(3)
      expect(ll.last).toEqual(new N(30))
    });
  });
});