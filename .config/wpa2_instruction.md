```
[wifi-security]
key-mgmt=wpa-eap

[connection]
id=PLACE_NETWORK_ID_HERE
uuid=PLACE_UUID_HERE
type=wifi

[ipv6]
method=auto

[wifi]
ssid=PLACE_NETWORK_SSID_HERE
mode=infrastructure
security=802-11-wireless-security

[802-1x]
eap=peap
identity=TEN_DANG_NHAP
phase2-auth=mschapv2
password=MAT_KHAU_DANG_NHAP

[ipv4]
method=auto
```

Bước 1:

Tạo UUID với lệnh uuidgen

```bash
uuidgen
```

Bước 2: Copy config gốc như trên vào /etc/NetworkManager/system-connections/[TEN-CONNECTION].nmconnection

Để đơn giản hóa làm như sau: (vui lòng thay EXAMPLE thành tên bạn chọn)

```bash
sudo nvim /etc/NetworkManager/system-connections/EXAMPLE.nmconnection
```

Rồi copy config gốc như trên vào file vim vừa tạo

Bước 3: Thay các mảng sau:

- uuid: Thay bằng UUID bạn vừa tạo ở trên

- ssid, id: Tên wifi (VD: HOME, OFFICE, VAN PHONG)

- identity: Tên đăng nhập (VD: examplegmailcom,...)

- password: Mật khẩu đăng nhập (VD: 1231231231)

Lưu file

Bước 4: Cấp quyền cho file vừa tạo

```bash
sudo chown root /etc/NetworkManager/system-connections/[TEN-CONNECTION].nmconnection

sudo chmod 600 /etc/NetworkManager/system-connections/[TEN-CONNECTION].nmconnection
```

Khởi động lại NetworkManager

```bash
sudo systemctl restart NetworkManager
```
