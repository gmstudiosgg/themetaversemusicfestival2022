import React from 'react'
import { CameraShake, Float, Stars } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { Bloom, EffectComposer } from "@react-three/postprocessing"
import { KernelSize } from 'postprocessing'
import { Vector3 } from 'three'

const Wrapper = () => {
    useFrame(({ camera }) => {
        const positionZ = (window.scrollY / 30)

        camera.position.lerp(new Vector3(camera.position.x, camera.position.y, - positionZ), 0.3)
    })
    return (
        <>
            <Float>
                <Stars radius={100} count={50} saturation={.5} factor={1} speed={.05} fade />
            </Float>
            <Float>
                <Stars radius={200} count={100} saturation={1} factor={4} speed={.05} fade />
            </Float>
            <Float>
                <Stars radius={300} count={200} saturation={3} factor={2} speed={1} fade />
            </Float>
        </>
    )
}

const StarsScene = () => {

    return (
        <div style={{ position: 'fixed', width: '100%', height: '100%', top: 0, left: 0, zIndex: -1 }}>
            <Canvas
                camera={{
                    fov: 90
                }}
            >
                <Wrapper />
                <CameraShake />
                <EffectComposer multisampling={8}>
                    <Bloom kernelSize={1} luminanceThreshold={0.2} luminanceSmoothing={0.4} intensity={.5} radius={10} />
                    <Bloom kernelSize={KernelSize.HUGE} luminanceThreshold={0} luminanceSmoothing={.4} intensity={.6} radius={2} />
                </EffectComposer>
            </Canvas>
        </div>
    )
}

export default StarsScene
