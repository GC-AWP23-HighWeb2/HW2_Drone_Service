import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model2(props) {

  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/scene2.gltf')
  const { actions } = useAnimations(animations, group)

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="cc9fea1cfb8e481899fb153dd500599cfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="4_L" position={[0, 798.58, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="4_L_LOL_0" geometry={nodes['4_L_LOL_0'].geometry} material={materials.material} />
                </group>
                <group name="4_L008" position={[1017.41, 787.01, 1081.72]} rotation={[-Math.PI / 2, 0, 1.83]} scale={100}>
                  <group name="4_L004" position={[8.69, -5.5, 5.42]} rotation={[0, 0, 1.68]}>
                    <mesh name="4_L004_LOL_0" geometry={nodes['4_L004_LOL_0'].geometry} material={materials.material} />
                  </group>
                  <mesh name="4_L008_LOL_0" geometry={nodes['4_L008_LOL_0'].geometry} material={materials.material} />
                </group>
                <group name="4_L009" position={[-978.04, 787.02, 1081.72]} rotation={[-Math.PI / 2, 0, -1.82]} scale={100}>
                  <group name="4_L001" position={[-8.75, -5.5, 5.42]} rotation={[0, 0, -1.66]}>
                    <mesh name="4_L001_LOL_0" geometry={nodes['4_L001_LOL_0'].geometry} material={materials.material} />
                  </group>
                  <mesh name="4_L009_LOL_0" geometry={nodes['4_L009_LOL_0'].geometry} material={materials.material} />
                </group>
                <group name="4_L010" position={[-978.04, 787.02, -1277.64]} rotation={[-Math.PI / 2, 0, 2.32]} scale={100}>
                  <group name="4_L002" position={[-8.75, 5.51, 5.42]} rotation={[0, 0, 1.73]}>
                    <mesh name="4_L002_LOL_0" geometry={nodes['4_L002_LOL_0'].geometry} material={materials.material} />
                  </group>
                  <mesh name="4_L010_LOL_0" geometry={nodes['4_L010_LOL_0'].geometry} material={materials.material} />
                </group>
                <group name="4_L011" position={[1017.42, 787.02, -1277.64]} rotation={[-Math.PI / 2, 0, -2.32]} scale={100}>
                  <group name="4_L003" position={[8.69, 5.5, 5.42]} rotation={[0, 0, -1.81]}>
                    <mesh name="4_L003_LOL_0" geometry={nodes['4_L003_LOL_0'].geometry} material={materials.material} />
                  </group>
                  <mesh name="4_L011_LOL_0" geometry={nodes['4_L011_LOL_0'].geometry} material={materials.material} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene2.gltf')

export default Model2;
