import GroupForm from "./components/group-form";

const AddGroups = () => {
  return (
    <>
      <div className="px-4 md:px-0">
        <h1 className="ml-0 py-10 text-2xl font-bold md:ml-4 md:text-4xl">
          Crear grupo
        </h1>
        <GroupForm />
      </div>
    </>
  );
};

export default AddGroups;
