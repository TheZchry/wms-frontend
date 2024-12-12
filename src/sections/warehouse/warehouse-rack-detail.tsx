import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import ItemDetailPopup from './warehouse-item-rack-detail'; // Import the new component

interface RackDetailPopupProps {
  open: boolean;
  onClose: () => void;
  rackName: string;
  width: number;
  length: number;
  height: number;
  inventory: Array<{ name: string; level: number; quantity: string }>;
}

const RackDetailPopup: React.FC<RackDetailPopupProps> = ({ open, onClose, rackName, width, length, height, inventory }) => {
  const [openItemPopup, setOpenItemPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{ name: string; quantity: number } | null>(null);

  const handleOpenItemPopup = (item: { name: string; quantity: number }) => {
    setSelectedItem(item);
    setOpenItemPopup(true);
  };

  const handleCloseItemPopup = () => {
    setOpenItemPopup(false);
    setSelectedItem(null);
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle>{rackName}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Width: {width}</Typography>
          <Typography variant="body1">Length: {length}</Typography>
          <Typography variant="body1">Height (Levels): {height}</Typography>

          <Typography variant="h6" style={{ marginTop: '16px' }}>
            Detail Inventory
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Level</TableCell>
                  <TableCell>Inventory</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {inventory.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.level}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>
                      <Button onClick={() => handleOpenItemPopup({ name: item.name, quantity: parseInt(item.quantity) })}>
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
      </Dialog>

      {/* Item Detail Popup */}
      {selectedItem && (
        <ItemDetailPopup
          open={openItemPopup}
          onClose={handleCloseItemPopup}
          itemName={selectedItem.name}
          quantity={selectedItem.quantity}
        />
      )}
    </>
  );
};

export default RackDetailPopup;