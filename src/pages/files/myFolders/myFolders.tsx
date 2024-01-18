/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useEffect, useState } from "react";
import {
  CloseModalContainer,
  Container,
  FolderIconContainer,
  ModalContainer,
  FilesModal,
} from "./styles";
import { FaFolder } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useFolders } from "../../../contexts/folders/foldersProvider";
import { FieldValues, useForm } from "react-hook-form";
import { FaCloudDownloadAlt } from "react-icons/fa";
import {
  FolderResponse,
  IFile,
  IFolder,
} from "../../../contexts/folders/types";
import { FormComponent } from "../../../components/form/form";
import { Input } from "../../../components/input/input";
import { Title } from "../../../components/title";
import { IoMdClose } from "react-icons/io";
import { Button } from "../../../components/button/button";
import { FilesCard } from "../../../components/filesCard";

export const MyFilesPage = ({ select }: { select: string }) => {
  const [folders, setFolders] = useState<FolderResponse[]>([]);
  const [files, setFiles] = useState<IFile[]>([]);
  const [sharedFolders, setSharedFolders] = useState<FolderResponse[]>([]);
  const {
    createFolder,
    getUserFolders,
    getSharedFolders,
    getFiles,
    downloadFile,
    UploadFile,
    downloadFolder,
  } = useFolders();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isFileModalOpen, setIsFileModalOpen] = useState(false);
  const [openFolder, setOpenFolder] = useState<IFolder>();
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = async (data: FieldValues) => {
    data.isAdmin = false;
    await createFolder(data as IFolder).catch((error) => console.log(error));
    getUserFolders();
  };
  console.log(openFolder);
  useEffect(() => {
    getUserFolders().then((response) => {
      if (Array.isArray(response)) {
        setFolders(response);
      }
    });
    getSharedFolders().then((response) => {
      if (Array.isArray(response)) {
        setSharedFolders(response);
      }
    });
  }, [getUserFolders]);

  const listFiles = (folderId: number) => {
    getFiles(folderId)
      .then((response) => {
        if (Array.isArray(response)) {
          console.log(response);
          if (response.length > 0) {
            setOpenFolder(response[0].folder);
          } else {
            setOpenFolder(undefined);
          }
          setFiles(response);
        }
      })
      .then(() => setIsFileModalOpen(true));
  };
  const fileDownload = async (fileId: number, fileName: string) => {
    const response = await downloadFile(fileId);
    const fileBlob = new Blob([response.data], {
      type: response.headers["content-type"],
    });
    const downloadLink = document.createElement("a");
    const objectURL = URL.createObjectURL(fileBlob);

    downloadLink.href = objectURL;
    downloadLink.download = fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();

    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(objectURL);
  };
  const folderDownload = async (folderId: number, folderName: string) => {
    const response = await downloadFolder(folderId);
    const fileBlob = new Blob([response.data], {
      type: response.headers["zip"],
    });
    const downloadLink = document.createElement("a");
    const objectURL = URL.createObjectURL(fileBlob);

    downloadLink.href = objectURL;
    downloadLink.download = `${folderName}.zip`;
    document.body.appendChild(downloadLink);
    downloadLink.click();

    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(objectURL);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file);
  };
  const handleFile = async (folderId: number) => {
    if (!selectedFile) {
      return;
    }
    const formData = new FormData();
    formData.append("files", selectedFile);
    await UploadFile(folderId, formData).then(() =>
      listFiles(openFolder?.id as number)
    );
  };
  return (
    <Container>
      {select === "my folders"
        ? folders.map((folder) => (
            <FolderIconContainer
              className="folders"
              onClick={() => listFiles(folder.id)}
              key={folders.indexOf(folder)}
            >
              <FaFolder />
              <p>{folder.folderName}</p>
            </FolderIconContainer>
          ))
        : sharedFolders.map((folder) => (
            <FolderIconContainer
              className="folders"
              onClick={() => listFiles(folder.id)}
              key={folders.indexOf(folder)}
            >
              <FaFolder />
              <p>{folder.folderName}</p>
            </FolderIconContainer>
          ))}
      <FolderIconContainer onClick={() => setIsModalOpen(true)}>
        {select === "my folders" && (
          <>
            <FaPlus />
            <p>Create folder</p>
          </>
        )}
      </FolderIconContainer>
      {isModalOpen && (
        <ModalContainer>
          <FormComponent onSubmit={handleSubmit(onSubmit)}>
            <CloseModalContainer>
              <IoMdClose
                className="icon"
                onClick={() => setIsModalOpen(false)}
              />
            </CloseModalContainer>
            <Title text="Create folder" />
            <Input placeholder="folder name" {...register("folderName")} />
            <Button
              isdisable={!watch().folderName}
              type="submit"
              onClick={getUserFolders}
            >
              create
            </Button>
          </FormComponent>
        </ModalContainer>
      )}
      {isFileModalOpen && (
        <FilesModal>
          <IoMdClose
            className="svgClose"
            onClick={() => setIsFileModalOpen(false)}
          />
          <div className="svgContainer">
            <FaCloudDownloadAlt
              onClick={() =>
                folderDownload(
                  openFolder?.id as number,
                  openFolder?.folderName as string
                )
              }
              className="svg"
            />
            <p>download folder</p>
          </div>

          {files.map((file) => (
            <FilesCard
              fileName={file.fileName}
              onClick={() => fileDownload(file.id, file.fileName)}
            />
          ))}
          <div className="divContainer">
            <FaPlus
              className="upload"
              onClick={() => handleFile(openFolder?.id as number)}
            />
            <input type="file" onChange={handleFileChange} />
            <p>Upload file</p>
          </div>
        </FilesModal>
      )}
    </Container>
  );
};
