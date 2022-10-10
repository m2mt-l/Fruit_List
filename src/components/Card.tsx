import React from "react";
import fruits from "../fruits";

class Card extends React.Component<fruits> {
    render(): React.ReactNode {
        const imgUrl = this.props.imgUrl;
        const name = this.props.name;
        const calories = this.props.calories;
        const macroP = this.props.macro[0];
        const macroF = this.props.macro[1];
        const macroC = this.props.macro[2];

        return (
            <div className="mx-auto my-3 flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">
                <img
                    className="aspect-video w-96 rounded-t-2xl object-cover object-center"
                    src={imgUrl}
                />
                <div className="p-4">
                    <h1 className="text-blue-400 text-2xl ">{name}</h1>
                    <small className="text-sm font-medium text-slate-600 pb-2">
                        Calories: {calories} kcal / 100g
                    </small>
                    <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
                        Macro: P {macroP}g F {macroF}g C{macroC}g
                    </p>
                </div>
            </div>
        );
    }
}

export default Card;
