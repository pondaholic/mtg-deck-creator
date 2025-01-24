import { useState, useEffect } from "react";
import { MTG_URL } from "./config";
import { Loader } from "./components/Loader";

export default function App() {
  const [cards, setCards] = useState([]);
  const [cardId, setCardId] = useState("");
  const [card, setPickedCard] = useState([]);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCards = async () => {
      try {
        const res = await fetch(MTG_URL);
        const { cards } = await res.json();

        const images = cards.map((item) => ({
          name: item.name,
          image: item.imageUrl,
          cardId: item.id,
        }));
        setCards(images);
      } catch (error) {
        console.log("fetch error: ", error);
      }
    };
    getCards();
  }, []);

  useEffect(() => {
    const getCard = async () => {
      try {
        const res = await fetch(`${MTG_URL}/${cardId}`);
        const { card } = await res.json();
        setPickedCard(card);
        setIsLoading(false);
        // console.log(card);
      } catch (error) {
        console.log(error);
      }
    };
    getCard();
  }, [cardId]);

  const handleCardClick = (event) => {
    console.log("clicked", event.target.id);
    setIsLoading(true);
    setCardId(event.target.id);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", overflow: "auto" }}>
      <div style={{ display: "flex", width: "100vw", overflow: "auto" }}>
        {cards &&
          cards.map(({ image, name, cardId }) => (
            <div
              onClick={(event) => handleCardClick(event)}
              id={name}
              style={{ padding: 5 }}
            >
              <img src={image} id={cardId} />
            </div>
          ))}
      </div>
      <div className="spacer" style={{ padding: 30 }} />
      <div>
        {loading && <Loader />}
        {!loading &&
          card &&
          card?.foreignNames?.map((item) => (
            <img src={item.imageUrl} style={{ padding: 5 }} />
          ))}
      </div>
    </div>
  );
}
