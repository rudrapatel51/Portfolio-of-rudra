import {useRef} from 'react';

export default function Practice6(){
  const listRef = useRef(null);
  function scrollToIndex(index){
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll('li>img')[index];
    imgNode.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }
  return (
    <div>
    <nav>
    <button onClick={() => scrollToIndex(0)}>one</button>
    <button onClick={() => scrollToIndex(1)}>second</button>
    <button onClick={() => scrollToIndex(2)}>third</button>
    </nav>
      <div>
      <ul ref={listRef}>
      <li>
      <img src ="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"/>
      </li>
      <li>
      <img src ="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"/>
      </li>
      <li>
      <img src ="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"/>
      </li>
      </ul>
      </div>
    </div>
  )
}