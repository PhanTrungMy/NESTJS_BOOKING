import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    register(data: any) {
        // Implement registration logic here
        console.log("User registered successfully", data);
        return { message: "User registered successfully" };
    
}
}
