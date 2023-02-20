type FileItemProps = {
    file: File;
    onDelete: Function;
};
const FileItem: React.FC<FileItemProps> = ({ file, onDelete }) => {
    const binaryDataOfImg = [];
    binaryDataOfImg.push(file);
    const fileName =
        file?.name.substring(0, file?.name.lastIndexOf(".")) || file?.name;
    const fileExt =
        file?.name.substring(file?.name.lastIndexOf("."), file?.name.length) ||
        "";
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                marginTop: "0.5em",
            }}
        >
            <picture>
                <img
                    width={50}
                    height={50}
                    style={{
                        objectFit: "cover",
                        marginRight: "8px",
                    }}
                    src={URL.createObjectURL(
                        new Blob(binaryDataOfImg, { type: file?.type })
                    )}
                    alt={file?.name.slice(0, 10)}
                />
            </picture>
            <p>
                {fileName?.length > 30
                    ? fileName.slice(0, 20) +
                      "..." +
                      fileName.slice(fileName.length - 10, fileName.length) +
                      fileExt
                    : fileName + fileExt}
            </p>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    marginLeft: "auto",
                    cursor: "pointer",
                }}
                onClick={() => onDelete(file?.name)}
            >
                <path
                    d="M13.4854 12.0711L19.1421 17.7279L17.7279 19.1421L12.0712 13.4854L6.41436 19.1421L5.00015 17.7279L10.6569 12.0711L5 6.41421L6.41421 5L12.0712 10.6569L17.7281 5.00001L19.1423 6.41423L13.4854 12.0711Z"
                    fill="#F9F9F9"
                />
            </svg>
        </div>
    );
};
export default FileItem;
