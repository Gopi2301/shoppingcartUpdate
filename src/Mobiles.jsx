import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { useState } from "react";

export function Mobiles({ data}) {
  const [click, setClick] = useState(false)
  return (
    <div>
      <Card sx={{ width: 400 }}>
        <CardMedia
          sx={{ height: 400, objectFit: "cover", width: 350 }}
          image={data.img}
          title="green iguana"
          className="mobile-img" />
        {/* <img src={data.img} alt="" /> */}
        <CardContent>
          <h2>{data.model}</h2>
          <h3>{data.company}</h3>
        </CardContent>
        <CardActions>
          <Button onClick={()=>setClick(!click)} className="button" variant="contained" size="small">{click? "Remove Cart": "Add to Cart"}</Button>
        </CardActions>
      </Card>
    </div>
  );
}
