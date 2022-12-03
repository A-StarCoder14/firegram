import { StorageError } from "firebase/storage";
import { useEffect, useState } from "react";
import { FileInterface } from "../types/FileInterface";
import { useStorage } from "../useStorage";
import {motion} from "framer-motion"

interface ProgressBarProps {
  file: FileInterface;
  setFile: React.Dispatch<React.SetStateAction<File | null | undefined>>
}

export function ProgressBar({ file, setFile}: ProgressBarProps) {
  const init = () => {
    if (!file) return;
    const response = useStorage(file);
    return {
      error: response?.error,
      progress: response?.progress,
      url: response?.url,
    };
  };

  const response = init();

  useEffect(() => {
    if(response?.url){
      setFile(null)
    }
  }, [response?.url, setFile])


  return (
    <div className="progress-bar">
      {response?.progress ? (
        <motion.div
          style={{
            height: "10px",
            backgroundColor: "#efb6b2",
          }}
          initial={{width: 0}}
          animate={{width: response.progress + "%"}}
        ></motion.div>
      ) : null}
    </div>
  );
}
