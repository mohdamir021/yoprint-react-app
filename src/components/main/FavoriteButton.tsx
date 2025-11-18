import {
  Button,
  ButtonProps,
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { Tooltip } from "../ui/tooltip";

type FavoriteButtonProps = IconButtonProps &
  Partial<{
    favouriteValue: boolean;
  }>;

export default function FavoriteButton(props: FavoriteButtonProps) {
  const { favouriteValue: value, ...rest } = props;

  const icon = value ? <FaBookmark /> : <FaRegBookmark />;
  const caption = value ? "Unfavorite" : "Favorite";
  const color = value ? "gold" : "inherit"

  return (
    <Tooltip content={caption}>
      <IconButton variant={"ghost"} {...rest} color={color}>
        {icon}{" "}
      </IconButton>
    </Tooltip>
  );
}
