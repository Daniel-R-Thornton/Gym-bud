import { userData } from "../../backend/dataTypes";

export function EditUserModalContent() {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const user: userData = {
      first_name: formData.get("firstName") as string,
      last_name: formData.get("lastName") as string,
      id: userData.id,
      created_at: userData.created_at,
      updated_at: Date.now().toLocaleString(),
      age: 0,
      height: 0,
      weight: 0,
      description: "",
      gyms: [],
      workouts: [],
      exercises: [],
      profileImage: "",
      bio: "",
    };
    localStorage.setItem("user", JSON.stringify(user));
    setShowModal(false);
  };
  return (
    <dialog
      open
      onClose={() => setShowModal(false)}
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
    >
      <form
        onSubmit={handleFormSubmit}
        className="bg-white rounded-lg p-8 shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4">Edit User</h2>
        <label className="block mb-4">
          First Name:{" "}
          <input
            type="text"
            defaultValue={userData.first_name}
            name="firstName"
            className="w-full px-4 py-2 rounded-lg border"
          />
        </label>
        <label className="block mb-4">
          Last Name:{" "}
          <input
            type="text"
            defaultValue={userData.last_name}
            name="lastName"
            className="w-full px-4 py-2 rounded-lg border"
          />
        </label>
        <label className="block mb-4">
          Age:{" "}
          <input
            type="number"
            defaultValue={userData.age}
            name="age"
            className="w-full px-4 py-2 rounded-lg border"
          />
        </label>

        <label className=" mb-4 flex gap-2">
          Weight:{" "}
          <input
            type="number"
            defaultValue={userData.weight}
            name="weight"
            className="w-full px-4 py-2 rounded-lg border"
          />
          <select
            name="weightUnit"
            className="w-full px-4 py-2 rounded-lg border"
          >
            <option value="kg">kg</option>
            <option value="lbs">lbs</option>
          </select>
        </label>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Submit
        </button>
      </form>
    </dialog>
  );
}
function setShowModal(arg0: boolean) {
  throw new Error("Function not implemented.");
}
