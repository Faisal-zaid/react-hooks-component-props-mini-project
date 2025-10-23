import React from 'react'

export default function Article({title, date="January 1, 1970", preview, minutes}) {
    function matime(minutes){
        if(minutes<30){
            const cups=Math.ceil(minutes/5);
            return"☕️".repeat(cups);
        }else{
            const bentos=Math.ceil(minutes/10);
            return "🍱".repeat(bentos);
        }
    }
  return (
    <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{matime(minutes)} {minutes} min read</p>
        <p>{preview}</p>
    </article>
  );
}
