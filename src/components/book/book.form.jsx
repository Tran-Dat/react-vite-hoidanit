import { Button, notification, Modal, Input } from "antd";
import { useState } from "react";
import { createBookAPI } from "../../services/api.services";

const BookForm = (props) => {
  const { loadBook } = props;

  const [thumbnail, setThumbnail] = useState("");
  const [mainText, setMainText] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmitBtn = async () => {
    const res = await createBookAPI(
      thumbnail,
      mainText,
      author,
      price,
      quantity,
      category
    );
    if (res.data) {
      notification.success({
        message: "Create book",
        description: "tao book thanh cong",
      });
      resetAndCloseModal();
      await loadBook();
    } else {
      notification.error({
        message: "Error create book",
        description: JSON.stringify(res.message),
      });
    }
  };

  const resetAndCloseModal = () => {
    setIsModalOpen(false);
    setThumbnail("");
    setMainText("");
    setAuthor("");
    setPrice("");
    setQuantity("");
    setCategory("");
  };

  return (
    <div className="user-form" style={{ margin: "20px 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Table Users</h3>
        <Button type="primary" onClick={() => setIsModalOpen(true)}>
          Creat User
        </Button>
      </div>

      <Modal
        title="Create book"
        open={isModalOpen}
        onOk={() => handleSubmitBtn()}
        onCancel={() => resetAndCloseModal()}
        maskClosable={false}
        okText="Create"
      >
        <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
          <div>
            <span>
              Thumb Nail
              <Input
                value={thumbnail}
                onChange={(event) => setThumbnail(event.target.value)}
              />
            </span>
          </div>
          <div>
            <span>
              Title
              <Input
                value={mainText}
                onChange={(event) => setMainText(event.target.value)}
              />
            </span>
          </div>
          <div>
            <span>
              Author
              <Input
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
              />
            </span>
          </div>
          <div>
            <span>
              Price
              <Input
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
            </span>
          </div>
          <div>
            <span>
              Quantity
              <Input
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
              />
            </span>
          </div>
          <div>
            <span>
              Category
              <Input
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              />
            </span>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BookForm;
