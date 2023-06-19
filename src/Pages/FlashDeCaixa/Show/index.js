import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Title from "../../../Components/Layout/Title";
import { payments } from "../../../mock/payments";

const FlashDeCaixa = () => {
  const [dateRange, setDateRange] = useState({
    startDate: "",
    endDate: "",
  });
  const [filteredPayments, setFilteredPayments] = useState(payments);

  const filterByDate = () => {
    const startDate = new Date(dateRange.startDate);
    const endDate = new Date(dateRange.endDate);

    const filteredData = payments.filter((data) => {
      const dataDate = new Date(data.created_at);

      return dataDate >= startDate && dataDate <= endDate;
    });

    setFilteredPayments(filteredData);
  };

  const filterPaymentPerType = (payments, type) => {
    return payments.filter((payment) => payment.payment_type === type);
  };

  const sumValues = (payments) => {
    const total = payments.reduce((accumulator, payment) => {
      return accumulator + payment.value;
    }, 0);

    return total;
  };

  const totalDinheiroCalculado = sumValues(
    filterPaymentPerType(filteredPayments, "Dinheiro")
  ).toFixed(2);
  const totalCreditoCalculado = sumValues(
    filterPaymentPerType(filteredPayments, "Crédito")
  ).toFixed(2);
  const totalPixCalculado = sumValues(
    filterPaymentPerType(filteredPayments, "Pix")
  ).toFixed(2);
  const totalGeralCalculado = (
    Number(totalDinheiroCalculado) +
    Number(totalCreditoCalculado) +
    Number(totalPixCalculado)
  ).toFixed(2);

  const totalDinheiroDeclarado = (totalDinheiroCalculado * 0.95).toFixed(2);
  const totalCreditoDeclarado = (totalCreditoCalculado * 0.98).toFixed(2);
  const totalPixDeclarado = (totalPixCalculado * 0.99).toFixed(2);
  const totalGeralDeclarado = (
    Number(totalCreditoDeclarado) +
    Number(totalDinheiroDeclarado) +
    Number(totalPixDeclarado)
  ).toFixed(2);

  return (
    <Card sx={{ width: "100%", p: 2 }}>
      <Title title="Flash de Caixa" />
      <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <Typography variant="h5">Selecione um período de movimentações</Typography>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }} mt={1}>
        <TextField
          type="date"
          label="Data Inicial"
          value={dateRange.startDate}
          onChange={({ target }) =>
            setDateRange({ ...dateRange, startDate: target.value })
          }
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          sx={{ marginLeft: "1rem" }}
          type="date"
          label="Data Final"
          value={dateRange.endDate}
          onChange={({ target }) =>
            setDateRange({ ...dateRange, endDate: target.value })
          }
          InputLabelProps={{ shrink: true }}
        />
        <Button
          sx={{ marginLeft: "1rem" }}
          color="primary"
          variant="contained"
          startIcon={<SearchIcon />}
          onClick={() => filterByDate()}
        >
          Pesquisar
        </Button>
      </Box>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><b>Forma de Pagamento</b></TableCell>
            <TableCell><b>Calculado</b></TableCell>
            <TableCell><b>Declarado</b></TableCell>
            <TableCell><b>Diferença</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Dinheiro</TableCell>
            <TableCell>R$ {totalDinheiroCalculado}</TableCell>
            <TableCell>R$ {totalDinheiroDeclarado}</TableCell>
            <TableCell>
              R$ {(totalDinheiroCalculado - totalDinheiroDeclarado).toFixed(2)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Crédito</TableCell>
            <TableCell>R$ {totalCreditoCalculado}</TableCell>
            <TableCell>R$ {totalCreditoDeclarado}</TableCell>
            <TableCell>
              R$ {(totalCreditoCalculado - totalCreditoDeclarado).toFixed(2)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Pix</TableCell>
            <TableCell>R$ {totalPixCalculado}</TableCell>
            <TableCell>R$ {totalPixDeclarado}</TableCell>
            <TableCell>
              R$ {(totalPixCalculado - totalPixDeclarado).toFixed(2)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell>R$ {totalGeralCalculado}</TableCell>
            <TableCell>R$ {totalGeralDeclarado}</TableCell>
            <TableCell>
              R$ {(totalGeralCalculado - totalGeralDeclarado).toFixed(2)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
};

export default FlashDeCaixa;
