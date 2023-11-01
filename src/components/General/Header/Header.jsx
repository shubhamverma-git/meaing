import React, { useState } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import LogoWhite from "../../../../public/assets/images/LogoWhite.svg";
import LogoBlack from "../../../../public/assets/images/LogoBlack.svg";
import { TbMenu } from "react-icons/tb";
import { FaTwitterSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import { BsChevronRight } from "react-icons/bs";
import MegaMenu from "./megaMenu/MegaMenu";
import { useRouter } from "next/router";
import Image from "next/image";
import LinkText from "@/Animation/link/LinkText";
import menuData from "@/../data/headerData";
import CustomButton from "@/Button/custom-button/CustomButton";

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [megMenuOptions, setMegaMenuOptions] = useState(null);
  const [selectedSubmenu, setSelectedSubmenu] = useState({
    item: null,
    status: false,
  });

  const [isSubMenuOpen, setIsSubMenuOpen] = useState({
    subMenu: false,
    title: null,
    item: null,
  });

  const routeHandler = () => {
    router.push("/contact");
  };

  function close() {
    setIsOpen(false);
    setSelectedSubmenu({
      item: null,
      status: false,
    });
    setIsSubMenuOpen({
      subMenu: false,
      title: null,
      item: null,
    });
  }

  function handleNavigation(url) {
    router.push(url);
    setIsOpen(false);
  }

  return (
    <>
      <header
        className={styles.header}
        style={{
          backgroundColor: "#ffffff",
          padding: "5px 40px",
          borderBottom: "1px solid rgba(0, 0, 0, .1)",
        }}
      >
        <div style={{ height: "100%" }}>
          <div className={`${styles.container}`}>
            <div style={{ display: "flex" }}>
              <Link href="/">
                <Image
                  src={LogoBlack}
                  alt="logo"
                  style={{ width: "130px" }}
                  priority={false}
                />
              </Link>
            </div>
            <div className={`${styles.navbar_options}`}>
              {menuData?.map((item, index) => (
                <div
                  key={index}
                  style={{
                    cursor: "pointer",
                    height: "100%",
                  }}
                  onMouseEnter={() => {
                    item?.page_name == "Services" &&
                      setMegaMenuOptions(() => {
                        return { options: item.options, close: false };
                      });
                  }}
                >
                  <LinkText
                    href={item.url}
                    className={`heading ${styles.linkTextOnHover}`}
                  >
                    {item.page_name}
                  </LinkText>
                  {item.hasOwnProperty("options") && (
                    <span>
                      <BsChevronRight
                        strokeWidth={1}
                        stroke="#131313"
                        style={{
                          marginLeft: "5px",
                          transform:
                            // option?.page_name &&
                            // option?.page_name == megMenuOptions?.page_name
                            //   ? "rotate(-90deg)"
                            //   :
                            "rotate(90deg)",
                          transition: "transform 0.5s ease",
                          fontSize: "12PX",
                        }}
                      />
                    </span>
                  )}
                </div>
              ))}
              <CustomButton
                name="Start a Project"
                customClass={styles.custom_btn}
                onClick={() => router.push('/contact')}
                iconThickness={1}
              />
            </div>
            {/* Mega menu */}
            {megMenuOptions != null && (
              <div
                style={{
                  position: "absolute",
                  width: "100vw",
                  left: 0,
                  top: "65px",
                }}
                onMouseLeave={() => setMegaMenuOptions(null)}
              >
                <div
                  style={{
                    position: "relative",
                    top: "8px",
                    zIndex: 5,
                    width: "100vw",
                    left: "0px",
                  }}
                >
                  <MegaMenu
                    megMenuOptions={megMenuOptions}
                    changeState={setMegaMenuOptions}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className={`wrapper-mobile ${styles.header_mobile}`}>
        <div className={`${styles.nav_mobile}`} style={{ margin: "7px 0px" }}>
          <div className="font-headings ">
            <Link href="/">
              <Image
                src={LogoBlack}
                alt="logo"
                style={{ width: "130px" }}
                priority={false}
              />
            </Link>
          </div>
          <div className={styles.menu_btn}>
            <button className={styles.btnn} onClick={() => setIsOpen(true)} title="Hamburger">
              <TbMenu
                style={{ fontSize: "35px", color: "#424242" }}
              />
            </button>
            {/* Slider menu starts */}
            <div
              style={{
                display: isOpen ? "block" : "none",
              }}
              className={`${styles.drag_menu} ${styles.drag_left_menu_animated}  ${styles.drag_left_menu_8}`}
            >
              <div className={styles.inner_container_mob}>
                <div className={styles.logo_menu}>
                  <div className={styles.logo_container}>
                    <Link href="/">
                      <Image
                        src={LogoWhite}
                        alt="logo"
                        style={{ width: "130px" }}
                        priority={false}
                      />
                    </Link>
                    <div onClick={close}>
                      <IoIosClose size="30px" color="#FFFFFF" />
                    </div>
                  </div>
                  <div className={styles.menu_list_container}>
                    {menuData?.map((item, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            color: "white",
                            fontSize: "24px",
                          }}
                          onClick={() =>
                            item.options
                              ? setIsSubMenuOpen({
                                  subMenu: true,
                                  title: item.page_name,
                                  item: item?.options,
                                })
                              : handleNavigation(item.url)
                          }
                        >
                          {item.page_name}
                        </div>
                        {item.hasOwnProperty("options") && (
                          <BsChevronRight
                            style={{
                              width: "20px",
                              marginLeft: "12px",
                              fontWeight: "700",
                              strokeWidth: "1.5",
                            }}
                          />
                        )}
                      </div>
                    ))}
                    <div
                      style={{
                        display: isSubMenuOpen.subMenu ? "block" : "none",
                        top: "90px",
                        height: "max(66%, 450px)",
                      }}
                      className={`${styles.drag_menu} ${styles.drag_left_menu_animated}  ${styles.drag_left_menu_8}`}
                    >
                      <div
                        style={{
                          fontWeight: "700",
                          fontSize: "32px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <BsChevronRight
                          style={{
                            width: "20px",
                            marginRight: "12px",
                            fontWeight: "700",
                            strokeWidth: "1.5",
                            transform: "rotate(180deg)",
                          }}
                          onClick={() =>
                            setIsSubMenuOpen({
                              subMenu: false,
                              title: null,
                              item: null,
                            })
                          }
                        />
                        <div>
                          <div>{isSubMenuOpen.title}</div>
                        </div>
                      </div>
                      <div
                        style={{
                          marginLeft: "35px",
                          marginTop: "15px",
                          height: "450px",
                          overflowY: "auto",
                        }}
                      >
                        {isSubMenuOpen?.item?.map(({ attributes }, index) => (
                          <div
                            style={{
                              marginBottom: "10px",
                              fontSize: "24px",
                              overflow: "hidden",
                            }}
                            key={index}
                          >
                            {attributes.sub_services.data ? (
                              <div>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                  onClick={() =>
                                    setSelectedSubmenu((prev) => {
                                      if (
                                        prev?.item &&
                                        prev.item == attributes.name
                                      ) {
                                        return {
                                          item: null,
                                          status: false,
                                        };
                                      } else {
                                        return {
                                          item: attributes.name,
                                          status: true,
                                        };
                                      }
                                    })
                                  }
                                >
                                  <div>{attributes.name}</div>
                                  {attributes.sub_services.data.length > 0 && (
                                    <BsChevronRight
                                      style={{
                                        width: "12px",
                                        marginLeft: "12px",
                                        fontWeight: "700",
                                        strokeWidth: "1.5",
                                        transform:
                                          selectedSubmenu.item ===
                                          attributes.name
                                            ? "rotate(90deg)"
                                            : "none",
                                      }}
                                    />
                                  )}
                                </div>
                                <div>
                                  {selectedSubmenu.item === attributes.name && (
                                    <div
                                      style={{
                                        margin: "10px 0px",
                                      }}
                                      className={styles.dropdown_menu_sub_menu}
                                    >
                                      {attributes.sub_services.data.map(
                                        (item, index) => (
                                          <Link
                                            key={index}
                                            href={`/services/${attributes?.slug}`}
                                            style={{
                                              fontSize: "18px",
                                              fontWeight: "500",
                                              marginBottom: "15px",
                                              color: "#E3E3E3",
                                              textDecoration: "none",
                                            }}
                                          >
                                            <div
                                              onClick={() => setIsOpen(false)}
                                            >
                                              {item.attributes.name}
                                            </div>
                                          </Link>
                                        )
                                      )}
                                    </div>
                                  )}
                                </div>
                              </div>
                            ) : (
                              attributes.name
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ color: "white" }}>
                  <div className={styles.policy_text}>Privacy Policy</div>
                  <div className={styles.social_icons}>
                    <Link href={"https://www.linkedin.com/company/droot/"}>
                      <BsLinkedin size={"31px"} style={{ color: "white" }} />
                    </Link>
                    <Link href={"https://twitter.com/drootconsulting?s=09"}>
                      <FaTwitterSquare
                        size={"35px"}
                        style={{
                          margin: "0",
                          marginLeft: "15px",
                          color: "white",
                        }}
                      />
                    </Link>
                    <Link
                      href={
                        "https://instagram.com/droot_official?igshid=MzRlODBiNWFlZA=="
                      }
                    >
                      <AiFillInstagram
                        size={"40px"}
                        style={{
                          margin: "0",
                          marginLeft: "15px",
                          color: "white",
                        }}
                      />
                    </Link>
                  </div>
                  <div style={{ textAlign: "left" }}>
                    © 2023 Droot Consulting Private Limited
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
