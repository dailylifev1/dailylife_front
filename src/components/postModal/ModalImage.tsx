function ModalImage(image: string) {
  return (
    <div
      className="modal-image"
      style={{
        backgroundImage: `url(${image})`,
      }}
    />
  );
}

export default ModalImage;
