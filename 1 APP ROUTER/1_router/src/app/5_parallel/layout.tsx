import React from "react";

export default function ParallelLayout({children, bills, tickets, recharge} : {children: React.ReactNode, bills: React.ReactNode, tickets: React.ReactNode, recharge: React.ReactNode}){
    return(
    <>
        {children}
        <div>{bills}</div>
        <div>{tickets}</div>
        <div>{recharge}</div>
    </>
    )
}