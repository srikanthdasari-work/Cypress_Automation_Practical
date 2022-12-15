///<reference types="cypress" />

describe("Getting the user data from get api rewuest",() =>{


    it("Getting the users deatils", () =>{

        cy.request({

            method:'GET',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                'Authorization': "Bearer d7ec682014f42609cd9c578d1f8cafac8f6576f61d413e4d7afa67d78d344b33"

            }
        }).then((respose)=>{

            expect(respose.status).to.equal(200);
           // expect(respose.body).to.equal();
        }
    })
})