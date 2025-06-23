import { useState } from "react";
// import { register } from "../services/authService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function RegisterPage() {
    const [form, setForm] = useState({ username: "", password: "" });
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) navigate("/dashboard");
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const data = await register(form.username, form.password);
    //         localStorage.setItem("token", data.token);
    //         Swal.fire("Berhasil", "Register berhasil!", "success");
    //         navigate("/dashboard"); // redirect ke halaman utama
    //     } catch {
    //         Swal.fire("Gagal", "Username atau password salah", "error");
    //     }
    // };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <form
                // onSubmit={handleSubmit}
                className="bg-white p-8 rounded shadow-md w-full max-w-sm"
            >
                <h2 className="text-xl font-bold mb-6 text-center">Register</h2>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={form.username}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border rounded"
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Nama"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border rounded"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full p-2 mb-6 border rounded"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Register
                </button>
                <div className="mt-4 text-center">
                    <p>
                    Sudah punya akun?{" "}
                    <a href="/" className="text-blue-500 hover:underline">
                        Login
                    </a>
                    </p>
                </div>
            </form>
        </div>
    );
}