
export class User {

  private _name: string = '';
  private _mail: string = '';
  private _nickname: string = '';


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get mail(): string {
    return this._mail;
  }

  set mail(value: string) {
    this._mail = value;
  }

  get nickname(): string {
    return this._nickname;
  }

  set nickname(value: string) {
    this._nickname = value;
  }
}
