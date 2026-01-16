// ThemeSwitch.tsx
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { toggleTheme } from "../../features/theme/themeSlice";
import { FaSun, FaMoon } from "react-icons/fa";

// Container for the toggle
const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-right: 24px;
`;

// The toggle track
const ToggleTrack = styled.div<{ thememode: string }>`
  width: 50px;
  height: 30px;
  background-color: ${({ thememode }) =>
    thememode === "light" ? "#f1c40f" : "#34495e"};
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

// The toggle knob
const ToggleKnob = styled.div<{ thememode: string }>`
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.background};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({ thememode }) =>
    thememode === "light" ? "translateX(5px)" : "translateX(20px)"};
  transition: transform 0.3s ease, background-color 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

export const ThemeSwitch = () => {
  const theme = useAppSelector((state: any) => state.theme.value);
  const dispatch = useAppDispatch();

  return (
    <SwitchContainer>
      <ToggleTrack thememode={theme} onClick={() => dispatch(toggleTheme())}>
        <ToggleKnob thememode={theme}>
          {theme === "light" ? <FaSun color="#f39c12" /> : <FaMoon color="#f1c40f" />}
        </ToggleKnob>
      </ToggleTrack>
    </SwitchContainer>
  );
};
