import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
  
function App() {
	const [data, setData] = useState(null);
  const [post, setPostId] = useState(null);

	useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				companyName: "skibidi",
				ownerName: "jasmitha",
				rollNo: "eng21cs0168",
				ownerEmail: "eng21cs0168@dsu.edu.in",
				accessCode: "sMYzGa",
			}),
		}
    fetch('https://20.244.56.144/test/register', requestOptions)
    .then(response => response.json())
    .then(data => setPostId(data.id));
	}, []);

  
	return (
    <>
    <div className="add-post-container">
       <form>
          <input type="text" className="form-control" />
          <textarea className="form-control" cols="10" rows="8"></textarea>
          <button type="submit">Add Post</button>
       </form>
    </div>
    <div className="posts-container">
       
    </div>
 </>
);
};


export default App;
