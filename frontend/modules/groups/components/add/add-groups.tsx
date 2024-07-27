import GroupForm from "./components/group-form";

const AddGroups = () => {
  return (
    <>
      <h1 className="ml-4 space-y-24 py-10 text-4xl font-bold md:ml-0">
        Crear grupo
      </h1>
      <GroupForm />
    </>
  );
};

export default AddGroups;
