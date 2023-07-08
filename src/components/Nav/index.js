import { MENU } from "consts/route";
import navi from "../Nav/nav.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [menu, setMenu] = useState(MENU);
  const navigate = useNavigate();

  const onNavigateParams = (path) => {
    setMenu((prevMenu) =>
      prevMenu.map((item) => ({
        ...item,
        isToggled: item.path === path ? !item.isToggled : item.isToggled,
      }))
    );
  };

  const handleMenuClick = (path) => {
    // 선택 유지
    setMenu((prevMenu) =>
      prevMenu.map((menuItem) => ({
        ...menuItem,
        children: menuItem.children.map((child) => ({
          ...child,
          isSelected: child.subPath === path,
        })),
      }))
    );
    navigate(`/${path}`); // URL 변경
  };

  return (
    <div style={{ display: "flex" }}>
      <div className={navi.nav}>
        {menu.map((menuItem) => (
          <div className={navi.menuItem} key={menuItem.path}>
            <button
              className={navi.mainNav}
              onClick={() => onNavigateParams(menuItem.path)}
            >
              {menuItem.name}
            </button>
            {/* isToggled true 일 때 해당 자식의 name을 보여줌 */}
            {menuItem.isToggled && (
              <ul className={navi.ul}>
                {menuItem.children.map((child) => (
                  // isSelected 이면 active class 추가
                  <li
                    className={`${navi.li} ${
                      child.isSelected ? navi.active : ""
                    }`}
                    onClick={() =>
                      handleMenuClick(child.subPath, child.element)
                    }
                  >
                    {child.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Navigation;
