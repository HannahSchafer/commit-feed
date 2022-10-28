import ListItem from "../ListItem/ListItem";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";

interface SkeletonListLoaderProps {
  numRows: number;
}

export function SkeletonListLoader({ numRows }: SkeletonListLoaderProps) {
  return (
    <div aria-label="skeleton-list-loader" data-alt="Skeleton List Loader">
      {[...Array(numRows)].map((e, i) => (
        <ListItem key={i}>
          <SkeletonLoader />
        </ListItem>
      ))}
    </div>
  );
}

export default SkeletonListLoader;
