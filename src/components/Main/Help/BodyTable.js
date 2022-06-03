import { ModalBody, Table, Thead, Tbody, Tr, Th, Td, } from "@chakra-ui/react"
import { BODY_TABLE } from '../../../custom'

export const BodyTable = () => (
  <ModalBody>
    <Table variant="simple">
      <Thead>
        <Tr>
          {BODY_TABLE.commands.row.map((item) => (
            <Th color="ui.green" fontFamily="font.body" fontWeight="bold" key={item}>{item}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {BODY_TABLE.commands.col.map((item) => (
          <Tr key={item.key}>
            <Td>{item.command}</Td>
            <Td>{item.description}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>

    <br />

    <Table variant="simple">
      <Thead>
        <Tr>
          {BODY_TABLE.controls.row.map((item) => (
            <Th color="ui.green" fontFamily="font.body" fontWeight="bold" key={item}>{item}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {BODY_TABLE.controls.col.map((item) => (
          <Tr key={item.key}>
            <Td>{item.control}</Td>
            <Td>{item.description}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </ModalBody>
)