export declare type MarkovOptions = {
    stateSize?: number;
    maxLength?: number;
    minWords?: number;
    maxWords?: number;
    minScore?: number;
    minScorePerWord?: number;
    maxTries?: number;
    checker?: (result: string) => boolean;
    filter?: (result: MarkovResult) => boolean;
};
export declare type MarkovResult = {
    string: string;
    score: number;
    scorePerWord: number;
    refs: Array<{
        string: string;
    }>;
};
export declare type MarkovCorpusItem = {
    words: any;
    refs: Array<{
        string: string;
    }>;
};
export default class Markov {
    data: Array<{
        string: string;
    }>;
    startWords: MarkovCorpusItem[];
    endWords: MarkovCorpusItem[];
    corpus: {
        [key: string]: MarkovCorpusItem[];
    };
    options: MarkovOptions;
    private defaultOptions;
    /**
     * Creates an instance of Markov generator.
     * @param {(string[] | Array<{ string: string }>)} data An array of strings or objects.
     * If 'data' is an array of objects, each object must have a 'string' attribute
     * @param {any} [options={}] An object of options. If not set, sensible defaults will be used.
     * @memberof Markov
     */
    constructor(data: string[] | Array<{
        string: string;
    }>, options?: MarkovOptions);
    /**
     * Builds the corpus
     *
     * @returns {Promise<void>}
     * @memberof Markov
     */
    buildCorpus(): Promise<void>;
    /**
     * Builds the corpus (synced method)
     *
     * @memberof Markov
     */
    buildCorpusSync(): void;
    /**
     * Generates a result, that contains a string and its references
     *
     * @param {MarkovOptions} options
     * @returns {Promise<MarkovResult>}
     * @memberof Markov
     */
    generateSentence(options: MarkovOptions): Promise<MarkovResult>;
    /**
     * Generates a result, that contains a string and its references (synced method)
     *
     * @param {MarkovOptions} [options={}]
     * @returns {MarkovResult}
     * @memberof Markov
     */
    generateSentenceSync(options?: MarkovOptions): MarkovResult;
    private _checkOptions(options, methodName);
}
