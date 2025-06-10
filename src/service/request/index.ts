import type {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  CancelToken,
} from 'axios';
import type { BaseResponse, RequestConfig, RequestParams } from './type';
import axios from 'axios';
import { useMessage } from 'naive-ui';
import { responseErrorMessage } from './config';

const message = useMessage();

// 创建axios实例
const service: AxiosInstance = axios.create({
  // 使用 import.meta.env 读取环境变量
  baseURL: import.meta.env.APP_BASE_API || '/api',
  timeout: 10000,
  withCredentials: true,
});

// 请求拦截器
service.interceptors.request.use(
  (config: RequestConfig) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (config.isUploadFile) {
      config.headers = config.headers || {};
      config.headers['Content-Type'] = 'multipart/form-data';
    }

    return config;
  },
  (error: AxiosError) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  },
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse<BaseResponse>) => {
    const res = response.data;

    if (res.code !== 200) {
      message.error(res.message || 'Error');

      if (res.code === 401) {
        window.location.href = '/login';
      }

      return Promise.reject(new Error(res.message || 'Error'));
    }

    return res.data;
  },
  (error: AxiosError) => {
    console.error('Response Error:', error);

    if (error.response) {
      error.message = responseErrorMessage(error);
    }
    else if (error.message.includes('timeout')) {
      error.message = '请求超时';
    }
    else if (error.message.includes('Network Error')) {
      error.message = '网络错误，请检查您的网络连接';
    }

    message.error(error.message);
    return Promise.reject(error);
  },
);

/**
 * 封装请求方法
 */
function request<T = any>({
  url,
  data = {},
  params = {},
  method = 'GET',
  headers = {},
  isUpload = false,
  cancelToken = undefined,
}: RequestParams): Promise<T> {
  const config: RequestConfig = {
    url,
    method,
    headers,
    params,
    cancelToken,
    isUploadFile: isUpload,
  };

  if (method.toUpperCase() === 'GET') {
    config.params = data;
  }
  else {
    config.data = data;
  }

  return service(config);
}

/**
 * GET请求
 */
function get<T = any>(
  url: string,
  params: any = {},
  headers: Record<string, string> = {},
  cancelToken?: CancelToken,
): Promise<T> {
  return request({
    url,
    data: params,
    method: 'GET',
    headers,
    cancelToken,
  });
}

/**
 * POST请求
 */
function post<T = any>(
  url: string,
  data: any = {},
  headers: Record<string, string> = {},
  cancelToken?: CancelToken,
): Promise<T> {
  return request({
    url,
    data,
    method: 'POST',
    headers,
    cancelToken,
  });
}

/**
 * PUT请求
 */
function put<T = any>(
  url: string,
  data: any = {},
  headers: Record<string, string> = {},
  cancelToken?: CancelToken,
): Promise<T> {
  return request({
    url,
    data,
    method: 'PUT',
    headers,
    cancelToken,
  });
}

/**
 * DELETE请求
 */
function del<T = any>(
  url: string,
  data: any = {},
  headers: Record<string, string> = {},
  cancelToken?: CancelToken,
): Promise<T> {
  return request({
    url,
    data,
    method: 'DELETE',
    headers,
    cancelToken,
  });
}

/**
 * 上传文件
 */
function upload<T = any>(
  url: string,
  formData: FormData,
  headers: Record<string, string> = {},
  cancelToken?: CancelToken,
): Promise<T> {
  return request({
    url,
    data: formData,
    method: 'POST',
    headers,
    isUpload: true,
    cancelToken,
  });
}

// 导出方法
export default {
  request,
  get,
  post,
  put,
  delete: del,
  upload,
  axios: service,
};
