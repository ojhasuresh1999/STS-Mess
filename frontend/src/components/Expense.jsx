import { styled } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Avatar,
  IconButton,
  Container,
} from "@mui/material";
import { create, all } from "mathjs";
import Navbar from "./Navbar";
import girlImage from "../assets/girl.jpg";
import { useEffect, useState } from "react";

const HoverableCard = styled(Card)({
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const math = create(all);
const calculateUnitPrice = (price, quantity) => {
  try {
    const quantityValue = math.evaluate(quantity);
    return price / quantityValue;
  } catch (error) {
    console.error("Error calculating unit price:", error);
    return null;
  }
};

const formattedDate = (date) => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

const RecipeReviewCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/expense/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("data========>", data);
        setData(data);
      });
  }, []);

  return (
    <>
      <Navbar />
      <br />
      <h1 id="pageTitle">Expenses</h1>
      <br />
      <Container
        maxWidth="xl"
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "16px",
        }}
      >
        {data.map((item, index) => {
          // console.log("member=====>", item.member.image);
          const quantityMatch = item.productQuantity.match(/\d+/);
          const quantity = quantityMatch ? parseInt(quantityMatch[0], 10) : 1;
          const unitPrice = calculateUnitPrice(
            item.productPrice,
            quantity.toString()
          );
          return (
            <HoverableCard sx={{ maxWidth: 345, margin: "16px" }}>
              <CardHeader
                avatar={<Avatar src={item.member.image} />}
                title={item.productName}
                subheader={formattedDate(new Date(item.createdAt))}
              />
              <CardMedia component="img" height="194" image={item.image} />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  <b> Price:</b> {item.productPrice}
                  <br />
                  <b> Quantity:</b> {item.productQuantity}
                </Typography>
              </CardContent>
              <CardActions>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginLeft: "auto" }}
                  position={"relative"}
                  top={-50}
                  bottom={-50}
                  right={3}
                >
                  <b> Unit Price:</b>{" "}
                  {unitPrice !== null ? unitPrice.toFixed(2) : "N/A"}
                </Typography>
              </CardActions>
            </HoverableCard>
          );
        })}
      </Container>
    </>
  );
};

export default RecipeReviewCard;
