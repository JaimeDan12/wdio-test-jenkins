
const axios =require("axios");



class TestApi{

    /**
     * 
     * @returns tout le contenu de la response
     */
    static  async geUsers(){

        let response;
        
        response = await axios.default.get("https://reqres.in/api/users/");
        
        return response;

    }

    /**
     * 
     * @param {*} id identifiant de l'user
     * @returns tout le contenu de la response
     */
    static async getUserById(id){

        let response;
        
        response = await axios.default.get(`https://reqres.in/api/users/${id}`);

        return response;
    }

    /**
     * 
     * @param {*} data un Object contenant le username et le jobs
     * @returns tout le contenu de la response
     */
    static async postUser(data){

        const {name,job} =data;

        let response;
        
        response = await axios.default.post(`https://reqres.in/api/users/`,{
            name:name,
            job:job
        });
            
        return response;
    }

    /**
     * 
     * @param {*} id de l'user que l'on souhaite modifier les data
     * @param {*} data les new data
     * @returns 
     */
    static async putUser(id,data){

        const {name,job} =data;

        let response;
        
        response = await axios.default.put(`https://reqres.in/api/users/${id}`,{
            name:name,
            job:job
        });
            
        return response;
    }

    /**
     * 
     * @param {*} id de l'user que l'on souhaite modifier les data
     * @returns 
     */
    static async deleteUser(id){

        let response;
        
        response = await axios.default.delete(`https://reqres.in/api/users/${id}`);
            
        return response;
    }


    

}



module.exports= TestApi;


