import React from 'react';
import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';

interface ItemDetailPopupProps {
  open: boolean;
  onClose: () => void;
  itemName: string;
  quantity: number;
}

const ItemDetailPopup: React.FC<ItemDetailPopupProps> = ({ open, onClose, itemName, quantity }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{itemName}</DialogTitle>
      <DialogContent>
        <Typography variant="body1">Quantity: {quantity}</Typography>
      </DialogContent>
    </Dialog>
  );
};

export default ItemDetailPopup;