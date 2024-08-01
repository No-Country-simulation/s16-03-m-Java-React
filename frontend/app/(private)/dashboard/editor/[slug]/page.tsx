import Editor from "@/modules/dashboard/editor";
import { editorService } from "@/modules/dashboard/editor/services/generic";

type Props = {
  params: {
    slug: string;
  };
};

const EditorSlug = async ({ params }: Props) => {
  const { getTemplateBySlug } = editorService();

  const templateData = await getTemplateBySlug(params?.slug);

  return (
    <>
      <Editor data={templateData} />
    </>
  );
};

export default EditorSlug;
