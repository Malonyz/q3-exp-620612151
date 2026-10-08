import { Tabs, TabsContent, TabsList, TabsTrigger,} from "./ui/tabs";
import { OverviewCards } from "./OverviewCards";
import { CategoryCards } from "./CategoryCards";

export function DashboardTabs() {
  return (
    <Tabs>
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="categories">Categories</TabsTrigger>
      </TabsList>
      <div className="mt-4">
        <TabsContent value="overview">
          <OverviewCards />
        </TabsContent>
        <TabsContent value="categories">
          <CategoryCards />
        </TabsContent>
      </div>
    </Tabs>
  );
}
