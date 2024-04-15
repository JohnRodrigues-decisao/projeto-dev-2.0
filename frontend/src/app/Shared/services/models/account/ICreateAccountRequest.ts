import { ILoginRequest } from "./ILoginRequest";

export interface ICreateAccountRequest extends ILoginRequest {
    name: string,
}