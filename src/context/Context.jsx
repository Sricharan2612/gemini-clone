import React, { createContext, useContext, useState } from 'react';
// import run from '../config/gemini';
import main from '../config/gemini';
const Context = createContext();
const ContextProvider = ({ children }) => {
    const [input, setInput] = useState('');
    const [recentPrmopt, setRecentPrompt] = useState('');
    const [prevPrmopt, setPrevPrompt] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState('');

    const delayPara = (index, nextWord) => {
        setTimeout(() => {
            setResultData(prev => prev + nextWord);
        }, 75 * index);
    };

    const onSent = async () => {
        setResultData('');
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input);
        setPrevPrompt([...prevPrmopt, input]);

        const responseData = await main(input);
        //formating the text
        let resArray = responseData.split('**');
        let newResponse;
        for (let i = 0; i < resArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += resArray[i];
            } else {
                newResponse += "<b>" + resArray[i] + '</b>';
            }
        }

        let newResponse2 = newResponse.split('*').join('<br/>');
        //Ends here
        let newResponseArray = newResponse2.split(' ');
        for (let i = 0; i < newResponseArray.length; i++) {
            delayPara(i, newResponseArray[i] + ' ');
        }
        setLoading(false);
        setInput('');
    };

    const contextValue = {
        input,
        setInput,
        recentPrmopt,
        setRecentPrompt,
        prevPrmopt,
        setPrevPrompt,
        showResult,
        setShowResult,
        loading,
        setLoading,
        resultData,
        setResultData,
        onSent
    };
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
};
export default ContextProvider;

export const ContextState = () => {
    return useContext(Context);
};
