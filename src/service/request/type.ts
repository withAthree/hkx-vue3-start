import type {
  AxiosRequestConfig,
  CancelToken,
  Method,
} from 'axios';

// 定义基础响应类型
export interface BaseResponse<T = any> {
  code: number
  message?: string
  data: T
}

// 定义请求配置类型
export interface RequestConfig extends AxiosRequestConfig {
  isUploadFile?: boolean
}

// 定义请求参数类型
export interface RequestParams {
  url: string
  data?: any
  params?: any
  method?: Method
  headers?: Record<string, string>
  isUpload?: boolean
  cancelToken?: CancelToken
}
