import { Button, useColorScheme } from "@mui/material";
import React from "react";

const ModeSwitcher = () => {
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
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
            {mode === "light" ? "Dark" : "Light"}
        </Button>
    );
};

export default ModeSwitcher;
