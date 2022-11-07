
const TestApi =require("../pageobjects/TestApi");


//GET

describe("GET USER",function(){


    
    it('GET/ verification si les listes des users n est pas vide', async() => {
        const response=await TestApi.geUsers();

        expect( response.status).not.toEqual(0);
    });

    it("GET/ verification  du statuts",async function(){

        const response=await  TestApi.getUserById(1);

        expect( response.status).toEqual(200);
    
    })

    it("GET/ verification  du first_name",async function(){

        const response=await  TestApi.getUserById(1);

        expect( response.data.data.first_name).toEqual("George");
    
    })

    it("GET/ verification  du last_name",async function(){

        const response=await  TestApi.getUserById(1);

        expect( response.data.data.last_name).toEqual("Bluth");
    
    })

    it("GET/ verification  du avatar",async function(){

        const response=await  TestApi.getUserById(1);

        expect( response.data.data.avatar).toEqual("https://reqres.in/img/faces/1-image.jpg");
    
    })
});


// POST

describe("POST USER",function(){

    
    const newUser= {
        name:"newUser",
        job:"myNewJob"
    };


    it("POST/ verification  du statuts",async function(){

        const response=await  TestApi.postUser(newUser)

        expect( response.status).toEqual(201);
    
    })

    it("POST/ verification  du name",async function(){

        const response=await  TestApi.postUser(newUser);

        expect(  response.data.name).toEqual("newUser");
    
    })

    it("POST/ verification  du job",async function(){

        const response=await  TestApi.postUser(newUser);

        expect(  response.data.job).toEqual("myNewJob");
    
    })


});


//PUT

describe("PUT USER",function(){
    const newUser= {
        name:"newUserUpdate",
        job:"myNewJobUpdate"
    };

    it("PUT/ verification  du statuts",async function(){

        const response=await  TestApi.putUser(1,newUser)

        expect( response.status).toEqual(200);
    
    })

    it("PUT/ verification  du name",async function(){

        const response=await  TestApi.putUser(1,newUser);

        expect(  response.data.name).toEqual("newUserUpdate");
    
    })

    it("PUT/ verification  du job",async function(){

        const response=await  TestApi.putUser(1,newUser);

        expect(  response.data.job).toEqual("myNewJobUpdate");
    
    })
})

//DELETE

describe("DELETE USER",function(){
    
    it("DELETE/ verification  du statuts",async function(){

        const response=await  TestApi.deleteUser(1)

        expect( response.status).toEqual(204);
    
    })

})