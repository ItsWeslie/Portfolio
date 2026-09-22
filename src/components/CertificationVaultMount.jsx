import { createPortal } from "react-dom";
import CertificationVault from "./CertificationVault";

export default function CertificationVaultMount() {
  const target = typeof document !== "undefined" ? document.querySelector("#certifications") : null;
  return target ? createPortal(<CertificationVault />, target) : null;
}
