import { FiPlusCircle } from "react-icons/fi";
import React, { useState } from "react";
import { ProgressBar } from "./ProgressBar";
import { useStorage } from "../useStorage";

export function UploadForm() {

    const [file, setFile] = useState<File | null>()
    const [error, setError] = useState<string>()

    const acceptableTypes = ["image/jpeg", "image/png"]

   const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {

            if(e.target.files && !acceptableTypes.includes(e.target.files![0]?.type)){
               setError("Please upload a valid image type (.jpeg or .png)")
               setFile(null)
           }else{
               setFile(() => e.target.files![0])
               setError("")
           }
       }
    
    
  return (
    <div>
    <form>
      <label htmlFor="mainInput" style={{textAlign:"center"}}>
          <FiPlusCircle size={40} color= "#efb6b2" cursor="pointer" style={{textAlign: "center"}}/>
      </label>
      <input type="file" id="mainInput" className="hide" onChange={handleFile}/>
      <p>{error && error}</p>
      <p>{file && file.name}</p>
    </form>
    { file && <ProgressBar file={file} setFile={setFile} />}
    </div>
  );
  }
