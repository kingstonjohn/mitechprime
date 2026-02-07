import { error } from "../components/toast";

export default class NetworkException extends Error{
    constructor(error){
        super()
        this.error = error
    }

    trigger(){
        console.log(this.error)
        
        if(this.error?.data?.message){
            error(this.error?.data?.message)
        }
        else if (this.error?.response?.data?.message){
            error(this.error?.response?.data?.message)
        }
        else if (this.error?.code === "ERR_NETWORK") {
            error(this.error?.message)
        } 
        else {
            error("An error occurred!")
        }
    }
}