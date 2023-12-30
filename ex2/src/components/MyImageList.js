import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const MyImageList = (props) => {
  const { data } = props;

  return (
    <ImageList
      sx={{ width: 500, height: 450 }}
      variant="woven"
      cols={3}
      gap={8}
    >
      {data.map((item) => (
        <ImageListItem
          key={item.thumbnailUrl}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            src={`${item.thumbnailUrl}?w=161&fit=crop&auto=format`}
            srcSet={`${item.thumbnailUrl}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default MyImageList;
