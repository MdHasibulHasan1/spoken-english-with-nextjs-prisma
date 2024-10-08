"use client";
import { ComponentProps, useState, MouseEvent } from "react";

type FormSubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

export default function FormSubmitButton({
  children,
  className,
  ...props
}: FormSubmitButtonProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    setIsSubmitting(true);
    if (props.onClick) {
      await props.onClick(e); // Use the correct type here
    }
    setIsSubmitting(false);
  };

  return (
    <button
      {...props}
      className={`btn-primary btn ${className}`}
      type="submit"
      disabled={isSubmitting}
      onClick={handleClick} // Correct the handler type
    >
      {isSubmitting && <span className="loading loading-spinner" />}
      {children}
    </button>
  );
}

// "use client";

// import { ComponentProps } from "react";
// import { experimental_useFormStatus as useFormStatus } from "react-dom";

// type FormSubmitButtonProps = {
//   children: React.ReactNode;
//   className?: string;
// } & ComponentProps<"button">;

// export default function FormSubmitButton({
//   children,
//   className,
//   ...props
// }: FormSubmitButtonProps) {
//   const { pending } = useFormStatus();

//   return (
//     <button
//       {...props}
//       className={`btn-primary btn ${className}`}
//       type="submit"
//       disabled={pending}
//     >
//       {pending && <span className="loading loading-spinner" />}
//       {children}
//     </button>
//   );
// }
