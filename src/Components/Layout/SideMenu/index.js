import "./styles.css";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Permission from "../../../Contexts/Permission";
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
import { AuthContext } from "../../../Contexts/Auth";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PeopleIcon from "@mui/icons-material/People";
import theme from "../../../Theme/theme";

export default function MenuLateral() {
  const navigate = useNavigate();
  const { logout, usuario } = useContext(AuthContext);
  const [financeiroAnchorEl, setFinanceiroAnchorEl] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [adminAnchorEl, setAdminAnchorEl] = useState(null);
  const [clientsAnchorEl, setClientsAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(null);

  const handleFinanceiroMenuOpen = (event) => {
    setFinanceiroAnchorEl(event.currentTarget);
  };

  const handleFinanceiroMenuClose = () => {
    setFinanceiroAnchorEl(null);
  };

  const handleCardapioMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleCardapioMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleAdminMenuOpen = (event) => {
    setAdminAnchorEl(event.currentTarget);
  };

  const handleAdminMenuClose = () => {
    setAdminAnchorEl(null);
  };

  const handleClientMenuOpen = (event) => {
    setClientsAnchorEl(event.currentTarget);
  };

  const handleClientMenuClose = () => {
    setClientsAnchorEl(null);
  };

  const loggedUser = JSON.parse(localStorage.getItem("usuario"));

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
            loggedUser.perfil === "cliente"
              ? loggedUser.logo
              : "https://static.vecteezy.com/system/resources/thumbnails/012/210/707/small/worker-employee-businessman-avatar-profile-icon-vector.jpg"
          }
        />
        <Typography style={{ color: "white", textAlign: "center" }}>
          {usuario.nome}
        </Typography>
      </Box>
      <List sx={{ height: "50%" }}>
        <Permission permissions={["admin"]}>
          <ListItem className="list-item">
            <ListItemButton onClick={handleAdminMenuOpen}>
              <AdminPanelSettingsIcon className="list-item-icon" />
              <ListItemText primary="Administrador" />
            </ListItemButton>
            <Menu
              anchorEl={adminAnchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(adminAnchorEl)}
              onClose={handleAdminMenuClose}
            >
              <MenuItem
                onClick={() => {
                  handleAdminMenuClose();
                  navigate("/admin/restaurants");
                }}
              >
                Visualizar Restaurantes
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleAdminMenuClose();
                  navigate("/admin/restaurants/create");
                }}
              >
                Cadastrar Restaurante
              </MenuItem>
            </Menu>
          </ListItem>
        </Permission>
        <Divider />
        <Permission permissions={["cliente"]}>
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
              <MenuItem
                onClick={() => {
                  handleFinanceiroMenuClose();
                  navigate("/caixageral");
                }}
              >
                Caixa Geral
              </MenuItem>
              <Divider />

              <MenuItem
                onClick={() => {
                  handleFinanceiroMenuClose();
                  navigate("/flashcaixa");
                }}
              >
                Flash de Caixa
              </MenuItem>
            </Menu>
          </ListItem>

          <ListItem className="list-item">
            <ListItemButton onClick={handleCardapioMenuOpen}>
              <RestaurantMenuIcon className="list-item-icon" />
              <ListItemText primary="Cardápio" />
            </ListItemButton>
            <Menu
              anchorEl={menuAnchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(menuAnchorEl)}
              onClose={handleCardapioMenuClose}
            >
              <MenuItem
                onClick={() => {
                  handleCardapioMenuClose();
                  navigate("/menus");
                }}
              >
                Visualizar Cardápios
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
            <ListItemButton onClick={handleClientMenuOpen}>
              <PeopleIcon className="list-item-icon" />
              <ListItemText primary="Clientes" />
            </ListItemButton>
            <Menu
              anchorEl={clientsAnchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(clientsAnchorEl)}
              onClose={handleClientMenuClose}
            >
              <MenuItem
                onClick={() => {
                  handleClientMenuClose();
                  navigate("/clients");
                }}
              >
                Visualizar Clientes
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={() => {
                  handleClientMenuClose();
                  navigate("/clients/create");
                }}
              >
                Cadastrar Cliente
              </MenuItem>
            </Menu>
          </ListItem>

          <ListItem className="list-item" onClick={() => navigate("/orders")}>
            <ListItemButton>
              <DeliveryDiningIcon className="list-item-icon" />
              <ListItemText primary="Pedidos" />
            </ListItemButton>
          </ListItem>
        </Permission>

        <ListItem className="list-item">
          <ListItemButton onClick={() => navigate("/history")}>
            <HistoryIcon className="list-item-icon" />
            <ListItemText primary="Histórico" />
          </ListItemButton>
        </ListItem>

        <ListItem className="list-item">
          <ListItemButton onClick={() => setOpenDialog(!openDialog)}>
            <LogoutIcon className="list-item-icon" />
            <ListItemText primary="Sair" />
          </ListItemButton>
        </ListItem>
      </List>

      <Dialog open={openDialog} onClose={() => setOpenDialog(!openDialog)}>
        <DialogTitle id="alert-dialog-title">
          <Typography variant="h6"> Deseja realmente sair?</Typography>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <Typography>Você precisará realizar login novamente</Typography>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={() => setOpenDialog(!openDialog)}>
            Cancelar
          </Button>
          <Button color="primary" onClick={() => logout()} autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
