/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";
import { ReactNode } from "react";

export interface FoldersProviderProps {
  children: ReactNode;
}
export interface IFolder {
  folderName: string;
  id: number;
  parentFolderId: number;
}
export interface IFile {
  id: number;
  fileName: string;
  filePath: string;
  folder: {
    createdAt: string;
    updatedAt: string;
    id: number;
    folderName: string;
  };
}

export interface FolderResponse {
  folderName: string;
  user: {
    createdAt: string;
    updatedAt: string;
    id: number;
    username: string;
    email: string;
    password: string;
    isAdmin: false;
  };
  createdAt: string;
  updatedAt: string;
  id: number;
}
export interface FoldersContextProps {
  createFolder: (data: IFolder) => Promise<AxiosResponse<any, any>>;
  getUserFolders: () => Promise<AxiosResponse<any, any>>;
  getSharedFolders: () => Promise<AxiosResponse<any, any>>;
  getFiles: (folderId: number) => Promise<AxiosResponse<any, any>>;
  downloadFile: (fileId: number) => Promise<AxiosResponse<any, any>>;
  downloadFolder: (folderId: number) => Promise<AxiosResponse<any, any>>;
  UploadFile: (
    folderId: number,
    file: FormData
  ) => Promise<void | AxiosResponse<any, any>>;
}
