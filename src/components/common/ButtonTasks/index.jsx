import { Container } from './styles';

const ButtonTasks = ({ children, ...rest }) => <Container {...rest}>{children}</Container>;

export default ButtonTasks;