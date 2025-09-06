import React,{useEffect} from "react";
import {useParams,useNavigate} from "react-router-dom";
import {getUrl,incrementVisit} from "../services/storage";

function RedirectPage() {
  const {code}=useParams();
  const navigate=useNavigate();

  useEffect(() => {
    const url=getUrl(code);
    if (url){
      incrementVisit(code);
      window.location.href=url;
    } else {
      alert("URL not found!");
      navigate("/");
    }
  }, [code, navigate]);

  return <p>Redirecting...</p>;
}

export default RedirectPage;
