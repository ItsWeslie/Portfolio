import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import CertificationVault from "./CertificationVault";

export default function CertificationVaultMount() {
  const [target, setTarget] = useState(null);

  useEffect(() => {
    setTarget(document.querySelector("#certifications"));
  }, []);

  return target ? createPortal(<CertificationVault />, target) : null;
}
