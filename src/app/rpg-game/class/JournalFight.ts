export class JournalFight {

  private _logs: Array<string>= []

  get logs(): Array<string> {
    return this._logs;
  }

  set logs(value: Array<string> | string) {
    if (typeof value === "string") {
      this._logs.push(value);
    } else {
      value.forEach( elem => {
        this._logs.push(elem);
      })
    }
  }
}
