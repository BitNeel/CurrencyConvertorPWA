import React,{useEffect} from 'react';
import templates from '../template.json';
export default function AppHeader({setToggle}) {
    const changePage=(e)=>{
        let target = e.target.id;
        let index = parseInt(target.match(/(\d+)/)[0]);
        setToggle(index);
    }
    useEffect(() => {
        let firstActiveNode = document.getElementsByClassName("navItemSpan")[0];
        firstActiveNode.classList.add("navActive")

        return () => {
            let nodes = document.getElementsByClassName("navItemSpan");
            for(let i=0;i < nodes.length;i++)
            {
                nodes[i].classList.remove("navActive");
                nodes[i].classList.remove("navHover");
            }
        }
    }, [])
    const addEnterClass=e=>{
        let targetNode = document.getElementById(e.target.id);
        targetNode.classList.add("navHover")
    }
    const removeEnterClass=e=>{
        let targetNode = document.getElementById(e.target.id);
        targetNode.classList.remove("navHover")
    }
    const addActiveClass=e=>{
        let targetNodes = document.getElementsByClassName("navItemSpan");
        for(let i=0;i<targetNodes.length;i++)
        {
            targetNodes[i].classList.remove("navActive");
        }
        let currentnode = document.getElementById(e.target.id);
        currentnode.classList.add("navActive");
    }
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <span className="display-4 mx-auto">{templates.AppHeader}</span>
        </nav>
        <ul className="nav nav-pills nav-fill bg-light" id="navList">
          {templates.NavLinks.map((link, index) => (
            <li key={index} className="nav-item">
              <span
                id={`nav-item-span${index}`}
                className="navItemSpan"
                onMouseEnter={addEnterClass}
                onMouseLeave={removeEnterClass}
                onClickCapture={addActiveClass}
                onClick={changePage}
              >
                {link}
              </span>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
}
