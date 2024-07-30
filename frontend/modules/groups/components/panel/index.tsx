//Datos sin backend

// "use client";

// import { useState } from "react";

// import ControlCard from "@/modules/groups/components/panel/components/control-card";
// import SuccessDialog from "@/modules/groups/components/panel/components/success-dialog";
// import data, { PanelType } from "@/modules/groups/components/panel/data";

// // eslint-disable-next-line no-undef
// const CardsContainer: React.FC = () => {
//   const [cards, setCards] = useState<PanelType[]>(data);
//   const [showSuccessDialog, setShowSuccessDialog] = useState(false);
//   const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

//   const handleDelete = (id: string) => {
//     setSelectedCardId(id);
//     setShowSuccessDialog(true);
//   };

//   const confirmDelete = () => {
//     if (selectedCardId) {
//       setCards((prevCards) =>
//         prevCards.filter((card) => card.id !== selectedCardId)
//       );
//       setShowSuccessDialog(false);
//       setSelectedCardId(null);
//     }
//   };

//   return (
//     <div className="grid gap-4 px-2 py-10 sm:grid-cols-3">
//       {cards.map((card) => (
//         <ControlCard key={card.id} data={card} onDelete={handleDelete} />
//       ))}
//       {showSuccessDialog && (
//         <SuccessDialog
//           isOpen={showSuccessDialog}
//           onClose={() => setShowSuccessDialog(false)}
//           onConfirm={confirmDelete}
//         />
//       )}
//     </div>
//   );
// };

// export default CardsContainer;

//Datos con backend
"use client";

import React, { useEffect, useState } from "react";

import ControlCard from "@/modules/groups/components/panel/components/control-card";
import SuccessDialog from "@/modules/groups/components/panel/components/success-dialog";

const apiEndpoint = "/api/groups";
interface CardData {
  id: string;
  title: string;
  description: string;
}
const CardsContainer: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setCards([]);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (id: string) => {
    setSelectedCardId(id);
    setShowSuccessDialog(true);
  };

  const confirmDelete = () => {
    if (selectedCardId) {
      setCards((prevCards) =>
        prevCards.filter((card) => card.id !== selectedCardId)
      );
      setShowSuccessDialog(false);
      setSelectedCardId(null);
    }
  };

  return (
    <div className="grid gap-4 px-2 py-10 sm:grid-cols-3">
      {cards.length > 0 ? (
        cards.map((card) => (
          <ControlCard key={card.id} data={card} onDelete={handleDelete} />
        ))
      ) : (
        <div className="border-primary-background shadow-cards-purple flex flex-col items-center justify-center gap-6 rounded-xl border px-4 py-8 text-center opacity-50">
          <h1 className="text-xl">Grupo vacío</h1>
          <p className="text-sm font-normal">
            Haz clic en añadir para agregar un nuevo grupo de productos
          </p>
        </div>
      )}
      {showSuccessDialog && (
        <SuccessDialog
          isOpen={showSuccessDialog}
          onClose={() => setShowSuccessDialog(false)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  );
};

export default CardsContainer;
