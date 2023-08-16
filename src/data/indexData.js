import bestcellers from "./BestcellersData";
import comics from "./ComicsData";
import cooking from "./CookingWineData";
import fantasy from "./FantasyData";
import historicalFiction from "./HistoricalFictionData";
import horror from "./HorrorData";
import kidsBook from "./KidsBooksData";
import novels from "./NovelsData";
import poetry from "./PoetryData";
import trillers from "./ThrillersData";

export * from "./util";

export const allData = [
  ...bestcellers,
  ...comics,
  ...cooking,
  ...fantasy,
  ...historicalFiction,
  ...horror,
  ...kidsBook,
  ...novels,
  ...poetry,
  ...trillers,
];
