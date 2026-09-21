import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ProjectRepositoryExplorer from "./ProjectRepositoryExplorer";
import "../project-repository.css";

export default function ProjectExplorerMount() {
  const [target, setTarget] = useState(null);
  useEffect(() => { setTarget(document.getElementById("projects")); }, []);
  if (!target) return null;
  return createPortal(<ProjectRepositoryExplorer />, target);
}
