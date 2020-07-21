export class Policy {
  constructor(
  public _id : string,
  public belongToClient: any,
  public email_client: string,
  //person that has the policy
  public policy_type: string,
  public name_insured: string,
  public insured_doc: string,
  public birth_insured:string,
  public update_date :string,
  public plate : string,
  //model=year of the car
  public model : number,
  public brand: string,
  public line: string,
  public engine_cylinder:string,
  public type_vehicle: string,
  public fasecolda: string,
  public endorsement: string,
  public nit_bank: string,
  public hunter: string,
  public serie: string,
  public motor: string,
  public address_property: string,
  //state = concepto it goes with hand of the policy_end
  public state: string,
  public number_policy: string,
  //issued = company who issue the policy
  public issued : string,
  public policy_start :string,
  public policy_end :string,
  public value_prima : number,
  public payment_type: string,
  public policy_renovation_month : number,
  //revicion tecnicomecanica rtm, año revision tecnicomecanica, vencimiento soat mes dia
  public soat_expiration: string,
  public rtm_expiration : string,
  public observation: string,
  ){}
}
