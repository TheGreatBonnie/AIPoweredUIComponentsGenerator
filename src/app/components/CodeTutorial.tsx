"use client";

import Markdown from "react-markdown";
import { useState } from "react";
import {
  useCopilotAction,
  useMakeCopilotReadable,
} from "@copilotkit/react-core";
import AceEditor from "react-ace";

export default function CodeTutorial() {
  const [codeTutorial, setCodeTutorial] = useState(``);

  const [code, setCode] = useState<string[]>([
    `<h1 class="text-red-500">Hello World</h1>`,
  ]);
  const [codeToDisplay, setCodeToDisplay] = useState<string>(code[0] || "");

  useMakeCopilotReadable(codeToDisplay);

  useCopilotAction(
    {
      name: "generateCode",
      description: "Create Code Snippet with React.js(Next.js), tailwindcss.",
      parameters: [
        {
          name: "code",
          type: "string",
          description: "Code to be generated",
          required: true,
        },
      ],
      handler: async ({ code }) => {
        setCode((prev) => [...prev, code]);
        setCodeToDisplay(code);
      },
    },
    [codeToDisplay]
  );

  useCopilotAction(
    {
      name: "createTutorial",
      description:
        "Create a step by step tutorial of the code generated earlier.",
      parameters: [
        {
          name: "tutorial",
          type: "string",
          description:
            "Markdown of step by step guide tutorial on how to use the generated code accompanied with the code. Include introduction, prerequisites and what happens at every step accompanied with code generated earlier. Don't forget to add how to render the code on browser.",
          required: true,
        },
      ],
      handler: async ({ tutorial }) => {
        setCodeTutorial(tutorial);
      },
    },
    [codeTutorial]
  );

  useCopilotAction(
    {
      name: "updateCodeAndTutorial",
      description: "Update Code Snippet and tutorial generated earlier.",
      parameters: [
        {
          name: "updatedCode",
          type: "string",
          description: "Updated code.",
          required: true,
        },
        {
          name: "updatedTutorial",
          type: "string",
          description: "Updated tutorial",
          required: true,
        },
      ],
      handler: async ({ updatedCode, updatedTutorial }) => {
        setCode((prev) => [...prev, updatedCode]);
        setCodeToDisplay(updatedCode);

        setCodeTutorial(updatedTutorial);
      },
    },
    [codeToDisplay, codeTutorial]
  );

  function onChange(newCode: any) {
    setCodeToDisplay(newCode);
  }

  return (
    <>
      <main className=" min-h-screen px-4">
        <div className="w-full h-full min-h-[70vh] flex justify-between gap-x-1 ">
          <div className="w-2/3 min-h-[60vh] rounded-lg bg-white shadow-lg p-2 border mt-8 overflow-auto">
            <div
              className="w-full min-h-[60vh] rounded-lg"
              dangerouslySetInnerHTML={{ __html: codeToDisplay }}
            />
          </div>
          <AceEditor
            placeholder="Placeholder Text"
            mode="html"
            theme="monokai"
            name="blah2"
            className="w-[50%] min-h-[60vh] p-2 mt-8 rounded-lg"
            onChange={onChange}
            fontSize={14}
            lineHeight={19}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={codeToDisplay}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: false,
              showLineNumbers: true,
              tabSize: 2,
            }}
          />
        </div>
        <div className="w-10/12 mx-auto">
          <div className="mt-8">
            <h1 className="text-white text-center text-xl font-semibold p-6">
              Code Tutorial
            </h1>
            {codeTutorial ? (
              <Markdown className="text-white">{codeTutorial}</Markdown>
            ) : (
              <div className="text-white">
                The Code Tutorial Will Appear Here
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
