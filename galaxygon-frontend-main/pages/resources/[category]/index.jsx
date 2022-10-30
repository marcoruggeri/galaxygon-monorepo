import { useRouter } from "next/router";
import ListView from "../../../components/Resources/ListView";
import InnerLayout from "../../../components/_shared/InnerLayout";

const App = () => {
  const router = useRouter();

  return (
    <InnerLayout>
      <div className="h-full w-full flex-col scroll-smooth overflow-auto">
        <ListView category={router.query.category} />
      </div>
    </InnerLayout>
  );
};

export default App;
