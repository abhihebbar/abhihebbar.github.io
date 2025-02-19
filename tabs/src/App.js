import { useState, useEffect } from "react";

export default function GuitarTabEditor() {
  const [input, setInput] = useState("");
  const [tabs, setTabs] = useState(``);

  useEffect(() => {
    parseTabs(input);
  }, [input]);

  const parseTabs = (input) =>
    setTabs(
      input
        .split("\n")
        .map((line) => parseTabLine(line))
        .join("\n\n")
    );
  const parseTabLine = (input) => {
    let noteGroups = input.split(" ");
    if (noteGroups[noteGroups.length - 1] === "|") {
      noteGroups.pop();
    }
    let length = noteGroups.length || 1;

    let lines = {
      e: Array(length).fill("----"),
      B: Array(length).fill("----"),
      G: Array(length).fill("----"),
      D: Array(length).fill("----"),
      A: Array(length).fill("----"),
      E: Array(length).fill("----"),
    };

    let position = 0;
    let pString = "";
    noteGroups.forEach((group) => {
      if (group === "|") {
        Object.keys(lines).forEach((key) => {
          lines[key][position] = "--|--";
        });
        pString = "";
      } else {
        let notes = group.split("+"); // Split for simultaneous notes
        notes.forEach((note) => {
          let string = note.charAt(0);
          let fret = note.slice(1);

          // Convert non-e strings to uppercase
          if (string !== "e") {
            string = string.toUpperCase();
          }
          if (string === "H" || string === "P") {
            // Hammer on or Pull off
            fret = string + (fret === "" ? "0" : fret);
            string = pString;
            console.log(string, fret);
          }
          // If no fret is specified, assume open string (0)
          if (fret === "") {
            fret = "0";
          }

          if (lines[string] !== undefined) {
            lines[string][position] =
              fret === "0" ? "--0--" : `-${fret}-`.padEnd(4, "-");
          }
          pString = string;
        });
      }
      position += 1; // Move to next position after each group
    });

    return ["e", "B", "G", "D", "A", "E"]
      .map((key) => `${key}|${lines[key].join("")}|`)
      .join("\n");
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Top part - Preformatted Text */}
      <div className="flex-1 bg-gray-900 text-white p-4 overflow-auto">
        <pre className="whitespace-pre font-mono border border-gray-600 p-2 rounded-md">
          {tabs}
        </pre>
      </div>

      {/* Bottom part - Input Textarea */}
      <div className="h-1/4 p-4 bg-gray-800 border-t border-gray-700">
        <textarea
          className="w-full h-full p-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 font-mono"
          placeholder="Enter your guitar tabs here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </div>
  );
}
