import React, {Component} from "react";  
import Readpdf from '../readpdf';
//import samplePDF from '../asset/sample.pdf'; //pdf is stored in this app
import samplePDF from 'https://drive.google.com/file/d/13Er-MvYVrnULmxOtQ2Da0GJoEjbVBZN_/view?usp=sharing';

//this calls ReadPdf module to view the pdf file, can be updated future with more data/files
export default function Theory(){
    //Vpdf is for making props to view pdf
     const Vpdf = () => {
        return  <Readpdf pdf={samplePDF}/> 
    }; 
  
    return(
       <Vpdf/>
    )
} 

