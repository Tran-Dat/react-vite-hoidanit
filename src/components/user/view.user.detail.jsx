import { Button, Drawer } from "antd";
import { useState } from "react";

const ViewUserDetail = (props) => {
  const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen } = props;

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleOnChangeFile = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedFile(null);
      setPreview(null);
      return;
    }

    const file = event.target.files[0];
    if (file) {
      setSelectedFile;
      setPreview(URL.createObjectURL(file));
    }
  };
  console.log(">>check file: ", preview);
  return (
    <>
      <Drawer
        width={"30vw"}
        title="User Information"
        onClose={() => {
          setDataDetail(null);
          setIsDetailOpen(false);
        }}
        open={isDetailOpen}
      >
        {dataDetail ? (
          <>
            <p>Id: {dataDetail._id}</p>
            <br />
            <p>Full Name: {dataDetail.fullName}</p>
            <br />
            <p>Email: {dataDetail.email}</p>
            <br />
            <p>Phone: {dataDetail.phone}</p>
            <br />
            <p>Avatar: </p>
            <div
              style={{
                marginTop: "10px",
                height: "100px",
                width: "150px",
                border: "1px solid #ccc",
              }}
            >
              <img
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${
                  dataDetail.avatar
                }`}
              />
            </div>
            <div>
              <label
                htmlFor="btnUpload"
                style={{
                  display: "block",
                  width: "fit-content",
                  marginTop: "15px",
                  padding: "5px 10px",
                  backgroundColor: "orange",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Upload Avatar
              </label>
              <input
                type="file"
                hidden
                id="btnUpload"
                // onChange={handleOnChangeFile}
                onChange={(event) => handleOnChangeFile(event)}
              />
            </div>
            {preview && (
              <div
                style={{
                  marginTop: "10px",
                  height: "100px",
                  width: "150px",
                  border: "1px solid #ccc",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src={preview}
                />
              </div>
            )}
          </>
        ) : (
          <>
            <p>No Have Information User</p>
          </>
        )}
      </Drawer>
    </>
  );
};

export default ViewUserDetail;
