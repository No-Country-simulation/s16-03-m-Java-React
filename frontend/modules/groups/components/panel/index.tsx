"use client";

import { useState } from "react";

import ControlCard from "@/modules/groups/components/panel/components/control-card";
import SuccessDialog from "@/modules/groups/components/panel/components/success-dialog";
import data, { PanelType } from "@/modules/groups/components/panel/data";

// eslint-disable-next-line no-undef
const CardsContainer: React.FC = () => {
  const [cards, setCards] = useState<PanelType[]>(data);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

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
      {cards.map((card) => (
        <ControlCard key={card.id} data={card} onDelete={handleDelete} />
      ))}
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
