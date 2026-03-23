import { pageConfig } from "@/data/siteConfig";
import Header from "@/components/Header";
import Bloc1Hero from "@/components/Bloc1Hero";
import Bloc2Partenaire from "@/components/Bloc2Partenaire";
import Bloc3Confiance from "@/components/Bloc3Confiance";
import Bloc4Defi from "@/components/Bloc4Defi";
import Bloc5Solution from "@/components/Bloc5Solution";
import Bloc6Fonctionnement from "@/components/Bloc6Fonctionnement";
import Bloc7Promesse from "@/components/Bloc7Promesse";
import Bloc8Performances from "@/components/Bloc8Performances";
import Bloc9CEE from "@/components/Bloc9CEE";
import Bloc10Conditions from "@/components/Bloc10Conditions";
import Bloc11Avantages from "@/components/Bloc11Avantages";
import Bloc12Methode from "@/components/Bloc12Methode";
import Bloc13FAQ from "@/components/Bloc13FAQ";
import Bloc14Ressources from "@/components/Bloc14Ressources";
import Bloc15Contact from "@/components/Bloc15Contact";
import Bloc16Footer from "@/components/Bloc16Footer";

// Map des composants disponibles pour le système de génération dynamique
const blockComponents: Record<string, React.FC> = {
  header: Header,
  bloc1: Bloc1Hero,
  bloc2: Bloc2Partenaire,
  bloc3: Bloc3Confiance,
  bloc4: Bloc4Defi,
  bloc5: Bloc5Solution,
  bloc6: Bloc6Fonctionnement,
  bloc7: Bloc7Promesse,
  bloc8: Bloc8Performances,
  bloc9: Bloc9CEE,
  bloc10: Bloc10Conditions,
  bloc11: Bloc11Avantages,
  bloc12: Bloc12Methode,
  bloc13: Bloc13FAQ,
  bloc14: Bloc14Ressources,
  bloc15: Bloc15Contact,
  bloc16: Bloc16Footer,
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start w-full">
      {pageConfig.blocs.map((blockName, index) => {
        const BlockComponent = blockComponents[blockName];
        if (!BlockComponent) {
          return null; // Si le composant n'existe pas, on l'ignore
        }
        return <BlockComponent key={`${blockName}-${index}`} />;
      })}
    </main>
  );
}
