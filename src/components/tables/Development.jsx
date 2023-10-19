import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const Development = () => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Development Table</Heading>
      </CardHeader>

      <CardBody>
        <TableContainer>
          {/*  size={['sm', 'md', 'lg']} */}
          <Table variant="simple">
            <TableCaption>Development Table</TableCaption>
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Title</Th>
                <Th isNumeric>Title</Th>
                <Th>Title</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Marketplace</Td>
                <Td>icon</Td>
                <Td>25.4</Td>
                <Td>75.5%</Td>
              </Tr>
              <Tr>
                <Td>Marketplace</Td>
                <Td>icon</Td>
                <Td>25.4</Td>
                <Td>75.5%</Td>
              </Tr>
              <Tr>
                <Td>Marketplace</Td>
                <Td>icon</Td>
                <Td>25.4</Td>
                <Td>75.5%</Td>
              </Tr>
              <Tr>
                <Td>Marketplace</Td>
                <Td>icon</Td>
                <Td>25.4</Td>
                <Td>75.5%</Td>
              </Tr>
              <Tr>
                <Td>Marketplace</Td>
                <Td>icon</Td>
                <Td>25.4</Td>
                <Td>75.5%</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  );
};

export default Development;
