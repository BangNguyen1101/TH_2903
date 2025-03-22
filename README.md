Ứng dụng gồm các màn hình chính sau:

HomeScreen – Hiển thị danh sách sản phẩm

CheckoutScreen – Thanh toán đơn hàng

SuccessScreen – Hiển thị xác nhận thanh toán thành công

ScanScreen – Hiển thị giao diện quét sản phẩm (không dùng camera)

1. HomeScreen (Màn hình chính)
Chức năng
Hiển thị danh sách sản phẩm có thể mua

Chọn sản phẩm để thêm vào giỏ hàng

Điều hướng đến CheckoutScreen khi bấm "Mua hàng"

Mô tả hoạt động
Người dùng mở ứng dụng, danh sách sản phẩm hiển thị

Khi nhấn vào một sản phẩm, có thể xem chi tiết hoặc thêm vào giỏ hàng

Khi nhấn vào nút "Mua hàng", chuyển sang CheckoutScreen

2. CheckoutScreen (Màn hình thanh toán)
Chức năng
Nhập thông tin thanh toán

Chọn phương thức thanh toán

Khi bấm "Pay for order", giả lập thanh toán thành công và chuyển đến SuccessScreen

Mô tả hoạt động
Người dùng nhập thông tin thẻ

Chọn phương thức thanh toán

Khi nhấn nút "Pay for order", ứng dụng thực hiện:

Gửi dữ liệu thanh toán (ở đây chỉ là giả lập)

Chuyển màn hình sang SuccessScreen

Lưu ý: Nếu dữ liệu không hợp lệ, có thể hiển thị cảnh báo hoặc yêu cầu nhập lại.

3. SuccessScreen (Màn hình xác nhận thanh toán)
Chức năng
Xác nhận thanh toán thành công

Hiển thị tổng tiền đơn hàng

Cung cấp nút "Tải hóa đơn" hoặc "Xem chi tiết"

Mô tả hoạt động
Khi thanh toán xong, ứng dụng hiển thị SuccessScreen

Người dùng có thể:

Bấm "Check Details" để xem đơn hàng

Bấm "Download Invoice" để tải hóa đơn

Lưu ý: Nếu muốn quay lại trang chủ, có thể thêm nút "Back to Home".

4. ScanScreen (Màn hình quét sản phẩm - không dùng camera)
Chức năng
Hiển thị hình ảnh sản phẩm đang quét

Tạo hiệu ứng khung quét

Hiển thị tên sản phẩm & nút thêm vào giỏ hàng

Mô tả hoạt động
Khi người dùng vào ScanScreen, ứng dụng hiển thị hình ảnh sản phẩm

Hiệu ứng khung quét tạo cảm giác đang quét sản phẩm

Ở dưới cùng, hiển thị tên sản phẩm và nút thêm (+)

Lưu ý: Nếu muốn tích hợp camera thực tế, có thể dùng react-native-camera.

Tóm tắt luồng hoạt động
Người dùng vào HomeScreen, chọn sản phẩm

Bấm "Mua hàng" → Đi đến CheckoutScreen

Nhập thông tin, bấm "Pay for order" → Chuyển đến SuccessScreen

Có thể tải hóa đơn hoặc quay lại trang chủ

Nếu vào ScanScreen, xem trước sản phẩm bằng ảnh tượng trưng


![home](https://github.com/user-attachments/assets/5eb8da88-824f-4b41-85b8-88bd0a7bc700)
![scan](https://github.com/user-attachments/assets/306e46b1-7980-442c-8ffe-3653e60e496b)
![cart](https://github.com/user-attachments/assets/e7abd7ba-384c-4d23-b0e9-34c64abb9f08)
![payment](https://github.com/user-attachments/assets/8a3708ba-5694-4ff0-a970-31be0d9c2ced)
![success](https://github.com/user-attachments/assets/84ee8a87-abe4-4b9c-af8e-252b61719600)
