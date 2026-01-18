import { forwardRef, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ThemeContext } from "../../App";

import MailIcon from "../../assets/icons/gmail.svg?react";
import SendIcon from "../../assets/icons/send-message.svg?react";
import FacebookIcon from "../../assets/icons/facebook.svg?react";
import InstaIcon from "../../assets/icons/instagram.svg?react";
import TelegramIcon from "../../assets/icons/telegram.svg?react";
import LinkedIcon from "../../assets/icons/linkedin.svg?react";

import { PageWrapper, PageHeader } from "../Pages.styles";

import {
  SectionContainer,
  ContactContainer,
  ContactItem,
  ContactText,
  ContactHeader,
  ContactButton,
  IconWrapper,
  SocialContainer,
  SocialItem,
  CopiedAlert,
} from "./Contacts.styles";

import {
  headerAnimation,
  mailIconAnimation,
  mailTextAnimation,
  actionIconAnimation,
  socialLinkAnimation,
  copyAlertAnimation,
} from "./Contacts.animations";

export const Contacts = forwardRef((props, ref) => {
  const { theme } = useContext(ThemeContext);
  const [mailClicked, setMailClicked] = useState(false);

  const mailOnClickHandler = (duration) => {
    setMailClicked(true);
    setTimeout(() => {
      setMailClicked(false);
    }, duration);
  };

  return (
    <PageWrapper ref={ref} id="s-contacts">
      <SectionContainer>
        <PageHeader> Contacts </PageHeader>
        <ContactContainer
          as={motion.div}
          initial="hidden"
          whileInView="visible"
        >
          <ContactHeader as={motion.h3} variants={headerAnimation}>
            Get stay in touch
          </ContactHeader>
          {/*---------- Mail --------------*/}
          <ContactItem theme={theme}>
            <ContactText
              onClick={() => {
                navigator.clipboard.writeText("zhenualemak@gmail.com");
              }}
            >
              <IconWrapper as={motion.div} variants={mailIconAnimation}>
                <MailIcon />
              </IconWrapper>
              <motion.span
                variants={mailTextAnimation}
                onClick={() => {
                  mailOnClickHandler(1000);
                }}
              >
                zhenualemak@gmail.com
              </motion.span>
            </ContactText>
            <ContactButton href="mailto:zhenualemak@gmail.com">
              <motion.div variants={actionIconAnimation}>
                <SendIcon />
              </motion.div>
            </ContactButton>
            <AnimatePresence>
              {mailClicked && (
                <CopiedAlert
                  as={motion.div}
                  variants={copyAlertAnimation}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  Coppied to clipboard
                </CopiedAlert>
              )}
            </AnimatePresence>
          </ContactItem>

          {/*----------------- Social -----------------*/}
          <SocialContainer>
            {/* Telegram */}
            <SocialItem
              href="tg://resolve?domain=eugene_0408"
              as={motion.a}
              variants={socialLinkAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              custom={2}
            >
              <TelegramIcon />
            </SocialItem>
            {/* Insta */}
            <SocialItem
              href="https://www.instagram.com/lemak_evg/"
              as={motion.a}
              variants={socialLinkAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              custom={3}
            >
              <InstaIcon />
            </SocialItem>
            {/* Facebook */}
            <SocialItem
              href="https://www.facebook.com/eugene.lemak.1"
              as={motion.a}
              variants={socialLinkAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              custom={4}
            >
              <FacebookIcon />
            </SocialItem>
            {/* Linked */}
            <SocialItem
              as={motion.a}
              variants={socialLinkAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              custom={5}
            >
              <LinkedIcon />
            </SocialItem>
          </SocialContainer>
        </ContactContainer>
      </SectionContainer>
    </PageWrapper>
  );
});
