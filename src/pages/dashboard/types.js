import { createTypes } from "reduxsauce";

export default createTypes(
    `
    GET_ITEMS_SUCCESS

    ADD_ITEM
`,
    {
        prefix: "dashboard/"
    }
);
