import { OrbitControls , shaderMaterial, Center, Text, Text3D, Float} from '@react-three/drei'
import React, { useEffect, useRef, useState } from 'react'
import {  useFrame, extend } from '@react-three/fiber'
import vertexShader from './shaders/vertex.js'
import fragmentShader from './shaders/fragment.js'
import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

import { Form, Input, Label, Submit } from "r3f-form";



export default function Experience(){

    const PlaneMaterial = shaderMaterial(

        {
            uTime: 0,
          
            
        },
        
        vertexShader,
        fragmentShader,
        
        
    )
    extend({PlaneMaterial})
    

const ref = useRef()
const ref2 = useRef()

const [word, setWord] = useState('Birbs Nest');




// Hold state for hovered and clicked events

const planeMaterial = useRef()

function handleChange(e) {
    setWord(e.target.value);
    
  }



useFrame((state, delta) => {

    if(planeMaterial.current){
        planeMaterial.current.uTime += delta;

    }
   

})


    return(

<>
<OrbitControls makeDefault enableZoom={true} maxPolarAngle={Math.PI * .5}/>

<Form align={'center'}>
      
      <Input  ref={ref2} className="formInput"  fontSize={9} padding={[0.1, 0.1]} scale={ [7,7,5] }  name="logo" backgroundColor={'white'} backgroundOpacity={1}  onChange={handleChange}  position={ [ 0, 3.250, 0 ] }  defaultValue="Birbs Nest"/>

      
    </Form>

 
{word.split('').map((x,i)=> {
return(
    <Text
        key={i}
        font="Basement.otf"
       
        glyphGeometryDetail={10}
        position={ [ (i*2.4)-word.length, -2.250, 0 ] }
        fontSize={3.}
        
        
        >
          {x.toUpperCase()}
          <planeMaterial ref={ref} side={THREE.DoubleSide} transparent />
        
          
        </Text>

)

})} 


    
      
      </>
    )
}