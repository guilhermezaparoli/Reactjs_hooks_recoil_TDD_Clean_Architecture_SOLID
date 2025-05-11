export enum HttpStatusCode {
    noContent = 404,
    unathorized = 401
}

export type HttpResponse = {
    statusCode: HttpStatusCode
    body?: unknown
}