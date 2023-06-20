import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import Title from "../../../Components/Layout/Title";
import SearchIcon from "@mui/icons-material/Search";
import { cashRegister } from "../../../mock/cashRegister";
import SearchOffIcon from "@mui/icons-material/SearchOff";

const CaixaGeral = () => {
  const [dateRange, setDateRange] = useState({
    startDate: "",
    endDate: "",
  });
  const [filteredCash, setFilteredCash] = useState(cashRegister);
  const [situationFilter, setSituationFilter] = useState("all");

  const filterByDate = () => {
    const startDate = new Date(dateRange.startDate);
    const endDate = new Date(dateRange.endDate);

    const filteredData = cashRegister.filter((data) => {
      const dataDate = new Date(data.date);

      return dataDate >= startDate && dataDate <= endDate;
    });

    setFilteredCash(filteredData);
  };

  const handleSituationFilterChange = ({ target }) => {
    setSituationFilter(target.value);
  };

  const applyFilters = () => {
    let filteredData = cashRegister;

    if (dateRange.startDate && dateRange.endDate) {
      const startDate = new Date(dateRange.startDate);
      const endDate = new Date(dateRange.endDate);

      filteredData = filteredData.filter((data) => {
        const dataDate = new Date(data.date);
        return dataDate >= startDate && dataDate <= endDate;
      });
    }

    if (situationFilter !== "all") {
      filteredData = filteredData.filter(
        (data) => data.situation === situationFilter
      );
    }

    setFilteredCash(filteredData);
  };

  return (
    <Card sx={{ width: "100%", p: 2 }}>
      <Title title="Caixa Geral" />
      <Typography variant="h6" mb={1}>
        Selecione um período de movimentações e situação
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
          mt={1}
        >
          <FormControl label="Situação" component="fieldset">
            <RadioGroup
              row
              name="situation"
              value={situationFilter}
              onChange={handleSituationFilterChange}
            >
              <FormControlLabel value="all" control={<Radio />} label="Todos" />
              <FormControlLabel
                value="aberto"
                control={<Radio />}
                label="Aberto"
              />
              <FormControlLabel
                value="fechado"
                control={<Radio />}
                label="Fechado"
              />
            </RadioGroup>
          </FormControl>
          <Box>
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
              sx={{ marginLeft: "1rem", height: "100%" }}
              color="primary"
              variant="contained"
              startIcon={<SearchIcon />}
              onClick={() => applyFilters()}
            >
              Pesquisar
            </Button>
          </Box>
        </Box>
      </Box>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Movimentação</b>
            </TableCell>
            <TableCell>
              <b>Calculado</b>
            </TableCell>
            <TableCell>
              <b>Declarado</b>
            </TableCell>
            <TableCell>
              <b>Diferença</b>
            </TableCell>
            <TableCell>
              <b>Situação</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredCash.length ? (
            filteredCash.map((cash, index) => (
              <TableRow key={index}>
                <TableCell>
                  {new Date(cash.date).toLocaleDateString()}
                </TableCell>
                <TableCell>R$ {cash.value.toFixed(2)}</TableCell>
                <TableCell>R$ {(cash.value * 0.95).toFixed(2)}</TableCell>
                <TableCell>
                  R$ {(cash.value - cash.value * 0.95).toFixed(2)}
                </TableCell>
                <TableCell>{cash.situation}</TableCell>
              </TableRow>
            ))
          ) : (
            <Typography variant="h6" mt={2}>
              <SearchOffIcon /> Sem resultados para o filtro atual.
            </Typography>
          )}
        </TableBody>
      </Table>
    </Card>
  );
};

export default CaixaGeral;
