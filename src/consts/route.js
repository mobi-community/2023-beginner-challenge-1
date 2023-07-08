export const MENU = [
  {
    name: "회원정보",
    path: "user",
    isToggled: false,
    children: [
      {
        name: "회원관리",
        subPath: "user/user-list",
        isSelected: false,
      },
      {
        name: "구매목록",
        subPath: "user/user-purchase",
        isSelected: false,
      },
    ],
  },
  {
    name: "상품정보",
    path: "product",
    isToggled: false,
    children: [
      {
        name: "상품목록",
        subPath: "product/product-list",
        isSelected: false,
      },
      {
        name: "상품등록",
        subPath: "product/product-update",
        isSelected: false,
      },
    ],
  },
];
