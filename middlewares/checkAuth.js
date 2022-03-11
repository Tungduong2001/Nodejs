export const checkAuth = (req, res, next) => {
    const status = true;
    if (status) {
        console.log("Chào anh");
        next();
    } else {
        console.log("Bạn không có quyền");
    }
}