// sections
import { TransactionInboundView } from 'src/sections/transaction/view';
import { WarehouseAreaView } from 'src/sections/warehouse/view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Transaction: Inbound',
};

export default function UserListPage() {
  return <TransactionInboundView />;
}
