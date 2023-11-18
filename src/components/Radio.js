import React, { useContext, useEffect } from 'react';
import { FormContext } from '../App';
import Description from './Data';

function Radio(props) {
    props = props.edata;
    const { form, dispatch } = useContext(FormContext);

    useEffect(() => {
        dispatch({ type: 'update', jsonKey: props.jsonKey, value: props.validate.defaultValue });
    }, []); 

    const onChange = (e) => {
        const currentKey = props.jsonKey;
        const lastDotIndex = currentKey.lastIndexOf('.');

        if (lastDotIndex !== -1) {
            const tempKey = currentKey.substring(0, lastDotIndex);
            const keysToRemove = Object.keys(form).filter(key => key.startsWith(tempKey) && key !== currentKey);
            keysToRemove.map((keys) => {
                dispatch({ type: 'removeKey', jsonKey: keys });
            })
            dispatch({ type: 'update', jsonKey: currentKey, value: e.target.value });
        } else {
            dispatch({ type: 'update', jsonKey: currentKey, value: e.target.value });
        }
    };




    return (
        <div className="space-y-2">
            {props.validate.options.map((e, index) => (
                <div key={index} className="flex items-center">
                    <label className="text-lg font-bold mr-2">{e.label}</label>
                    <Description description={e.description} />
                    <input
                        type="radio"
                        name={props.jsonKey}
                        value={e.value}
                        onChange={onChange}
                        checked={form[props.jsonKey] === e.value}
                        className="mr-4"
                    />
                </div>
            ))}
        </div>
    );
}

export default Radio;
