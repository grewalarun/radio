
export interface AppTheme {
  background: string;
  text: string;
  colors: {
    text: string;
    heading: string;
    border: string;
    button: string;
    inputbackground: string,
    inputcolor: string,
    success: string,
    warning: string
  };
}

export const lightTheme: AppTheme = {
  background: "#ffffff",
  text: "#454545",
  colors: {
    text: "#333",
    heading: "#111",
    border: "#2f2f2f",
    button: "#3498db",
    inputbackground: "#e0e0e0",
    inputcolor: "#000",
    success: "#22c55e",
    warning: "#3b82f6"
  },
};

export const darkTheme: AppTheme = {
  background: "#121212",
  text: "#ffffff",
  colors: {
    text: "#f0f0f0",
    heading: "#fff",
    border: "#c7c7c7",
    button: "#9b59b6",
    inputbackground: "#272727",
    inputcolor: "#fff",
    success: "#22c55e",
    warning: "#3b82f6"
  },
};
