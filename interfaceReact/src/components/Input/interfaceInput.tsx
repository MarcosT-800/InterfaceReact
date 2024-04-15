import React from 'react';

interface InputProps {
  type: 'text' | 'password' | 'email' | 'number'; // Input type
  label: string; // Label text for the input
  value: string | number; // Initial value of the input
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Function to handle value changes
  variant?: 'primary' | 'secondary' | 'default'; // Variant option for styling
}

const Input: React.FC<InputProps> = ({ type, label, value, onChange, variant = 'default' }) => {
    const ContainerStyle = {
        inputContainer: {
            borderColor: 'purple',
            marginBottom: '16px',
        },
        inputLabel: {
            display: 'block',
            marginBottom: '8px',
            fontSize: '16px',
            color: '#333',
        },
        inputField: {
            width: '100%',
            padding: '8px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            transition: 'border-color 0.3s ease',
        },
        primary: {
            inputField: {
                borderColor: '#007bff',
            },
        },
        secondary: {
            inputField: {
                borderColor: 'red',
            },
        },
    };

    // Verifica se a variante é uma das opções válidas
    const inputStyle = {
        ...ContainerStyle.inputField,
        ...(variant === 'primary' ? ContainerStyle.primary.inputField : {}),
        ...(variant === 'secondary' ? ContainerStyle.secondary.inputField : {}),
    };

    return (
        <div style={ContainerStyle.inputContainer}>
            <label htmlFor={label} style={ContainerStyle.inputLabel}>{label}</label>
            <input
                id={label}
                type={type}
                value={value}
                onChange={onChange}
                style={inputStyle}
            />
        </div>
    );
};

export default Input;
