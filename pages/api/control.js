import atob from "atob";

export default function handler(req, res) {


    // Kullanıcı İsmi: Admin
    // Şifre: pymtadmin

    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (!token) return res.status(201).json({ isNullToken: true });
    if (token && token.split(" ")[1]) {
        let b64 = atob(token.split(" ")[1]);
        let kullaniciAdi = b64.split(":")[0];
        let sifre = b64.split(":")[1];
        console.log(kullaniciAdi, sifre)
        if (!kullaniciAdi && !sifre) return res.status(201).json({ isPasswordAndUserNameNo: true });
        if (kullaniciAdi !== "Admin") return res.status(201).json({ userNameError: true });
        if (sifre !== "pymtadmin") return res.status(201).json({ passwordError: true });
        if (kullaniciAdi === "Admin" && sifre === "pymtadmin") {
            return res.status(201).json({ isLogin: true });
        };
    };

};