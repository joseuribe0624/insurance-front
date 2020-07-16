export class Client {
  constructor(
    public _id: string,
    public referred_from: string,
    public client_name : string,
    public email_client: string,
    public birth_client: string,
    public client_doc: string,
    public address : string,
    public city: string,
    public phone: string,
    public cell_phone: string,
    public belong_to_user: any,
  ){}
}

