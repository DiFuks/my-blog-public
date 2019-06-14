declare type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
