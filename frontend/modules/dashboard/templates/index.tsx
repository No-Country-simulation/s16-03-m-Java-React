import { Search, TemplateCard } from "./components";
import { TemplateType } from "@/modules/dashboard/templates/types";

type Props = {
  templates: TemplateType[];
};

const Templates = ({ templates }: Props) => {
  return (
    <div className="space-y-12 px-4 pb-32 pt-10 md:px-0">
      <Search />
      <div>
        <h1 className="mb-5 text-4xl font-bold">Templates</h1>
        <p className="text-xl">
          Mostrando todo ({templates?.length && templates.length})
        </p>
        <div className="grid grid-cols-2"></div>
      </div>
      <div className="grid grid-cols-1 gap-x-16 gap-y-20 lg:grid-cols-2">
        {templates &&
          templates?.length > 0 &&
          templates.map((template: TemplateType, index: number) => (
            <TemplateCard data={template} key={`template-item-${index}`} />
          ))}
      </div>
    </div>
  );
};

export default Templates;
