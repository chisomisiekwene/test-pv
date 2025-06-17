/* eslint-disable react/display-name */
import React from "react";

interface ICustomInputFieldProps {
  type: string;
  name?: string;
  label?: string;
  errors?: any;
  maxLength?: undefined | number;
  max?: number | string | any;
  defaultValue?: string | number;
  value?: string | number;
  minLength?: undefined | number;
  readOnly?: boolean;
  required?: boolean;
  onChange?: any;
  onKeyUpPress?: any;
  min?: number | string | any;
  showRequiredIcon?: boolean;
  passwordError?: boolean;
  hasActionButton?: boolean;
  removeBottomBorder?: boolean;
  autoComplete?: string;
  actionButtonText?: any;
  onClickActionButton?: () => void;
  onClickIcon?: () => void;
  extraLabel?: string;
  hasIcon?: number | any;
  addPadding?: boolean;
  children?: React.ReactNode | undefined;
  errorMessage?: string;
  style?: string;
  placeholder?: string;
}

const CustomInputField: React.FC<ICustomInputFieldProps> = React.forwardRef(
  (
    {
      extraLabel,
      min,
      required,
      removeBottomBorder,
      showRequiredIcon,
      hasActionButton,
      actionButtonText,
      onClickActionButton,
      type,
      name,
      label,
      errors,
      maxLength,
      max,
      defaultValue,
      value,
      minLength,
      readOnly,
      onChange,
      onKeyUpPress,
      children,
      hasIcon,
      addPadding,
      onClickIcon,
      passwordError,
      autoComplete,
      errorMessage,
      style,
      placeholder,
      ...otherProps
    },
    ref: any
  ) => {
    return (
      <div className="w-full">
        {extraLabel?.length ? (
          <p className="text-white text-[14px] lg:leading-[16px] tracking-[0.03px] mb-2">
            {extraLabel}
          </p>
        ) : null}
        <div className="relative">
          {children && (
            <div className="absolute flex items-center ml-2 h-full">
              <span>{children}</span>
            </div>
          )}
          {hasIcon && (
            <div
              className={`absolute inset-y-0 left-0 px-2 flex items-center text-sm text-white font-[300] leading-5 cursor-pointer`}
              onClick={onClickIcon}
            >
              <span className="text-capitalize">{hasIcon}</span>
            </div>
          )}
          <input
            className={`block appearance-none text-white border border-[#CA92E3] focus:ring-0 leading-5 text-base peer focus:outline-white h-[54px] font-medium ${style} ${
              addPadding ? "pl-10" : ""
            } ${
              readOnly
                ? "text-[#4D5154] border border-white focus:border-white"
                : "text-white border border-[#CA92E3] focus:border-white"
            }
            ${
                defaultValue
                ? "border-2 border-white"
                : ""
            }
            
            ${
              errors
                ? "border-alert-red focus:border focus:border-alert-red"
                : "border-[#CA92E3] focus:border focus:border-[white]"
            }   rounded-[8px] w-full ${
              hasIcon ? "pl-5 pr-4" : "px-4"
            } ${errors && "border-alert-red"} ${hasActionButton && ""} ${
              children && "border-l-0"
            } disabled:bg-gray-100 disabled:border-gray-200`}
            type={type}
            name={name}
            max={max}
            min={min}
            maxLength={maxLength}
            required={required}
            minLength={minLength}
            defaultValue={defaultValue}
            // value={defaultValue}
            onChange={onChange}
            onKeyUp={onKeyUpPress}
            disabled={readOnly}
            autoComplete={autoComplete}
            ref={ref}
            {...otherProps}
            placeholder={placeholder ? placeholder : " "}
            id={label}
          />
          <label
            className={`absolute text-[14px] lg:text-[14px] leading-4 text-white dark:text-[#6F7174] duration-300 transform -translate-y-2 top-4 left-4 origin-[0] !bg-transparent  ${
              errors
                ? "peer-focus:text-brand-black peer-focus:dark:text-brand-black border-brand-green"
                : "peer-focus:text-brand-black peer-focus:dark:text-brand-black border-brand-green"
            }  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 ${
              hasIcon && "left-5"
            }`}
            htmlFor={label}
          >
            {label}
          </label>
          {hasActionButton && (
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
              onClick={onClickActionButton}
            >
              <span className="text-capitalize">{actionButtonText}</span>
            </div>
          )}
        </div>
       
      </div>
    );
  }
);

export default CustomInputField;