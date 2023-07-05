import { TitleStyles } from "styles/TitleStyles";


interface TitleProps {
    title: string;
  }
const Title = ({ title }: TitleProps) => {
  return (
    <h2 className={TitleStyles.DARK}>{title}</h2>
  )
}

export default Title