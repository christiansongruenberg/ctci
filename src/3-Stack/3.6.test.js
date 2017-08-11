import { expect } from 'chai'
import AnimalShelter, { Dog, Cat } from './3.6'

describe.only('AnimalShelter', function(){
    
    let shelter;
    let animals

    beforeEach(function(){
        shelter = new AnimalShelter;
        
        animals = [
            {
                type: Dog,
                name: 'gizmo'
            },
            {
                type: Cat,
                name: 'puppy'
            },
            {
                type: Dog,
                name: 'doggy'
            },
            {
                type: Cat,
                name: 'catty'
            }
        ]

        //enqueue them
        animals.forEach( animal => {
            shelter.enqueue(new animal.type(animal.name))
        })
    })

    it('enqueues', function(){
        
        let shelterQ = shelter.printShelter()
        animals.reverse().forEach( (animal, i) => {
            expect(shelterQ[i].name).to.equal(animal.name)
            expect(shelterQ[i] instanceof animal.type).to.be.true
        })
    })

    it('dequeueAny gets the oldest', function(){
        let shouldDequeueIndex = 0
        
        let oldest = shelter.dequeueAny().value
        expect(oldest instanceof animals[shouldDequeueIndex].type).to.be.true
        expect(oldest.name).to.be.equal(animals[shouldDequeueIndex].name)

        let shelterQ = shelter.printShelter()

        animals.splice(shouldDequeueIndex, 1)
        animals.reverse().forEach( (animal, i) => {
            expect(shelterQ[i].name).to.equal(animal.name)
            expect(shelterQ[i] instanceof animal.type).to.be.true
        })
    })

    it('dequeueDog gets the oldest', function(){
        let shouldDequeueIndex = 0        
        
        let oldest = shelter.dequeueDog().value
        expect(oldest instanceof animals[shouldDequeueIndex].type).to.be.true
        expect(oldest.name).to.be.equal(animals[shouldDequeueIndex].name)

        let shelterQ = shelter.printShelter()

        animals.splice(shouldDequeueIndex, 1)
        animals.reverse().forEach( (animal, i) => {
            expect(shelterQ[i].name).to.equal(animal.name)
            expect(shelterQ[i] instanceof animal.type).to.be.true
        })
    })

    it('dequeueCat gets the oldest', function(){
        let shouldDequeueIndex = 1
        
        let oldest = shelter.dequeueCat().value
        expect(oldest instanceof animals[1].type).to.be.true
        expect(oldest.name).to.be.equal(animals[1].name)

        let shelterQ = shelter.printShelter()

        animals.splice(shouldDequeueIndex, 1)
        animals.reverse().forEach( (animal, i) => {
            expect(shelterQ[i].name).to.equal(animal.name)
            expect(shelterQ[i] instanceof animal.type).to.be.true
        })
    })
})