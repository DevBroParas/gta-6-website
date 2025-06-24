import Section1 from "@/components/Section1";
import styles from "./page.module.css";
import Section2 from "@/components/Section2";

export default function Home() {
  return (
    <div className="container">
      <div className="overlay"></div>
      <Section1 />
      <Section2 />
      <div className="scroll-indicator"></div>
    </div>
  );
}
