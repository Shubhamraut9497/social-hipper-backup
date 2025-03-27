import ImportantUpdate from "@/components/ImportantUpdate/ImportantUpdate";
import ConditionalTable from "@/components/top-contributors/ConditionalTable";
import Message from "@/components/top-contributors/Message";

import React from "react";

const page = () => {
  return (
    <div>
      <ImportantUpdate />
      <Message />
      <ConditionalTable />
    </div>
  );
};

export default page;
