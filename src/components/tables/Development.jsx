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
    Image,
    HStack,
} from '@chakra-ui/react';
import apple from '../../assets/images/tables/apple.svg';
import android from '../../assets/images/tables/android.svg';
import windows from '../../assets/images/tables/windows.svg';

const data = [
    {
        title: 'Marketplace',
        image: [
            {
                src: apple,
                alt: 'apple',
            },
            {
                src: android,
                alt: 'android',
            },
            {
                src: windows,
                alt: 'windows',
            },
        ],
        number: 25.4,
        percentage: 75.5,
    },
    {
        title: 'Marketplace2',
        image: [
            {
                src: apple,
                alt: 'apple',
            },
            {
                src: android,
                alt: 'android',
            },
        ],
        number: 10,
        percentage: 30,
    },
    {
        title: 'Marketplace',
        image: [
            {
                src: apple,
                alt: 'apple',
            },
            {
                src: android,
                alt: 'android',
            },
            {
                src: windows,
                alt: 'windows',
            },
        ],
        number: 25.4,
        percentage: 75.5,
    },
    {
        title: 'Marketplace',
        image: [
            {
                src: apple,
                alt: 'apple',
            },
            {
                src: android,
                alt: 'android',
            },
            {
                src: windows,
                alt: 'windows',
            },
        ],
        number: 25.4,
        percentage: 75.5,
    },
    {
        title: 'Marketplace',
        image: [
            {
                src: apple,
                alt: 'apple',
            },
            {
                src: android,
                alt: 'android',
            },
            {
                src: windows,
                alt: 'windows',
            },
        ],
        number: 25.4,
        percentage: 75.5,
    },
    {
        title: 'Marketplace',
        image: [
            {
                src: apple,
                alt: 'apple',
            },
            {
                src: android,
                alt: 'android',
            },
            {
                src: windows,
                alt: 'windows',
            },
        ],
        number: 25.4,
        percentage: 75.5,
    },
    {
        title: 'Marketplace',
        image: [
            {
                src: apple,
                alt: 'apple',
            },
            {
                src: android,
                alt: 'android',
            },
            {
                src: windows,
                alt: 'windows',
            },
        ],
        number: 25.4,
        percentage: 75.5,
    },
    {
        title: 'Marketplace',
        image: [
            {
                src: apple,
                alt: 'apple',
            },
            {
                src: android,
                alt: 'android',
            },
            {
                src: windows,
                alt: 'windows',
            },
        ],
        number: 25.4,
        percentage: 75.5,
    },
    {
        title: 'Marketplace',
        image: [
            {
                src: apple,
                alt: 'apple',
            },
            {
                src: android,
                alt: 'android',
            },
            {
                src: windows,
                alt: 'windows',
            },
        ],
        number: 25.4,
        percentage: 75.5,
    },
    {
        title: 'Marketplace',
        image: [
            {
                src: apple,
                alt: 'apple',
            },
            {
                src: android,
                alt: 'android',
            },
            {
                src: windows,
                alt: 'windows',
            },
        ],
        number: 25.4,
        percentage: 75.5,
    },
    {
        title: 'Marketplace',
        image: [
            {
                src: apple,
                alt: 'apple',
            },
            {
                src: android,
                alt: 'android',
            },
            {
                src: windows,
                alt: 'windows',
            },
        ],
        number: 25.4,
        percentage: 75.5,
    },
];

const Development = () => {
    return (
        <Card>
            <CardHeader>
                <Heading size="md">Development Table</Heading>
            </CardHeader>

            <CardBody py={2} px={5}>
                <TableContainer overflowX={'hidden'} overflowY={'auto'} maxH="296px">
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
                            {data.map((item, index) => (
                                <Tr key={index}>
                                    <Td>{item.title}</Td>
                                    <Td>
                                        <HStack spacing={1} alignItems={'center'}>
                                            {item.image.map((images, i) => (
                                                <Image key={i} src={images.src} alt={images.alt} />
                                            ))}
                                        </HStack>
                                    </Td>
                                    <Td>{item.number}</Td>
                                    <Td>{item.percentage}%</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </CardBody>
        </Card>
    );
};

export default Development;
