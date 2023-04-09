import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}scale={0.02}>
      <group position={[9.34, 0, 2.56]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 24.77, 28.93]}>
            <group position={[5.95, -20.2, -32.32]}>
              <mesh geometry={nodes.Dronr_body8_ai_whitePlastic_0.geometry} material={materials.ai_whitePlastic} />
              <mesh geometry={nodes.Dronr_body8_ai_whitePlastic_tex_0.geometry} material={materials.ai_whitePlastic_tex} />
            </group>
            <mesh geometry={nodes.extrudedSurface12_ai_Metal_0.geometry} material={materials.ai_Metal} position={[5.95, -20.2, -32.38]} />
            <mesh geometry={nodes.extrudedSurface13_ai_Metal_0.geometry} material={materials.ai_Metal} position={[5.95, -20.2, -32.32]} />
            <mesh geometry={nodes.extrudedSurface14_ai_Metal_0.geometry} material={materials.ai_Metal} position={[5.95, -20.2, -32.26]} />
            <mesh geometry={nodes.extrudedSurface15_ai_Metal_0.geometry} material={materials.ai_Metal} position={[5.95, -20.2, -32.64]} />
            <mesh geometry={nodes.extrudedSurface16_ai_Metal_0.geometry} material={materials.ai_Metal} position={[5.95, -20.2, -32.58]} />
            <mesh geometry={nodes.Drone_battery_latch1_ai_whitePlastic_0.geometry} material={materials.ai_whitePlastic} position={[6.57, -20.59, -32.32]} rotation={[0, 0, 0.06]} scale={0.93} />
            <mesh geometry={nodes.Drone_bands1_ai_gold_0.geometry} material={materials.ai_gold} position={[5.95, -20.2, -32.32]} />
            <mesh geometry={nodes.polySurface35_Default_Material_0.geometry} material={materials.Default_Material} position={[5.95, -20.2, -32.32]} />
            <mesh geometry={nodes.Drone_battery1_ai_whitePlastic_0.geometry} material={materials.ai_whitePlastic} position={[6.15, -20.2, -32.32]} />
            <mesh geometry={nodes.polySurface36_ai_whitePlastic_0.geometry} material={materials.ai_whitePlastic} position={[16.56, -20, -42.85]} rotation={[Math.PI, -0.12, Math.PI]} scale={[-1, 1, 1]} />
            <mesh geometry={nodes.polySurface37_ai_Metal_0.geometry} material={materials.ai_Metal} position={[16.56, -17.86, -42.85]} rotation={[0, -1.5, 0]} scale={[-1, 1, 1]} />
            <mesh geometry={nodes.motor_top1_ai_Metal_0.geometry} material={materials.ai_Metal} position={[16.56, -19.64, -42.85]} rotation={[-Math.PI, 0, Math.PI]} scale={[-1, 1, 1]} />
            <mesh geometry={nodes.coil_252_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[15.81, -18.93, -42.85]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={[-1, 1, 1]} />
            <mesh geometry={nodes.motor_base1_ai_Metal_0.geometry} material={materials.ai_Metal} position={[16.56, -19.64, -42.85]} rotation={[-Math.PI, 0, Math.PI]} scale={[-1, 1, 1]} />
            <mesh geometry={nodes.motor_inner1_ai_whitePlastic_0.geometry} material={materials.ai_whitePlastic} position={[16.56, -19.57, -42.85]} rotation={[-Math.PI, 0, Math.PI]} scale={[-1, 1, 1]} />
            <mesh geometry={nodes.polySurface38_ai_Metal_0.geometry} material={materials.ai_Metal} position={[5.95, -20.2, -32.32]} />
            <mesh geometry={nodes.pCylinder33_ai_Metal_0.geometry} material={materials.ai_Metal} position={[2.93, -25.64, -33.13]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.pCylinder34_ai_Metal_0.geometry} material={materials.ai_Metal} position={[2.94, -25.64, -33.44]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.pCylinder35_ai_Metal_0.geometry} material={materials.ai_Metal} position={[2.94, -25.64, -33.6]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.leg_lf_pad_a1_ai_whitePlastic_0.geometry} material={materials.ai_whitePlastic} position={[5.95, -20.2, -32.32]} />
            <mesh geometry={nodes.leg_lf_pad_b1_ai_whitePlastic_0.geometry} material={materials.ai_whitePlastic} position={[5.95, -20.2, -32.32]} />
            <mesh geometry={nodes.polySurface39_ai_whitePlastic_0.geometry} material={materials.ai_whitePlastic} position={[5.95, -20.2, -32.32]} />
            <mesh geometry={nodes.leg_rt_main1_ai_whitePlastic_0.geometry} material={materials.ai_whitePlastic} position={[5.95, -20.2, -32.32]} rotation={[-Math.PI, 0, Math.PI]} scale={[-1, 1, 1]} />
            <mesh geometry={nodes.leg_rt_pad_a1_ai_whitePlastic_0.geometry} material={materials.ai_whitePlastic} position={[5.95, -20.2, -32.32]} rotation={[-Math.PI, 0, Math.PI]} scale={[-1, 1, 1]} />
            <mesh geometry={nodes.leg_rt_pad_b1_ai_whitePlastic_0.geometry} material={materials.ai_whitePlastic} position={[5.95, -20.2, -32.32]} rotation={[-Math.PI, 0, Math.PI]} scale={[-1, 1, 1]} />
            <mesh geometry={nodes.leg_lf_wore_b1_ai_whitePlastic_0.geometry} material={materials.ai_whitePlastic} position={[6.11, -20.2, -32.34]} scale={[-1, 1, 1]} />
            <mesh geometry={nodes.leg_lf_wire_a1_ai_whitePlastic_0.geometry} material={materials.ai_whitePlastic} position={[2.35, -24.5, -28.58]} scale={[0.14, 0.57, 0.14]} />
            <mesh geometry={nodes.leg_lf_main1_ai_whitePlastic_0.geometry} material={materials.ai_whitePlastic} position={[5.95, -20.2, -32.32]} />
            <mesh geometry={nodes.polySurface40_ai_whitePlastic_0.geometry} material={materials.ai_whitePlastic} position={[-4.67, -20, -21.79]} rotation={[0, -1.24, 0]} scale={[-1, 1, 1]} />
            <mesh geometry={nodes.polySurface41_ai_Metal_0.geometry} material={materials.ai_Metal} position={[-4.67, -17.86, -21.79]} rotation={[-Math.PI, 1.5, Math.PI]} scale={[-1, 1, 1]} />
            <mesh geometry={nodes.motor_top2_ai_Metal_0.geometry} material={materials.ai_Metal} position={[-4.67, -19.64, -21.79]} scale={[-1, 1, 1]} />
            <mesh geometry={nodes.motor_base2_ai_Metal_0.geometry} material={materials.ai_Metal} position={[-4.67, -19.64, -21.79]} scale={[-1, 1, 1]} />
            <mesh geometry={nodes.motor_inner2_ai_whitePlastic_0.geometry} material={materials.ai_whitePlastic} position={[-4.67, -19.57, -21.79]} scale={[-1, 1, 1]} />
            <mesh geometry={nodes.pCylinder36_ai_whitePlastic_0.geometry} material={materials.ai_whitePlastic} position={[5.93, -20.2, -32.32]} />
            <mesh geometry={nodes.polySurface42_ai_Metal_0.geometry} material={materials.ai_Metal} position={[5.95, -20.2, -32.32]} />
            <mesh geometry={nodes.pCylinder37_ai_Metal_0.geometry} material={materials.ai_Metal} position={[3.32, -24.42, -32.53]} />
            <mesh geometry={nodes.pCylinder38_ai_whitePlastic_0.geometry} material={materials.ai_whitePlastic} position={[-0.03, -24.39, -29.54]} />
            <mesh geometry={nodes.pCylinder39_ai_Metal_0.geometry} material={materials.ai_Metal} position={[10.5, -22.63, -33.99]} rotation={[0, 0, Math.PI]} scale={0.14} />
            <mesh geometry={nodes.Dronr_body7_ai_gold_0.geometry} material={materials.ai_gold} position={[5.93, -20.2, -32.32]} />
            <mesh geometry={nodes.pCylinder40_ai_whitePlastic_0.geometry} material={materials.ai_whitePlastic} position={[6.65, -23.34, -29.49]} scale={[0.47, 0.73, 0.55]} />
            <mesh geometry={nodes.pCylinder41_ai_whitePlastic_0.geometry} material={materials.ai_whitePlastic} position={[6.73, -23.34, -35.17]} scale={[0.43, 0.73, 0.55]} />
            <mesh geometry={nodes.pCylinder42_ai_whitePlastic_0.geometry} material={materials.ai_whitePlastic} position={[0, -23.34, -29.56]} scale={[0.48, 0.73, 0.55]} />
            <mesh geometry={nodes.pCube10_ai_Metal_0.geometry} material={materials.ai_Metal} position={[5.53, -20.5, -32.48]} scale={0.91} />
            <mesh geometry={nodes.pCylinder43_ai_whitePlastic_0.geometry} material={materials.ai_whitePlastic} position={[6.71, -24.39, -35.17]} scale={0.99} />
            <mesh geometry={nodes.pSphere2_Default_Material_0.geometry} material={materials.Default_Material} position={[2.6, -25.64, -32.39]} rotation={[0, 0, Math.PI / 2]} scale={0.25} />
            <mesh geometry={nodes.polySurface43_Default_Material_0.geometry} material={materials.Default_Material} position={[6.68, -19.92, -32.34]} scale={1.05} />
            <mesh geometry={nodes.polySurface44_ai_glass_0.geometry} material={materials.ai_glass} position={[5.95, -20.2, -32.32]} />
            <mesh geometry={nodes.pCylinder44_ai_whitePlastic_0.geometry} material={materials.ai_whitePlastic} position={[9.74, -22.75, -33.15]} scale={0.36} />
            <mesh geometry={nodes.Dronr_body9_ai_whitePlastic_0.geometry} material={materials.ai_whitePlastic} position={[5.95, -20.2, -32.32]} />
            <mesh geometry={nodes.leg_rt_wore_b1_ai_whitePlastic_0.geometry} material={materials.ai_whitePlastic} position={[6.11, -20.2, -32.3]} rotation={[-Math.PI, 0, -Math.PI]} />
            <mesh geometry={nodes.leg_rt_wire_a1_ai_whitePlastic_0.geometry} material={materials.ai_whitePlastic} position={[2.35, -24.5, -36.06]} rotation={[-Math.PI, 0, Math.PI]} scale={[-0.14, 0.57, 0.14]} />
            <mesh geometry={nodes.polySurface45_ai_whitePlastic_0.geometry} material={materials.ai_whitePlastic} position={[-4.62, -20, -42.71]} rotation={[-0.03, -1.03, 0.05]} />
            <mesh geometry={nodes.polySurface46_ai_Metal_0.geometry} material={materials.ai_Metal} position={[-4.67, -17.86, -42.85]} rotation={[0, 1.5, 0]} />
            <mesh geometry={nodes.motor_top3_ai_Metal_0.geometry} material={materials.ai_Metal} position={[-4.67, -19.64, -42.85]} rotation={[-Math.PI, 0, -Math.PI]} />
            <mesh geometry={nodes.polySurface47_ai_whitePlastic_0.geometry} material={materials.ai_whitePlastic} position={[16.56, -20, -21.79]} rotation={[-Math.PI, 1.19, -Math.PI]} />
            <mesh geometry={nodes.motor_inner3_ai_whitePlastic_0.geometry} material={materials.ai_whitePlastic} position={[16.56, -19.57, -21.79]} />
            <mesh geometry={nodes.polySurface48_ai_Metal_0.geometry} material={materials.ai_Metal} position={[16.56, -17.86, -21.79]} rotation={[-Math.PI, -1.5, -Math.PI]} />
            <mesh geometry={nodes.motor_top4_ai_Metal_0.geometry} material={materials.ai_Metal} position={[16.56, -19.64, -21.79]} />
            <mesh geometry={nodes.motor_base3_ai_Metal_0.geometry} material={materials.ai_Metal} position={[16.56, -19.64, -21.79]} />
            <mesh geometry={nodes.pCube11_ai_whitePlastic_0.geometry} material={materials.ai_whitePlastic} position={[5.95, -20.2, -32.32]} />
            <mesh geometry={nodes.pCylinder45_ai_whitePlastic_0.geometry} material={materials.ai_whitePlastic} position={[0, -23.34, -35.17]} scale={[0.48, 0.73, 0.55]} />
            <mesh geometry={nodes.camera_plate_top1_ai_Metal_0.geometry} material={materials.ai_Metal} position={[6.23, -20.42, -32.32]} />
            <mesh geometry={nodes.camera_plate_btm1_ai_Metal_0.geometry} material={materials.ai_Metal} position={[5.95, -21.63, -32.32]} />
            <mesh geometry={nodes.motor_base4_ai_Metal_0.geometry} material={materials.ai_Metal} position={[-4.67, -19.64, -42.85]} rotation={[-Math.PI, 0, -Math.PI]} />
            <mesh geometry={nodes.motor_inner4_ai_whitePlastic_0.geometry} material={materials.ai_whitePlastic} position={[-4.67, -19.57, -42.85]} rotation={[-Math.PI, 0, -Math.PI]} />
            <mesh geometry={nodes.pCylinder46_ai_Metal_0.geometry} material={materials.ai_Metal} position={[10.5, -22.63, -30.64]} rotation={[0, 0, Math.PI]} scale={0.14} />
          </group>
          <mesh geometry={nodes.coil_8_ai_coil_0.geometry} material={materials.ai_coil} position={[17.22, 5.84, 6.66]} rotation={[Math.PI, -Math.PI / 5, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_9_ai_coil_0.geometry} material={materials.ai_coil} position={[17.29, 5.84, 6.61]} rotation={[Math.PI, -Math.PI / 5, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_10_ai_coil_0.geometry} material={materials.ai_coil} position={[17.34, 5.84, 6.57]} rotation={[Math.PI, -Math.PI / 5, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_11_ai_coil_0.geometry} material={materials.ai_coil} position={[-3.88, 5.84, 7.71]} rotation={[0, -Math.PI / 5, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_12_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.5, 5.84, 7.67]} rotation={[0, -1.26, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_13_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.14, 5.84, 7.52]} rotation={[0, -Math.PI / 5, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_14_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.08, 5.84, 7.57]} rotation={[0, -Math.PI / 5, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_15_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.01, 5.84, 7.62]} rotation={[0, -Math.PI / 5, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_16_ai_coil_0.geometry} material={materials.ai_coil} position={[-3.94, 5.84, 7.67]} rotation={[0, -Math.PI / 5, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_17_ai_coil_0.geometry} material={materials.ai_coil} position={[16.81, 5.84, -13.14]} rotation={[0, -1.26, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_18_ai_coil_0.geometry} material={materials.ai_coil} position={[16.84, 5.84, -13.06]} rotation={[0, -1.26, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_19_ai_coil_0.geometry} material={materials.ai_coil} position={[16.86, 5.84, -12.99]} rotation={[0, -1.26, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_20_ai_coil_0.geometry} material={materials.ai_coil} position={[16.73, 5.84, -13.39]} rotation={[0, -1.26, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_21_ai_coil_0.geometry} material={materials.ai_coil} position={[16.76, 5.84, -13.3]} rotation={[0, -1.26, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_22_ai_coil_0.geometry} material={materials.ai_coil} position={[16.79, 5.84, -13.22]} rotation={[0, -1.26, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_23_ai_coil_0.geometry} material={materials.ai_coil} position={[16.39, 5.84, -13.39]} rotation={[-Math.PI, -1.26, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_24_ai_coil_0.geometry} material={materials.ai_coil} position={[16.36, 5.84, -13.3]} rotation={[-Math.PI, -1.26, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_25_ai_coil_0.geometry} material={materials.ai_coil} position={[16.34, 5.84, -13.22]} rotation={[-Math.PI, -1.26, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_26_ai_coil_0.geometry} material={materials.ai_coil} position={[16.31, 5.84, -13.14]} rotation={[-Math.PI, -1.26, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_27_ai_coil_0.geometry} material={materials.ai_coil} position={[15.67, 5.84, -13.91]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_28_ai_coil_0.geometry} material={materials.ai_coil} position={[15.6, 5.84, -13.91]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_29_ai_coil_0.geometry} material={materials.ai_coil} position={[16.12, 5.84, -14.24]} rotation={[Math.PI, Math.PI / 5, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_30_ai_coil_0.geometry} material={materials.ai_coil} position={[16.04, 5.84, -14.29]} rotation={[Math.PI, Math.PI / 5, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_31_ai_coil_0.geometry} material={materials.ai_coil} position={[17.53, 5.84, -13.91]} rotation={[0, 0, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_32_ai_coil_0.geometry} material={materials.ai_coil} position={[17.01, 5.84, -13.59]} rotation={[0, -Math.PI / 5, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_33_ai_coil_0.geometry} material={materials.ai_coil} position={[17.08, 5.84, -13.53]} rotation={[0, -Math.PI / 5, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_34_ai_coil_0.geometry} material={materials.ai_coil} position={[17.21, 5.84, -13.91]} rotation={[0, 0, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_35_ai_coil_0.geometry} material={materials.ai_coil} position={[17.29, 5.84, -13.91]} rotation={[0, 0, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_36_ai_coil_0.geometry} material={materials.ai_coil} position={[17.38, 5.84, -13.91]} rotation={[0, 0, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_37_ai_coil_0.geometry} material={materials.ai_coil} position={[17.46, 5.84, -13.91]} rotation={[0, 0, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_38_ai_coil_0.geometry} material={materials.ai_coil} position={[17.15, 5.84, -13.49]} rotation={[0, -Math.PI / 5, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_39_ai_coil_0.geometry} material={materials.ai_coil} position={[17.22, 5.84, -13.43]} rotation={[0, -Math.PI / 5, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_40_ai_coil_0.geometry} material={materials.ai_coil} position={[17.29, 5.84, -13.39]} rotation={[0, -Math.PI / 5, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_41_ai_coil_0.geometry} material={materials.ai_coil} position={[17.34, 5.84, -13.35]} rotation={[0, -Math.PI / 5, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_42_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.84, 5.84, -14.44]} rotation={[0, -1.26, Math.PI / 2]} />
          <mesh geometry={nodes.coil_43_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.87, 5.84, -14.53]} rotation={[0, -1.26, Math.PI / 2]} />
          <mesh geometry={nodes.coil_44_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.89, 5.84, -14.6]} rotation={[0, -1.26, Math.PI / 2]} />
          <mesh geometry={nodes.coil_45_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.92, 5.84, -14.69]} rotation={[0, -1.26, Math.PI / 2]} />
          <mesh geometry={nodes.coil_46_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.31, 5.84, -13.91]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.coil_47_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.39, 5.84, -13.91]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.coil_48_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.48, 5.84, -13.91]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.coil_49_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.56, 5.84, -13.91]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.coil_50_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.94, 5.84, -14.77]} rotation={[0, -1.26, Math.PI / 2]} />
          <mesh geometry={nodes.coil_51_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.97, 5.84, -14.83]} rotation={[0, -1.26, Math.PI / 2]} />
          <mesh geometry={nodes.coil_52_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.25, 5.84, -13.49]} rotation={[0, Math.PI / 5, Math.PI / 2]} />
          <mesh geometry={nodes.coil_53_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.33, 5.84, -13.43]} rotation={[0, Math.PI / 5, Math.PI / 2]} />
          <mesh geometry={nodes.coil_54_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.39, 5.84, -13.39]} rotation={[0, Math.PI / 5, Math.PI / 2]} />
          <mesh geometry={nodes.coil_55_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.45, 5.84, -13.35]} rotation={[0, Math.PI / 5, Math.PI / 2]} />
          <mesh geometry={nodes.coil_56_ai_coil_0.geometry} material={materials.ai_coil} position={[-3.94, 5.84, -13.39]} rotation={[-Math.PI, Math.PI / 5, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_57_ai_coil_0.geometry} material={materials.ai_coil} position={[-3.88, 5.84, -13.35]} rotation={[-Math.PI, Math.PI / 5, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_58_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.92, 5.84, -13.14]} rotation={[0, 1.26, Math.PI / 2]} />
          <mesh geometry={nodes.coil_59_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.94, 5.84, -13.06]} rotation={[0, 1.26, Math.PI / 2]} />
          <mesh geometry={nodes.coil_60_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.97, 5.84, -12.99]} rotation={[0, 1.26, Math.PI / 2]} />
          <mesh geometry={nodes.coil_61_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.01, 5.84, 6.66]} rotation={[0, Math.PI / 5, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_62_ai_coil_0.geometry} material={materials.ai_coil} position={[-3.94, 5.84, 6.61]} rotation={[0, Math.PI / 5, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_63_ai_coil_0.geometry} material={materials.ai_coil} position={[-3.88, 5.84, 6.57]} rotation={[0, Math.PI / 5, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_64_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.22, 5.84, 6.81]} rotation={[0, Math.PI / 5, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_65_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.14, 5.84, 6.76]} rotation={[0, Math.PI / 5, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_66_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.08, 5.84, 6.71]} rotation={[0, Math.PI / 5, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_67_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.22, 5.84, 7.14]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_68_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.31, 5.84, 7.14]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_69_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.39, 5.84, 7.14]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_70_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.48, 5.84, 7.14]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_71_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.33, 5.84, 7.62]} rotation={[-Math.PI, -Math.PI / 5, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_72_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.39, 5.84, 7.67]} rotation={[-Math.PI, -Math.PI / 5, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_73_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.45, 5.84, 7.71]} rotation={[-Math.PI, -Math.PI / 5, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_74_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.11, 5.84, 7.46]} rotation={[-Math.PI, -Math.PI / 5, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_75_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.19, 5.84, 7.52]} rotation={[-Math.PI, -Math.PI / 5, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_76_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.25, 5.84, 7.57]} rotation={[-Math.PI, -Math.PI / 5, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_77_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.89, 5.84, 7.83]} rotation={[Math.PI, -1.26, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_78_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.92, 5.84, 7.92]} rotation={[Math.PI, -1.26, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_79_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.94, 5.84, 7.99]} rotation={[Math.PI, -1.26, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_80_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.97, 5.84, 8.06]} rotation={[Math.PI, -1.26, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_81_ai_coil_0.geometry} material={materials.ai_coil} position={[16.29, 5.84, -13.06]} rotation={[-Math.PI, -1.26, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_82_ai_coil_0.geometry} material={materials.ai_coil} position={[16.26, 5.84, -12.99]} rotation={[-Math.PI, -1.26, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_83_ai_coil_0.geometry} material={materials.ai_coil} position={[15.78, 5.84, -13.35]} rotation={[-Math.PI, -Math.PI / 5, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_84_ai_coil_0.geometry} material={materials.ai_coil} position={[16.01, 5.84, 7.14]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.coil_85_ai_coil_0.geometry} material={materials.ai_coil} position={[16.12, 5.84, -13.59]} rotation={[-Math.PI, -Math.PI / 5, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_86_ai_coil_0.geometry} material={materials.ai_coil} position={[16.04, 5.84, -13.53]} rotation={[-Math.PI, -Math.PI / 5, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_87_ai_coil_0.geometry} material={materials.ai_coil} position={[15.98, 5.84, -13.49]} rotation={[-Math.PI, -Math.PI / 5, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_88_ai_coil_0.geometry} material={materials.ai_coil} position={[15.9, 5.84, -13.43]} rotation={[-Math.PI, -Math.PI / 5, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_89_ai_coil_0.geometry} material={materials.ai_coil} position={[15.84, 5.84, -13.39]} rotation={[-Math.PI, -Math.PI / 5, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_90_ai_coil_0.geometry} material={materials.ai_coil} position={[16.39, 5.84, -14.44]} rotation={[-Math.PI, 1.26, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_91_ai_coil_0.geometry} material={materials.ai_coil} position={[16.36, 5.84, -14.53]} rotation={[-Math.PI, 1.26, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_92_ai_coil_0.geometry} material={materials.ai_coil} position={[16.34, 5.84, -14.6]} rotation={[-Math.PI, 1.26, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_93_ai_coil_0.geometry} material={materials.ai_coil} position={[15.98, 5.84, -14.34]} rotation={[Math.PI, Math.PI / 5, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_94_ai_coil_0.geometry} material={materials.ai_coil} position={[15.9, 5.84, -14.39]} rotation={[Math.PI, Math.PI / 5, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_95_ai_coil_0.geometry} material={materials.ai_coil} position={[15.84, 5.84, -14.44]} rotation={[Math.PI, Math.PI / 5, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_96_ai_coil_0.geometry} material={materials.ai_coil} position={[15.78, 5.84, -14.48]} rotation={[Math.PI, Math.PI / 5, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_97_ai_coil_0.geometry} material={materials.ai_coil} position={[16.31, 5.84, -14.69]} rotation={[-Math.PI, 1.26, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_98_ai_coil_0.geometry} material={materials.ai_coil} position={[16.29, 5.84, -14.77]} rotation={[-Math.PI, 1.26, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_99_ai_coil_0.geometry} material={materials.ai_coil} position={[16.26, 5.84, -14.83]} rotation={[-Math.PI, 1.26, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_100_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.84, 5.84, 7.67]} rotation={[Math.PI, -1.26, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_101_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.87, 5.84, 7.75]} rotation={[Math.PI, -1.26, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_102_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.47, 5.84, 7.75]} rotation={[0, -1.26, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_103_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.44, 5.84, 7.83]} rotation={[0, -1.26, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_104_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.41, 5.84, 7.92]} rotation={[0, -1.26, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_105_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.39, 5.84, 7.99]} rotation={[0, -1.26, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_106_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.37, 5.84, 8.06]} rotation={[0, -1.26, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_107_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.41, 5.84, -14.69]} rotation={[Math.PI, -1.26, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_108_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.39, 5.84, -14.77]} rotation={[Math.PI, -1.26, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_109_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.37, 5.84, -14.83]} rotation={[Math.PI, -1.26, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_110_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.5, 5.84, -14.44]} rotation={[Math.PI, -1.26, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_111_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.47, 5.84, -14.53]} rotation={[Math.PI, -1.26, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_112_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.44, 5.84, -14.6]} rotation={[Math.PI, -1.26, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_113_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.44, 5.84, 6.45]} rotation={[0, 1.26, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_114_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.41, 5.84, 6.36]} rotation={[0, 1.26, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_115_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.39, 5.84, 6.29]} rotation={[0, 1.26, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_116_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.37, 5.84, 6.22]} rotation={[0, 1.26, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_117_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.5, 5.84, 6.61]} rotation={[0, 1.26, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_118_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.47, 5.84, 6.53]} rotation={[0, 1.26, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_119_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.87, 5.84, 6.53]} rotation={[-Math.PI, 1.26, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_120_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.89, 5.84, 6.45]} rotation={[-Math.PI, 1.26, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_121_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.92, 5.84, 6.36]} rotation={[-Math.PI, 1.26, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_122_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.94, 5.84, 6.29]} rotation={[-Math.PI, 1.26, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_123_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.97, 5.84, 6.22]} rotation={[-Math.PI, 1.26, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_124_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.45, 5.84, 6.57]} rotation={[Math.PI, Math.PI / 5, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_125_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.84, 5.84, 6.61]} rotation={[-Math.PI, 1.26, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_126_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.19, 5.84, 6.76]} rotation={[Math.PI, Math.PI / 5, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_127_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.25, 5.84, 6.71]} rotation={[Math.PI, Math.PI / 5, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_128_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.33, 5.84, 6.66]} rotation={[Math.PI, Math.PI / 5, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_129_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.39, 5.84, 6.61]} rotation={[Math.PI, Math.PI / 5, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_130_ai_coil_0.geometry} material={materials.ai_coil} position={[15.9, 5.84, 7.62]} rotation={[0, Math.PI / 5, Math.PI / 2]} />
          <mesh geometry={nodes.coil_131_ai_coil_0.geometry} material={materials.ai_coil} position={[15.84, 5.84, 7.67]} rotation={[0, Math.PI / 5, Math.PI / 2]} />
          <mesh geometry={nodes.coil_132_ai_coil_0.geometry} material={materials.ai_coil} position={[15.78, 5.84, 7.71]} rotation={[0, Math.PI / 5, Math.PI / 2]} />
          <mesh geometry={nodes.coil_133_ai_coil_0.geometry} material={materials.ai_coil} position={[16.29, 5.84, 7.99]} rotation={[0, 1.26, Math.PI / 2]} />
          <mesh geometry={nodes.coil_134_ai_coil_0.geometry} material={materials.ai_coil} position={[16.26, 5.84, 8.06]} rotation={[0, 1.26, Math.PI / 2]} />
          <mesh geometry={nodes.coil_135_ai_coil_0.geometry} material={materials.ai_coil} position={[16.73, 5.84, 7.67]} rotation={[-Math.PI, 1.26, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_136_ai_coil_0.geometry} material={materials.ai_coil} position={[16.39, 5.84, 7.67]} rotation={[0, 1.26, Math.PI / 2]} />
          <mesh geometry={nodes.coil_137_ai_coil_0.geometry} material={materials.ai_coil} position={[16.36, 5.84, 7.75]} rotation={[0, 1.26, Math.PI / 2]} />
          <mesh geometry={nodes.coil_138_ai_coil_0.geometry} material={materials.ai_coil} position={[16.34, 5.84, 7.83]} rotation={[0, 1.26, Math.PI / 2]} />
          <mesh geometry={nodes.coil_139_ai_coil_0.geometry} material={materials.ai_coil} position={[16.31, 5.84, 7.92]} rotation={[0, 1.26, Math.PI / 2]} />
          <mesh geometry={nodes.coil_140_ai_coil_0.geometry} material={materials.ai_coil} position={[16.01, 5.84, -13.91]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_141_ai_coil_0.geometry} material={materials.ai_coil} position={[15.92, 5.84, -13.91]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_142_ai_coil_0.geometry} material={materials.ai_coil} position={[15.84, 5.84, -13.91]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_143_ai_coil_0.geometry} material={materials.ai_coil} position={[15.75, 5.84, -13.91]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_144_ai_coil_0.geometry} material={materials.ai_coil} position={[-3.94, 5.84, 7.14]} rotation={[0, 0, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_145_ai_coil_0.geometry} material={materials.ai_coil} position={[-3.85, 5.84, 7.14]} rotation={[0, 0, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_146_ai_coil_0.geometry} material={materials.ai_coil} position={[-3.77, 5.84, 7.14]} rotation={[0, 0, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_147_ai_coil_0.geometry} material={materials.ai_coil} position={[-3.7, 5.84, 7.14]} rotation={[0, 0, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_148_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.11, 5.84, -13.91]} rotation={[-Math.PI, 0, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_149_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.02, 5.84, -13.91]} rotation={[-Math.PI, 0, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_150_ai_coil_0.geometry} material={materials.ai_coil} position={[-3.94, 5.84, -13.91]} rotation={[-Math.PI, 0, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_151_ai_coil_0.geometry} material={materials.ai_coil} position={[-3.85, 5.84, -13.91]} rotation={[-Math.PI, 0, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_152_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.22, 5.84, 7.46]} rotation={[0, -Math.PI / 5, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.extrudedSurface9_ai_Metal_0.geometry} material={materials.ai_Metal} position={[5.95, 4.57, -3.6]} />
          <mesh geometry={nodes.extrudedSurface10_ai_Metal_0.geometry} material={materials.ai_Metal} position={[5.95, 4.57, -3.54]} />
          <mesh geometry={nodes.extrudedSurface11_ai_Metal_0.geometry} material={materials.ai_Metal} position={[5.95, 4.57, -3.49]} />
          <mesh geometry={nodes.coil_153_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.22, 5.84, -13.59]} rotation={[-Math.PI, Math.PI / 5, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_154_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.14, 5.84, -13.53]} rotation={[-Math.PI, Math.PI / 5, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_155_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.08, 5.84, -13.49]} rotation={[-Math.PI, Math.PI / 5, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_156_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.01, 5.84, -13.43]} rotation={[-Math.PI, Math.PI / 5, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_157_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.39, 5.84, -14.44]} rotation={[0, -Math.PI / 5, Math.PI / 2]} />
          <mesh geometry={nodes.coil_158_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.45, 5.84, -14.48]} rotation={[0, -Math.PI / 5, Math.PI / 2]} />
          <mesh geometry={nodes.coil_159_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.22, 5.84, -13.91]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.coil_160_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.5, 5.84, -13.39]} rotation={[Math.PI, 1.26, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_161_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.47, 5.84, -13.3]} rotation={[Math.PI, 1.26, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_162_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.44, 5.84, -13.22]} rotation={[Math.PI, 1.26, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_163_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.41, 5.84, -13.14]} rotation={[Math.PI, 1.26, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_164_ai_coil_0.geometry} material={materials.ai_coil} position={[17.12, 5.84, 7.14]} rotation={[-Math.PI, 0, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_165_ai_coil_0.geometry} material={materials.ai_coil} position={[17.21, 5.84, 7.14]} rotation={[-Math.PI, 0, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_166_ai_coil_0.geometry} material={materials.ai_coil} position={[17.29, 5.84, 7.14]} rotation={[-Math.PI, 0, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_167_ai_coil_0.geometry} material={materials.ai_coil} position={[17.15, 5.84, 7.57]} rotation={[-Math.PI, Math.PI / 5, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_168_ai_coil_0.geometry} material={materials.ai_coil} position={[17.22, 5.84, 7.62]} rotation={[-Math.PI, Math.PI / 5, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_169_ai_coil_0.geometry} material={materials.ai_coil} position={[17.29, 5.84, 7.67]} rotation={[-Math.PI, Math.PI / 5, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_170_ai_coil_0.geometry} material={materials.ai_coil} position={[17.34, 5.84, 7.71]} rotation={[-Math.PI, Math.PI / 5, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_171_ai_coil_0.geometry} material={materials.ai_coil} position={[17.01, 5.84, 6.81]} rotation={[Math.PI, -Math.PI / 5, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_172_ai_coil_0.geometry} material={materials.ai_coil} position={[17.08, 5.84, 6.76]} rotation={[Math.PI, -Math.PI / 5, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_173_ai_coil_0.geometry} material={materials.ai_coil} position={[17.15, 5.84, 6.71]} rotation={[Math.PI, -Math.PI / 5, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_174_ai_coil_0.geometry} material={materials.ai_coil} position={[17.38, 5.84, 7.14]} rotation={[-Math.PI, 0, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_175_ai_coil_0.geometry} material={materials.ai_coil} position={[17.46, 5.84, 7.14]} rotation={[-Math.PI, 0, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_176_ai_coil_0.geometry} material={materials.ai_coil} position={[17.53, 5.84, 7.14]} rotation={[-Math.PI, 0, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_177_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.11, 5.84, 7.14]} rotation={[0, 0, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_178_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.02, 5.84, 7.14]} rotation={[0, 0, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_179_ai_coil_0.geometry} material={materials.ai_coil} position={[15.98, 5.84, 6.71]} rotation={[0, -Math.PI / 5, Math.PI / 2]} />
          <mesh geometry={nodes.coil_180_ai_coil_0.geometry} material={materials.ai_coil} position={[15.9, 5.84, 6.66]} rotation={[0, -Math.PI / 5, Math.PI / 2]} />
          <mesh geometry={nodes.coil_181_ai_coil_0.geometry} material={materials.ai_coil} position={[15.84, 5.84, 6.61]} rotation={[0, -Math.PI / 5, Math.PI / 2]} />
          <mesh geometry={nodes.coil_182_ai_coil_0.geometry} material={materials.ai_coil} position={[15.78, 5.84, 6.57]} rotation={[0, -Math.PI / 5, Math.PI / 2]} />
          <mesh geometry={nodes.coil_183_ai_coil_0.geometry} material={materials.ai_coil} position={[-3.77, 5.84, -13.91]} rotation={[-Math.PI, 0, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_184_ai_coil_0.geometry} material={materials.ai_coil} position={[-3.7, 5.84, -13.91]} rotation={[-Math.PI, 0, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_185_ai_coil_0.geometry} material={materials.ai_coil} position={[16.86, 5.84, 8.06]} rotation={[-Math.PI, 1.26, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_186_ai_coil_0.geometry} material={materials.ai_coil} position={[17.01, 5.84, 7.46]} rotation={[-Math.PI, Math.PI / 5, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_187_ai_coil_0.geometry} material={materials.ai_coil} position={[17.08, 5.84, 7.52]} rotation={[-Math.PI, Math.PI / 5, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_188_ai_coil_0.geometry} material={materials.ai_coil} position={[16.76, 5.84, 7.75]} rotation={[-Math.PI, 1.26, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_189_ai_coil_0.geometry} material={materials.ai_coil} position={[16.79, 5.84, 7.83]} rotation={[-Math.PI, 1.26, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_190_ai_coil_0.geometry} material={materials.ai_coil} position={[16.81, 5.84, 7.92]} rotation={[-Math.PI, 1.26, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_191_ai_coil_0.geometry} material={materials.ai_coil} position={[16.84, 5.84, 7.99]} rotation={[-Math.PI, 1.26, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_192_ai_coil_0.geometry} material={materials.ai_coil} position={[16.26, 5.84, 6.22]} rotation={[0, -1.26, Math.PI / 2]} />
          <mesh geometry={nodes.coil_193_ai_coil_0.geometry} material={materials.ai_coil} position={[16.12, 5.84, 6.81]} rotation={[0, -Math.PI / 5, Math.PI / 2]} />
          <mesh geometry={nodes.coil_194_ai_coil_0.geometry} material={materials.ai_coil} position={[16.04, 5.84, 6.76]} rotation={[0, -Math.PI / 5, Math.PI / 2]} />
          <mesh geometry={nodes.coil_195_ai_coil_0.geometry} material={materials.ai_coil} position={[16.36, 5.84, 6.53]} rotation={[0, -1.26, Math.PI / 2]} />
          <mesh geometry={nodes.coil_196_ai_coil_0.geometry} material={materials.ai_coil} position={[16.34, 5.84, 6.45]} rotation={[0, -1.26, Math.PI / 2]} />
          <mesh geometry={nodes.coil_197_ai_coil_0.geometry} material={materials.ai_coil} position={[16.31, 5.84, 6.36]} rotation={[0, -1.26, Math.PI / 2]} />
          <mesh geometry={nodes.coil_198_ai_coil_0.geometry} material={materials.ai_coil} position={[16.29, 5.84, 6.29]} rotation={[0, -1.26, Math.PI / 2]} />
          <mesh geometry={nodes.coil_199_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.56, 5.84, 7.14]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_200_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.63, 5.84, 7.14]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_201_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.11, 5.84, 6.81]} rotation={[Math.PI, Math.PI / 5, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_202_ai_coil_0.geometry} material={materials.ai_coil} position={[16.84, 5.84, -14.77]} rotation={[0, 1.26, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_203_ai_coil_0.geometry} material={materials.ai_coil} position={[16.86, 5.84, -14.83]} rotation={[0, 1.26, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_204_ai_coil_0.geometry} material={materials.ai_coil} position={[16.73, 5.84, -14.44]} rotation={[0, 1.26, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_205_ai_coil_0.geometry} material={materials.ai_coil} position={[16.76, 5.84, -14.53]} rotation={[0, 1.26, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_206_ai_coil_0.geometry} material={materials.ai_coil} position={[16.79, 5.84, -14.6]} rotation={[0, 1.26, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_207_ai_coil_0.geometry} material={materials.ai_coil} position={[16.81, 5.84, -14.69]} rotation={[0, 1.26, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_208_ai_coil_0.geometry} material={materials.ai_coil} position={[17.34, 5.84, -14.48]} rotation={[0, Math.PI / 5, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_209_ai_coil_0.geometry} material={materials.ai_coil} position={[17.12, 5.84, -13.91]} rotation={[0, 0, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_210_ai_coil_0.geometry} material={materials.ai_coil} position={[17.01, 5.84, -14.24]} rotation={[0, Math.PI / 5, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_211_ai_coil_0.geometry} material={materials.ai_coil} position={[17.08, 5.84, -14.29]} rotation={[0, Math.PI / 5, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_212_ai_coil_0.geometry} material={materials.ai_coil} position={[17.15, 5.84, -14.34]} rotation={[0, Math.PI / 5, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_213_ai_coil_0.geometry} material={materials.ai_coil} position={[17.22, 5.84, -14.39]} rotation={[0, Math.PI / 5, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_214_ai_coil_0.geometry} material={materials.ai_coil} position={[17.29, 5.84, -14.44]} rotation={[0, Math.PI / 5, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_215_ai_coil_0.geometry} material={materials.ai_coil} position={[15.6, 5.84, 7.14]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.coil_216_ai_coil_0.geometry} material={materials.ai_coil} position={[15.92, 5.84, 7.14]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.coil_217_ai_coil_0.geometry} material={materials.ai_coil} position={[15.84, 5.84, 7.14]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.coil_218_ai_coil_0.geometry} material={materials.ai_coil} position={[15.75, 5.84, 7.14]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.coil_219_ai_coil_0.geometry} material={materials.ai_coil} position={[15.67, 5.84, 7.14]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.coil_220_ai_coil_0.geometry} material={materials.ai_coil} position={[16.12, 5.84, 7.46]} rotation={[0, Math.PI / 5, Math.PI / 2]} />
          <mesh geometry={nodes.coil_221_ai_coil_0.geometry} material={materials.ai_coil} position={[16.04, 5.84, 7.52]} rotation={[0, Math.PI / 5, Math.PI / 2]} />
          <mesh geometry={nodes.coil_222_ai_coil_0.geometry} material={materials.ai_coil} position={[15.98, 5.84, 7.57]} rotation={[0, Math.PI / 5, Math.PI / 2]} />
          <mesh geometry={nodes.coil_223_ai_coil_0.geometry} material={materials.ai_coil} position={[16.84, 5.84, 6.29]} rotation={[Math.PI, -1.26, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_224_ai_coil_0.geometry} material={materials.ai_coil} position={[16.86, 5.84, 6.22]} rotation={[Math.PI, -1.26, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_225_ai_coil_0.geometry} material={materials.ai_coil} position={[16.39, 5.84, 6.61]} rotation={[0, -1.26, Math.PI / 2]} />
          <mesh geometry={nodes.coil_226_ai_coil_0.geometry} material={materials.ai_coil} position={[16.73, 5.84, 6.61]} rotation={[Math.PI, -1.26, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_227_ai_coil_0.geometry} material={materials.ai_coil} position={[16.76, 5.84, 6.53]} rotation={[Math.PI, -1.26, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_228_ai_coil_0.geometry} material={materials.ai_coil} position={[16.79, 5.84, 6.45]} rotation={[Math.PI, -1.26, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_229_ai_coil_0.geometry} material={materials.ai_coil} position={[16.81, 5.84, 6.36]} rotation={[Math.PI, -1.26, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_230_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.39, 5.84, -13.06]} rotation={[Math.PI, 1.26, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_231_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.37, 5.84, -12.99]} rotation={[Math.PI, 1.26, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_232_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.84, 5.84, -13.39]} rotation={[0, 1.26, Math.PI / 2]} />
          <mesh geometry={nodes.coil_233_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.87, 5.84, -13.3]} rotation={[0, 1.26, Math.PI / 2]} />
          <mesh geometry={nodes.coil_234_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.89, 5.84, -13.22]} rotation={[0, 1.26, Math.PI / 2]} />
          <mesh geometry={nodes.coil_235_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.11, 5.84, -14.24]} rotation={[0, -Math.PI / 5, Math.PI / 2]} />
          <mesh geometry={nodes.coil_236_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.19, 5.84, -14.29]} rotation={[0, -Math.PI / 5, Math.PI / 2]} />
          <mesh geometry={nodes.coil_237_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.25, 5.84, -14.34]} rotation={[0, -Math.PI / 5, Math.PI / 2]} />
          <mesh geometry={nodes.coil_238_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.33, 5.84, -14.39]} rotation={[0, -Math.PI / 5, Math.PI / 2]} />
          <mesh geometry={nodes.coil_239_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.63, 5.84, -13.91]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.coil_240_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.11, 5.84, -13.59]} rotation={[0, Math.PI / 5, Math.PI / 2]} />
          <mesh geometry={nodes.coil_241_ai_coil_0.geometry} material={materials.ai_coil} position={[-5.19, 5.84, -13.53]} rotation={[0, Math.PI / 5, Math.PI / 2]} />
          <mesh geometry={nodes.coil_242_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.08, 5.84, -14.34]} rotation={[Math.PI, -Math.PI / 5, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_243_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.01, 5.84, -14.39]} rotation={[Math.PI, -Math.PI / 5, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_244_ai_coil_0.geometry} material={materials.ai_coil} position={[-3.94, 5.84, -14.44]} rotation={[Math.PI, -Math.PI / 5, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_245_ai_coil_0.geometry} material={materials.ai_coil} position={[-3.88, 5.84, -14.48]} rotation={[Math.PI, -Math.PI / 5, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_246_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.22, 5.84, -14.24]} rotation={[Math.PI, -Math.PI / 5, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_247_ai_coil_0.geometry} material={materials.ai_coil} position={[-4.14, 5.84, -14.29]} rotation={[Math.PI, -Math.PI / 5, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_273_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[-5.27, 5.84, -14.35]} rotation={[0, -Math.PI / 5, Math.PI / 2]} />
          <mesh geometry={nodes.coil_274_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[17.17, 5.84, 7.58]} rotation={[-Math.PI, Math.PI / 5, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_275_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[17.31, 5.84, 7.14]} rotation={[-Math.PI, 0, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_276_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[15.96, 5.84, 6.7]} rotation={[0, -Math.PI / 5, Math.PI / 2]} />
          <mesh geometry={nodes.coil_277_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[-3.92, 5.84, -13.91]} rotation={[-Math.PI, 0, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_278_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[16.79, 5.84, 7.85]} rotation={[-Math.PI, 1.26, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_279_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[16.33, 5.84, 6.43]} rotation={[0, -1.26, Math.PI / 2]} />
          <mesh geometry={nodes.coil_280_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[-5.42, 5.84, 7.14]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_281_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[16.79, 5.84, -14.63]} rotation={[0, 1.26, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_282_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[17.17, 5.84, -14.35]} rotation={[0, Math.PI / 5, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_283_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[15.81, 5.84, 7.14]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.coil_284_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[16.79, 5.84, 6.43]} rotation={[Math.PI, -1.26, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_285_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[-4.44, 5.84, -13.2]} rotation={[Math.PI, 1.26, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_286_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[-5.27, 5.84, -13.47]} rotation={[0, Math.PI / 5, Math.PI / 2]} />
          <mesh geometry={nodes.coil_287_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[-5.42, 5.84, -13.91]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.coil_259_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[-5.27, 5.84, 7.58]} rotation={[-Math.PI, -Math.PI / 5, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_260_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[-4.9, 5.84, 7.85]} rotation={[Math.PI, -1.26, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_261_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[16.33, 5.84, -13.2]} rotation={[-Math.PI, -1.26, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_262_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[15.96, 5.84, -13.47]} rotation={[-Math.PI, -Math.PI / 5, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_263_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[15.96, 5.84, -14.35]} rotation={[Math.PI, Math.PI / 5, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_264_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[16.33, 5.84, -14.63]} rotation={[-Math.PI, 1.26, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_265_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[-4.44, 5.84, 7.85]} rotation={[0, -1.26, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_266_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[-4.44, 5.84, -14.63]} rotation={[Math.PI, -1.26, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_267_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[-4.06, 5.84, -14.35]} rotation={[Math.PI, -Math.PI / 5, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_268_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[-4.9, 5.84, 6.43]} rotation={[-Math.PI, 1.26, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_269_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[-5.27, 5.84, 6.7]} rotation={[Math.PI, Math.PI / 5, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_270_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[15.96, 5.84, 7.58]} rotation={[0, Math.PI / 5, Math.PI / 2]} />
          <mesh geometry={nodes.coil_271_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[16.33, 5.84, 7.85]} rotation={[0, 1.26, Math.PI / 2]} />
          <mesh geometry={nodes.coil_272_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[-3.92, 5.84, 7.14]} rotation={[0, 0, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_257_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[-4.06, 5.84, 6.7]} rotation={[0, Math.PI / 5, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_258_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[-4.44, 5.84, 6.43]} rotation={[0, 1.26, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_256_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[-4.9, 5.84, -13.2]} rotation={[0, 1.26, Math.PI / 2]} />
          <mesh geometry={nodes.coil_255_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[-4.06, 5.84, -13.47]} rotation={[-Math.PI, Math.PI / 5, -Math.PI / 2]} />
          <mesh geometry={nodes.coil_254_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[-4.9, 5.84, -14.63]} rotation={[0, -1.26, Math.PI / 2]} />
          <mesh geometry={nodes.coil_253_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[17.31, 5.84, -13.91]} rotation={[0, 0, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_251_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[17.17, 5.84, -13.47]} rotation={[0, -Math.PI / 5, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_250_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[16.79, 5.84, -13.2]} rotation={[0, -1.26, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_249_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[-4.06, 5.84, 7.58]} rotation={[0, -Math.PI / 5, -Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.coil_248_ai_coil_top_0.geometry} material={materials.ai_coil_top} position={[17.17, 5.84, 6.7]} rotation={[Math.PI, -Math.PI / 5, -Math.PI / 2]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')

export default Model;
