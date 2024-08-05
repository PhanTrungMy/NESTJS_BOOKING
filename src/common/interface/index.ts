export enum EUserRoles{
    owner = 'owner',
    coach = 'coach',
    client = 'client',

}
export class SessionTemplate{
    id: string;
    name: string;
    duration: number;
    IsActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    
}