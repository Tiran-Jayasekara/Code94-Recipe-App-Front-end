import React from "react";
import { Modal } from "antd";

//This Modal is used to delete Recipe
const DeleteModal = ({ open, onCancel, DeleteRecipe }) => {
  return (
    <Modal
      open={open}
      onCancel={onCancel}
      footer={
        <div className="flex flex-row items-end justify-end">
          <h1
            className="blue_btn w-fit cursor-pointer"
            key="cancel"
            onClick={() => {
              DeleteRecipe();
            }}
          >
            Yes
          </h1>
          <h1
            className="black_btn w-fit ml-2 cursor-pointer"
            key="ok"
            type="primary"
            onClick={onCancel}
          >
            Cancel
          </h1>
        </div>
      }
    >
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold text-red-700">Alert</h1>
        <h2 className="text-xl font-bold text-red-700 mt-10 mb-6">
          Are you sure you want to delete this Recipe ?
        </h2>
      </div>
    </Modal>
  );
};

export default DeleteModal;
