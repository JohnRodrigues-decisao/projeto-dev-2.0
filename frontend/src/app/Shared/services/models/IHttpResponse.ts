interface EntryPointResponseError {
    description: string;
    codeError: string;
}

export interface IHttpResponse<T = any> {
    sucess: boolean;
    code: number;
    message: string;
    data: T | null;
    error: EntryPointResponseError | null;
}