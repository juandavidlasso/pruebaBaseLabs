import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import styles from './styles.module.css';

interface Props {}

const Loading: React.FC<Props> = ({}) => {
    return (
        <Dialog open={true}>
            <DialogContent aria-describedby={undefined} className='!w-[25%] !h-[30vh]'>
                <DialogHeader className='!flex !items-center !justify-center'>
                    <DialogTitle />
                    <span className={styles.loader}></span>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default Loading;
