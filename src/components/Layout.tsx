import React from "react";
import Card from "./Card";
import Header from "./Header";
import fruitLists from "../fruitLists";
class Layout extends React.Component {
    componentDidMount(): void {
        document.title = "Fruit List";
    }

    render(): React.ReactNode {
        return (
            <div>
                <Header />
                <div className="flex sm: justify-start content-start flex-wrap">
                    {fruitLists.map((fruit) => {
                        return (
                            <Card
                                key={fruit.name}
                                imgUrl={fruit.imgUrl}
                                name={fruit.name}
                                calories={fruit.calories}
                                macro={fruit.macro}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Layout;
