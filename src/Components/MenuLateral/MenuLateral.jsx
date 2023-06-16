import "./MenuLateral.css";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Permission from "../../Contexts/Permission";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import HistoryIcon from "@mui/icons-material/History";
import StorefrontIcon from "@mui/icons-material/Storefront";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import LogoutIcon from "@mui/icons-material/Logout";
import { AuthContext } from "../../Contexts/Auth";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import theme from "../../Theme/theme";

export default function MenuLateral() {
  const { logout } = useContext(AuthContext);
  const [financeiroAnchorEl, setFinanceiroAnchorEl] = useState(null);
  const [cardapioAnchorEl, setCardapioAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleFinanceiroMenuOpen = (event) => {
    setFinanceiroAnchorEl(event.currentTarget);
  };

  const handleFinanceiroMenuClose = () => {
    setFinanceiroAnchorEl(null);
  };

  const handleCardapioMenuOpen = (event) => {
    setCardapioAnchorEl(event.currentTarget);
  };

  const handleCardapioMenuClose = () => {
    setCardapioAnchorEl(null);
  };
  const navigate = useNavigate();

  if (localStorage.getItem("usuario")) {
    var Id = JSON.parse(localStorage.getItem("usuario"));
  }

  return (
    <Box
      sx={{
        height: "100%",
        width: "350px",
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "fixed",
        zIndex: 2,
        justifyContent: "space-evenly",
      }}
    >
      <Box>
        <img
          className="foto-perfil"
          alt="foto-perfil"
          src={
            "https://static.vecteezy.com/system/resources/thumbnails/012/210/707/small/worker-employee-businessman-avatar-profile-icon-vector.jpg" ||
            Id?.logo
          }
        />
        <p style={{ color: "white", textAlign: "center" }}>{Id?.nome}</p>
      </Box>
      <List>
        <Permission permissions={["admin"]}>
          <ListItem className="list-item">
            <ListItemButton onClick={() => navigate("/admin/restaurants")}>
              <AdminPanelSettingsIcon className="list-item-icon" />

              <ListItemText primary="Administrador" />
            </ListItemButton>
          </ListItem>
        </Permission>
        <Divider />
        <Permission permissions={["admin", "gestor", "cliente"]}>
          <ListItem className="list-item">
            <ListItemButton onClick={handleFinanceiroMenuOpen}>
              <LocalAtmIcon className="list-item-icon" />
              <ListItemText primary="Financeiro" />
            </ListItemButton>
            <Menu
              anchorEl={financeiroAnchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(financeiroAnchorEl)}
              onClose={handleFinanceiroMenuClose}
            >
              <Typography p={1}>
                <b>Financeiro</b>
              </Typography>
              <Divider />
              <MenuItem
                onClick={() => {
                  handleFinanceiroMenuClose();
                  navigate("/clients");
                }}
              >
                Clientes
              </MenuItem>
              <MenuItem>Produtos</MenuItem>
              <MenuItem>Painel de Vendas</MenuItem>

              <Typography p={1} mt={1}>
                <b>Caixa</b>
              </Typography>
              <Divider />
              <MenuItem
                onClick={() => {
                  handleFinanceiroMenuClose();
                  navigate("/caixageral");
                }}
              >
                Caixa Geral
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleFinanceiroMenuClose();
                  navigate("/flashcaixa");
                }}
              >
                Flash de Caixa
              </MenuItem>
              <Typography p={1} mt={1}>
                <b>Cadastro</b>
              </Typography>
              <Divider />
              <MenuItem
                onClick={() => {
                  handleFinanceiroMenuClose();
                  navigate("/products/create");
                }}
              >
                Cadastro de Produtos
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleFinanceiroMenuClose();
                  navigate("/clients/create");
                }}
              >
                Cadastro de Clientes
              </MenuItem>
            </Menu>
          </ListItem>

          <ListItem className="list-item">
            <ListItemButton onClick={handleCardapioMenuOpen}>
              <RestaurantMenuIcon className="list-item-icon" />
              <ListItemText primary="Cardápio" />
            </ListItemButton>
            <Menu
              anchorEl={cardapioAnchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(cardapioAnchorEl)}
              onClose={handleCardapioMenuClose}
            >
              <MenuItem
                onClick={() => {
                  handleCardapioMenuClose();
                  navigate("/menus");
                }}
              >
                Mostrar Cardápios
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={() => {
                  handleCardapioMenuClose();
                  navigate("/menus/create");
                }}
              >
                Cadastrar Cardápio
              </MenuItem>
            </Menu>
          </ListItem>

          <ListItem className="list-item">
            <ListItemButton>
              <StorefrontIcon className="list-item-icon" />
              <ListItemText primary="Estoque" />
            </ListItemButton>
          </ListItem>

          <ListItem className="list-item">
            <ListItemButton onClick={() => navigate("/historico")}>
              <HistoryIcon className="list-item-icon" />
              <ListItemText primary="Histórico" />
            </ListItemButton>
          </ListItem>

          <ListItem className="list-item" onClick={() => navigate("/orders")}>
            <ListItemButton>
              <DeliveryDiningIcon className="list-item-icon" />
              <ListItemText primary="Pedidos" />
            </ListItemButton>
          </ListItem>

          <ListItem className="list-item">
            <ListItemButton onClick={() => setOpenDialog(!openDialog)}>
              <LogoutIcon className="list-item-icon" />
              <ListItemText primary="Sair" />
            </ListItemButton>
          </ListItem>
        </Permission>
      </List>
      <Dialog open={openDialog} onClose={() => setOpenDialog(!openDialog)}>
        <DialogTitle id="alert-dialog-title">
          <Typography variant="h6"> Deseja realmente sair?</Typography>
        </DialogTitle>
        <Divider />
        <DialogContent>Você precisará realizar login novamente</DialogContent>
        <DialogActions>
          <Button color="error" onClick={() => setOpenDialog(!openDialog)}>
            Cancelar
          </Button>
          <Button color="success" onClick={() => logout()} autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
