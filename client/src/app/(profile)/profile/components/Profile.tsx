'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Loading from '@/components/Loading';
import { useCorn } from '@/hooks/corns/useCorn';

interface Props {}

const Profile: React.FC<Props> = ({}) => {
    const { data, isLoading, mutationCorn } = useCorn();

    if (isLoading) return <Loading />;

    return (
        <>
            <div className='!w-full !bg-gray-100 !min-h-screen'>
                <div className='!p-5 !text-center'>
                    <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>List of Corns</h2>
                </div>

                <div className='!p-2 !flex !justify-end max-lg:!justify-center'>
                    <Button className='max-lg:!w-[90%] max-lg:!mb-3' onClick={() => mutationCorn.mutate({ quantity: 1 })}>
                        Buy Corn
                    </Button>
                </div>

                <div className='!w-3/4 !m-auto max-lg:!w-[90%]'>
                    {data?.length === 0 ? (
                        <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
                            No corns purchased
                        </h2>
                    ) : (
                        <Table>
                            <TableCaption>A list of your recent corns.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className='!text-center'>ID</TableHead>
                                    <TableHead className='!text-center'>Quantity</TableHead>
                                    <TableHead className='!text-center'>Date</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {data?.map((corn) => (
                                    <TableRow key={corn.id_corn}>
                                        <TableCell className='!text-center'>{corn.id_corn}</TableCell>
                                        <TableCell className='!text-center'>{corn.quantity}</TableCell>
                                        <TableCell className='!text-center'>{corn.created_at}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </div>
            </div>
        </>
    );
};

export default Profile;
