import { FormEvent, useState } from "react";
import { inputs } from "./inputs";

function FormJob() {
  const [Data, setData] = useState(null);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello 1");

    const data = await (await fetch("/api/data")).json();

    setData(data);
  };
  return (
    <form className="m-3 md:m-auto max-w-xl" onSubmit={handleSubmit}>
      {inputs.map((input) => {
        return (
          <div key={input.id}>
            <div className="mb-2">
              <label htmlFor="title" className="block text-base">
                {input.title} {input.required ? "*" : ""}
              </label>
            </div>
            <div className="mb-3 flex justify-center items-center">
              <input
                className="placeholder:text-black appearance-none border border-gray-700 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-gray-300"
                id={input.id}
                placeholder={input.placeholder}
                name={input.id}
                type={input.type}
                required={input.required}
                pattern={input.pattern}
              />
            </div>
          </div>
        );
      })}
      <div className="flex justify-end items-end">
        <button
          id="send-data"
          type={"submit"}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Send data
        </button>
      </div>

      {JSON.stringify(Data)}
    </form>
  );
}

export default FormJob;
