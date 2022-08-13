import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import { postActions } from "../store/post";
import './Pagination.css'

const Paging = (props) => {
    const store = useSelector(state => state);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [rerender, setRerender] = useState('');

    const pageChangeHandler = (page) => {
        setPage((prevState) => {
            setRerender(1);
            return page;
        });
    };
    useEffect(() => {
        axios
            .get(
                `${process.env.REACT_APP_HOST}/api/board/getBoard/${store.post.pageNum}`,
            )
            .then((res) => {
                dispatch(postActions.updateItems(res.data));
                dispatch(postActions.updatePageNum(page))
                setRerender('');
            })
            .catch((res) => {
                console.log(res);
            });
    }, [rerender])
    return (
        <Pagination
            activePage={page}
            itemsCountPerPage={2}
            totalItemsCount={Number(props.totalPostCount)}
            pageRangeDisplayed={5}
            prevPageText={"<"}
            nextPageText={">"}
            onChange={pageChangeHandler}
        />
    );
};

export default Paging