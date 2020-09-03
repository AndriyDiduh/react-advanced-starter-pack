// all global settings
export default class GlobalSettings {
    // App Ver
    public ver: number = 0.3

    // Web Paths

    // Web host root address
    public host: string = window.location.origin // or window.location.host , window.location.href in case we use Tag system for page switch

    // path to Images for styling
    public imgs: string = this.host + '/styles/img/'

    // path to Posted content
    public content: string = this.host + '/content/'
}
