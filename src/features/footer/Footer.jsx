import { Github, Linkedin, Mail } from "lucide-react";
import profile from "/src/assets/logo.png";

export default function Footer() {
  return (
    <>
      <footer className="sw-footer">
        <div className="sw-brand">
          <span>
            <img
              src={profile}
              alt="profile.png"
              className="w-10 h-10 rounded-full"
            />
          </span>
          <b>Sam Weslie Prabhakaran</b>
        </div>
        <p>Building better tomorrow with technology</p>
        <div>
          <a
            href="https://github.com/ItsWeslie"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/samweslie14/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
          <a href="mailto:itssamwesliehere@gmail.com">
            <Mail />
          </a>
        </div>
      </footer>
    </>
  );
}
