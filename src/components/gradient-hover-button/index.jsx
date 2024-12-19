import "./styles.css";

export function GradientHoverButton({text = 'Button', theme="dark", onClick = () => {}}){
    return <div className={theme === "dark" ? "gradient-button-dark-container" : "gradient-button-light-container"}>
        <button>{text}</button>
    </div>
}