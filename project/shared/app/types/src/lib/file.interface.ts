export interface File {
  id?: string;
  originalName: string;
  size: number;
  mimetype: string;
  path: string;
  createdAt?: Date;
}
