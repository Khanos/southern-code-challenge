'use client';

import { useGLTF, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Loading from './Loading';

type ModelBoxProps = {
  modelFileName: string;
}

export default function Model(props: ModelBoxProps) {
  const { modelFileName } = props;
  const model = useGLTF(`/models/${modelFileName}`);

  if (!model) {
    return <Loading />;
  }
  
  return (
    <Canvas>
      <Environment preset="sunset" />
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 900]}
        fov={60}
        zoom={20}
      />
      <OrbitControls 
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
      />
      <Suspense fallback={null}>
        <primitive object={model.scene} position={[0, -20, 0]}/>
      </Suspense>
    </Canvas>
  )
}
