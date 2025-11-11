import {
  ButtonGroup,
  IconButton,
  Pagination,
  PaginationRootProps,
} from "@chakra-ui/react";
import {
  LuChevronLeft,
  LuChevronRight,
  LuChevronsLeft,
  LuChevronsRight,
} from "react-icons/lu";

type SearchPaginationProps = PaginationRootProps & {
  lastPage: number;
  handlePage: (page: number) => void;
};

export default function SearchPagination(props: SearchPaginationProps) {
  const { handlePage = () => {}, lastPage = 1, ...rest } = props;

  return (
    <Pagination.Root
      count={20}
      pageSize={2}
      defaultPage={1}
      onPageChange={(e) => handlePage(e.page)}
      {...rest}
    >
      <ButtonGroup variant="outline" size="sm">
        {/* Start of Page */}
        <IconButton onClick={() => handlePage(1)}>
          <LuChevronsLeft />
        </IconButton>

        <Pagination.PrevTrigger asChild>
          <IconButton>
            <LuChevronLeft />
          </IconButton>
        </Pagination.PrevTrigger>

        <Pagination.Items
          render={(page) => (
            <IconButton variant={{ base: "outline", _selected: "solid" }}>
              {page.value}
            </IconButton>
          )}
        />

        <Pagination.NextTrigger asChild>
          <IconButton>
            <LuChevronRight />
          </IconButton>
        </Pagination.NextTrigger>

        {/* End of Page */}
        <IconButton onClick={() => handlePage(lastPage)}>
          <LuChevronsRight />
        </IconButton>
      </ButtonGroup>
    </Pagination.Root>
  );
}
