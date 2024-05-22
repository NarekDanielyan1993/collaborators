import { ToastOptions, TypeOptions, toast } from 'react-toastify';
import { COMMON_ERROR_MESSAGES } from 'src/constant';

export const useNotification = () => {
    const toastify = (type: TypeOptions, message: string) => {
        let msg = '';
        switch (type) {
            case 'success': {
                msg = message || 'Good Job!!';
            }
            case 'error': {
                msg = message || COMMON_ERROR_MESSAGES;
            }
        }
        const toastOptions: ToastOptions = {
            type,
        };
        toast(msg, toastOptions);
    };

    return { toast: toastify };
};
