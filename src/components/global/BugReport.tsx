import Button from "@/components/shared/Button";
import { BugIcon } from "../icons";

export default function BugReport() {
  return (
    <Button
      className="fixed bottom-12 sm:right-10 -right-5 sm:rotate-0 rotate-90 mt-8"
      text="Report a bug"
      url="https://github.com/grwth404/Quiznote/issues/new?assignees=grwth404&labels=&projects=&template=bug_report.md&title="
      external
      icon={<BugIcon />}
    />
  );
}
