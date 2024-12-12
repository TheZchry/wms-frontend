// sections
import { TransferCreateView } from 'src/sections/transfer/view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Transfer: Create New Task',
};

export default function OverviewTransferPage() {
  return (
    <>
      <TransferCreateView />;
    </>
  );
}
