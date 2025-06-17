import React from "react";

interface ICustomTextAreaProps {
  name?: string;
  placeholder?: string;
  label?: string;
  errors?: any;
  maxLength?: undefined | number;
  defaultValue?: string | number;
  value?: string | number;
  minLength?: undefined | number;
  readOnly?: boolean;
  required?: boolean;
  onChange?: any;
  showRequiredIcon?: boolean;
  hasActionButton?: boolean;
  actionButtonText?: string;
  onClickActionButton?: () => void;
  extraLabel?: string;
  bottomLabel?: string;
  rows?: number;
  style?: string;
  hasIcon?: boolean;
}

const CustomTextArea: React.FC<ICustomTextAreaProps> = React.forwardRef(
  (
    {
      name,
      placeholder,
      label,
      errors,
      maxLength,
      defaultValue,
      minLength,
      onChange,
      showRequiredIcon,
      extraLabel,
      bottomLabel,
      rows,
      style,
      readOnly,
      required,
      hasIcon,
      ...otherProps
    },
    ref: any
  ) => {
    return (
      <div className="">
        {extraLabel?.length ? (
          <p className="text-white text-base lg:leading-[16px] tracking-[0.03px] mb-2">
            {extraLabel}
          </p>
        ) : null}
        <div className="relative">
          <textarea
            className={`bg-transparent peer appearance-none border px-4 h-[104px] placeholder:text-base placeholder:lg:leading-[20px] placeholder:[#CA92E3] outline-none focus:!border-brand-green focus:border focus:ring-0 disabled:bg-gray-100 ${
              readOnly ? "text-brand-black bg-[#F5F5F5]" : "text-white"
            } ${
              errors
                ? "border-[#EB5757]"
                : "border-[#CA92E3] focus:!border-white"
            }   rounded-[8px] w-full h-[104px] py-4 leading-6 text-base focus:!outline-none focus:bg-brand-white  ${
              errors ? "border-[#EB5757]" : "focus:!border-brand-green"
            } ${style}`}
            name={name}
            disabled={readOnly}
            placeholder={placeholder ? placeholder : " "}
            maxLength={maxLength}
            minLength={minLength}
            defaultValue={defaultValue}
            onChange={onChange}
            readOnly={readOnly}
            required={required}
            rows={rows || 3}
            ref={ref}
            {...otherProps}
            id={label}
          />
          <label
            className={`absolute text-[14px] lg:text-base leading-4  text-white] duration-300 transform -translate-y-2 top-4 left-4 origin-[0] !bg-transparent  ${
              errors
                ? "peer-focus:text-brand-black peer-focus:dark:text-brand-black border-brand-green"
                : "peer-focus:text-brand-black peer-focus:dark:text-brand-black border-brand-green"
            }  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-4 ${
              hasIcon && "left-5"
            }`}
            htmlFor={label}
          >
            {label}
          </label>
        </div>
        {bottomLabel && bottomLabel.length && !errors && (
          <p className="text-[#6A7581] text-[12px] lg:leading-[16px] font-[100]">
            {bottomLabel}
          </p>
        )}
        {/* {errors && <ErrorHandler errors={errors} />} */}
      </div>
    );
  }
);
export default CustomTextArea;