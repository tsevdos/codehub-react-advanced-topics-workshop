import React, { useEffect } from "react";

function logMousePosition(e) {
  console.log({ x: e.clientX, y: e.clientY });
}

export default function HookUseEffect2() {
  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      <h2>
        Hooks 03:<small className="text-muted"> useEffect() with cleanup</small>
      </h2>
    </div>
  );
}
