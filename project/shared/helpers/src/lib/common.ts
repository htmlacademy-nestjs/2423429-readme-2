import { ClassTransformOptions, plainToInstance } from 'class-transformer';

export function fillDto<T, V>(
  DtoClass: new () => T,
  plainObject: V,
  options?: ClassTransformOptions,
): T;

export function fillDto<T, V>(
  DtoClass: new () => T,
  plainObject: V,
  options?: ClassTransformOptions,
): T[];

export function fillDto<T, V>(
  DtoClass: new () => T,
  plainObject: V,
  options?: ClassTransformOptions,
): T | T[] {
  return plainToInstance(DtoClass, plainObject, {
    excludeExtraneousValues: true,
    ...options,
  });
}

export interface MongoConnectionParams {
  username: string;
  password: string;
  host: string;
  port: string;
  databaseName: string;
  authDatabase: string;
}

export function getMongoConnectionString({
  username,
  password,
  host,
  port,
  databaseName,
  authDatabase,
}: MongoConnectionParams): string {
  return `mongodb://${username}:${password}@${host}:${port}/${databaseName}?authSource=${authDatabase}`;
}
