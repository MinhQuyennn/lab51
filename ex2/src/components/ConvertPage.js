import { Avatar, Pagination, Tooltip } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import MyImageList from "./MyImageList";

const ConvertPage = () => {
  const [datas, setDatas] = useState("");
  const [data, setData] = useState("");
  const [page, setPage] = useState(1);

  const handleChange = (e, v) => {
    setPage(v);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.data)
      .then((res) => setDatas(res));
  }, []);

  useEffect(() => {
    if (datas) {
      setData(datas.slice(10 * page - 10, 10 * page));
    }
  }, [page, datas]);

  return (
    <div className="react8">
      <div className="container">
        <Pagination
          count={datas.length / 10}
          page={page}
          onChange={handleChange}
        />
        <Grid container spacing={2}>
          {data &&
            data.map((item) => {
              return (
                <Grid xs={3}>
                  <Tooltip title={item.title} arrow>
                    <Avatar
                      sx={{ width: 140, height: 140 }}
                      alt=""
                      src={item.thumbnailUrl}
                    />
                  </Tooltip>
                  <div>{item.title}</div>
                </Grid>
              );
            })}
        </Grid>
        {data && <MyImageList data={data} />}
      </div>
    </div>
  );
};

export default ConvertPage;
