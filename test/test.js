var chai=require("chai");
var assert=chai.assert;
var aritGeo=require("../main.js");

describe("array should contain more than 2 elements", function(){
    it("should return `Array should contain more than two elements` for arrays with length less than 3", function(){
    assert(aritGeo([1,2])=="Array should contain more than two elements")
    });
    it("should return `Array should contain more than two elements` for arrays with length less than 3", function(){
    assert(aritGeo([2])=="Array should contain more than two elements")
    });
})
describe("all elements in the array should be numbers only", function(){
    it("should return `Array should contain numbers only` for arrays that contains elements other than numbers", function(){
        assert(aritGeo([1,2,3,"hsdb",56])=="Array should contain numbers only")
    });
    it("should return `Array should contain numbers only` for arrays that contains elements other than numbers", function(){
    assert(aritGeo([6,"7",9,"45"])=="Array should contain numbers only")
    });
})
describe("it should return `Arithmetic`", function(){
    it("should return `Arithmetic` if the progression is of arithmetic type", function(){
        assert(aritGeo([1,2,3,4])=="Arithmetic")
    });
    it("should return `Arithmetic` if the progression is of arithmetic type", function(){
    assert(aritGeo([2,4,6,8])=="Arithmetic")
    });
})
describe("array should return `-1` for neither geometric or arithmetic", function(){
    it("should return `-1` for neither geometric or arithmetic", function(){
        assert(aritGeo([5,2,39,10])==-1)
    });
});
describe("array should return `0` for an empty array", function(){
    it("should return `0` for an empty array", function(){
        assert(aritGeo([])==0)
    });
});
describe("for geometric", function(){
    it("should return `Geometric`", function(){
        assert(aritGeo([2,4,8,16])=='Geometric')
    });
});
describe("for geometric", function(){
    it("should return `Geometric`", function(){
        assert(aritGeo([3,9,27])=='Geometric')
    });
});