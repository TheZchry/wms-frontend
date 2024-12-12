import { useMemo } from 'react';
// routes
import { paths } from 'src/routes/paths';
// locales
import { useLocales } from 'src/locales';
// components
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import InventoryIcon from '@mui/icons-material/Inventory';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import ReceiptIcon from '@mui/icons-material/Receipt';


// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);



const ICONS = {
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const { t } = useLocales();

  const data = useMemo(
    () => [
      // OVERVIEW
      // ----------------------------------------------------------------------
      {
        subheader: t('overview'),
        items: [
          {   
            title: t('dashboard'),
            path: paths.dashboard.root,
            icon: ICONS.dashboard,
          },
          {
            title: t('warehouse'),
            path: paths.dashboard.general.warehouse,
            icon: ICONS.file = <WarehouseIcon  sx={{ color: '#808080' }} />,
            children: [
              { title: t('view'), path: paths.dashboard.warehouse.view },
              { title: t('area'), path: paths.dashboard.warehouse.area },
              { title: t('rack'), path: paths.dashboard.warehouse.rack },
             
            ],
          },
          
          {
            title: t('product'),
            path: paths.dashboard.product.root,
            icon: ICONS.product,
            children: [
              { title: t('list'), path: paths.dashboard.product.root },
              {
                title: t('details'),
                path: paths.dashboard.product.demo.details,
              },
              { title: t('create'), path: paths.dashboard.product.new },
              { title: t('edit'), path: paths.dashboard.product.demo.edit },
            ],
          },

          {
            title: t('transaction'),
            path: paths.dashboard.general.transaction,
            icon: ICONS.file = <ReceiptIcon  sx={{ color: '#808080' }} />,
            children: [
              { title: t('inbound'), path: paths.dashboard.transaction.inbound },
              { title: t('outbound'), path: paths.dashboard.transaction.outbound },
             
            ],
          },

          {
            title: t('transfer'),
            path: paths.dashboard.general.transfer,
            icon: ICONS.file = <TransferWithinAStationIcon  sx={{ color: '#808080' }} />,
            children: [
              { title: t('inbound'), path: paths.dashboard.transfer.inbound },
              { title: t('outbound'), path: paths.dashboard.transfer.outbound },
             
            ],
          },

          {
            title: t('customer'),
            path: paths.dashboard.general.customer,
            icon: ICONS.file = <PermIdentityOutlinedIcon />,
          
          },
          {
            title: t('vendor  '),
            path: paths.dashboard.general.vendor,
            icon: ICONS.file = <HandshakeOutlinedIcon />,
            
          },
        ],
      },

      // MANAGEMENT
      // ----------------------------------------------------------------------
      {
        subheader: t('management'),
        items: [
          // USER
          {
            title: t('user'),
            path: paths.dashboard.user.root,
            icon: ICONS.user,
            children: [
              { title: t('profile'), path: paths.dashboard.user.root },
              { title: t('cards'), path: paths.dashboard.user.cards },
              { title: t('list'), path: paths.dashboard.user.list },
              { title: t('create'), path: paths.dashboard.user.new },
              { title: t('edit'), path: paths.dashboard.user.demo.edit },
              { title: t('account'), path: paths.dashboard.user.account },
            ],
            
          },
          {
            title: t('Packaging'),
            path: paths.dashboard.user.root,
            icon: ICONS.file = <InventoryIcon />,
            
          },

         
        ],
      },
    ],
    [t]
  );

  return data;
}
