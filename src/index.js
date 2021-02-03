import React from "react";
import ReactDOM from "react-dom";
import './styles.css';

const Index = () => {
    return (
        <div className="bg-white p-8 container text-center my-8 mx-auto max-w-lg shadow-lg rounded-lg overflow-hidden">
           <h1 className="text-5xl mb-12">Hello World!</h1>
           <img className="w-60 h-60 object-cover mx-auto rounded-full" src="https://cdn.pixabay.com/photo/2014/05/07/06/44/cat-339400_1280.jpg" />
           <p className="pt-8 font-bold">“FEBRUARY,” Margaret Atwood</p>
           <p className="py-4">
            Winter. Time to eat fat
            <br/>
            and watch hockey. In the pewter mornings, the cat,
            <br/>
            a black fur sausage with yellow
            <br/>
            Houdini eyes, jumps up on the bed and tries
            <br/>
            to get onto my head. It’s his
            <br/>
            way of telling whether or not I’m dead.
            <br/>
            If I’m not, he wants to be scratched; if I am
            <br/>
            He’ll think of something.
           </p>
        </div>
    );
};

ReactDOM.render(<Index />, document.getElementById("index"));