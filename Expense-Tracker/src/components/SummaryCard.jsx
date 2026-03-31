import { Box, Text } from "@chakra-ui/react";

function SummaryCard({ expenses }) {
  const Total = expenses.reduce((sum, e) => sum + e.amount, 0);
  return (
    <Box p={4} bg="teal.100" w="50%" borderRadius="md">
      <Text fontWeight="bold">Total Expense : {Total}</Text>
    </Box>
  );
}

export default SummaryCard;
