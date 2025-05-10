import { HttpPostClient, HttpPostParams } from "data/protocols/http/http-post-client"
export class HttpPostClientSpy implements HttpPostClient {

    url?: string
    body?: object


    async post(params: HttpPostParams): Promise<void> {
        const { url } = params
        this.url = url
        this.body = params.body
        return Promise.resolve()
    }

}