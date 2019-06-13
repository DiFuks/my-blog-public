declare const API_URL: string;
declare type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
