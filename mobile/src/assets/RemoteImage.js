export class RemoteImage {
  constructor(source) {
    this.source = source;
  }

  get imageSource() {
    return { uri: this.source };
  }
}
