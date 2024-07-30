import { Heading, Search, TemplateCard } from "./components";
import { templates, TemplateType } from "./constants";

const Templates = () => {
  return (
    <div className="space-y-12 px-4 pb-32 pt-10 md:px-0">
      <Search />
      <Heading />
      <div className="grid grid-cols-1 gap-x-16 gap-y-20 lg:grid-cols-2">
        {templates &&
          templates.length > 0 &&
          templates.map((template: TemplateType, index: number) => (
            <TemplateCard data={template} key={`template-item-${index}`} />
          ))}
      </div>
    </div>
  );
};

export default Templates;
