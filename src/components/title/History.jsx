import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const History = (props) => {
  // const { pagename } = props;
  return (
    <Breadcrumb color="secondary_grey_700" fontSize={"14px"} fontWeight={"500"}>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        {/* <BreadcrumbLink as={Link} to={`/${pagename.toLowerCase}`}>
          {pagename} */}
        <BreadcrumbLink as={Link} to={`/${props.pagename}`}>
          {props.pagename}
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default History;
