import React, { Suspense } from 'react'
import { CameraShake, Center, Float, Stars, useTexture } from "@react-three/drei"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { Bloom, EffectComposer } from "@react-three/postprocessing"
import { KernelSize } from 'postprocessing'
import { TextureLoader, Vector3 } from 'three'

const Wrapper = () => {
    const colorMap = useTexture('texture.png')

    return (
        <mesh>
            <shapeGeometry />
            <meshStandardMaterial map={colorMap} emissive="white" />
        </mesh>
    )
}

const ThreeDee = () => {

    return (
        <div style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, zIndex: -1 }}>
                <Canvas>
                    <Suspense fallback={null}>
                        <Center top left>
                            <Wrapper />
                        </Center>
                    </Suspense>
                    <CameraShake />
                    <EffectComposer multisampling={8}>
                        <Bloom kernelSize={1} luminanceThreshold={0.2} luminanceSmoothing={0.4} intensity={.5} radius={10} />
                        <Bloom kernelSize={KernelSize.HUGE} luminanceThreshold={0} luminanceSmoothing={.4} intensity={.6} radius={2} />
                    </EffectComposer>
                </Canvas>
        </div>
    )
}

export default ThreeDee
