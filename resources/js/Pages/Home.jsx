import React, { useState } from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ClearIcon from "@mui/icons-material/Clear";
// import Grid from "@mui/material/Grid2";
import {
    Button,
    Stack,
    Box,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Paper,
    TextField,
    Grid,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Divider,
} from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
    },
}));

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
        backgroundColor: "#1A2027",
    }),
}));

const Home = () => {
    const [open, setOpen] = useState("");
    const [company, setCompany] = useState("");
    const [internalSystem, setInternalSystem] = useState("");
    const [module, setModule] = useState("");

    const [file, setFile] = useState(null);
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(URL.createObjectURL(selectedFile)); // Create an object URL for preview
        }
    };

    const handleChange = (setter) => (event) => {
        setter(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    px: 2,
                }}
            >
                <Stack
                    direction="column"
                    spacing={{ xs: 2, md: 3 }}
                    alignItems="center"
                >
                    <Box
                        sx={{
                            px: 6,
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Box
                            component="img"
                            src="/img/logo.png"
                            alt="Logo"
                            sx={{
                                display: "block",
                                width: "100%",
                                maxWidth: "650px",
                                height: "auto",
                            }}
                        />
                    </Box>

                    <Typography
                        variant="h4"
                        align="center"
                        sx={{
                            fontWeight: "600",
                            fontSize: { xs: "1.2rem", sm: "1.7rem" },
                        }}
                    >
                        INTERNAL TICKETING SYSTEM
                    </Typography>
                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={2}
                        sx={{
                            width: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                width: { xs: "250px" },
                            }}
                            onClick={handleClickOpen}
                        >
                            <EditNoteIcon sx={{ mr: 1 }} />
                            CREATE TICKET
                        </Button>

                        {/* DIALOG WITH TEXT FIELDS*/}
                        <BootstrapDialog
                            fullScreen={fullScreen}
                            aria-labelledby="title"
                            open={open}
                            maxWidth="lg"
                            fullWidth
                            onClose={(event, reason) => {
                                if (
                                    reason !== "backdropClick" &&
                                    reason !== "escapeKeyDown"
                                ) {
                                    handleClose();
                                }
                            }}
                        >
                            <DialogTitle sx={{ m: 0, p: 2 }} id="title">
                                <Typography
                                    variant="h5"
                                    fontWeight={600}
                                    color="inherit"
                                >
                                    INTERNAL TICKETING SYSTEM
                                </Typography>
                                <IconButton
                                    aria-label="close"
                                    onClick={handleClose}
                                    sx={{
                                        position: "absolute",
                                        right: 8,
                                        top: 8,
                                        color: (theme) =>
                                            theme.palette.grey[600],
                                    }}
                                >
                                    <CloseIcon />
                                </IconButton>
                            </DialogTitle>
                            <DialogContent dividers>
                                <Box
                                    component="form"
                                    sx={{
                                        "& .MuiTextField-root": {
                                            m: 0,
                                            width: "100%",
                                        },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    {/* ROW 1*/}
                                    <Grid
                                        sx={{ flexGrow: 1, mb: 3 }}
                                        container
                                        spacing={2}
                                    >
                                        <Grid item xs={12} sm={6} md={6} lg={3}>
                                            <TextField
                                                id="name"
                                                label="FULL NAME"
                                                placeholder="Juan Dela cruz"
                                                type="search"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3}>
                                            <FormControl fullWidth>
                                                {" "}
                                                <InputLabel id="company">
                                                    COMPANY
                                                </InputLabel>
                                                <Select
                                                    labelId="company"
                                                    id="company"
                                                    value={company}
                                                    label="COMPANY"
                                                    onChange={handleChange(
                                                        setCompany,
                                                    )}
                                                >
                                                    <MenuItem value={1}>
                                                        Apsoft Inc.
                                                    </MenuItem>
                                                    <MenuItem value={2}>
                                                        Ideaserv Systems, Inc.
                                                    </MenuItem>
                                                    <MenuItem value={3}>
                                                        Phillogix Systems, inc.
                                                    </MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3}>
                                            <TextField
                                                id="department"
                                                label="DEPARTMENT"
                                                placeholder="Technical"
                                                type="search"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3}>
                                            <TextField
                                                id="email"
                                                label="EMAIL"
                                                placeholder="info@mail.com"
                                                type="search"
                                            />
                                        </Grid>
                                    </Grid>

                                    <Typography
                                        variant="h6"
                                        sx={{
                                            bgcolor: "#e3eefa",
                                            // bgcolor: "#f5f5f5",
                                            p: 1,
                                            display: "block",
                                            width: "100%",
                                            fontWeight: 600,
                                            borderRadius: 1,
                                            marginBottom: "15px",
                                        }}
                                    >
                                        ISSUE OR BUG ENCOUNTERED
                                    </Typography>

                                    {/* ROW 2 - DROPDOWNS*/}
                                    <Grid
                                        sx={{ flexGrow: 1 }}
                                        container
                                        spacing={2}
                                    >
                                        <Grid item xs={12} sm={6} md={3}>
                                            <FormControl fullWidth>
                                                <InputLabel id="internal_system_name">
                                                    INTERNAL SYSTEM
                                                </InputLabel>
                                                <Select
                                                    labelId="internal_system_name"
                                                    id="internal_system_id"
                                                    value={internalSystem}
                                                    label="INTERNAL SYSTEM"
                                                    onChange={handleChange(
                                                        setInternalSystem,
                                                    )}
                                                >
                                                    <MenuItem value={1}>
                                                        System 1
                                                    </MenuItem>
                                                    <MenuItem value={2}>
                                                        System 2
                                                    </MenuItem>
                                                    <MenuItem value={3}>
                                                        System 3
                                                    </MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3}>
                                            <FormControl fullWidth>
                                                <InputLabel id="module">
                                                    SYSTEM MODULE
                                                </InputLabel>
                                                <Select
                                                    labelId="module"
                                                    id="module_id"
                                                    value={module}
                                                    label="SYSTEM MODULE"
                                                    onChange={handleChange(
                                                        setModule,
                                                    )}
                                                >
                                                    <MenuItem value={1}>
                                                        System Module 1
                                                    </MenuItem>
                                                    <MenuItem value={2}>
                                                        System Module 2
                                                    </MenuItem>
                                                    <MenuItem value={3}>
                                                        System Module 3
                                                    </MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    {/* ROW 3  TEXT AREA FIELD*/}
                                    <Grid
                                        container
                                        spacing={{ sx: 1, sm: 2, md: 2 }}
                                        sx={{ flexGrow: 1 }}
                                    >
                                        <Grid item xs={12} sm={12} md={8}>
                                            <Box
                                                sx={{
                                                    mt: 3,
                                                    width: "100%",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: 2,
                                                    position: "relative",
                                                }}
                                            >
                                                <TextField
                                                    label="Your Message"
                                                    variant="outlined"
                                                    multiline
                                                    fullWidth
                                                    maxRows={20}
                                                    minRows={17}
                                                    placeholder="Type your message here..."
                                                    sx={{
                                                        "& .MuiOutlinedInput-root":
                                                            {
                                                                borderRadius:
                                                                    "4px",
                                                            },
                                                        transition:
                                                            "all 0.3s ease",
                                                        "&:hover .MuiOutlinedInput-root":
                                                            {
                                                                borderColor:
                                                                    "#007BFF",
                                                            },
                                                    }}
                                                />
                                            </Box>
                                        </Grid>

                                        {/* File Preview - Takes up 2/12 of the width */}
                                        <Grid item xs={12} sm={12} md={4}>
                                            {file ? (
                                                <a
                                                    href={file}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{
                                                        textDecoration: "none",
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            position:
                                                                "relative",
                                                            mt: 3,
                                                            width: "100%",
                                                            padding: 1,
                                                            backgroundColor:
                                                                "rgba(255, 255, 255, 0.7)",
                                                            display: "flex",
                                                            alignItems:
                                                                "center",
                                                            justifyContent:
                                                                "center",
                                                            overflow: "hidden",
                                                            borderRadius: "4px",
                                                            border: "2px solid #ccc",
                                                            cursor: "pointer",
                                                            transition:
                                                                "all 0.3s ease",
                                                            "&:hover": {
                                                                borderColor:
                                                                    "#007BFF",
                                                                backgroundColor:
                                                                    "rgba(0, 123, 255, 0.1)",
                                                                boxShadow:
                                                                    "0px 4px 8px rgba(0, 0, 0, 0.2)",
                                                            },
                                                        }}
                                                    >
                                                        {file.endsWith(
                                                            ".pdf",
                                                        ) ? (
                                                            <iframe
                                                                src={file}
                                                                width="100px"
                                                                height="auto"
                                                                title="PDF Preview"
                                                                style={{
                                                                    border: "none",
                                                                }}
                                                            />
                                                        ) : (
                                                            <img
                                                                src={file}
                                                                alt="Attachment Preview"
                                                                width="100%"
                                                                height="auto"
                                                                style={{
                                                                    border: "2px solid #ccc",
                                                                    borderRadius:
                                                                        "4px",
                                                                }}
                                                                onError={(
                                                                    e,
                                                                ) => {
                                                                    e.target.src =
                                                                        "/img/imgplaceholder.jpg";
                                                                }}
                                                            />
                                                        )}
                                                    </Box>
                                                </a>
                                            ) : (
                                                <Box
                                                    sx={{
                                                        position: "relative",
                                                        mt: 3,
                                                        width: "100%",
                                                        padding: 1,
                                                        backgroundColor:
                                                            "rgba(255, 255, 255, 0.7)",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent:
                                                            "center",
                                                        overflow: "hidden",
                                                        borderRadius: "4px",
                                                        border: "2px solid #ccc",
                                                        cursor: "not-allowed",
                                                        transition:
                                                            "all 0.3s ease",
                                                    }}
                                                >
                                                    <img
                                                        src="/img/imgplaceholder.jpg"
                                                        alt="No Image Available"
                                                        width="100%"
                                                        height="auto"
                                                        style={{
                                                            border: "2px solid #ccc",
                                                            borderRadius: "4px",
                                                        }}
                                                    />
                                                </Box>
                                            )}
                                        </Grid>
                                    </Grid>

                                    {/* BUTTONS */}
                                    <Box mt={2}>
                                        <Grid
                                            container
                                            spacing={{ xs: 2, sm: 2, md: 2 }}
                                        >
                                            <Grid
                                                item
                                                xs={6}
                                                sm={6}
                                                md={4}
                                                lg={3}
                                            >
                                                <Button
                                                    variant="contained"
                                                    component="label"
                                                    size="large"
                                                    fullWidth
                                                >
                                                    <AttachFileIcon
                                                        sx={{ mr: 1 }}
                                                    />
                                                    Attach File
                                                    <input
                                                        type="file"
                                                        hidden
                                                        onChange={
                                                            handleFileChange
                                                        }
                                                    />
                                                </Button>
                                            </Grid>
                                            <Grid
                                                item
                                                xs={6}
                                                sm={6}
                                                md={4}
                                                lg={3}
                                            >
                                                {file && (
                                                    <Button
                                                        variant="contained"
                                                        component="label"
                                                        size="large"
                                                        color="error"
                                                        fullWidth
                                                        onClick={() => {
                                                            setFile(null);
                                                        }}
                                                    >
                                                        <ClearIcon
                                                            sx={{ mr: 1 }}
                                                        />
                                                        Remove Image
                                                    </Button>
                                                )}
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </DialogContent>
                            <DialogActions>
                                <Button
                                    variant="contained"
                                    autoFocus
                                    onClick={handleClose}
                                >
                                    Submit
                                    <SendIcon sx={{ ml: 1 }} />
                                </Button>
                            </DialogActions>
                        </BootstrapDialog>

                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                width: { xs: "250px" },
                            }}
                        >
                            <ChatIcon sx={{ mr: 1 }} />
                            CHAT WITH SUPPORT
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </>
    );
};

export default Home;
