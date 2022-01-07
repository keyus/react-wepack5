
interface Obj {
    [key: string]: any,
}

type QueryStringData = string | Obj | undefined | null

interface FetchOptions {
    method?: string
    [key: string]: any
}

declare const util: Obj
declare const config: Obj

declare function http(url: string, data?: QueryStringData, option?: FetchOptions,): Promise<any>
declare namespace http {
    function get(url: string, data?: QueryStringData, option?: FetchOptions,): Promise<any>
    function post(url: string, data?: QueryStringData, options?: FetchOptions): Promise<any>
}

// declare const http: (url: string, data?: QueryStringData, option?: FetchOptions,) => Promise<any>
declare var __REDUX_DEVTOOLS_EXTENSION__: () => any

/**
 * store 
 * rootState is all reducer tree
 * if add reducer add that name
 */
declare namespace Store {

    interface Action {
        type: string
        [key: string]: any
    }

}

