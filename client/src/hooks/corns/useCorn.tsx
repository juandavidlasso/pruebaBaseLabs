import { getCorns, postCorn } from '@/app/(profile)/profile/actions';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useToast } from '../use-toast';
import { MANY_REQUEST } from '@/lib/API-routes';

export const useCorn = () => {
    const { toast } = useToast();

    const { data, isLoading, isError, refetch } = useQuery({
        queryFn: async () => await getCorns(),
        queryKey: ['corns']
    });

    const mutationCorn = useMutation({
        mutationFn: postCorn,
        onSuccess: (response) => {
            toast({
                variant: response.status === MANY_REQUEST ? 'destructive' : 'default',
                duration: 3000,
                title: response.status === MANY_REQUEST ? 'Error' : 'Register successfully',
                description: response.message
            });
            refetch();
        },
        onError: (err) => {
            toast({
                title: 'Server error',
                variant: 'destructive',
                description: err.message
            });
        }
    });

    return {
        data,
        isLoading,
        isError,
        mutationCorn
    };
};
