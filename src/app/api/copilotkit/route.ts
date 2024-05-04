// Import necessary modules and classes from various packages.
import { CopilotBackend, OpenAIAdapter } from "@copilotkit/backend"; // For backend functionality with CopilotKit.
import { researchWithLangGraph } from "./research"; // Import a custom function for conducting research.
import { AnnotatedFunction } from "@copilotkit/shared"; // For annotating functions with metadata.

// Define a runtime environment variable, indicating the environment where the code is expected to run.
export const runtime = "edge";

// Define an annotated function for research. This object includes metadata and an implementation for the function.
const researchAction: AnnotatedFunction<any> = {
  name: "research", // Function name.
  description:
    "Call this function to conduct research on a certain topic. Respect other notes about when to call this function", // Function description.
  argumentAnnotations: [
    // Annotations for arguments that the function accepts.
    {
      name: "topic", // Argument name.
      type: "string", // Argument type.
      description: "The topic to research. 5 characters or longer.", // Argument description.
      required: true, // Indicates that the argument is required.
    },
  ],
  implementation: async (topic) => {
    // The actual function implementation.
    console.log("Researching topic: ", topic); // Log the research topic.
    return await researchWithLangGraph(topic); // Call the research function and return its result.
  },
};

// Define an asynchronous function that handles POST requests.
export async function POST(req: Request): Promise<Response> {
  const actions: AnnotatedFunction<any>[] = []; // Initialize an array to hold actions.

  // Check if a specific environment variable is set, indicating access to certain functionality.
  if (process.env.TAVILY_API_KEY) {
    actions.push(researchAction); // Add the research action to the actions array if the condition is true.
  }

  // Instantiate CopilotBackend with the actions defined above.
  const copilotKit = new CopilotBackend({
    actions: actions,
  });

  // Use the CopilotBackend instance to generate a response for the incoming request using an OpenAIAdapter.
  return copilotKit.response(req, new OpenAIAdapter());
}
