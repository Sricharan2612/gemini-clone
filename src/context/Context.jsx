import React, { createContext, useContext, useState } from 'react';
// import run from '../config/gemini';
import main from '../config/gemini';
const Context = createContext();
const ContextProvider = ({ children }) => {
    const [input, setInput] = useState('');
    const [recentPrmopt, setRecentPrompt] = useState('');
    const [prevPrompt, setPrevPrompt] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState('');

    const delayPara = (index, nextWord) => {
        setTimeout(() => {
            setResultData(prev => prev + nextWord);
        }, 75 * index);
    };

    const newChat = () => {
        setLoading(false);
        setShowResult(false);
    };

    const onSent = async (promptData) => {
        setResultData('');
        setLoading(true);
        setShowResult(true);


        let responseData;
        if (promptData !== undefined) {
            responseData = await main(promptData);
            setRecentPrompt(promptData);
        } else {
            setPrevPrompt(prev => [...prev, input]);
            setRecentPrompt(input);
            responseData = await main(input);
        }

        // setRecentPrompt(input);
        // setPrevPrompt(prev => [...prev, input]);

        // const { text: responseData } = await main(input);


        //formating the text
        let resArray = responseData.split('**');
        let newResponse = '';
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
        prevPrompt,
        setPrevPrompt,
        showResult,
        setShowResult,
        loading,
        setLoading,
        resultData,
        setResultData,
        onSent,
        newChat
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
