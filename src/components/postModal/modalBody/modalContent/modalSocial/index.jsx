import styled from 'styled-components';

function ModalSocial() {
  return (
    <ModalSocialWrapper>
      <div className="social-icons-container">
        <span className="likes-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
          >
            <path
              d="M3.87499 11.625C8.37499 16.875 11 18.375 11 18.375C11 18.375 13.625 16.875 18.125 11.625C22.625 6.375 19.625 1.125 15.875 1.125C12.125 1.125 11 5.625 11 5.625C11 5.625 9.87499 1.125 6.12499 1.125C2.37499 1.125 -0.625012 6.375 3.87499 11.625Z"
              stroke="#6A6A6A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="comments-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
          >
            <path
              d="M17.6525 14.8626C17.5228 14.9952 17.4233 15.1552 17.3613 15.3314C17.2993 15.5076 17.2762 15.6955 17.2937 15.8818C17.3816 16.7441 17.5482 17.5961 17.7912 18.4268C16.0475 18.0158 14.9825 17.5399 14.4987 17.2905C14.2244 17.149 13.9084 17.1155 13.6112 17.1963C12.7595 17.4275 11.8815 17.5439 11 17.5425C6.005 17.5425 2.25 13.9706 2.25 9.90747C2.25 5.84567 6.005 2.2725 11 2.2725C15.995 2.2725 19.75 5.84567 19.75 9.90747C19.75 11.7755 18.9787 13.5086 17.6525 14.8626ZM18.2687 19.8317C18.5649 19.8914 18.862 19.9462 19.16 19.9958C19.41 20.0365 19.6 19.7719 19.5012 19.5352C19.3903 19.2687 19.2885 18.9984 19.1962 18.7246L19.1925 18.7119C18.8825 17.7957 18.63 16.7421 18.5375 15.761C20.0712 14.1958 21 12.1471 21 9.90747C21 4.988 16.5225 1 11 1C5.4775 1 0.999998 4.988 0.999998 9.90747C0.999998 14.8269 5.4775 18.8149 11 18.8149C11.9904 18.8163 12.9768 18.6854 13.9337 18.4256C14.5837 18.7602 15.9825 19.3698 18.2687 19.8317Z"
              fill="#6A6A6A"
              stroke="#6A6A6A"
              strokeWidth="0.4"
            />
          </svg>
        </span>
      </div>
      <div className="social-count-container">
        <span className="likes-count">
          좋아요 {10}개
        </span>
        <span className="comments-count">
          댓글 {replyList.length}개
        </span>
      </div>
    </ModalSocialWrapper>
  );
}

export default ModalSocial;

const ModalSocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;