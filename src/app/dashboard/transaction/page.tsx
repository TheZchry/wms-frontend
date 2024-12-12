// sections
import { OverviewTransactionView } from 'src/sections/overview/transaction/view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Dashboard: Transaction',
};

export default function OverviewTransactionPage() {
  return (
    <>
      <OverviewTransactionView />;
    </>
  );
}
