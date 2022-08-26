import { Button, useColorScheme } from "@mui/material";
import Moon from "@mui/icons-material/DarkMode";
import Sun from "@mui/icons-material/LightMode";
import { useEffect, useState } from "react";

const ModeSwitcher = () => {
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <Button
            variant="outlined"
            onClick={() => {
                if (mode === "light") {
                    setMode("dark");
                } else {
                    setMode("light");
                }
            }}
        >
            {mode === "light" ? <Moon /> : <Sun />}
        </Button>
    );
};

export default ModeSwitcher;
