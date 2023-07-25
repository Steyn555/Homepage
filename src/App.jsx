import './App.css';
import Home from './Home'
import { useEffect, useState } from "react";

export default function App() {
  let [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  
  return (
    <>
      {loading &&
        <div id="loading">
                <img id="loading-img" src="/loading.gif" alt="Dedsec Loading Screen"/>
        </div>
      }
      {!loading && <Home />}
    </>
  )
}
