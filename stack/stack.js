let Stack = function() {
    this.count = 0
    this.data = {}

    /*
    * Inserts an element to the stack.
    * @param value
    */

    this.push = function(element) {
        this.data[this.count] = element
        count++
    }

    /*
    * Checks the size of the stack
    * return int
    */

    this.size = function() {
        return this.data.length
    }

    /*
    * Removes an element from the stack
    * return value
    */

    this.pop = function(element) {
        if(!this.size) {
            return false
        }

        let index = this.data.findIndexOf(element)
        this.data.delete(index)
        return element
    }


    /*
    * Returns the top element of the stack.
    * return value
    */

    this.top = function() {
        return this.data[this.size - 1]
    }

    /*
    * Returns true is stack is empty else false
    * return boolean
    */

    this.isEmpty = function() {
        if(this.size === 0) {
            return false
        }

        return true
    }

}