

import chai from "chai";
import chaiHttp from "chai-http";
import { app } from "../index.js";

process.env.NODE_ENV='test'


const expect= chai.expect
const should=chai.should()
chai.use(chaiHttp)



describe("/First Test collection", ()=>{
it("test deafault api",(done)=>{
    chai.request(app)
    .get("/products")
    .end((err,res)=>{

        res.should.have.status(200);
        

        done()
    })
})


    it("should test two values ",()=>{

        let expectValue=10;
        let actualValue=10;
        expect(actualValue).to.be.equal(expectValue);
    })
})

