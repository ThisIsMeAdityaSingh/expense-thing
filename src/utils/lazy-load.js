import { Suspense } from 'react';

export default function lazyLoad(Component){
    return <Suspense fallback={<div>Loading..</div>}>
        <Component />
    </Suspense>
}