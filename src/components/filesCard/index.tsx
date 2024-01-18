import { Container } from "./styles";
import { FaCloudDownloadAlt } from "react-icons/fa";
export const FilesCard = ({
  fileName,
  onClick,
}: {
  fileName: string;
  onClick: () => void;
}) => {
  return (
    <Container>
      <p>{fileName}</p>
      <FaCloudDownloadAlt onClick={onClick} />
    </Container>
  );
};
