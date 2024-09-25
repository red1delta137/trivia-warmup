import { Welcome } from '@/components/text/Welcome/Welcome';
import {NewGameButton} from "@/components/buttons/NewGameButton";

export function HomePage() {
  return (
    <>
      <Welcome />
      <NewGameButton />
    </>
  );
}
