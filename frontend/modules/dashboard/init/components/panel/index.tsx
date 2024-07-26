import { ControlCard } from "./components";
import cards, { PanelCardType } from "./data";

const Panel = () => {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-semibold">Panel de control</h2>
      <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
        {cards.length > 0 &&
          cards.map((card: PanelCardType, index: number) => (
            <ControlCard key={`card-panel-${index}`} data={card} />
          ))}
      </div>
    </section>
  );
};

export default Panel;
