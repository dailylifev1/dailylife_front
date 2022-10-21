import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getAccessToken } from "common/utils";
import { setLoading } from "reducers/loading";
import { useAppDispatch } from "store/hooks";

interface IFormValues {
  title: string;
  content: string;
  thumbNail: string;
  imageName: File[];
  file: string;
  fileImage: string;
}

export default function useWritePage(setOpenPostModal, changeOpenPostModal) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState<IFormValues>({
    title: '',
    content: '',
    thumbNail: 'dummy',
    imageName: [],
    file: '',
    fileImage: '',
  })

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (localStorage.getItem('accessToken') === null) {
      navigate('/login');
      setOpenPostModal(false);
      return '';
    }
    dispatch(setLoading(true));
    const formData = new FormData();
    formData.append('title', formValues.title);
    formData.append('content', formValues.content);
    formData.append('thumbNail', formValues.thumbNail);
    formValues.imageName.forEach((file) => {
      if (file !== null) formData.append('imageName', file);
    });
    if (process.env.REACT_APP_HOST !== undefined) {
      axios
        .post(`${process.env.REACT_APP_HOST}/api/board/create`, formData, {
          headers: {
            'X-ACCESS-TOKEN': getAccessToken(),
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(() => {
          dispatch(setLoading(false));
          window.location.replace('/');
        })
        .catch((err) => {
          console.log(err);
          dispatch(setLoading(false));
        });
      closeModal();
    }
    return undefined;
  }
  const updateFiles = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files !== null) {
        const { files } = e.target;
        setFormValues((prevState) => ({
          ...prevState,
          fileImage: URL.createObjectURL(files[0]),
          imageName: [...formValues.imageName, ...files],
        }));
      }
      // for (let i = 0; i < e.target.files.length; i += 1)
      // setFile(`${file} ${e.target.files[i].name}`);
  }
  const closeModal = () => {
    changeOpenPostModal(false);
  };

  return {
    handleSubmit,
    closeModal,
    formValues,
    setFormValues,
    updateFiles
  }
}
