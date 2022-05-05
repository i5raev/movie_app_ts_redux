import {useParams} from "react-router-dom";

export const UseParamsId = () => {
    let id: any;
    ({id} = useParams());
    return {id}
}
