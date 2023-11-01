import React from 'react'
import styles from './Footer.module.scss'
import LinkText from '@/Animation/link/LinkText'

export default function ServiceContainer({menuData}) {
  return (
    <div className={styles.services_container}>
    {menuData
      .find((el) => el.page_name == "Services")
      .options.map((item, index) => (
        <div key={index}>
          <div
            className={`${styles.service_submenu_item}`}
            style={{
              fontWeight: "600",
              color: "#FFFFFF",
              marginBottom: "17px",
              opacity: "1",
            }}
          >
            <LinkText href={item.attributes.slug}>
              {item.attributes.name}
            </LinkText>
          </div>
          {item?.attributes.sub_services?.data.map(
            ({ attributes }, index) => (
              <div key={index} className={styles.service_submenu_item}>
                <LinkText href={`/services/${item.attributes?.slug}`}>
                  {attributes.name}
                </LinkText>
              </div>
            )
          )}
        </div>
      ))}
  </div>
  )
}
