import { LoaderCircle } from "lucide-react";

interface LoadingPageProps {}

const LoadingPage = ({}: LoadingPageProps) => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <div className="animate-spin transition-all">
          <LoaderCircle className="w-14 h-14 text-muted-foreground/50" />
        </div>
      </div>
    </>
  );
};

export default LoadingPage;
