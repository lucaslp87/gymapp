export class User{
    constructor(userName, password, checkPassword, clientNum){
        this.userName=userName;
        this.password=password;
        this.checkPassword=checkPassword;
        this.clientNum=clientNum;
    }
}

export class Alumno{
    constructor(nombre,apellido,dni,plan,){
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.plan=plan;
        this.debe=false;
        this.rms={};
        }
}  