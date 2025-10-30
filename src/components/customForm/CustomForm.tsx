import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import InputForm from "../components/CustomInput";

const schema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.email("Invalid email address").min(1, "Email is required"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof schema>;

const CustomForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <InputForm
        name="name"
        control={control}
        label="Nombre"
        type="text"
        error={errors.name}
      ></InputForm>
      <InputForm
        name="email"
        control={control}
        label="Correo Electrónico"
        type="email"
        error={errors.email}
      ></InputForm>
      <InputForm
        name="password"
        control={control}
        label="Contraseña"
        type="password"
        error={errors.password}
      ></InputForm>
      <InputForm
        name="confirmPassword"
        control={control}
        label="Confirmar Contraseña"
        type="password"
        error={errors.confirmPassword}
      ></InputForm>
      <button
        type="submit"
        style={{ width: "100%", marginTop: "1rem", padding: "0.875rem" }}
      >
        Registrarse
      </button>
    </form>
  );
};

export default CustomForm;
