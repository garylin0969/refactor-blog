import { NextLink } from '@/components/atoms/link';
import { BaseButton } from '@/components/atoms/button';

const NotFound = () => {
    return (
        <div className="grid h-full place-content-center px-4">
            <div className="text-center">
                <h2 className="text-9xl font-black">404</h2>
                <p className="text-2xl font-bold tracking-tight sm:text-4xl">Uh-oh!</p>
                <p className="mt-4">We can&apos;t find that page</p>
                <NextLink href="/">
                    <BaseButton className="mt-6">Back to Home</BaseButton>
                </NextLink>
            </div>
        </div>
    );
};

export default NotFound;
