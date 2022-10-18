import { useState } from 'react';

import WritePageButton from 'components/Icons/WritePageButton';
import NewUserPost from 'components/navbar/WritePage';

function PostRender() {
  const [openPostModal, setOpenPostModal] = useState(false);

  const changeOpenPostModal = () => {
    setOpenPostModal(false);
  };
  return (
    <div>
      <WritePageButton setOpenPostModal={setOpenPostModal} />
      {openPostModal && (
        <NewUserPost
          setOpenPostModal={setOpenPostModal}
          changeOpenPostModal={changeOpenPostModal}
        />
      )}
    </div>
  );
}

export default PostRender;
