export interface Users{
  typeId:string,
  nDocument:string,
  name:string,
  lName:string,
  email:string,
  password:string,
  status:boolean
}

export interface Usercred{
  typeId:string,
  nDocument:string,
  password:string
}

export interface Userinfo{
  id:number,
  nDocument:string,
  name:string,
  email:string,
  status:boolean
}
