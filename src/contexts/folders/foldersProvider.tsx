/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext } from "react";
import { FoldersContextProps, FoldersProviderProps, IFolder } from "./types";
import api from "../../axios";
import { useAuth } from "../auth/authProvider";
import { AxiosResponse } from "axios";
const FoldersContext = createContext<FoldersContextProps>(
  {} as FoldersContextProps
);
export const FoldersProvider = ({ children }: FoldersProviderProps) => {
  const { token } = useAuth();
  const createFolder = async (data: IFolder) => {
    const response = api
      .post("/folder", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));
    return response;
  };
  const getUserFolders = async () => {
    const response = await api
      .get("/folder")
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));
    return response;
  };
  const getSharedFolders = async () => {
    const response = await api
      .get("/folder/sharedfolders")
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));
    return response;
  };
  const getFiles = async (folderId: number) => {
    const response = await api
      .get(`/files/${folderId}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));
    return response;
  };
  const downloadFile = async (fileId: number) => {
    const response = await api
      .get(`/files/download/${fileId}`)
      .then((response) => {
        return response as AxiosResponse<any, any>;
      })
      .catch((error) => console.log(error));
    return response as AxiosResponse<any, any>;
  };
  const downloadFolder = async (folderId: number) => {
    const response = await api
      .get(`/folder/download/${folderId}`)
      .then((response) => {
        return response as AxiosResponse<any, any>;
      })
      .catch((error) => console.log(error));
    return response as AxiosResponse<any, any>;
  };
  const UploadFile = async (folderId: number, file: FormData) => {
    await api
      .post(`/folder/upload/${folderId}`, file, {
        headers: {
          "Content-Type": "multipart/form-data",
          // Add any other headers needed, e.g., authentication headers
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));
  };
  return (
    <FoldersContext.Provider
      value={{
        createFolder,
        getUserFolders,
        getSharedFolders,
        getFiles,
        downloadFile,
        downloadFolder,
        UploadFile,
      }}
    >
      {children}
    </FoldersContext.Provider>
  );
};

export const useFolders = () => useContext(FoldersContext);
