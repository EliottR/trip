import { AnimatePresence, motion } from "framer-motion"
import { StyledLink } from "./Styled"

export const NavButton = (props) => {
  const { url, icon, text, active } = props

  return (
    <>
      {active ? (
        <AnimatePresence>
          <StyledLink
            as={motion.a}
            to={url}
            active={+active}
            initial={{ width: 0, padding: 0 }}
            animate={{ width: "fit-content", padding: "0.5rem 1rem" }}
            exit={{ width: 0, padding: 0 }}
            transition={{ duration: 0.3 }}
          >
            {icon} <div>{text}</div>
          </StyledLink>
        </AnimatePresence>
      ) : (
        <StyledLink to={url} active={+active}>
          {icon}
        </StyledLink>
      )}
    </>
  )
}
