import { useState } from "react";
import { headingContext } from "../context";
import { useEffect } from "react";

const Cms = () => {
  const { heading, updateHeading } = headingContext();
  const [readonly, updateType] = useState(true);
  const [headingText, updateHeadingText] = useState(heading || "");

  useEffect(() => {
    updateHeadingText(heading);
  }, [heading]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateHeading({ text: headingText });
    updateType(true);
  };
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg border border-gray-200 p-6">
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-2">
              HEADING
            </label>
            <textarea
              readOnly={readonly}
              rows="4"
              cols="50"
              value={headingText}
              onChange={(event) => updateHeadingText(event.target.value)}
              className={`w-full rounded-md border ${
                readonly ? "bg-gray-100 cursor-not-allowed" : "bg-white"
              } focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 p-3 text-sm`}
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={() => updateType(false)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition"
            >
              Edit
            </button>
            <button
            disabled={readonly}
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Cms;
