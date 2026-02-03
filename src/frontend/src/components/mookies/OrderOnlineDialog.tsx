import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from './businessInfo';

interface OrderOnlineDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function OrderOnlineDialog({ open, onOpenChange }: OrderOnlineDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Order Online</DialogTitle>
          <DialogDescription className="text-base pt-4">
            We're working on bringing online ordering to you soon! In the meantime, 
            give us a call to place your order for pickup.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col gap-4 pt-4">
          <Button
            size="lg"
            asChild
            className="bg-espresso hover:bg-espresso-dark text-cream w-full"
          >
            <a href={BUSINESS_INFO.phoneLink} className="flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call {BUSINESS_INFO.phone}
            </a>
          </Button>
          
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="w-full"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
