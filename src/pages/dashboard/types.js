import { createTypes } from "reduxsauce";

export default createTypes(
    `
    GET_ITEMS_SUCCESS

    ADD_ITEM

    SET_BY_KEY

    REMOVE_ITEM
`,
    {
        prefix: "dashboard/"
    }
);
