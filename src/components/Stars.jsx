import React from 'react'
import { CameraShake, Float, Stars } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { Bloom, EffectComposer } from "@react-three/postprocessing"
import { KernelSize } from 'postprocessing'
import { Vector3 } from 'three'

const Wrapper = () => {
    useFrame(({ camera }) => {
        const positionZ = window.scrollY / 10 + 400

        camera.position.lerp(new Vector3(camera.position.x, camera.position.y, positionZ))
    })
    return (
        <Float>
            <Stars radius={250} count={200} saturation={1} factor={4} speed={.05} />
        </Float>
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
                <EffectComposer multisampling={4}>
                    <Bloom kernelSize={1} luminanceThreshold={0.2} luminanceSmoothing={0.4} intensity={.5} radius={10} />
                    <Bloom kernelSize={KernelSize.HUGE} luminanceThreshold={0} luminanceSmoothing={.4} intensity={.6} radius={2} />
                </EffectComposer>
            </Canvas>
        </div>
    )
}

export default StarsScene
