import Link from "next/link";
import Image from "next/image";
import { Loader } from "lucide-react";

const style = { height: "30px", width: "30px" };
interface ButtonProps {
  title: any;
  onClick?: () => any;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loader?: any;
  id?: any;
  afterIcon?: any;
  beforeIcon?: any;
}

interface LinkProps {
  title: any;
  url: string;
  className?: string;
}

export const PrimaryButton = ({
  title,
  onClick,
  className,
  type,
  disabled,
  loader,
  afterIcon,
  beforeIcon,
  id,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      id={id}
      className={`${
        (loader || beforeIcon || afterIcon) &&
        "flex !justify-center !items-center "
      } text-black bg-white hover:scale-100 transition-all duration-200 hover:text-white whitespace-nowrap rounded-xl lg:px-6 px-6 p-3 lg:py-3 lg:text-base font-bold hover:border hover:border-white cursor-pointer hover:bg-transparent ${className}`}
      onClick={onClick}
      disabled={disabled ? true : false}
      {...rest}
    >
      {beforeIcon && (
        <span className="mr-2 h-4 w-4 relative">
          <Image src={beforeIcon} alt="" fill />
        </span>
      )}
      {title}
      {afterIcon && <span className="ml-2.5 relative">{afterIcon}</span>}
      {loader && (
        <span className="ml-2.5 animate-spin ">
          <Loader />
        </span>
      )}
    </button>
  );
};

export const SecondaryButton = ({
  title,
  onClick,
  className,
  type,
  disabled,
  afterIcon,
  beforeIcon,
  loader,
  ...rest
}: ButtonProps) => {
  const style = { height: "24px", width: "24px" };
  return (
    <button
      type={type}
      className={`${
        (beforeIcon || afterIcon) && "flex gap-2 !items-center !justify-center"
      }  text-white bg-black hover:scale-100 transition-all duration-200 hover:text-white whitespace-nowrap rounded-xl lg:px-6 lg:py-3 px-6 p-3 lg:text-base font-bold hover:border hover:border-white cursor-pointer hover:bg-transparent ${className}`}
      onClick={onClick}
      disabled={disabled ? true : false}
      {...rest}
    >
      {beforeIcon && (
        <span className="h-4 w-4 relative">
          <Image src={beforeIcon} alt="" fill />
        </span>
      )}
      {title}
      {afterIcon && (
        <span className="h-4 w-4 relative">
          <Image src={afterIcon} alt="" fill />
        </span>
      )}
      {loader && (
        <span className="ml-2 animate-spin">
          <div className="w-4 h-4 relative">
            <Image src="images/button-loading-icon" alt="" fill />
          </div>
          {/* <Loader /> */}
        </span>
      )}
    </button>
  );
};

export const SmallButton = ({
  title,
  onClick,
  className,
  type,
  disabled,
  loader,
  afterIcon,
  beforeIcon,
  id,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      id={id}
      className={`${
        (loader || beforeIcon || afterIcon) &&
        "flex justify-center items-center"
      } bg-brand-green disabled:!bg-opacity-45 text-brand-white lg:flex lg:py-2.5 lg:px-4 lg:rounded-[100px] hover:opacity-[90%] disabled:hover:opacity-45 py-[10px]  px-[16px] text-xs lg:text-sm font-[600] rounded-[100px] focus:outline-none whitespace-nowrap text-center justify-center ${className}`}
      onClick={onClick}
      disabled={disabled ? true : false}
      {...rest}
    >
      {beforeIcon && (
        <span className="mr-2">
          <Image src={beforeIcon} alt="" />
        </span>
      )}
      {title}
      {afterIcon && <span className="ml-2.5 relative">{afterIcon}</span>}
      {loader && (
        <span className="ml-2">
          <Loader />
        </span>
      )}
    </button>
  );
};

export const OtherButton = ({
  title,
  onClick,
  className,
  type,
  disabled,
  loader,
  afterIcon,
  beforeIcon,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${(loader || beforeIcon || afterIcon) && "flex  items-center"}
       border-[1px] rounded-[4px] focus:outline-none ${className}`}
      onClick={onClick}
      disabled={disabled ? true : false}
      {...rest}
    >
      {beforeIcon && (
        <span className="mr-2">
          <Image src={beforeIcon} alt="" />
        </span>
      )}
      {title}
      {afterIcon && (
        <span className="ml-2">
          <Image src={afterIcon} alt="" />
        </span>
      )}
      {loader && (
        <span className="ml-2 animate-spin">
          <div className="w-4 h-4 relative">
            <Image src="images/button-loading-icon" alt="" fill />
          </div>
          {/* <Loader /> */}
        </span>
      )}
    </button>
  );
};

export const PrimaryLink = ({ title, url, className, ...rest }: LinkProps) => {
  return (
    <Link href={url}>
      <div
        className={`text-white bg-brand-green hover:bg-[#004822] hover:border-[#004822] disabled:bg-[#C8CCD0] disabled:border-[#C8CCD0] border-brand-green border-[1px] py-4 px-6 text-[1.05rem] font-[300] rounded-[5px] focus:outline-none ${className}`}
        {...rest}
      >
        {title}
      </div>
    </Link>
  );
};

export const OutlineLink = ({ title, url, className, ...rest }: LinkProps) => {
  return (
    <Link href={url}>
      <div
        className={`text-brand-green text-center bg-white border-brand-green hover:border-[#004822] hover:text-[#004822] disabled:border-[#C8CCD0] border-[1px] py-4 px-6 text-[1.05rem] font-[400] focus:outline-none ${className}`}
        {...rest}
      >
        {title}
      </div>
    </Link>
  );
};

export const OtherLink = ({ title, url, className, ...rest }: LinkProps) => {
  return (
    <Link href={url}>
      <div
        className={`border-[1px] text-[1.05rem] font-[300] rounded-[5px] focus:outline-none ${className}`}
        {...rest}
      >
        {title}
      </div>
    </Link>
  );
};