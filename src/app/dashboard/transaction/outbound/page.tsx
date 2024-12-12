// sections
import { TransactionOutboundView } from 'src/sections/transaction/view';
import { WarehouseRackView } from 'src/sections/warehouse/view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Transaction: Outbound',
};

export default function UserCardsPage() {
  return <TransactionOutboundView />;
}
