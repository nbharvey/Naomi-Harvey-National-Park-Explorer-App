import { Link } from "react-router-dom";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import { CustomButton } from "./CustomButton";
  
  interface GameCardProps {
    title: string;
    description: string;
    path: string;
  }
  
  export const GameCard: React.FC<GameCardProps> = ({ title, description, path }) => {
    return (
      <Card className="mt-6 w-96">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
                    {title}
          </Typography>
          <Typography>
            {description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Link to={path}>
          <CustomButton>Play!</CustomButton>
          </Link>
        </CardFooter>
      </Card>
    );
  }