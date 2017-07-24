import { expect } from 'chai';
import { compress } from './1.6';

const tests = [
    {
        string: "wwwaaasss",
        answer: "w3a3s3",
    },
    {
        string: "not compressable",
        answer: "not compressable",
    },
    {
        string: "",
        answer: "",
    }
]

describe("compress(string)", function(){
    tests.forEach(function(test){
        it(`compress('${test.string}') = '${test.answer}'`)
    })
})