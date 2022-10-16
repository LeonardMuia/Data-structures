function mySet() {
    let collection = []

    this.has = function (element) {
        return (collection.indexOf(element) !== -1)
    }

    this.values = function() {
        return collection
    }

    this.add = function(element) {
        if(!this.has(element)) {
            collection.push(element)
            return true
        }
    }

    this.remove = function(element) {
        if(this.has(element)) {
            let index = collection.indexOf(element)
            collection.splice(index, 1)
            return true
        }

        return false
    }

    this.size = function() {
        return collection.length
    }

    this.union = function(anotherSet) {
        let unionSet = new mySet()
        let firstSet = this.values()
        let secondSet = anotherSet.values()

        firstSet.forEach( function(e) {
            unionSet.add(e)
        })

        secondSet.forEach(function(e) {
            unionSet.add(e)
        })

        return unionSet
    }

    this.intersection = function(anotherSet) {
        let intersectionSet = new mySet()
        let firstSet = this.values()

        firstSet.forEach(function(e) {
            if(anotherSet.has(e)) {
                intersectionSet.add(e)
            }
        })

        return intersectionSet
    }

    this.difference = function(anotherSet) {
        let differenceSet = new mySet()
        let firstSet = this.values()
        firstSet.forEach(function(e) {
            if(!anotherSet.has(e)) {
                differenceSet.add(e)
            }
        })
        return differenceSet
    }

    this.subset = function(anotherSet) {
        let firstSet = this.values()
        return firstSet.every(function(value) {
            return anotherSet.has(value)
        })
    }

}

