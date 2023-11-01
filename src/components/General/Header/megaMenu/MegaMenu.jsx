import classes from "./MegaMenu.module.scss";
import ElementAnimation from "@/Animation/ElementAnimation";
import LinkText from "@/Animation/link/LinkText";
const MegaMenu = ({ megMenuOptions, changeState }) => {
  const changeStateHandler = () => {
    changeState({});
  };
  return (
    <div
      className={`${classes.box} ${
        megMenuOptions?.options ? classes.dropdown_menu : classes.retract
      }`}
    >
      <div className={classes.sub_menu_items}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {megMenuOptions?.options?.map(({ attributes }, index) => (
            <div
              key={index}
              className={classes.sub_menu_columns}
              style={{
                animationDelay: `${index * 200}ms`,
                textAlign: "left",
              }}
            >
              <ElementAnimation
                outline={attributes.icon_outline.data.attributes.url}
                filled={attributes.icon_filled.data.attributes.url}
                isVisiable={true}
              />
              <LinkText
                href={`/services/${attributes?.slug}`}
                className={classes.sub_menu_title}
                onClick={changeStateHandler}
              >
                <span>{attributes.name}</span>
              </LinkText>
              <div>
                {attributes?.sub_services?.data.map((item, index) => (
                  <div key={index} className={classes.sub_menu_options}>
                    <LinkText
                      href={`/services/${attributes?.slug}`}
                      className={classes.mega_menu_links}
                      onClick={changeStateHandler}
                    >
                      {item.attributes.name}
                    </LinkText>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
