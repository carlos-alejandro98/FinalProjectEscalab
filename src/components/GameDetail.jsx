import React from 'react';
import useGetDetailsGame from '../custom-hooks/useGetDetailsGame';
import Details from './Details';
import {ErrorBoundary} from 'react-error-boundary';

const GameDetail = () => {

    function ErrorFallback({error, resetErrorBoundary}) {
        return (
            <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
            </div>
        )
    }

    const { game, images, requirements } = useGetDetailsGame();
    return (
        <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
            // reset the state of your app so the error doesn't happen again
            }}
        >
            {(!Array.isArray(game) ? (
                <Details game={game} images={images} requirements={requirements} />
            ) : (
                <p>No Results</p>
            ))}
        </ErrorBoundary>
    );
};

export default GameDetail;
