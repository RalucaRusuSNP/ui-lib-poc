// import { Button } from '@/components/ui/button';
import Button from '@/components/atoms/Button';
import { ChevronDown } from 'lucide-react';

type ExpandableButtonProps = {
  onExpand(): void;
  isExpanded: boolean;
};

function ExpandableButton({ onExpand, isExpanded }: ExpandableButtonProps) {
  return (
    <Button
      bgColor='light'
      size='iconSm'
      onClick={onExpand}
      isRounded
      className=''
      label={
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      }
    ></Button>
  );
}

export default ExpandableButton;
