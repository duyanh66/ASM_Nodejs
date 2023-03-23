import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const getAll = async (req, res) => {
    try {
        const { data: users } = await axios.get("http://localhost:3001/users");
        if (users.length === 0) {
            res.status(404).json({
                massage: "Không có người dùng nào"
            });
        }
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({
            massage: "Error"
        });
    }
}

export const get = async (req, res) => {

    try {
        const { data: users } = await axios.get(
            `http://localhost:3001/users/${req.params.id}`
        )
        if (!users) {
            return res.status(404).json({
                massage: "Not Found"
            })
        }
        return res.status(200).json({
            massage: "User found",
            data: users
        })
    } catch (error) {
        return res.status(500).json({
            massage: "Lỗi server"
        })
    }
}

export const create = async (req, res) => {
    try {
        const { data: users } = await axios.post(
            "http://localhost:3001/users",
            req.body
        )
        if (!users) {
            return res.status(400).json({
                massage: "Không thể tạo users",
            })
        }
        return res.status(201).json({
            massage: "Users created",
            data: users,
        })
    }
    catch (error) {
        return res.status(500).json({
            massage: "Error",
        })
    }
}

export const remove = async (req, res) => {
    try {
        await axios.delete(`http://localhost:3001/users/${req.params.id}`);
        return res.status(200).json({
            massage: "Users được xóa thành công"
        })
    } catch (error) {
        return res.status(500).json({
            massage: error,
        })
    }
}

export const update = async (req, res) => {
    try {
        const { data: users } = await axios.patch(
            `http://localhost:3001/users/${req.params.id}`,
            req.body
        );
        if (!users) {
            return res.status(404).json({
                message: "Không tìm thấy người dùng",
            });
        }
        return res.status(200).json({
            message: "người dùng đã được cập nhật thành công",
            data: users,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};

export const put = async (req, res) => {
    try {
        const { data: users } = await axios.put(
            `http://localhost:3001/users/${req.params.id}`,
            req.body
        );
        if (!users) {
            return res.status(404).json({
                message: "Không tìm thấy người dùng",
            });
        }
        return res.status(200).json({
            message: "người dùng đã được cập nhật thành công",
            data: users,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};