import * as React from "react";
import btoa from "btoa";
import axios from "axios";

// Pâyidar - Mert

export default function App() {


    let [giris, setGiris] = React.useState(false);

    const login = (event) => {
        event.preventDefault();
        let kullaniciData = document.getElementById("kullanici")?.value || null;
        let sifreData = document.getElementById("sifre")?.value || null;
        if (!kullaniciData && !sifreData) return alert("Kullanıcı Adı Neya Şifre Yko");
        let b64 = btoa(`${kullaniciData}:${sifreData}`);

        axios.post(`${window.location.origin}/api/control`, {}, { headers: { "Authorization": "Basic "+b64 } }).then((res) => {
            let json = res.data;
            if (!json) return alert("He Data Yok");

            if (json.isNullToken) {
                return alert("Token Konulmamış");
            };

            if (json.isPasswordAndUserNameNo) {
                return alert("Kullanıcı Adı Veya Şifre Yanlış!");
            };

            if (json.userNameError) {
                return alert("Kullanıcı Adı Yanlış!");
            };

            if (json.passwordError) {
                return alert("Şifre Yanlış!");
            };

            if (json.isLogin) {
                setGiris(true);
                alert("Başarıyla Giriş Yaptın");
            };
        });




    };

    if (!giris) return (<React.Fragment>
        <div className="center">
            <span>Giriş Panel</span>
            <div className="giris-box">
                {/* Giriş Panel Kodları */}
                <p> Kullanıcı Adı
                    <input id="kullanici" type="text" required maxlength="15" />
                </p>
                <p> Şifre
                    <input id="sifre" type="password" required maxlength="10" />
                </p>
                <input onClick={(e) => login(e)} type="submit"></input>
            </div>
        </div>

    </React.Fragment>);

    if (giris) return (<React.Fragment>

        <div className="giris-basarili">

            <span>Başarıyla Admin Olarak Giriş Yaptınız.</span>

            <div className="flex-box">

            <a target="_blank" href="https://payidar-code.blogspot.com">Pâyidar</a>
            <a target="_blank" href="https://justmert.xyz">Mert</a>

            </div>

        </div>

    </React.Fragment>);
};